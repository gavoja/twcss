import { expect, test } from '@playwright/test'
import fs from 'node:fs'


function getRules (index) {
  const sheet = [...window.tw.instances.values()][index].sheet
  const rules = [...sheet.rules].toReversed().map(r => r.cssText.replace(/{ +$/m, '{'))
  return rules
}

test('default', async ({ page }) => {
  await page.goto('/')
  await expect.poll(async () => page.evaluate(() => document.body.children.length)).toEqual(6)
  await expect.poll(async () => page.evaluate(() => window.tw.instances.size)).toEqual(2)

  // Get actual rules from the page.
  const actualRules = {
    document: await page.evaluate(getRules, 0),
    shadow: await page.evaluate(getRules, 1)
  }

  const actualCss = {
    document: actualRules.document.join('\n'),
    shadow: actualRules.shadow.join('\n')
  }

  // Make sure there are no empty rules.
  const emptyRules = []
  for (const rule of actualRules.document) {
    if (rule.includes('{ }')) {
      emptyRules.push(rule)
    }
  }
  await expect(emptyRules).toEqual([])

  // Create expected files if they don't exist.
  if (!fs.existsSync('test/cases/expected-document.css') || !fs.existsSync('test/cases/expected-shadow.css')) {
    fs.writeFileSync('test/cases/expected-document.css', actualCss.document)
    fs.writeFileSync('test/cases/expected-shadow.css', actualCss.shadow)
  }

  // Get expected rules from files.
  const expectedCss = {
    document: fs.readFileSync('test/cases/expected-document.css', 'utf8'),
    shadow: fs.readFileSync('test/cases/expected-shadow.css', 'utf8')
  }

  // Compare CSS.
  await expect(actualCss.document).toEqual(expectedCss.document)
  await expect(actualCss.shadow).toEqual(expectedCss.shadow)
})
