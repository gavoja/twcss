import { context } from 'esbuild'

async function main () {
  const ctxLib = await context({
    entryPoints: ['src/tinywind.js',],
    format: 'iife',
    bundle: true,
    minify: true,
    outdir: 'target',
    sourcemap: false
  })

  const ctxTest = await context({
    entryPoints: ['test/page/main.js', 'test/page/index.html'],
    loader: {'.html': 'copy'},
    format: 'iife',
    bundle: true,
    outdir: 'target',
    sourcemap: 'inline'
  })

  await ctxLib.rebuild()
  await ctxTest.rebuild()
  await ctxTest.serve({ servedir: 'target', port: 3000 })
  console.log('Server started at http://localhost:3000')
}

main()