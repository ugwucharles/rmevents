import { execSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

const downloadsGgDir = 'C:/Users/beenyprinting/Downloads/gg'

function main() {
  const groups = ['welcome party', 'formal party', 'boat party']

  for (const group of groups) {
    const groupDir = path.join(downloadsGgDir, group)
    if (!fs.existsSync(groupDir)) continue

    console.log(`\n=== Group: ${group} ===`)
    const files = fs.readdirSync(groupDir)
    const zips = files.filter(f => f.endsWith('.zip'))

    for (const zip of zips) {
      const zipPath = path.join(groupDir, zip)
      console.log(`\n  Zip: ${zip}`)
      try {
        const list = execSync(`tar -tf "${zipPath}"`, { encoding: 'utf8' })
        console.log(list.split('\n').map(l => '    ' + l.trim()).filter(l => l.length > 4).join('\n'))
      } catch (err) {
        console.error(`    Error listing zip: ${err.message}`)
      }
    }
  }
}

main()
