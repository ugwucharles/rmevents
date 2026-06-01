import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const zip = 'C:/Users/beenyprinting/Downloads/www.thelakecomoweddingplanner.com.zip'
const dest = path.resolve('reference-lake-como')

fs.mkdirSync(dest, { recursive: true })
execSync(
  `powershell -NoProfile -Command "Expand-Archive -LiteralPath '${zip}' -DestinationPath '${dest}' -Force"`,
  { stdio: 'inherit' },
)

function walk(dir, depth = 0) {
  if (depth > 5) return []
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const full = path.join(dir, e.name)
    return e.isDirectory() ? walk(full, depth + 1) : [full]
  })
}

const files = walk(dest)
console.log('files', files.length)
const menuFiles = files.filter((f) => /menu|nav|header|main\.(js|css|scss)/i.test(f))
console.log(menuFiles.slice(0, 40).join('\n'))
