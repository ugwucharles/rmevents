import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(root, '..')
const zip =
  process.env.RM_DRIVE_ZIP ||
  'C:/Users/beenyprinting/Downloads/drive-download-20260601T144445Z-3-001.zip'
const extractDir = path.join(projectRoot, '.tmp-drive-media')
const galleryDir = path.join(projectRoot, 'public/media/gallery')

const mediaExt = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif', '.mp4', '.mov', '.webm'])

if (!fs.existsSync(zip)) {
  console.error('[rm-events] Drive zip not found:', zip)
  process.exit(1)
}

fs.mkdirSync(extractDir, { recursive: true })
execSync(`tar -xf "${zip}" -C "${extractDir}"`, { stdio: 'inherit', shell: true })

function walk(dir, acc = []) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) walk(full, acc)
    else acc.push(full)
  }
  return acc
}

const media = walk(extractDir)
  .filter((f) => mediaExt.has(path.extname(f).toLowerCase()))
  .sort((a, b) => fs.statSync(b).size - fs.statSync(a).size)

if (media.length === 0) {
  console.error('[rm-events] No media files in zip')
  process.exit(1)
}

fs.mkdirSync(galleryDir, { recursive: true })
for (const f of fs.readdirSync(galleryDir)) {
  fs.unlinkSync(path.join(galleryDir, f))
}

const manifest = media.map((src, i) => {
  const ext = path.extname(src).toLowerCase()
  const base = `rm-${String(i + 1).padStart(2, '0')}${ext}`
  const dest = path.join(galleryDir, base)
  fs.copyFileSync(src, dest)
  return { file: base, original: path.basename(src), bytes: fs.statSync(dest).size }
})

fs.writeFileSync(
  path.join(galleryDir, 'manifest.json'),
  JSON.stringify({ importedAt: new Date().toISOString(), zip, files: manifest }, null, 2),
)

console.log(`[rm-events] Imported ${manifest.length} file(s) → public/media/gallery/`)
manifest.forEach((m) => console.log(`  ${m.file} ← ${m.original}`))

console.log('[rm-events] Compressing for web…')
execSync('node scripts/compress-gallery.mjs', { cwd: projectRoot, stdio: 'inherit' })
