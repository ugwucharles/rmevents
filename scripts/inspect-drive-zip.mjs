import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const zip =
  'C:/Users/beenyprinting/Downloads/drive-download-20260601T144445Z-3-001.zip'
const out = path.resolve('.tmp-drive-media')

if (!fs.existsSync(zip)) {
  console.error('ZIP not found:', zip)
  process.exit(1)
}

fs.mkdirSync(out, { recursive: true })
execSync(`tar -xf "${zip.replace(/"/g, '\\"')}" -C "${out.replace(/"/g, '\\"')}"`, {
  stdio: 'inherit',
  shell: true,
})

const mediaExt = new Set([
  '.jpg',
  '.jpeg',
  '.png',
  '.webp',
  '.gif',
  '.mp4',
  '.mov',
  '.webm',
  '.heic',
])

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) walk(full, acc)
    else acc.push({ full, name, ext: path.extname(name).toLowerCase(), size: stat.size })
  }
  return acc
}

const files = walk(out)
const media = files.filter((f) => mediaExt.has(f.ext))
console.log('\n--- Summary ---')
console.log('Total files:', files.length)
console.log('Media files:', media.length)
console.log(
  'By ext:',
  Object.fromEntries(
    [...mediaExt].map((e) => [e, media.filter((m) => m.ext === e).length]),
  ),
)

console.log('\n--- Largest media (top 20) ---')
media
  .sort((a, b) => b.size - a.size)
  .slice(0, 20)
  .forEach((f) => console.log((f.size / 1024 / 1024).toFixed(2) + ' MB', f.name))
