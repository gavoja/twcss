export const PROPS = [
  // Fonts
  ['--font-sans', 'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'],
  ['--font-serif', 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'],
  ['--font-mono', 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'],

  // Radii
  ...[
    ['xs', '2px'],
    ['sm', '4px'],
    ['md', '6px'],
    ['lg', '8px'],
    ['xl', '12px'],
    ['2xl', '16px'],
    ['3xl', '24px'],
    ['4xl', '32px'],
    ['full', '50%'],
    ['none', '0']
  ].map(([size, value]) => [`--radius-${size}`, value]),

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

  // Line heights (for text sizes)
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
  ].map(([size, value]) => [`--text-${size}--line-height`, `${value}`]),

  // Blurs
  ...[
    ['none', 0],
    ['xs', 4],
    ['sm', 8],
    ['md', 12],
    ['lg', 16],
    ['xl', 24],
    ['2xl', 40],
    ['3xl', 64]
  ].map(([size, value]) => [`--blur-${size}`, `${value}px`])
]
