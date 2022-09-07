/*
https://github.com/emotion-js/emotion/issues/1246#issuecomment-468381891
Monkey patch called postinstall to rename the browser property in ever @emotion/* package so it doesn't get used.
*/

const fs = require('fs')
const { sync } = require('glob')

sync('./node_modules/@emotion/*/package.json').forEach(src => {
  const package = JSON.parse(fs.readFileSync(src, 'utf-8'))
  const browser = package.browser
  delete package.browser
  if (browser) {
    package._browser = browser
  }
  fs.writeFileSync(src, JSON.stringify(package, null, 2))
})
