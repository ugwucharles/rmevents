import fs from 'node:fs'

const js = fs.readFileSync(
  'reference-lake-como/www.thelakecomoweddingplanner.com/content/themes/lake-como/js-dist/main.js',
  'utf8',
)

const start = js.indexOf('this.Menu = (function()')
const end = js.indexOf('this.Pixelcarve = (function()', start)
fs.writeFileSync('scripts/lake-como-menu.js.txt', js.slice(start, end))
console.log('wrote menu section', end - start, 'chars')

const css = fs.readFileSync(
  'reference-lake-como/www.thelakecomoweddingplanner.com/content/themes/lake-como/css/main.css',
  'utf8',
)

const parts = []
let idx = 0
while ((idx = css.indexOf('#menu', idx)) >= 0 && parts.length < 15) {
  parts.push(css.slice(idx, idx + 400))
  idx += 5
}
fs.writeFileSync('scripts/lake-como-menu.css.txt', parts.join('\n\n---\n\n'))
console.log('wrote css snippets', parts.length)
