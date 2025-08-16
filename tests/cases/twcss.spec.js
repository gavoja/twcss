import { expect, test } from '@playwright/test'
import fs from 'node:fs'
import { createPatch } from 'diff'

test('default', async ({ page }) => {
  await page.goto('/')
  await expect.poll(async () => page.evaluate(() => document.body.children.length)).toEqual(7)
  await expect.poll(async () => page.evaluate(() => window.tw.instances.size)).toEqual(5)

  // Get actual rules for each instance from the page.
  const cssObject = await page.evaluate(() => {
    const result = {}

    for (const instance of window.tw.instances.values()) {
      const name = instance.root === document ? 'document' : instance.root.host.localName
      result[name] = [...instance.sheet.rules].toReversed().map(r => r.cssText.replace(/{ +$/m, '{')).join('\n')
    }

    return result
  })

  for (const [name, actualCss] of Object.entries(cssObject)) {
    const expectedFile = `tests/expected/${name}.css`
    const actualFile = `test-results/actual-${name}.css`

    fs.writeFileSync(actualFile, actualCss)

    if (!fs.existsSync(expectedFile)) {
      await test.step(`Creating ${expectedFile}`, () => {
        fs.copyFileSync(actualFile, expectedFile)
      })
    } else {
      const expectedCss = fs.readFileSync(expectedFile, 'utf8')
      const patch = createPatch(name + '.css', expectedCss, actualCss).split('\n').slice(4).join('\n')
      if (patch !== '') {
        throw new Error(`${name}\n\n${patch}`)
      }
    }
  }
})
