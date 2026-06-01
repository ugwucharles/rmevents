import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const message = process.argv.slice(2).join(' ') || 'Update'
const msgPath = path.join(root, '.git-msg-tmp')
fs.writeFileSync(msgPath, message)

const env = {
  ...process.env,
  GIT_AUTHOR_NAME: 'beenyprinting',
  GIT_AUTHOR_EMAIL: 'beenyprinting@users.noreply.github.com',
  GIT_COMMITTER_NAME: 'beenyprinting',
  GIT_COMMITTER_EMAIL: 'beenyprinting@users.noreply.github.com',
}

try {
  execSync(`git commit -F "${msgPath.replace(/\\/g, '/')}"`, { cwd: root, stdio: 'inherit', env })
} finally {
  fs.unlinkSync(msgPath)
}
