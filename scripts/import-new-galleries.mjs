import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')

const downloadsGgDir = 'C:/Users/beenyprinting/Downloads/gg'
const publicGalleryDir = path.join(projectRoot, 'public/media/gallery')
const contentFilePath = path.join(projectRoot, 'src/data/content.ts')

const QUALITY = 82
const GALLERY_MAX = 1600

const mediaExts = new Set(['.jpg', '.jpeg', '.png', '.webp'])

// Helper to unzip
function unzip(zipPath, destDir) {
  console.log(`Unzipping ${path.basename(zipPath)} to ${destDir}...`)
  fs.mkdirSync(destDir, { recursive: true })
  execSync(`tar -xf "${zipPath}" -C "${destDir}"`, { stdio: 'inherit', shell: true })
}

// Helper to walk directory and find media files
function getMediaFiles(dir) {
  const files = []
  if (!fs.existsSync(dir)) return files

  function walk(current) {
    const list = fs.readdirSync(current)
    for (const name of list) {
      const fullPath = path.join(current, name)
      const stat = fs.statSync(fullPath)
      if (stat.isDirectory()) {
        walk(fullPath)
      } else {
        const ext = path.extname(name).toLowerCase()
        if (mediaExts.has(ext) && !name.startsWith('.') && !name.includes('crdownload')) {
          files.push(fullPath)
        }
      }
    }
  }
  walk(dir)
  return files
}

async function compressAndCopy(srcPath, destPath) {
  try {
    const before = fs.statSync(srcPath).size
    await sharp(srcPath)
      .rotate()
      .resize({ width: GALLERY_MAX, withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true })
      .toFile(destPath)
    const after = fs.statSync(destPath).size
    console.log(`  Compressed & Copied: ${path.basename(destPath)} (${(before / 1024 / 1024).toFixed(2)} MB → ${(after / 1024 / 1024).toFixed(2)} MB)`)
  } catch (err) {
    console.error(`  Error compressing ${path.basename(srcPath)}:`, err.message)
    fs.copyFileSync(srcPath, destPath)
  }
}

async function main() {
  if (!fs.existsSync(downloadsGgDir)) {
    console.error(`Directory ${downloadsGgDir} does not exist.`)
    process.exit(1)
  }

  const groups = [
    { name: 'welcome party', title: 'Welcome Party', subtitle: 'A warm and vibrant beginning' },
    { name: 'formal party', title: 'Formal Party', subtitle: 'An elegant, sophisticated evening' },
    { name: 'boat party', title: 'Boat Party', subtitle: 'An exclusive sunset cruise' }
  ]

  const portfolioProjects = []

  for (const group of groups) {
    const groupSrcDir = path.join(downloadsGgDir, group.name)
    if (!fs.existsSync(groupSrcDir)) {
      console.log(`Group folder ${groupSrcDir} not found, skipping.`)
      continue
    }

    console.log(`\n--- Processing Group: ${group.name} ---`)

    // Extract all zip files
    const groupFiles = fs.readdirSync(groupSrcDir)
    const zipFiles = groupFiles.filter(f => f.endsWith('.zip'))

    for (const zipFile of zipFiles) {
      const zipPath = path.join(groupSrcDir, zipFile)
      const tempExtractDir = path.join(groupSrcDir, `_extracted_${path.basename(zipFile, '.zip')}`)
      unzip(zipPath, tempExtractDir)
    }

    // Now gather all media files
    const mediaFiles = getMediaFiles(groupSrcDir)
    console.log(`Found ${mediaFiles.length} media files for group: ${group.name}`)

    // Filter out duplicates by original file basename
    const uniqueMediaFiles = []
    const seenBasenames = new Set()
    for (const file of mediaFiles) {
      const base = path.basename(file).toLowerCase()
      if (!seenBasenames.has(base)) {
        seenBasenames.add(base)
        uniqueMediaFiles.push(file)
      }
    }
    console.log(`Unique media files: ${uniqueMediaFiles.length}`)

    const groupSlug = group.name.replace(/\s+/g, '-')
    const targetDir = path.join(publicGalleryDir, groupSlug)
    
    // Clear and recreate target folder to make sure we don't have dangling files
    if (fs.existsSync(targetDir)) {
      fs.rmSync(targetDir, { recursive: true, force: true })
    }
    fs.mkdirSync(targetDir, { recursive: true })

    const copiedFiles = []
    let counter = 1
    for (const file of uniqueMediaFiles) {
      const ext = path.extname(file).toLowerCase()
      const destName = `${groupSlug}-${String(counter).padStart(2, '0')}${ext}`
      const destPath = path.join(targetDir, destName)
      
      await compressAndCopy(file, destPath)
      
      copiedFiles.push({
        src: `/media/gallery/${groupSlug}/${destName}`,
        alt: `${group.title} image ${counter}`
      })
      counter++
    }

    // Clean up temporary extracted directories
    const postGroupFiles = fs.readdirSync(groupSrcDir)
    for (const f of postGroupFiles) {
      if (f.startsWith('_extracted_')) {
        const tempPath = path.join(groupSrcDir, f)
        try {
          fs.rmSync(tempPath, { recursive: true, force: true })
        } catch (e) {
          console.error(`Failed to delete temp dir ${tempPath}:`, e.message)
        }
      }
    }

    if (copiedFiles.length > 0) {
      portfolioProjects.push({
        title: group.title,
        subtitle: group.subtitle,
        coverImage: copiedFiles[0].src,
        images: copiedFiles
      })
    }
  }

  // Rewrite content.ts portfolioProjects array dynamically
  if (fs.existsSync(contentFilePath)) {
    console.log('\nUpdating src/data/content.ts dynamically...')
    let content = fs.readFileSync(contentFilePath, 'utf8')

    // Format portfolioProjects as TypeScript code
    const formattedArray = JSON.stringify(portfolioProjects, null, 2)
      .replace(/"src":/g, 'src:')
      .replace(/"alt":/g, 'alt:')
      .replace(/"title":/g, 'title:')
      .replace(/"subtitle":/g, 'subtitle:')
      .replace(/"coverImage":/g, 'coverImage:')
      .replace(/"images":/g, 'images:')

    // Regex to match:
    // 1. /** Portfolio projects — grouped gallery system */
    // 2. export const portfolioProjects =
    // 3. [...]
    // 4. as const
    const regex = /(\/\*\* Portfolio projects — grouped gallery system \*\/[\r\n\s]*export const portfolioProjects = )([\s\S]*?)( as const)/

    if (regex.test(content)) {
      content = content.replace(regex, `$1${formattedArray}$3`)
      fs.writeFileSync(contentFilePath, content, 'utf8')
      console.log('Successfully updated src/data/content.ts with all imported photos!')
    } else {
      console.error('Could not find portfolioProjects declaration in content.ts')
    }
  } else {
    console.error('src/data/content.ts not found!')
  }
}

main().catch(err => {
  console.error("Error in script:", err)
})
