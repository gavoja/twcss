import neostandard, { resolveIgnoresFromGitignore } from 'neostandard'
export default [
  ...neostandard({ ignores: resolveIgnoresFromGitignore() }),
  {
    rules: {
      // If any prop needs quotes, all of them should for consistency.
      '@stylistic/quote-props': 'off'
    }
  }
]
