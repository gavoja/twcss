import { context } from 'esbuild'

async function main() {
  const ctx = await context({
    entryPoints: ['tests/site/main.js', 'tests/site/index.html'],
    loader: { '.html': 'copy' },
    format: 'iife',
    bundle: true,
    outdir: 'target',
    sourcemap: 'inline',
  })

  await ctx.rebuild()
  await ctx.serve({ servedir: 'target', port: 3000 })
  console.log('Server started at http://localhost:3000')
}

main()
