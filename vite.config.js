import { resolve } from 'node:path'
import { build as viteBuild, defineConfig } from 'vite'

const twcssEntry = resolve(__dirname, 'vite/scripts/twcss.js')

function twcssIifeBuildPlugin () {
  return {
    name: 'twcss-iife-build',
    apply: 'build',
    async closeBundle () {
      await viteBuild({
        configFile: false,
        build: {
          outDir: 'dist',
          emptyOutDir: false,
          lib: {
            entry: twcssEntry,
            name: 'twcss',
            formats: ['iife'],
            fileName: () => 'twcss.min.js'
          }
        }
      })
    }
  }
}

export default defineConfig({
  root: 'vite',
  plugins: [twcssIifeBuildPlugin()],
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        'main': 'index.html',
        'benchmark-twcss': 'scripts/benchmark-twcss.js',
        'benchmark-inline': 'scripts/benchmark-inline.js',
        'test': 'scripts/test.js'
      },
      output: [{
        format: 'esm',
        entryFileNames: '[name].js',
        chunkFileNames: 'assets/[name].js'
      }]
    }
  }
})
