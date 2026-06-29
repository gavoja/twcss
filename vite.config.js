import { defineConfig } from 'vite'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

function emitIndexPlugin () {
  let resolvedConfig
  return {
    name: 'emit-index',
    configResolved (config) {
      resolvedConfig = config
    },
    async closeBundle () {
      const sourcePath = resolve(resolvedConfig.root, 'index.html')
      const outDir = resolve(resolvedConfig.root, resolvedConfig.build.outDir)
      const targetPath = resolve(outDir, 'index.html')

      const sourceHtml = await readFile(sourcePath, 'utf8')
      const transformedHtml = sourceHtml
        .replace(/\s+type=(['"])module\1/g, '')
        .replace(/src=(['"])scripts\/twcss\.js\1/g, 'src="twcss.min.js"')

      await mkdir(outDir, { recursive: true })
      await writeFile(targetPath, transformedHtml, 'utf8')
    }
  }
}

export default defineConfig(() => {
  return {
    root: 'vite',
    plugins: [
      emitIndexPlugin()
    ],
    build: {
      outDir: '../target',
      emptyOutDir: true,
      lib: {
        entry: 'scripts/twcss.js',
        name: 'twcss',
        formats: ['iife'],
        fileName: () => 'twcss.min.js'
      }
    }
  }
})
