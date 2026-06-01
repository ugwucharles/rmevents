const html = await fetch('https://www.thelakecomoweddingplanner.com/').then((r) => r.text())

const assets = [
  ...html.matchAll(/(?:href|src)="([^"]+)"/g),
].map((m) => m[1])

const interesting = assets.filter(
  (a) =>
    /menu|nav|spr|theme|main|app|header/i.test(a) &&
    /\.(js|css)/.test(a),
)

console.log('Interesting assets:\n', [...new Set(interesting)].join('\n'))

const menuBlock = html.match(/class="[^"]*menu[^"]*"[\s\S]{0,200}/gi)
console.log('\nMenu HTML samples:', (menuBlock || []).slice(0, 3))
