import { context } from 'esbuild'

async function main () {
  const ctx = await context({
    entryPoints: [
      'site/index.html',
      'site/index.js',
      'site/benchmark-twcss.html',
      'site/benchmark-twcss.js',
      'site/benchmark-inline.html',
      'site/benchmark-inline.js',
      'site/empty.html',
      'site/empty.js',
      'site/performance.js'
    ],
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
