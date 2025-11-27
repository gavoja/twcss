import { expect, test } from '@playwright/test'
import fs from 'node:fs'
import { createPatch } from 'diff'

const errors = []

test.beforeEach(async ({ page }) => {
  errors.length = 0
  page.on('console', msg => msg.type() === 'error' && errors.push(msg.text()))
})

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

  // Verify reserved names.
  await expect(errors).toEqual([
    '[TWCSS] Unable to process "bad-util". Utility class does not exist.',
    '[TWCSS] Unable to process "bad-prefix:hidden". Prefix "bad-prefix" is invalid.',
    '[TWCSS] Unable to process "sm:sm:hidden". Query "sm" is duplicated.',
    '[TWCSS] Unable to process "before:before:hidden". Pseudo element "before" is duplicated.',
    '[TWCSS] Custom query "after" is reserved.',
    '[TWCSS] Custom query "active" is reserved.',
  ])
})
