import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const msgPath = path.join(root, '.git-commit-msg.txt')
const msg = `Initial commit: RM Events luxury landing page

Preview-ready landing with client gallery, Netlify config, and Lake Como-style navigation.
`
fs.writeFileSync(msgPath, msg)

const git = (args) =>
  execSync(`git ${args}`, {
    cwd: root,
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
    env: {
      ...process.env,
      GIT_AUTHOR_NAME: 'beenyprinting',
      GIT_AUTHOR_EMAIL: 'beenyprinting@users.noreply.github.com',
      GIT_COMMITTER_NAME: 'beenyprinting',
      GIT_COMMITTER_EMAIL: 'beenyprinting@users.noreply.github.com',
    },
  })

try {
  git('add -A')
  const out = git(`commit -F "${msgPath.replace(/\\/g, '/')}"`)
  console.log(out)
  git('branch -M main')
  console.log(git('log -1 --oneline'))
  console.log('Tracked files:', git('ls-files').trim().split('\n').length)
} catch (e) {
  console.error('COMMIT FAILED')
  console.error('stdout:', e.stdout?.toString())
  console.error('stderr:', e.stderr?.toString())
  process.exit(1)
} finally {
  fs.unlinkSync(msgPath)
}
