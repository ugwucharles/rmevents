import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const mediaDir = path.join(root, 'public/media')

const HERO_MAX = 2400
const GALLERY_MAX = 1600
const QUALITY = 80

async function compressFile(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return null

  const before = fs.statSync(filePath).size
  
  // Skip already-small images if they are not in gallery or services to speed up run
  if (before < 100000 && !filePath.includes('gallery') && !filePath.includes('services')) {
    return null
  }

  const name = path.basename(filePath)
  const isLarge = name.includes('24') || name.includes('hero') || name.includes('corporate') || name.includes('baecation') || name.includes('wedding') || name.includes('celebration') || before > 2000000
  const maxWidth = isLarge ? HERO_MAX : GALLERY_MAX

  const tmp = filePath + '.tmp'
  try {
    const sh = sharp(filePath).rotate()
    
    sh.resize({ width: maxWidth, withoutEnlargement: true })

    if (ext === '.png') {
      await sh.png({ quality: QUALITY, compressionLevel: 8 }).toFile(tmp)
    } else {
      await sh.jpeg({ quality: QUALITY, mozjpeg: true }).toFile(tmp)
    }

    fs.renameSync(tmp, filePath)
    const after = fs.statSync(filePath).size
    return { before, after }
  } catch (err) {
    console.error(`Error compressing ${name}:`, err)
    if (fs.existsSync(tmp)) fs.unlinkSync(tmp)
    return null
  }
}

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return
  fs.readdirSync(dir).forEach((f) => {
    const dirPath = path.join(dir, f)
    const isDirectory = fs.statSync(dirPath).isDirectory()
    if (isDirectory) {
      walkDir(dirPath, callback)
    } else {
      callback(dirPath)
    }
  })
}

const filePaths = []
walkDir(mediaDir, (p) => filePaths.push(p))

console.log(`[rm-events] Found ${filePaths.length} files in public/media. Starting compression...`)

let totalBefore = 0
let totalAfter = 0
let count = 0

for (const filePath of filePaths) {
  const res = await compressFile(filePath)
  if (res) {
    const { before, after } = res
    totalBefore += before
    totalAfter += after
    count++
    console.log(
      `${path.relative(mediaDir, filePath)}: ${(before / 1024 / 1024).toFixed(2)} MB → ${(after / 1024 / 1024).toFixed(2)} MB (${((1 - after / before) * 100).toFixed(0)}% saved)`,
    )
  }
}

if (count > 0) {
  console.log(
    `\n[rm-events] Done compressing ${count} images. Total: ${(totalBefore / 1024 / 1024).toFixed(1)} MB → ${(totalAfter / 1024 / 1024).toFixed(1)} MB (${Math.round((1 - totalAfter / totalBefore) * 100)}% smaller)`,
  )
} else {
  console.log('[rm-events] No images compressed.')
}
