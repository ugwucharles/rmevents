import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const galleryDir = path.join(root, 'public/media/gallery')

const HERO_MAX = 2400
const GALLERY_MAX = 1600
const QUALITY = 82

async function compressFile(filePath, maxWidth) {
  const before = fs.statSync(filePath).size
  const tmp = filePath + '.tmp'

  await sharp(filePath)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(tmp)

  fs.renameSync(tmp, filePath)
  const after = fs.statSync(filePath).size
  return { before, after }
}

const files = fs
  .readdirSync(galleryDir)
  .filter((n) => /\.(jpe?g|png|webp)$/i.test(n))
  .sort()

if (files.length === 0) {
  console.error('[rm-events] No images in', galleryDir)
  process.exit(1)
}

let totalBefore = 0
let totalAfter = 0

for (const name of files) {
  const filePath = path.join(galleryDir, name)
  const maxWidth = name === 'rm-01.jpg' ? HERO_MAX : GALLERY_MAX
  const { before, after } = await compressFile(filePath, maxWidth)
  totalBefore += before
  totalAfter += after
  console.log(
    `${name}: ${(before / 1024 / 1024).toFixed(2)} MB → ${(after / 1024 / 1024).toFixed(2)} MB`,
  )
}

console.log(
  `\n[rm-events] Total: ${(totalBefore / 1024 / 1024).toFixed(1)} MB → ${(totalAfter / 1024 / 1024).toFixed(1)} MB (${Math.round((1 - totalAfter / totalBefore) * 100)}% smaller)`,
)
