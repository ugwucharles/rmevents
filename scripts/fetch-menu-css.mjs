const html = await fetch('https://www.thelakecomoweddingplanner.com/').then((r) => r.text())
const cssUrl = html.match(/lake-como[^"]+\.css[^"]*/)?.[0]
const full = cssUrl?.startsWith('http') ? cssUrl : `https://www.thelakecomoweddingplanner.com${cssUrl}`
console.log('css', full)
if (full) {
  const css = await fetch(full).then((r) => r.text())
  const parts = css.split('#menu')
  console.log(parts.slice(1, 4).map((p) => '#menu' + p.slice(0, 600)).join('\n---\n'))
}
