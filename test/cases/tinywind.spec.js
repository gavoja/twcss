import { expect, test } from '@playwright/test'
import fs from 'node:fs'


function getCss (index) {
  const sheet = [...window.tw.instances.values()][index].sheet
  const rules = [...sheet.rules].toReversed().map(r => r.cssText.replace(/{ +$/m, '{'))
  return `${rules.join('\n')}\n`
}

test('default', async ({ page }) => {
  await page.goto('/')
  await expect.poll(async () => page.evaluate(() => document.body.children.length)).toEqual(6)

  // Create expected files if they don't exist.
  if (!fs.existsSync('test/cases/expected-document.css') || !fs.existsSync('test/cases/expected-shadow.css')) {
    fs.writeFileSync('test/cases/expected-document.css', await page.evaluate(getCss, 0))
    fs.writeFileSync('test/cases/expected-shadow.css', await page.evaluate(getCss, 1))
  }

  const expectedDocumentCss = fs.readFileSync('test/cases/expected-document.css', 'utf8')
  const expectedShadowCss = fs.readFileSync('test/cases/expected-shadow.css', 'utf8')

  await expect.poll(async () => page.evaluate(getCss, 0)).toEqual(expectedDocumentCss)
  await expect.poll(async () => page.evaluate(getCss, 1)).toEqual(expectedShadowCss)
})
