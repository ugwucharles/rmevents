import { writeFileSync } from 'node:fs'

const mainJs = await fetch(
  'https://www.thelakecomoweddingplanner.com/content/themes/lake-como/js-dist/main.js?ver=v1.0.8',
).then((r) => r.text())

const idx = mainJs.indexOf('menuTimeline')
const out = mainJs.slice(idx - 500, idx + 3500)
writeFileSync('scripts/lake-como-menu-snippet.txt', out)
console.log('done', out.length)
