export const CONFIG = [
  ['--font-sans', 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'],
  ['--font-serif', 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'],
  ['--font-mono', 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'],

  // Radii
  ...[
    ['xs', 2],
    ['sm', 4],
    ['md', 6],
    ['lg', 8],
    ['xl', 12],
    ['2xl', 16],
    ['3xl', 24],
    ['4xl', 32]
  ].map(([size, value]) => [`--radius-${size}`, `${value}px`]),

  // Text sizes
  ...[
    ['xs', 12],
    ['sm', 14],
    ['base', 16],
    ['lg', 18],
    ['xl', 20],
    ['2xl', 24],
    ['3xl', 30],
    ['4xl', 36],
    ['5xl', 48],
    ['6xl', 60],
    ['7xl', 72],
    ['8xl', 96],
    ['9xl', 128]
  ].map(([size, value]) => [`--text-${size}`, `${value}px`]),
  ...[
    ['xs', 1.333],
    ['sm', 1.429],
    ['base', 1.5],
    ['lg', 1.555],
    ['xl', 1.4],
    ['2xl', 1.333],
    ['3xl', 1.2],
    ['4xl', 1.111],
    ['5xl', 1],
    ['6xl', 1],
    ['7xl', 1],
    ['8xl', 1],
    ['9xl', 1]
  ].map(([size, value]) => [`--text-${size}--line-height`, `${value}`])
]
