# Reference

## Defaults

### CSS preflight

```css
*,*::before,*::after { box-sizing: border-box; border-width: 0; border-style: solid; border-color: currentColor; margin: 0; padding: 0 }
ul,ol { list-style: none }
h1,h2,h3,h4,h5,h6 { font-size: inherit; font-weight: inherit }
input,button,textarea,select { font: inherit }
body,html { height: 100% }
img,video { max-width: 100%; height: auto }
cite { font-style: normal }
a { text-decoration: none; color: inherit }
button { text-align: unset; background: transparent; color: inherit }
svg { display: block }
::placeholder { color: currentColor; opacity: 0.8 }
[tw]:not([class]) { display: none }
```

### Config

Selected values are defined via custom properties for easy overridding.

```CSS
--font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
--font-serif: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;
--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
--radius-xs: 2px;
--radius-sm: 4px;
--radius-md: 6px;
--radius-lg: 8px;
--radius-xl: 12px;
--radius-2xl: 16px;
--radius-3xl: 24px;
--radius-4xl: 32px;
--radius-full: 50%;
--radius-none: 0;
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 30px;
--text-4xl: 36px;
--text-5xl: 48px;
--text-6xl: 60px;
--text-7xl: 72px;
--text-8xl: 96px;
--text-9xl: 128px;
--text-xs--line-height: 1.333;
--text-sm--line-height: 1.429;
--text-base--line-height: 1.5;
--text-lg--line-height: 1.555;
--text-xl--line-height: 1.4;
--text-2xl--line-height: 1.333;
--text-3xl--line-height: 1.2;
--text-4xl--line-height: 1.111;
--text-5xl--line-height: 1;
--text-6xl--line-height: 1;
--text-7xl--line-height: 1;
--text-8xl--line-height: 1;
--text-9xl--line-height: 1;
--blur-none: 0px;
--blur-xs: 4px;
--blur-sm: 8px;
--blur-md: 12px;
--blur-lg: 16px;
--blur-xl: 24px;
--blur-2xl: 40px;
--blur-3xl: 64px;
```

### Media and container queries

All container queries are relative to the ancestor with `@container` class.

```css
/* sm */
@media screen and (max-width: 599px)
```

```css
/* md */
@media screen and (min-width: 600px) and (max-width: 959px)
```

```css
/* lg */
@media screen and (min-width: 960px)
```

```css
/* @3xs */
@container (width >= 256px)
```

```css
/* @2xs */
@container (width >= 288px)
```

```css
/* @xs */
@container (width >= 320px)
```

```css
/* @sm */
@container (width >= 384px)
```

```css
/* @md */
@container (width >= 448px)
```

```css
/* @lg */
@container (width >= 512px)
```

```css
/* @xl */
@container (width >= 576px)
```

```css
/* @2xl */
@container (width >= 672px)
```

```css
/* @3xl */
@container (width >= 768px)
```

```css
/* @4xl */
@container (width >= 896px)
```

```css
/* @5xl */
@container (width >= 1024px)
```

```css
/* @6xl */
@container (width >= 1152px)
```

```css
/* @7xl */
@container (width >= 1280px)
```

```css
/* @max-3xs */
@container (width < 256px)
```

```css
/* @max-2xs */
@container (width < 288px)
```

```css
/* @max-xs */
@container (width < 320px)
```

```css
/* @max-sm */
@container (width < 384px)
```

```css
/* @max-md */
@container (width < 448px)
```

```css
/* @max-lg */
@container (width < 512px)
```

```css
/* @max-xl */
@container (width < 576px)
```

```css
/* @max-2xl */
@container (width < 672px)
```

```css
/* @max-3xl */
@container (width < 768px)
```

```css
/* @max-4xl */
@container (width < 896px)
```

```css
/* @max-5xl */
@container (width < 1024px)
```

```css
/* @max-6xl */
@container (width < 1152px)
```

```css
/* @max-7xl */
@container (width < 1280px)
```

```css
/* light */
@media (prefers-color-scheme: light)
```

```css
/* dark */
@media (prefers-color-scheme: dark)
```

```css
/* motion-safe */
@media (prefers-reduced-motion: no-preference)
```

```css
/* motion-reduce */
@media (prefers-reduced-motion: reduce)
```

```css
/* contrast-more */
@media (prefers-contrast: more)
```

```css
/* contrast-less */
@media (prefers-contrast: less)
```

```css
/* forced-colors */
@media (forced-colors: active)
```

```css
/* inverted-colors */
@media (inverted-colors: inverted)
```

```css
/* pointer-coarse */
@media (pointer: coarse)
```

```css
/* pointer-fine */
@media (pointer: fine)
```

```css
/* pointer-none */
@media (pointer: none)
```

```css
/* any-pointer-fine */
@media (any-pointer: fine)
```

```css
/* any-pointer-coarse */
@media (any-pointer: coarse)
```

```css
/* any-pointer-none */
@media (any-pointer: none)
```

```css
/* portrait */
@media (orientation: portrait)
```

```css
/* landscape */
@media (orientation: landscape)
```

```css
/* noscript */
@media (scripting: none)
```

```css
/* print */
@media print
```

### Prefixes

Classes can be prefixed. The order is always `query:state:pseudo:class`. Multiple states are supported.

States:

- Multiple states can be combined, e.g. `hover:focus:bg-blue-500`.
- Each state also supports negation with `not-` prefix, e.g. `not-hover:bg-blue-500`.
- Supported states: `active`, `any-link`, `checked`, `default`, `defined`, `disabled`, `empty`, `enabled`, `first-child`, `first-of-type`, `focus`, `focus-visible`, `focus-within`, `fullscreen`, `future`, `host`, `hover`, `in-range`, `indeterminate`, `invalid`, `last-child`, `last-of-type`, `link`, `modal`, `only-child`, `only-of-type`, `open`, `optional`, `out-of-range`, `past`, `picture-in-picture`, `placeholder-shown`, `popover-open`, `read-only`, `read-write`, `required`, `root`, `scope`, `target`, `user-invalid`, `user-valid`, `valid`, `visited`.

Pseudo elements:

- Supported pseudo elements: `after`, `backdrop`, `before`, `cue`, `details-content`, `file-selector-button`, `first-letter`, `first-line`, `grammar-error`, `marker`, `placeholder`, `selection`, `spelling-error`, `target-text`.

### Keyframes

```css
@keyframes expand {
  from { opacity: 0; transform: translateY(-8px) } to { opacity: 1 }
}
```

```css
@keyframes toast {
  from { opacity: 0; transform: translateY(48px) } to { opacity: 1 }
}
```

```css
@keyframes fade {
  0% { opacity: 0 } 100% { opacity: 1 }
}
```

### Colors

|   | 50|100|200|300|400|500|600|700|800|900|950|
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
**red**|$\color{#fef2f2}{\Huge\textsf{█}}$|$\color{#ffe2e2}{\Huge\textsf{█}}$|$\color{#ffc9c9}{\Huge\textsf{█}}$|$\color{#ffa2a2}{\Huge\textsf{█}}$|$\color{#ff6467}{\Huge\textsf{█}}$|$\color{#fb2c36}{\Huge\textsf{█}}$|$\color{#e7000b}{\Huge\textsf{█}}$|$\color{#c10007}{\Huge\textsf{█}}$|$\color{#9f0712}{\Huge\textsf{█}}$|$\color{#82181a}{\Huge\textsf{█}}$|$\color{#460809}{\Huge\textsf{█}}$
**orange**|$\color{#fff7ed}{\Huge\textsf{█}}$|$\color{#ffedd4}{\Huge\textsf{█}}$|$\color{#ffd6a8}{\Huge\textsf{█}}$|$\color{#ffb86a}{\Huge\textsf{█}}$|$\color{#ff8904}{\Huge\textsf{█}}$|$\color{#ff6900}{\Huge\textsf{█}}$|$\color{#f54900}{\Huge\textsf{█}}$|$\color{#ca3500}{\Huge\textsf{█}}$|$\color{#9f2d00}{\Huge\textsf{█}}$|$\color{#7e2a0c}{\Huge\textsf{█}}$|$\color{#441306}{\Huge\textsf{█}}$
**amber**|$\color{#fffbeb}{\Huge\textsf{█}}$|$\color{#fef3c6}{\Huge\textsf{█}}$|$\color{#fee685}{\Huge\textsf{█}}$|$\color{#ffd230}{\Huge\textsf{█}}$|$\color{#ffb900}{\Huge\textsf{█}}$|$\color{#fe9a00}{\Huge\textsf{█}}$|$\color{#e17100}{\Huge\textsf{█}}$|$\color{#bb4d00}{\Huge\textsf{█}}$|$\color{#973c00}{\Huge\textsf{█}}$|$\color{#7b3306}{\Huge\textsf{█}}$|$\color{#461901}{\Huge\textsf{█}}$
**yellow**|$\color{#fefce8}{\Huge\textsf{█}}$|$\color{#fef9c2}{\Huge\textsf{█}}$|$\color{#fff085}{\Huge\textsf{█}}$|$\color{#ffdf20}{\Huge\textsf{█}}$|$\color{#fdc700}{\Huge\textsf{█}}$|$\color{#f0b100}{\Huge\textsf{█}}$|$\color{#d08700}{\Huge\textsf{█}}$|$\color{#a65f00}{\Huge\textsf{█}}$|$\color{#894b00}{\Huge\textsf{█}}$|$\color{#733e0a}{\Huge\textsf{█}}$|$\color{#432004}{\Huge\textsf{█}}$
**lime**|$\color{#f7fee7}{\Huge\textsf{█}}$|$\color{#ecfcca}{\Huge\textsf{█}}$|$\color{#d8f999}{\Huge\textsf{█}}$|$\color{#bbf451}{\Huge\textsf{█}}$|$\color{#9ae600}{\Huge\textsf{█}}$|$\color{#7ccf00}{\Huge\textsf{█}}$|$\color{#5ea500}{\Huge\textsf{█}}$|$\color{#497d00}{\Huge\textsf{█}}$|$\color{#3c6300}{\Huge\textsf{█}}$|$\color{#35530e}{\Huge\textsf{█}}$|$\color{#192e03}{\Huge\textsf{█}}$
**green**|$\color{#f0fdf4}{\Huge\textsf{█}}$|$\color{#dcfce7}{\Huge\textsf{█}}$|$\color{#b9f8cf}{\Huge\textsf{█}}$|$\color{#7bf1a8}{\Huge\textsf{█}}$|$\color{#05df72}{\Huge\textsf{█}}$|$\color{#00c950}{\Huge\textsf{█}}$|$\color{#00a63e}{\Huge\textsf{█}}$|$\color{#008236}{\Huge\textsf{█}}$|$\color{#016630}{\Huge\textsf{█}}$|$\color{#0d542b}{\Huge\textsf{█}}$|$\color{#032e15}{\Huge\textsf{█}}$
**emerald**|$\color{#ecfdf5}{\Huge\textsf{█}}$|$\color{#d0fae5}{\Huge\textsf{█}}$|$\color{#a4f4cf}{\Huge\textsf{█}}$|$\color{#5ee9b5}{\Huge\textsf{█}}$|$\color{#00d492}{\Huge\textsf{█}}$|$\color{#00bc7d}{\Huge\textsf{█}}$|$\color{#009966}{\Huge\textsf{█}}$|$\color{#007a55}{\Huge\textsf{█}}$|$\color{#006045}{\Huge\textsf{█}}$|$\color{#004f3b}{\Huge\textsf{█}}$|$\color{#002c22}{\Huge\textsf{█}}$
**teal**|$\color{#f0fdfa}{\Huge\textsf{█}}$|$\color{#cbfbf1}{\Huge\textsf{█}}$|$\color{#96f7e4}{\Huge\textsf{█}}$|$\color{#46ecd5}{\Huge\textsf{█}}$|$\color{#00d5be}{\Huge\textsf{█}}$|$\color{#00bba7}{\Huge\textsf{█}}$|$\color{#009689}{\Huge\textsf{█}}$|$\color{#00786f}{\Huge\textsf{█}}$|$\color{#005f5a}{\Huge\textsf{█}}$|$\color{#0b4f4a}{\Huge\textsf{█}}$|$\color{#022f2e}{\Huge\textsf{█}}$
**cyan**|$\color{#ecfeff}{\Huge\textsf{█}}$|$\color{#cefafe}{\Huge\textsf{█}}$|$\color{#a2f4fd}{\Huge\textsf{█}}$|$\color{#53eafd}{\Huge\textsf{█}}$|$\color{#00d3f3}{\Huge\textsf{█}}$|$\color{#00b8db}{\Huge\textsf{█}}$|$\color{#0092b8}{\Huge\textsf{█}}$|$\color{#007595}{\Huge\textsf{█}}$|$\color{#005f78}{\Huge\textsf{█}}$|$\color{#104e64}{\Huge\textsf{█}}$|$\color{#053345}{\Huge\textsf{█}}$
**sky**|$\color{#f0f9ff}{\Huge\textsf{█}}$|$\color{#dff2fe}{\Huge\textsf{█}}$|$\color{#b8e6fe}{\Huge\textsf{█}}$|$\color{#74d4ff}{\Huge\textsf{█}}$|$\color{#00bcff}{\Huge\textsf{█}}$|$\color{#00a6f4}{\Huge\textsf{█}}$|$\color{#0084d1}{\Huge\textsf{█}}$|$\color{#0069a8}{\Huge\textsf{█}}$|$\color{#00598a}{\Huge\textsf{█}}$|$\color{#024a70}{\Huge\textsf{█}}$|$\color{#052f4a}{\Huge\textsf{█}}$
**blue**|$\color{#eff6ff}{\Huge\textsf{█}}$|$\color{#dbeafe}{\Huge\textsf{█}}$|$\color{#bedbff}{\Huge\textsf{█}}$|$\color{#8ec5ff}{\Huge\textsf{█}}$|$\color{#51a2ff}{\Huge\textsf{█}}$|$\color{#2b7fff}{\Huge\textsf{█}}$|$\color{#155dfc}{\Huge\textsf{█}}$|$\color{#1447e6}{\Huge\textsf{█}}$|$\color{#193cb8}{\Huge\textsf{█}}$|$\color{#1c398e}{\Huge\textsf{█}}$|$\color{#162456}{\Huge\textsf{█}}$
**indigo**|$\color{#eef2ff}{\Huge\textsf{█}}$|$\color{#e0e7ff}{\Huge\textsf{█}}$|$\color{#c6d2ff}{\Huge\textsf{█}}$|$\color{#a3b3ff}{\Huge\textsf{█}}$|$\color{#7c86ff}{\Huge\textsf{█}}$|$\color{#615fff}{\Huge\textsf{█}}$|$\color{#4f39f6}{\Huge\textsf{█}}$|$\color{#432dd7}{\Huge\textsf{█}}$|$\color{#372aac}{\Huge\textsf{█}}$|$\color{#312c85}{\Huge\textsf{█}}$|$\color{#1e1a4d}{\Huge\textsf{█}}$
**violet**|$\color{#f5f3ff}{\Huge\textsf{█}}$|$\color{#ede9fe}{\Huge\textsf{█}}$|$\color{#ddd6ff}{\Huge\textsf{█}}$|$\color{#c4b4ff}{\Huge\textsf{█}}$|$\color{#a684ff}{\Huge\textsf{█}}$|$\color{#8e51ff}{\Huge\textsf{█}}$|$\color{#7f22fe}{\Huge\textsf{█}}$|$\color{#7008e7}{\Huge\textsf{█}}$|$\color{#5d0ec0}{\Huge\textsf{█}}$|$\color{#4d179a}{\Huge\textsf{█}}$|$\color{#2f0d68}{\Huge\textsf{█}}$
**purple**|$\color{#faf5ff}{\Huge\textsf{█}}$|$\color{#f3e8ff}{\Huge\textsf{█}}$|$\color{#e9d4ff}{\Huge\textsf{█}}$|$\color{#dab2ff}{\Huge\textsf{█}}$|$\color{#c27aff}{\Huge\textsf{█}}$|$\color{#ad46ff}{\Huge\textsf{█}}$|$\color{#9810fa}{\Huge\textsf{█}}$|$\color{#8200db}{\Huge\textsf{█}}$|$\color{#6e11b0}{\Huge\textsf{█}}$|$\color{#59168b}{\Huge\textsf{█}}$|$\color{#3c0366}{\Huge\textsf{█}}$
**fuchsia**|$\color{#fdf4ff}{\Huge\textsf{█}}$|$\color{#fae8ff}{\Huge\textsf{█}}$|$\color{#f6cfff}{\Huge\textsf{█}}$|$\color{#f4a8ff}{\Huge\textsf{█}}$|$\color{#ed6aff}{\Huge\textsf{█}}$|$\color{#e12afb}{\Huge\textsf{█}}$|$\color{#c800de}{\Huge\textsf{█}}$|$\color{#a800b7}{\Huge\textsf{█}}$|$\color{#8a0194}{\Huge\textsf{█}}$|$\color{#721378}{\Huge\textsf{█}}$|$\color{#4b004f}{\Huge\textsf{█}}$
**pink**|$\color{#fdf2f8}{\Huge\textsf{█}}$|$\color{#fce7f3}{\Huge\textsf{█}}$|$\color{#fccee8}{\Huge\textsf{█}}$|$\color{#fda5d5}{\Huge\textsf{█}}$|$\color{#fb64b6}{\Huge\textsf{█}}$|$\color{#f6339a}{\Huge\textsf{█}}$|$\color{#e60076}{\Huge\textsf{█}}$|$\color{#c6005c}{\Huge\textsf{█}}$|$\color{#a3004c}{\Huge\textsf{█}}$|$\color{#861043}{\Huge\textsf{█}}$|$\color{#510424}{\Huge\textsf{█}}$
**rose**|$\color{#fff1f2}{\Huge\textsf{█}}$|$\color{#ffe4e6}{\Huge\textsf{█}}$|$\color{#ffccd3}{\Huge\textsf{█}}$|$\color{#ffa1ad}{\Huge\textsf{█}}$|$\color{#ff637e}{\Huge\textsf{█}}$|$\color{#ff2056}{\Huge\textsf{█}}$|$\color{#ec003f}{\Huge\textsf{█}}$|$\color{#c70036}{\Huge\textsf{█}}$|$\color{#a50036}{\Huge\textsf{█}}$|$\color{#8b0836}{\Huge\textsf{█}}$|$\color{#4d0218}{\Huge\textsf{█}}$
**slate**|$\color{#f8fafc}{\Huge\textsf{█}}$|$\color{#f1f5f9}{\Huge\textsf{█}}$|$\color{#e2e8f0}{\Huge\textsf{█}}$|$\color{#cad5e2}{\Huge\textsf{█}}$|$\color{#90a1b9}{\Huge\textsf{█}}$|$\color{#62748e}{\Huge\textsf{█}}$|$\color{#45556c}{\Huge\textsf{█}}$|$\color{#314158}{\Huge\textsf{█}}$|$\color{#1d293d}{\Huge\textsf{█}}$|$\color{#0f172b}{\Huge\textsf{█}}$|$\color{#020618}{\Huge\textsf{█}}$
**gray**|$\color{#f9fafb}{\Huge\textsf{█}}$|$\color{#f3f4f6}{\Huge\textsf{█}}$|$\color{#e5e7eb}{\Huge\textsf{█}}$|$\color{#d1d5dc}{\Huge\textsf{█}}$|$\color{#99a1af}{\Huge\textsf{█}}$|$\color{#6a7282}{\Huge\textsf{█}}$|$\color{#4a5565}{\Huge\textsf{█}}$|$\color{#364153}{\Huge\textsf{█}}$|$\color{#1e2939}{\Huge\textsf{█}}$|$\color{#101828}{\Huge\textsf{█}}$|$\color{#030712}{\Huge\textsf{█}}$
**zinc**|$\color{#fafafa}{\Huge\textsf{█}}$|$\color{#f4f4f5}{\Huge\textsf{█}}$|$\color{#e4e4e7}{\Huge\textsf{█}}$|$\color{#d4d4d8}{\Huge\textsf{█}}$|$\color{#9f9fa9}{\Huge\textsf{█}}$|$\color{#71717b}{\Huge\textsf{█}}$|$\color{#52525c}{\Huge\textsf{█}}$|$\color{#3f3f47}{\Huge\textsf{█}}$|$\color{#27272a}{\Huge\textsf{█}}$|$\color{#18181b}{\Huge\textsf{█}}$|$\color{#09090b}{\Huge\textsf{█}}$
**neutral**|$\color{#fafafa}{\Huge\textsf{█}}$|$\color{#f5f5f5}{\Huge\textsf{█}}$|$\color{#e5e5e5}{\Huge\textsf{█}}$|$\color{#d4d4d4}{\Huge\textsf{█}}$|$\color{#a1a1a1}{\Huge\textsf{█}}$|$\color{#737373}{\Huge\textsf{█}}$|$\color{#525252}{\Huge\textsf{█}}$|$\color{#404040}{\Huge\textsf{█}}$|$\color{#262626}{\Huge\textsf{█}}$|$\color{#171717}{\Huge\textsf{█}}$|$\color{#0a0a0a}{\Huge\textsf{█}}$
**stone**|$\color{#fafaf9}{\Huge\textsf{█}}$|$\color{#f5f5f4}{\Huge\textsf{█}}$|$\color{#e7e5e4}{\Huge\textsf{█}}$|$\color{#d6d3d1}{\Huge\textsf{█}}$|$\color{#a6a09b}{\Huge\textsf{█}}$|$\color{#79716b}{\Huge\textsf{█}}$|$\color{#57534d}{\Huge\textsf{█}}$|$\color{#44403b}{\Huge\textsf{█}}$|$\color{#292524}{\Huge\textsf{█}}$|$\color{#1c1917}{\Huge\textsf{█}}$|$\color{#0c0a09}{\Huge\textsf{█}}$

Also supported: `black`, `white`, `inherit`, `transparent` and `current`.

## Layout

### aspect-ratio

```css
.aspect-square { aspect-ratio: 1 / 1 }
```

```css
.aspect-video { aspect-ratio: 16 / 9 }
```

```css
.aspect-auto { aspect-ratio: auto }
```

```css
.aspect-<fraction> { aspect-ratio: <fraction> }
```

```css
.aspect-[<value>] { aspect-ratio: <value> }
```

```css
.aspect-(<custom-property>) { aspect-ratio: var(<custom-property>) }
```

### columns

```css
.columns-auto { columns: auto }
```

```css
.columns-px { columns: 1px }
```

```css
.-columns-px { columns: -1px }
```

```css
.columns-full { columns: 100% }
```

```css
.-columns-full { columns: -100% }
```

```css
.columns-screen { columns: 100vw }
```

```css
.columns-dvw { columns: 100vw }
```

```css
.columns-dvh { columns: 100vh }
```

```css
.columns-lvw { columns: 100lvw }
```

```css
.columns-lvh { columns: 100lvh }
```

```css
.columns-svw { columns: 100svw }
```

```css
.columns-svh { columns: 100svh }
```

```css
.columns-min { columns: min-content }
```

```css
.columns-max { columns: max-content }
```

```css
.columns-fit { columns: fit-content }
```

```css
.columns-3xs { columns: 256px }
```

```css
.columns-2xs { columns: 288px }
```

```css
.columns-xs { columns: 320px }
```

```css
.columns-sm { columns: 384px }
```

```css
.columns-md { columns: 448px }
```

```css
.columns-lg { columns: 512px }
```

```css
.columns-xl { columns: 576px }
```

```css
.columns-2xl { columns: 672px }
```

```css
.columns-3xl { columns: 768px }
```

```css
.columns-4xl { columns: 896px }
```

```css
.columns-5xl { columns: 1024px }
```

```css
.columns-6xl { columns: 1152px }
```

```css
.columns-7xl { columns: 1280px }
```

```css
.columns-<number> { columns: <number> }
```

```css
.-columns-<number> { columns: -<number> }
```

```css
.columns-<fraction> { columns: <fraction> }
```

```css
.columns-[<value>] { columns: <value> }
```

```css
.columns-(<custom-property>) { columns: var(<custom-property>) }
```

### break-after

```css
.break-after-auto { break-after: auto }
```

```css
.break-after-avoid { break-after: avoid }
```

```css
.break-after-avoid-page { break-after: avoid-page }
```

```css
.break-after-page { break-after: page }
```

```css
.break-after-left { break-after: left }
```

```css
.break-after-right { break-after: right }
```

```css
.break-after-column { break-after: column }
```

### break-before

```css
.break-before-auto { break-before: auto }
```

```css
.break-before-avoid { break-before: avoid }
```

```css
.break-before-avoid-page { break-before: avoid-page }
```

```css
.break-before-page { break-before: page }
```

```css
.break-before-left { break-before: left }
```

```css
.break-before-right { break-before: right }
```

```css
.break-before-column { break-before: column }
```

### break-inside

```css
.break-inside-auto { break-inside: auto }
```

```css
.break-inside-avoid { break-inside: avoid }
```

```css
.break-inside-avoid-page { break-inside: avoid-page }
```

```css
.break-inside-avoid-column { break-inside: avoid-column }
```

### box-decoration-break

```css
.box-decoration-clone { box-decoration-break: clone }
```

```css
.box-decoration-slice { box-decoration-break: slice }
```

### box-sizing

```css
.box-border { box-sizing: border-box }
```

```css
.box-content { box-sizing: content-box }
```

### display

```css
.inline { display: inline }
```

```css
.block { display: block }
```

```css
.inline-block { display: inline-block }
```

```css
.flow-root { display: flow-root }
```

```css
.flex { display: flex }
```

```css
.inline-flex { display: inline-flex }
```

```css
.grid { display: grid }
```

```css
.inline-grid { display: inline-grid }
```

```css
.contents { display: contents }
```

```css
.table { display: table }
```

```css
.inline-table { display: inline-table }
```

```css
.list-item { display: list-item }
```

```css
.hidden { display: none }
```

```css
.sr-only {
  clip: rect(0, 0, 0, 0);
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  white-space: nowrap;
  border-width: 0;
}
```

```css
.not-sr-only {
  clip: auto;
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  white-space: normal;
}
```

### float

```css
.float-start { float: inline-start }
```

```css
.float-end { float: inline-end }
```

```css
.float-left { float: left }
```

```css
.float-right { float: right }
```

```css
.float-none { float: none }
```

### clear

```css
.clear-start { clear: inline-start }
```

```css
.clear-end { clear: inline-end }
```

```css
.clear-left { clear: left }
```

```css
.clear-right { clear: right }
```

```css
.clear-both { clear: both }
```

```css
.clear-none { clear: none }
```

### isolation

```css
.isolate { isolation: isolate }
```

```css
.isolation-auto { isolation: auto }
```

### object-fit

```css
.object-contain { object-fit: contain }
```

```css
.object-cover { object-fit: cover }
```

```css
.object-fill { object-fit: fill }
```

```css
.object-none { object-fit: none }
```

```css
.object-scale-down { object-fit: scale-down }
```

### object-position

```css
.object-bottom { object-position: bottom }
```

```css
.object-center { object-position: center }
```

```css
.object-left { object-position: left }
```

```css
.object-left-bottom { object-position: left bottom }
```

```css
.object-left-top { object-position: left top }
```

```css
.object-right { object-position: right }
```

```css
.object-right-bottom { object-position: right bottom }
```

```css
.object-right-top { object-position: right top }
```

```css
.object-top { object-position: top }
```

```css
.object-[<value>] { object-position: <value> }
```

```css
.object-(<custom-property>) { object-position: var(<custom-property>) }
```

### overflow

```css
.overflow-auto { overflow: auto }
```

```css
.overflow-hidden { overflow: hidden }
```

```css
.overflow-visible { overflow: visible }
```

```css
.overflow-scroll { overflow: scroll }
```

```css
.overflow-x-auto { overflow-x: auto }
```

```css
.overflow-x-hidden { overflow-x: hidden }
```

```css
.overflow-x-clip { overflow-x: clip }
```

```css
.overflow-x-visible { overflow-x: visible }
```

```css
.overflow-x-scroll { overflow-x: scroll }
```

```css
.overflow-y-auto { overflow-y: auto }
```

```css
.overflow-y-hidden { overflow-y: hidden }
```

```css
.overflow-y-clip { overflow-y: clip }
```

```css
.overflow-y-visible { overflow-y: visible }
```

```css
.overflow-y-scroll { overflow-y: scroll }
```

```css
.line-clamp-none {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: none;
}
```

```css
.line-clamp-[<value>] {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: <value>;
}
```

```css
.line-clamp-(<custom-property>) {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(<custom-property>);
}
```

### overscroll-behavior

```css
.overscroll-auto { overscroll-behavior: auto }
```

```css
.overscroll-contain { overscroll-behavior: contain }
```

```css
.overscroll-none { overscroll-behavior: none }
```

```css
.overscroll-x-auto { overscroll-behavior-x: auto }
```

```css
.overscroll-x-contain { overscroll-behavior-x: contain }
```

```css
.overscroll-x-none { overscroll-behavior-x: none }
```

```css
.overscroll-y-auto { overscroll-behavior-y: auto }
```

```css
.overscroll-y-contain { overscroll-behavior-y: contain }
```

```css
.overscroll-y-none { overscroll-behavior-y: none }
```

### scrollbar-gutter

```css
.scrollbar-gutter-auto { scrollbar-gutter: auto }
```

```css
.scrollbar-gutter-stable { scrollbar-gutter: stable }
```

```css
.scrollbar-gutter-both { scrollbar-gutter: stable both-edges }
```

### scrollbar-width

```css
.scrollbar-width-auto { scrollbar-width: auto }
```

```css
.scrollbar-width-thin { scrollbar-width: thin }
```

```css
.scrollbar-width-none { scrollbar-width: none }
```

### scrollbar-color

```css
.scrollbar-color-auto { scrollbar-color: auto }
```

```css
.scrollbar-color-[<value>] { scrollbar-color: <value> }
```

```css
.scrollbar-color-(<custom-property>) { scrollbar-color: var(<custom-property>) }
```

### position

```css
.static { position: static }
```

```css
.fixed { position: fixed }
```

```css
.absolute { position: absolute }
```

```css
.relative { position: relative }
```

```css
.sticky { position: sticky }
```

### top / right / bottom / left

```css
.inset-auto { inset: auto }
```

```css
.inset-px { inset: 1px }
```

```css
.-inset-px { inset: -1px }
```

```css
.inset-full { inset: 100% }
```

```css
.-inset-full { inset: -100% }
```

```css
.inset-screen { inset: 100vw }
```

```css
.inset-dvw { inset: 100vw }
```

```css
.inset-dvh { inset: 100vh }
```

```css
.inset-lvw { inset: 100lvw }
```

```css
.inset-lvh { inset: 100lvh }
```

```css
.inset-svw { inset: 100svw }
```

```css
.inset-svh { inset: 100svh }
```

```css
.inset-min { inset: min-content }
```

```css
.inset-max { inset: max-content }
```

```css
.inset-fit { inset: fit-content }
```

```css
.inset-3xs { inset: 256px }
```

```css
.inset-2xs { inset: 288px }
```

```css
.inset-xs { inset: 320px }
```

```css
.inset-sm { inset: 384px }
```

```css
.inset-md { inset: 448px }
```

```css
.inset-lg { inset: 512px }
```

```css
.inset-xl { inset: 576px }
```

```css
.inset-2xl { inset: 672px }
```

```css
.inset-3xl { inset: 768px }
```

```css
.inset-4xl { inset: 896px }
```

```css
.inset-5xl { inset: 1024px }
```

```css
.inset-6xl { inset: 1152px }
```

```css
.inset-7xl { inset: 1280px }
```

```css
.inset-<number> { inset: calc(<number> * 4px) }
```

```css
.-inset-<number> { inset: calc(-<number> * 4px) }
```

```css
.inset-<fraction> { inset: calc(<fraction> * 100%) }
```

```css
.inset-[<value>] { inset: <value> }
```

```css
.inset-(<custom-property>) { inset: var(<custom-property>) }
```

```css
.inset-x-auto { inset-inline: auto }
```

```css
.inset-x-px { inset-inline: 1px }
```

```css
.-inset-x-px { inset-inline: -1px }
```

```css
.inset-x-full { inset-inline: 100% }
```

```css
.-inset-x-full { inset-inline: -100% }
```

```css
.inset-x-screen { inset-inline: 100vw }
```

```css
.inset-x-dvw { inset-inline: 100vw }
```

```css
.inset-x-dvh { inset-inline: 100vh }
```

```css
.inset-x-lvw { inset-inline: 100lvw }
```

```css
.inset-x-lvh { inset-inline: 100lvh }
```

```css
.inset-x-svw { inset-inline: 100svw }
```

```css
.inset-x-svh { inset-inline: 100svh }
```

```css
.inset-x-min { inset-inline: min-content }
```

```css
.inset-x-max { inset-inline: max-content }
```

```css
.inset-x-fit { inset-inline: fit-content }
```

```css
.inset-x-3xs { inset-inline: 256px }
```

```css
.inset-x-2xs { inset-inline: 288px }
```

```css
.inset-x-xs { inset-inline: 320px }
```

```css
.inset-x-sm { inset-inline: 384px }
```

```css
.inset-x-md { inset-inline: 448px }
```

```css
.inset-x-lg { inset-inline: 512px }
```

```css
.inset-x-xl { inset-inline: 576px }
```

```css
.inset-x-2xl { inset-inline: 672px }
```

```css
.inset-x-3xl { inset-inline: 768px }
```

```css
.inset-x-4xl { inset-inline: 896px }
```

```css
.inset-x-5xl { inset-inline: 1024px }
```

```css
.inset-x-6xl { inset-inline: 1152px }
```

```css
.inset-x-7xl { inset-inline: 1280px }
```

```css
.inset-x-<number> { inset-inline: calc(<number> * 4px) }
```

```css
.-inset-x-<number> { inset-inline: calc(-<number> * 4px) }
```

```css
.inset-x-<fraction> { inset-inline: calc(<fraction> * 100%) }
```

```css
.inset-x-[<value>] { inset-inline: <value> }
```

```css
.inset-x-(<custom-property>) { inset-inline: var(<custom-property>) }
```

```css
.inset-y-auto { inset-block: auto }
```

```css
.inset-y-px { inset-block: 1px }
```

```css
.-inset-y-px { inset-block: -1px }
```

```css
.inset-y-full { inset-block: 100% }
```

```css
.-inset-y-full { inset-block: -100% }
```

```css
.inset-y-screen { inset-block: 100vw }
```

```css
.inset-y-dvw { inset-block: 100vw }
```

```css
.inset-y-dvh { inset-block: 100vh }
```

```css
.inset-y-lvw { inset-block: 100lvw }
```

```css
.inset-y-lvh { inset-block: 100lvh }
```

```css
.inset-y-svw { inset-block: 100svw }
```

```css
.inset-y-svh { inset-block: 100svh }
```

```css
.inset-y-min { inset-block: min-content }
```

```css
.inset-y-max { inset-block: max-content }
```

```css
.inset-y-fit { inset-block: fit-content }
```

```css
.inset-y-3xs { inset-block: 256px }
```

```css
.inset-y-2xs { inset-block: 288px }
```

```css
.inset-y-xs { inset-block: 320px }
```

```css
.inset-y-sm { inset-block: 384px }
```

```css
.inset-y-md { inset-block: 448px }
```

```css
.inset-y-lg { inset-block: 512px }
```

```css
.inset-y-xl { inset-block: 576px }
```

```css
.inset-y-2xl { inset-block: 672px }
```

```css
.inset-y-3xl { inset-block: 768px }
```

```css
.inset-y-4xl { inset-block: 896px }
```

```css
.inset-y-5xl { inset-block: 1024px }
```

```css
.inset-y-6xl { inset-block: 1152px }
```

```css
.inset-y-7xl { inset-block: 1280px }
```

```css
.inset-y-<number> { inset-block: calc(<number> * 4px) }
```

```css
.-inset-y-<number> { inset-block: calc(-<number> * 4px) }
```

```css
.inset-y-<fraction> { inset-block: calc(<fraction> * 100%) }
```

```css
.inset-y-[<value>] { inset-block: <value> }
```

```css
.inset-y-(<custom-property>) { inset-block: var(<custom-property>) }
```

```css
.start-auto { inset-inline-start: auto }
```

```css
.start-px { inset-inline-start: 1px }
```

```css
.-start-px { inset-inline-start: -1px }
```

```css
.start-full { inset-inline-start: 100% }
```

```css
.-start-full { inset-inline-start: -100% }
```

```css
.start-screen { inset-inline-start: 100vw }
```

```css
.start-dvw { inset-inline-start: 100vw }
```

```css
.start-dvh { inset-inline-start: 100vh }
```

```css
.start-lvw { inset-inline-start: 100lvw }
```

```css
.start-lvh { inset-inline-start: 100lvh }
```

```css
.start-svw { inset-inline-start: 100svw }
```

```css
.start-svh { inset-inline-start: 100svh }
```

```css
.start-min { inset-inline-start: min-content }
```

```css
.start-max { inset-inline-start: max-content }
```

```css
.start-fit { inset-inline-start: fit-content }
```

```css
.start-3xs { inset-inline-start: 256px }
```

```css
.start-2xs { inset-inline-start: 288px }
```

```css
.start-xs { inset-inline-start: 320px }
```

```css
.start-sm { inset-inline-start: 384px }
```

```css
.start-md { inset-inline-start: 448px }
```

```css
.start-lg { inset-inline-start: 512px }
```

```css
.start-xl { inset-inline-start: 576px }
```

```css
.start-2xl { inset-inline-start: 672px }
```

```css
.start-3xl { inset-inline-start: 768px }
```

```css
.start-4xl { inset-inline-start: 896px }
```

```css
.start-5xl { inset-inline-start: 1024px }
```

```css
.start-6xl { inset-inline-start: 1152px }
```

```css
.start-7xl { inset-inline-start: 1280px }
```

```css
.start-<number> { inset-inline-start: calc(<number> * 4px) }
```

```css
.-start-<number> { inset-inline-start: calc(-<number> * 4px) }
```

```css
.start-<fraction> { inset-inline-start: calc(<fraction> * 100%) }
```

```css
.start-[<value>] { inset-inline-start: <value> }
```

```css
.start-(<custom-property>) { inset-inline-start: var(<custom-property>) }
```

```css
.end-auto { inset-inline-end: auto }
```

```css
.end-px { inset-inline-end: 1px }
```

```css
.-end-px { inset-inline-end: -1px }
```

```css
.end-full { inset-inline-end: 100% }
```

```css
.-end-full { inset-inline-end: -100% }
```

```css
.end-screen { inset-inline-end: 100vw }
```

```css
.end-dvw { inset-inline-end: 100vw }
```

```css
.end-dvh { inset-inline-end: 100vh }
```

```css
.end-lvw { inset-inline-end: 100lvw }
```

```css
.end-lvh { inset-inline-end: 100lvh }
```

```css
.end-svw { inset-inline-end: 100svw }
```

```css
.end-svh { inset-inline-end: 100svh }
```

```css
.end-min { inset-inline-end: min-content }
```

```css
.end-max { inset-inline-end: max-content }
```

```css
.end-fit { inset-inline-end: fit-content }
```

```css
.end-3xs { inset-inline-end: 256px }
```

```css
.end-2xs { inset-inline-end: 288px }
```

```css
.end-xs { inset-inline-end: 320px }
```

```css
.end-sm { inset-inline-end: 384px }
```

```css
.end-md { inset-inline-end: 448px }
```

```css
.end-lg { inset-inline-end: 512px }
```

```css
.end-xl { inset-inline-end: 576px }
```

```css
.end-2xl { inset-inline-end: 672px }
```

```css
.end-3xl { inset-inline-end: 768px }
```

```css
.end-4xl { inset-inline-end: 896px }
```

```css
.end-5xl { inset-inline-end: 1024px }
```

```css
.end-6xl { inset-inline-end: 1152px }
```

```css
.end-7xl { inset-inline-end: 1280px }
```

```css
.end-<number> { inset-inline-end: calc(<number> * 4px) }
```

```css
.-end-<number> { inset-inline-end: calc(-<number> * 4px) }
```

```css
.end-<fraction> { inset-inline-end: calc(<fraction> * 100%) }
```

```css
.end-[<value>] { inset-inline-end: <value> }
```

```css
.end-(<custom-property>) { inset-inline-end: var(<custom-property>) }
```

```css
.top-auto { top: auto }
```

```css
.top-px { top: 1px }
```

```css
.-top-px { top: -1px }
```

```css
.top-full { top: 100% }
```

```css
.-top-full { top: -100% }
```

```css
.top-screen { top: 100vw }
```

```css
.top-dvw { top: 100vw }
```

```css
.top-dvh { top: 100vh }
```

```css
.top-lvw { top: 100lvw }
```

```css
.top-lvh { top: 100lvh }
```

```css
.top-svw { top: 100svw }
```

```css
.top-svh { top: 100svh }
```

```css
.top-min { top: min-content }
```

```css
.top-max { top: max-content }
```

```css
.top-fit { top: fit-content }
```

```css
.top-3xs { top: 256px }
```

```css
.top-2xs { top: 288px }
```

```css
.top-xs { top: 320px }
```

```css
.top-sm { top: 384px }
```

```css
.top-md { top: 448px }
```

```css
.top-lg { top: 512px }
```

```css
.top-xl { top: 576px }
```

```css
.top-2xl { top: 672px }
```

```css
.top-3xl { top: 768px }
```

```css
.top-4xl { top: 896px }
```

```css
.top-5xl { top: 1024px }
```

```css
.top-6xl { top: 1152px }
```

```css
.top-7xl { top: 1280px }
```

```css
.top-<number> { top: calc(<number> * 4px) }
```

```css
.-top-<number> { top: calc(-<number> * 4px) }
```

```css
.top-<fraction> { top: calc(<fraction> * 100%) }
```

```css
.top-[<value>] { top: <value> }
```

```css
.top-(<custom-property>) { top: var(<custom-property>) }
```

```css
.right-auto { right: auto }
```

```css
.right-px { right: 1px }
```

```css
.-right-px { right: -1px }
```

```css
.right-full { right: 100% }
```

```css
.-right-full { right: -100% }
```

```css
.right-screen { right: 100vw }
```

```css
.right-dvw { right: 100vw }
```

```css
.right-dvh { right: 100vh }
```

```css
.right-lvw { right: 100lvw }
```

```css
.right-lvh { right: 100lvh }
```

```css
.right-svw { right: 100svw }
```

```css
.right-svh { right: 100svh }
```

```css
.right-min { right: min-content }
```

```css
.right-max { right: max-content }
```

```css
.right-fit { right: fit-content }
```

```css
.right-3xs { right: 256px }
```

```css
.right-2xs { right: 288px }
```

```css
.right-xs { right: 320px }
```

```css
.right-sm { right: 384px }
```

```css
.right-md { right: 448px }
```

```css
.right-lg { right: 512px }
```

```css
.right-xl { right: 576px }
```

```css
.right-2xl { right: 672px }
```

```css
.right-3xl { right: 768px }
```

```css
.right-4xl { right: 896px }
```

```css
.right-5xl { right: 1024px }
```

```css
.right-6xl { right: 1152px }
```

```css
.right-7xl { right: 1280px }
```

```css
.right-<number> { right: calc(<number> * 4px) }
```

```css
.-right-<number> { right: calc(-<number> * 4px) }
```

```css
.right-<fraction> { right: calc(<fraction> * 100%) }
```

```css
.right-[<value>] { right: <value> }
```

```css
.right-(<custom-property>) { right: var(<custom-property>) }
```

```css
.bottom-auto { bottom: auto }
```

```css
.bottom-px { bottom: 1px }
```

```css
.-bottom-px { bottom: -1px }
```

```css
.bottom-full { bottom: 100% }
```

```css
.-bottom-full { bottom: -100% }
```

```css
.bottom-screen { bottom: 100vw }
```

```css
.bottom-dvw { bottom: 100vw }
```

```css
.bottom-dvh { bottom: 100vh }
```

```css
.bottom-lvw { bottom: 100lvw }
```

```css
.bottom-lvh { bottom: 100lvh }
```

```css
.bottom-svw { bottom: 100svw }
```

```css
.bottom-svh { bottom: 100svh }
```

```css
.bottom-min { bottom: min-content }
```

```css
.bottom-max { bottom: max-content }
```

```css
.bottom-fit { bottom: fit-content }
```

```css
.bottom-3xs { bottom: 256px }
```

```css
.bottom-2xs { bottom: 288px }
```

```css
.bottom-xs { bottom: 320px }
```

```css
.bottom-sm { bottom: 384px }
```

```css
.bottom-md { bottom: 448px }
```

```css
.bottom-lg { bottom: 512px }
```

```css
.bottom-xl { bottom: 576px }
```

```css
.bottom-2xl { bottom: 672px }
```

```css
.bottom-3xl { bottom: 768px }
```

```css
.bottom-4xl { bottom: 896px }
```

```css
.bottom-5xl { bottom: 1024px }
```

```css
.bottom-6xl { bottom: 1152px }
```

```css
.bottom-7xl { bottom: 1280px }
```

```css
.bottom-<number> { bottom: calc(<number> * 4px) }
```

```css
.-bottom-<number> { bottom: calc(-<number> * 4px) }
```

```css
.bottom-<fraction> { bottom: calc(<fraction> * 100%) }
```

```css
.bottom-[<value>] { bottom: <value> }
```

```css
.bottom-(<custom-property>) { bottom: var(<custom-property>) }
```

```css
.left-auto { left: auto }
```

```css
.left-px { left: 1px }
```

```css
.-left-px { left: -1px }
```

```css
.left-full { left: 100% }
```

```css
.-left-full { left: -100% }
```

```css
.left-screen { left: 100vw }
```

```css
.left-dvw { left: 100vw }
```

```css
.left-dvh { left: 100vh }
```

```css
.left-lvw { left: 100lvw }
```

```css
.left-lvh { left: 100lvh }
```

```css
.left-svw { left: 100svw }
```

```css
.left-svh { left: 100svh }
```

```css
.left-min { left: min-content }
```

```css
.left-max { left: max-content }
```

```css
.left-fit { left: fit-content }
```

```css
.left-3xs { left: 256px }
```

```css
.left-2xs { left: 288px }
```

```css
.left-xs { left: 320px }
```

```css
.left-sm { left: 384px }
```

```css
.left-md { left: 448px }
```

```css
.left-lg { left: 512px }
```

```css
.left-xl { left: 576px }
```

```css
.left-2xl { left: 672px }
```

```css
.left-3xl { left: 768px }
```

```css
.left-4xl { left: 896px }
```

```css
.left-5xl { left: 1024px }
```

```css
.left-6xl { left: 1152px }
```

```css
.left-7xl { left: 1280px }
```

```css
.left-<number> { left: calc(<number> * 4px) }
```

```css
.-left-<number> { left: calc(-<number> * 4px) }
```

```css
.left-<fraction> { left: calc(<fraction> * 100%) }
```

```css
.left-[<value>] { left: <value> }
```

```css
.left-(<custom-property>) { left: var(<custom-property>) }
```

### visibility

```css
.visible { visibility: visible }
```

```css
.invisible { visibility: hidden }
```

```css
.collapse { visibility: collapse }
```

### z-index

```css
.z-auto { z-index: auto }
```

```css
.z-<number> { z-index: <number> }
```

```css
.-z-<number> { z-index: -<number> }
```

```css
.z-[<value>] { z-index: <value> }
```

```css
.z-(<custom-property>) { z-index: var(<custom-property>) }
```

## Flexbox & Grid

### flex-basis

```css
.basis-auto { flex-basis: auto }
```

```css
.basis-px { flex-basis: 1px }
```

```css
.-basis-px { flex-basis: -1px }
```

```css
.basis-full { flex-basis: 100% }
```

```css
.-basis-full { flex-basis: -100% }
```

```css
.basis-screen { flex-basis: 100vw }
```

```css
.basis-dvw { flex-basis: 100vw }
```

```css
.basis-dvh { flex-basis: 100vh }
```

```css
.basis-lvw { flex-basis: 100lvw }
```

```css
.basis-lvh { flex-basis: 100lvh }
```

```css
.basis-svw { flex-basis: 100svw }
```

```css
.basis-svh { flex-basis: 100svh }
```

```css
.basis-min { flex-basis: min-content }
```

```css
.basis-max { flex-basis: max-content }
```

```css
.basis-fit { flex-basis: fit-content }
```

```css
.basis-3xs { flex-basis: 256px }
```

```css
.basis-2xs { flex-basis: 288px }
```

```css
.basis-xs { flex-basis: 320px }
```

```css
.basis-sm { flex-basis: 384px }
```

```css
.basis-md { flex-basis: 448px }
```

```css
.basis-lg { flex-basis: 512px }
```

```css
.basis-xl { flex-basis: 576px }
```

```css
.basis-2xl { flex-basis: 672px }
```

```css
.basis-3xl { flex-basis: 768px }
```

```css
.basis-4xl { flex-basis: 896px }
```

```css
.basis-5xl { flex-basis: 1024px }
```

```css
.basis-6xl { flex-basis: 1152px }
```

```css
.basis-7xl { flex-basis: 1280px }
```

```css
.basis-<number> { flex-basis: calc(<number> * 4px) }
```

```css
.-basis-<number> { flex-basis: calc(-<number> * 4px) }
```

```css
.basis-<fraction> { flex-basis: calc(<fraction> * 100%) }
```

```css
.basis-[<value>] { flex-basis: <value> }
```

```css
.basis-(<custom-property>) { flex-basis: var(<custom-property>) }
```

### flex-direction

```css
.flex-row { flex-direction: row }
```

```css
.flex-row-reverse { flex-direction: row-reverse }
```

```css
.flex-col { flex-direction: column }
```

```css
.flex-col-reverse { flex-direction: column-reverse }
```

### flex-wrap

```css
.flex-nowrap { flex-wrap: nowrap }
```

```css
.flex-wrap { flex-wrap: wrap }
```

```css
.flex-wrap-reverse { flex-wrap: wrap-reverse }
```

### flex

```css
.flex-auto { flex: 1 1 auto }
```

```css
.flex-initial { flex: 0 1 auto }
```

```css
.flex-none { flex: none }
```

```css
.flex-<number> { flex: <number> }
```

```css
.-flex-<number> { flex: -<number> }
```

```css
.flex-<fraction> { flex: calc(<fraction> * 100%) }
```

```css
.flex-[<value>] { flex: <value> }
```

```css
.flex-(<custom-property>) { flex: var(<custom-property>) }
```

### flex-grow

```css
.grow { flex-grow: 1 }
```

```css
.grow-<number> { flex-grow: <number> }
```

```css
.-grow-<number> { flex-grow: -<number> }
```

```css
.grow-[<value>] { flex-grow: <value> }
```

```css
.grow-(<custom-property>) { flex-grow: var(<custom-property>) }
```

### flex-shrink

```css
.shrink { flex-shrink: 1 }
```

```css
.shrink-<number> { flex-shrink: <number> }
```

```css
.-shrink-<number> { flex-shrink: -<number> }
```

```css
.shrink-[<value>] { flex-shrink: <value> }
```

```css
.shrink-(<custom-property>) { flex-shrink: var(<custom-property>) }
```

### order

```css
.order-first { order: -9999 }
```

```css
.order-last { order: 9999 }
```

```css
.order-none { order: 0 }
```

```css
.order-<number> { order: <number> }
```

```css
.-order-<number> { order: -<number> }
```

```css
.order-[<value>] { order: <value> }
```

```css
.order-(<custom-property>) { order: var(<custom-property>) }
```

### grid-template-columns

```css
.grid-cols-none { grid-template-columns: none }
```

```css
.grid-cols-subgrid { grid-template-columns: subgrid }
```

```css
.grid-cols-<number> { grid-template-columns: repeat(<number>, minmax(0, 1fr)) }
```

```css
.-grid-cols-<number> { grid-template-columns: repeat(-<number>, minmax(0, 1fr)) }
```

```css
.grid-cols-[<value>] { grid-template-columns: <value> }
```

```css
.grid-cols-(<custom-property>) { grid-template-columns: var(<custom-property>) }
```

### grid-column

```css
.col-span-full { grid-column: 1 / -1 }
```

```css
.col-span-<number> { grid-column: span <number> / span <number> }
```

```css
.-col-span-<number> { grid-column: span -<number> / span -<number> }
```

```css
.col-span-[<value>] { grid-column: <value> }
```

```css
.col-span-(<custom-property>) { grid-column: var(<custom-property>) }
```

```css
.col-start-auto { grid-column-start: auto }
```

```css
.col-start-<number> { grid-column-start: <number> }
```

```css
.-col-start-<number> { grid-column-start: -<number> }
```

```css
.col-start-[<value>] { grid-column-start: <value> }
```

```css
.col-start-(<custom-property>) { grid-column-start: var(<custom-property>) }
```

```css
.col-end-auto { grid-column-end: auto }
```

```css
.col-end-<number> { grid-column-end: <number> }
```

```css
.-col-end-<number> { grid-column-end: -<number> }
```

```css
.col-end-[<value>] { grid-column-end: <value> }
```

```css
.col-end-(<custom-property>) { grid-column-end: var(<custom-property>) }
```

```css
.col-auto { grid-column: auto }
```

```css
.col-<number> { grid-column: <number> }
```

```css
.-col-<number> { grid-column: -<number> }
```

```css
.col-[<value>] { grid-column: <value> }
```

```css
.col-(<custom-property>) { grid-column: var(<custom-property>) }
```

### grid-template-rows

```css
.grid-rows-none { grid-template-rows: none }
```

```css
.grid-rows-subgrid { grid-template-rows: subgrid }
```

```css
.grid-rows-<number> { grid-template-rows: repeat(<number>, minmax(0, 1fr)) }
```

```css
.-grid-rows-<number> { grid-template-rows: repeat(-<number>, minmax(0, 1fr)) }
```

```css
.grid-rows-[<value>] { grid-template-rows: <value> }
```

```css
.grid-rows-(<custom-property>) { grid-template-rows: var(<custom-property>) }
```

### grid-row

```css
.row-span-full { grid-row: 1 / -1 }
```

```css
.row-span-<number> { grid-row: span <number> / span <number> }
```

```css
.-row-span-<number> { grid-row: span -<number> / span -<number> }
```

```css
.row-span-[<value>] { grid-row: <value> }
```

```css
.row-span-(<custom-property>) { grid-row: var(<custom-property>) }
```

```css
.row-start-auto { grid-row-start: auto }
```

```css
.row-start-<number> { grid-row-start: <number> }
```

```css
.-row-start-<number> { grid-row-start: -<number> }
```

```css
.row-start-[<value>] { grid-row-start: <value> }
```

```css
.row-start-(<custom-property>) { grid-row-start: var(<custom-property>) }
```

```css
.row-end-auto { grid-row-end: auto }
```

```css
.row-end-<number> { grid-row-end: <number> }
```

```css
.-row-end-<number> { grid-row-end: -<number> }
```

```css
.row-end-[<value>] { grid-row-end: <value> }
```

```css
.row-end-(<custom-property>) { grid-row-end: var(<custom-property>) }
```

```css
.row-auto { grid-row: auto }
```

```css
.row-<number> { grid-row: <number> }
```

```css
.-row-<number> { grid-row: -<number> }
```

```css
.row-[<value>] { grid-row: <value> }
```

```css
.row-(<custom-property>) { grid-row: var(<custom-property>) }
```

### grid-auto-flow

```css
.grid-flow-row { grid-auto-flow: row }
```

```css
.grid-flow-col { grid-auto-flow: column }
```

```css
.grid-flow-dense { grid-auto-flow: dense }
```

```css
.grid-flow-row-dense { grid-auto-flow: row dense }
```

```css
.grid-flow-col-dense { grid-auto-flow: column dense }
```

### grid-auto-columns

```css
.auto-cols-auto { grid-auto-columns: auto }
```

```css
.auto-cols-min { grid-auto-columns: min-content }
```

```css
.auto-cols-max { grid-auto-columns: max-content }
```

```css
.auto-cols-fr { grid-auto-columns: minmax(0, 1fr) }
```

```css
.auto-cols-[<value>] { grid-auto-columns: <value> }
```

```css
.auto-cols-(<custom-property>) { grid-auto-columns: var(<custom-property>) }
```

### grid-auto-rows

```css
.auto-rows-auto { grid-auto-rows: auto }
```

```css
.auto-rows-min { grid-auto-rows: min-content }
```

```css
.auto-rows-max { grid-auto-rows: max-content }
```

```css
.auto-rows-fr { grid-auto-rows: minmax(0, 1fr) }
```

```css
.auto-rows-[<value>] { grid-auto-rows: <value> }
```

```css
.auto-rows-(<custom-property>) { grid-auto-rows: var(<custom-property>) }
```

### gap

```css
.gap-<number> { gap: calc(<number> * 4px) }
```

```css
.-gap-<number> { gap: calc(-<number> * 4px) }
```

```css
.gap-[<value>] { gap: <value> }
```

```css
.gap-(<custom-property>) { gap: var(<custom-property>) }
```

```css
.gap-x-<number> { column-gap: calc(<number> * 4px) }
```

```css
.-gap-x-<number> { column-gap: calc(-<number> * 4px) }
```

```css
.gap-x-[<value>] { column-gap: <value> }
```

```css
.gap-x-(<custom-property>) { column-gap: var(<custom-property>) }
```

```css
.gap-y-<number> { row-gap: calc(<number> * 4px) }
```

```css
.-gap-y-<number> { row-gap: calc(-<number> * 4px) }
```

```css
.gap-y-[<value>] { row-gap: <value> }
```

```css
.gap-y-(<custom-property>) { row-gap: var(<custom-property>) }
```

### justify-content

```css
.justify-start { justify-content: flex-start }
```

```css
.justify-end { justify-content: flex-end }
```

```css
.justify-center { justify-content: center }
```

```css
.justify-between { justify-content: space-between }
```

```css
.justify-around { justify-content: space-around }
```

```css
.justify-evenly { justify-content: space-evenly }
```

```css
.justify-stretch { justify-content: stretch }
```

```css
.justify-normal { justify-content: normal }
```

### justify-items

```css
.justify-items-start { justify-items: start }
```

```css
.justify-items-end { justify-items: end }
```

```css
.justify-items-center { justify-items: center }
```

```css
.justify-items-stretch { justify-items: stretch }
```

```css
.justify-items-normal { justify-items: normal }
```

### justify-self

```css
.justify-self-auto { justify-self: auto }
```

```css
.justify-self-start { justify-self: start }
```

```css
.justify-self-end { justify-self: end }
```

```css
.justify-self-center { justify-self: center }
```

```css
.justify-self-stretch { justify-self: stretch }
```

### align-content

```css
.content-normal { align-content: normal }
```

```css
.content-center { align-content: center }
```

```css
.content-start { align-content: flex-start }
```

```css
.content-end { align-content: flex-end }
```

```css
.content-between { align-content: space-between }
```

```css
.content-around { align-content: space-around }
```

```css
.content-evenly { align-content: space-evenly }
```

```css
.content-baseline { align-content: baseline }
```

```css
.content-stretch { align-content: stretch }
```

### align-items

```css
.items-start { align-items: flex-start }
```

```css
.items-end { align-items: flex-end }
```

```css
.items-end-safe { align-items: safe flex-end }
```

```css
.items-center { align-items: center }
```

```css
.items-center-safe { align-items: safe center }
```

```css
.items-baseline { align-items: baseline }
```

```css
.items-baseline-last { align-items: last baseline }
```

```css
.items-stretch { align-items: stretch }
```

### align-self

```css
.self-auto { align-self: auto }
```

```css
.self-start { align-self: flex-start }
```

```css
.self-end { align-self: flex-end }
```

```css
.self-center { align-self: center }
```

```css
.self-stretch { align-self: stretch }
```

```css
.self-baseline { align-self: baseline }
```

### place-content

```css
.place-content-center { place-content: center }
```

```css
.place-content-start { place-content: flex-start }
```

```css
.place-content-end { place-content: flex-end }
```

```css
.place-content-between { place-content: space-between }
```

```css
.place-content-around { place-content: space-around }
```

```css
.place-content-evenly { place-content: space-evenly }
```

```css
.place-content-baseline { place-content: baseline }
```

```css
.place-content-stretch { place-content: stretch }
```

### place-items

```css
.place-items-start { place-items: start }
```

```css
.place-items-end { place-items: end }
```

```css
.place-items-center { place-items: center }
```

```css
.place-items-baseline { place-items: baseline }
```

```css
.place-items-stretch { place-items: stretch }
```

### place-self

```css
.place-self-auto { place-self: auto }
```

```css
.place-self-start { place-self: start }
```

```css
.place-self-end { place-self: end }
```

```css
.place-self-center { place-self: center }
```

```css
.place-self-stretch { place-self: stretch }
```

## Spacing

### padding

```css
.p-auto { padding: auto }
```

```css
.p-px { padding: 1px }
```

```css
.-p-px { padding: -1px }
```

```css
.p-full { padding: 100% }
```

```css
.-p-full { padding: -100% }
```

```css
.p-screen { padding: 100vw }
```

```css
.p-dvw { padding: 100vw }
```

```css
.p-dvh { padding: 100vh }
```

```css
.p-lvw { padding: 100lvw }
```

```css
.p-lvh { padding: 100lvh }
```

```css
.p-svw { padding: 100svw }
```

```css
.p-svh { padding: 100svh }
```

```css
.p-min { padding: min-content }
```

```css
.p-max { padding: max-content }
```

```css
.p-fit { padding: fit-content }
```

```css
.p-3xs { padding: 256px }
```

```css
.p-2xs { padding: 288px }
```

```css
.p-xs { padding: 320px }
```

```css
.p-sm { padding: 384px }
```

```css
.p-md { padding: 448px }
```

```css
.p-lg { padding: 512px }
```

```css
.p-xl { padding: 576px }
```

```css
.p-2xl { padding: 672px }
```

```css
.p-3xl { padding: 768px }
```

```css
.p-4xl { padding: 896px }
```

```css
.p-5xl { padding: 1024px }
```

```css
.p-6xl { padding: 1152px }
```

```css
.p-7xl { padding: 1280px }
```

```css
.p-<number> { padding: calc(<number> * 4px) }
```

```css
.-p-<number> { padding: calc(-<number> * 4px) }
```

```css
.p-[<value>] { padding: <value> }
```

```css
.p-(<custom-property>) { padding: var(<custom-property>) }
```

```css
.px-auto { padding-inline: auto }
```

```css
.px-px { padding-inline: 1px }
```

```css
.-px-px { padding-inline: -1px }
```

```css
.px-full { padding-inline: 100% }
```

```css
.-px-full { padding-inline: -100% }
```

```css
.px-screen { padding-inline: 100vw }
```

```css
.px-dvw { padding-inline: 100vw }
```

```css
.px-dvh { padding-inline: 100vh }
```

```css
.px-lvw { padding-inline: 100lvw }
```

```css
.px-lvh { padding-inline: 100lvh }
```

```css
.px-svw { padding-inline: 100svw }
```

```css
.px-svh { padding-inline: 100svh }
```

```css
.px-min { padding-inline: min-content }
```

```css
.px-max { padding-inline: max-content }
```

```css
.px-fit { padding-inline: fit-content }
```

```css
.px-3xs { padding-inline: 256px }
```

```css
.px-2xs { padding-inline: 288px }
```

```css
.px-xs { padding-inline: 320px }
```

```css
.px-sm { padding-inline: 384px }
```

```css
.px-md { padding-inline: 448px }
```

```css
.px-lg { padding-inline: 512px }
```

```css
.px-xl { padding-inline: 576px }
```

```css
.px-2xl { padding-inline: 672px }
```

```css
.px-3xl { padding-inline: 768px }
```

```css
.px-4xl { padding-inline: 896px }
```

```css
.px-5xl { padding-inline: 1024px }
```

```css
.px-6xl { padding-inline: 1152px }
```

```css
.px-7xl { padding-inline: 1280px }
```

```css
.px-<number> { padding-inline: calc(<number> * 4px) }
```

```css
.-px-<number> { padding-inline: calc(-<number> * 4px) }
```

```css
.px-[<value>] { padding-inline: <value> }
```

```css
.px-(<custom-property>) { padding-inline: var(<custom-property>) }
```

```css
.py-auto { padding-block: auto }
```

```css
.py-px { padding-block: 1px }
```

```css
.-py-px { padding-block: -1px }
```

```css
.py-full { padding-block: 100% }
```

```css
.-py-full { padding-block: -100% }
```

```css
.py-screen { padding-block: 100vw }
```

```css
.py-dvw { padding-block: 100vw }
```

```css
.py-dvh { padding-block: 100vh }
```

```css
.py-lvw { padding-block: 100lvw }
```

```css
.py-lvh { padding-block: 100lvh }
```

```css
.py-svw { padding-block: 100svw }
```

```css
.py-svh { padding-block: 100svh }
```

```css
.py-min { padding-block: min-content }
```

```css
.py-max { padding-block: max-content }
```

```css
.py-fit { padding-block: fit-content }
```

```css
.py-3xs { padding-block: 256px }
```

```css
.py-2xs { padding-block: 288px }
```

```css
.py-xs { padding-block: 320px }
```

```css
.py-sm { padding-block: 384px }
```

```css
.py-md { padding-block: 448px }
```

```css
.py-lg { padding-block: 512px }
```

```css
.py-xl { padding-block: 576px }
```

```css
.py-2xl { padding-block: 672px }
```

```css
.py-3xl { padding-block: 768px }
```

```css
.py-4xl { padding-block: 896px }
```

```css
.py-5xl { padding-block: 1024px }
```

```css
.py-6xl { padding-block: 1152px }
```

```css
.py-7xl { padding-block: 1280px }
```

```css
.py-<number> { padding-block: calc(<number> * 4px) }
```

```css
.-py-<number> { padding-block: calc(-<number> * 4px) }
```

```css
.py-[<value>] { padding-block: <value> }
```

```css
.py-(<custom-property>) { padding-block: var(<custom-property>) }
```

```css
.ps-auto { padding-inline-start: auto }
```

```css
.ps-px { padding-inline-start: 1px }
```

```css
.-ps-px { padding-inline-start: -1px }
```

```css
.ps-full { padding-inline-start: 100% }
```

```css
.-ps-full { padding-inline-start: -100% }
```

```css
.ps-screen { padding-inline-start: 100vw }
```

```css
.ps-dvw { padding-inline-start: 100vw }
```

```css
.ps-dvh { padding-inline-start: 100vh }
```

```css
.ps-lvw { padding-inline-start: 100lvw }
```

```css
.ps-lvh { padding-inline-start: 100lvh }
```

```css
.ps-svw { padding-inline-start: 100svw }
```

```css
.ps-svh { padding-inline-start: 100svh }
```

```css
.ps-min { padding-inline-start: min-content }
```

```css
.ps-max { padding-inline-start: max-content }
```

```css
.ps-fit { padding-inline-start: fit-content }
```

```css
.ps-3xs { padding-inline-start: 256px }
```

```css
.ps-2xs { padding-inline-start: 288px }
```

```css
.ps-xs { padding-inline-start: 320px }
```

```css
.ps-sm { padding-inline-start: 384px }
```

```css
.ps-md { padding-inline-start: 448px }
```

```css
.ps-lg { padding-inline-start: 512px }
```

```css
.ps-xl { padding-inline-start: 576px }
```

```css
.ps-2xl { padding-inline-start: 672px }
```

```css
.ps-3xl { padding-inline-start: 768px }
```

```css
.ps-4xl { padding-inline-start: 896px }
```

```css
.ps-5xl { padding-inline-start: 1024px }
```

```css
.ps-6xl { padding-inline-start: 1152px }
```

```css
.ps-7xl { padding-inline-start: 1280px }
```

```css
.ps-<number> { padding-inline-start: calc(<number> * 4px) }
```

```css
.-ps-<number> { padding-inline-start: calc(-<number> * 4px) }
```

```css
.ps-[<value>] { padding-inline-start: <value> }
```

```css
.ps-(<custom-property>) { padding-inline-start: var(<custom-property>) }
```

```css
.pe-auto { padding-inline-end: auto }
```

```css
.pe-px { padding-inline-end: 1px }
```

```css
.-pe-px { padding-inline-end: -1px }
```

```css
.pe-full { padding-inline-end: 100% }
```

```css
.-pe-full { padding-inline-end: -100% }
```

```css
.pe-screen { padding-inline-end: 100vw }
```

```css
.pe-dvw { padding-inline-end: 100vw }
```

```css
.pe-dvh { padding-inline-end: 100vh }
```

```css
.pe-lvw { padding-inline-end: 100lvw }
```

```css
.pe-lvh { padding-inline-end: 100lvh }
```

```css
.pe-svw { padding-inline-end: 100svw }
```

```css
.pe-svh { padding-inline-end: 100svh }
```

```css
.pe-min { padding-inline-end: min-content }
```

```css
.pe-max { padding-inline-end: max-content }
```

```css
.pe-fit { padding-inline-end: fit-content }
```

```css
.pe-3xs { padding-inline-end: 256px }
```

```css
.pe-2xs { padding-inline-end: 288px }
```

```css
.pe-xs { padding-inline-end: 320px }
```

```css
.pe-sm { padding-inline-end: 384px }
```

```css
.pe-md { padding-inline-end: 448px }
```

```css
.pe-lg { padding-inline-end: 512px }
```

```css
.pe-xl { padding-inline-end: 576px }
```

```css
.pe-2xl { padding-inline-end: 672px }
```

```css
.pe-3xl { padding-inline-end: 768px }
```

```css
.pe-4xl { padding-inline-end: 896px }
```

```css
.pe-5xl { padding-inline-end: 1024px }
```

```css
.pe-6xl { padding-inline-end: 1152px }
```

```css
.pe-7xl { padding-inline-end: 1280px }
```

```css
.pe-<number> { padding-inline-end: calc(<number> * 4px) }
```

```css
.-pe-<number> { padding-inline-end: calc(-<number> * 4px) }
```

```css
.pe-[<value>] { padding-inline-end: <value> }
```

```css
.pe-(<custom-property>) { padding-inline-end: var(<custom-property>) }
```

```css
.pt-auto { padding-top: auto }
```

```css
.pt-px { padding-top: 1px }
```

```css
.-pt-px { padding-top: -1px }
```

```css
.pt-full { padding-top: 100% }
```

```css
.-pt-full { padding-top: -100% }
```

```css
.pt-screen { padding-top: 100vw }
```

```css
.pt-dvw { padding-top: 100vw }
```

```css
.pt-dvh { padding-top: 100vh }
```

```css
.pt-lvw { padding-top: 100lvw }
```

```css
.pt-lvh { padding-top: 100lvh }
```

```css
.pt-svw { padding-top: 100svw }
```

```css
.pt-svh { padding-top: 100svh }
```

```css
.pt-min { padding-top: min-content }
```

```css
.pt-max { padding-top: max-content }
```

```css
.pt-fit { padding-top: fit-content }
```

```css
.pt-3xs { padding-top: 256px }
```

```css
.pt-2xs { padding-top: 288px }
```

```css
.pt-xs { padding-top: 320px }
```

```css
.pt-sm { padding-top: 384px }
```

```css
.pt-md { padding-top: 448px }
```

```css
.pt-lg { padding-top: 512px }
```

```css
.pt-xl { padding-top: 576px }
```

```css
.pt-2xl { padding-top: 672px }
```

```css
.pt-3xl { padding-top: 768px }
```

```css
.pt-4xl { padding-top: 896px }
```

```css
.pt-5xl { padding-top: 1024px }
```

```css
.pt-6xl { padding-top: 1152px }
```

```css
.pt-7xl { padding-top: 1280px }
```

```css
.pt-<number> { padding-top: calc(<number> * 4px) }
```

```css
.-pt-<number> { padding-top: calc(-<number> * 4px) }
```

```css
.pt-[<value>] { padding-top: <value> }
```

```css
.pt-(<custom-property>) { padding-top: var(<custom-property>) }
```

```css
.pr-auto { padding-right: auto }
```

```css
.pr-px { padding-right: 1px }
```

```css
.-pr-px { padding-right: -1px }
```

```css
.pr-full { padding-right: 100% }
```

```css
.-pr-full { padding-right: -100% }
```

```css
.pr-screen { padding-right: 100vw }
```

```css
.pr-dvw { padding-right: 100vw }
```

```css
.pr-dvh { padding-right: 100vh }
```

```css
.pr-lvw { padding-right: 100lvw }
```

```css
.pr-lvh { padding-right: 100lvh }
```

```css
.pr-svw { padding-right: 100svw }
```

```css
.pr-svh { padding-right: 100svh }
```

```css
.pr-min { padding-right: min-content }
```

```css
.pr-max { padding-right: max-content }
```

```css
.pr-fit { padding-right: fit-content }
```

```css
.pr-3xs { padding-right: 256px }
```

```css
.pr-2xs { padding-right: 288px }
```

```css
.pr-xs { padding-right: 320px }
```

```css
.pr-sm { padding-right: 384px }
```

```css
.pr-md { padding-right: 448px }
```

```css
.pr-lg { padding-right: 512px }
```

```css
.pr-xl { padding-right: 576px }
```

```css
.pr-2xl { padding-right: 672px }
```

```css
.pr-3xl { padding-right: 768px }
```

```css
.pr-4xl { padding-right: 896px }
```

```css
.pr-5xl { padding-right: 1024px }
```

```css
.pr-6xl { padding-right: 1152px }
```

```css
.pr-7xl { padding-right: 1280px }
```

```css
.pr-<number> { padding-right: calc(<number> * 4px) }
```

```css
.-pr-<number> { padding-right: calc(-<number> * 4px) }
```

```css
.pr-[<value>] { padding-right: <value> }
```

```css
.pr-(<custom-property>) { padding-right: var(<custom-property>) }
```

```css
.pb-auto { padding-bottom: auto }
```

```css
.pb-px { padding-bottom: 1px }
```

```css
.-pb-px { padding-bottom: -1px }
```

```css
.pb-full { padding-bottom: 100% }
```

```css
.-pb-full { padding-bottom: -100% }
```

```css
.pb-screen { padding-bottom: 100vw }
```

```css
.pb-dvw { padding-bottom: 100vw }
```

```css
.pb-dvh { padding-bottom: 100vh }
```

```css
.pb-lvw { padding-bottom: 100lvw }
```

```css
.pb-lvh { padding-bottom: 100lvh }
```

```css
.pb-svw { padding-bottom: 100svw }
```

```css
.pb-svh { padding-bottom: 100svh }
```

```css
.pb-min { padding-bottom: min-content }
```

```css
.pb-max { padding-bottom: max-content }
```

```css
.pb-fit { padding-bottom: fit-content }
```

```css
.pb-3xs { padding-bottom: 256px }
```

```css
.pb-2xs { padding-bottom: 288px }
```

```css
.pb-xs { padding-bottom: 320px }
```

```css
.pb-sm { padding-bottom: 384px }
```

```css
.pb-md { padding-bottom: 448px }
```

```css
.pb-lg { padding-bottom: 512px }
```

```css
.pb-xl { padding-bottom: 576px }
```

```css
.pb-2xl { padding-bottom: 672px }
```

```css
.pb-3xl { padding-bottom: 768px }
```

```css
.pb-4xl { padding-bottom: 896px }
```

```css
.pb-5xl { padding-bottom: 1024px }
```

```css
.pb-6xl { padding-bottom: 1152px }
```

```css
.pb-7xl { padding-bottom: 1280px }
```

```css
.pb-<number> { padding-bottom: calc(<number> * 4px) }
```

```css
.-pb-<number> { padding-bottom: calc(-<number> * 4px) }
```

```css
.pb-[<value>] { padding-bottom: <value> }
```

```css
.pb-(<custom-property>) { padding-bottom: var(<custom-property>) }
```

```css
.pl-auto { padding-left: auto }
```

```css
.pl-px { padding-left: 1px }
```

```css
.-pl-px { padding-left: -1px }
```

```css
.pl-full { padding-left: 100% }
```

```css
.-pl-full { padding-left: -100% }
```

```css
.pl-screen { padding-left: 100vw }
```

```css
.pl-dvw { padding-left: 100vw }
```

```css
.pl-dvh { padding-left: 100vh }
```

```css
.pl-lvw { padding-left: 100lvw }
```

```css
.pl-lvh { padding-left: 100lvh }
```

```css
.pl-svw { padding-left: 100svw }
```

```css
.pl-svh { padding-left: 100svh }
```

```css
.pl-min { padding-left: min-content }
```

```css
.pl-max { padding-left: max-content }
```

```css
.pl-fit { padding-left: fit-content }
```

```css
.pl-3xs { padding-left: 256px }
```

```css
.pl-2xs { padding-left: 288px }
```

```css
.pl-xs { padding-left: 320px }
```

```css
.pl-sm { padding-left: 384px }
```

```css
.pl-md { padding-left: 448px }
```

```css
.pl-lg { padding-left: 512px }
```

```css
.pl-xl { padding-left: 576px }
```

```css
.pl-2xl { padding-left: 672px }
```

```css
.pl-3xl { padding-left: 768px }
```

```css
.pl-4xl { padding-left: 896px }
```

```css
.pl-5xl { padding-left: 1024px }
```

```css
.pl-6xl { padding-left: 1152px }
```

```css
.pl-7xl { padding-left: 1280px }
```

```css
.pl-<number> { padding-left: calc(<number> * 4px) }
```

```css
.-pl-<number> { padding-left: calc(-<number> * 4px) }
```

```css
.pl-[<value>] { padding-left: <value> }
```

```css
.pl-(<custom-property>) { padding-left: var(<custom-property>) }
```

### margin

```css
.m-auto { margin: auto }
```

```css
.m-px { margin: 1px }
```

```css
.-m-px { margin: -1px }
```

```css
.m-full { margin: 100% }
```

```css
.-m-full { margin: -100% }
```

```css
.m-screen { margin: 100vw }
```

```css
.m-dvw { margin: 100vw }
```

```css
.m-dvh { margin: 100vh }
```

```css
.m-lvw { margin: 100lvw }
```

```css
.m-lvh { margin: 100lvh }
```

```css
.m-svw { margin: 100svw }
```

```css
.m-svh { margin: 100svh }
```

```css
.m-min { margin: min-content }
```

```css
.m-max { margin: max-content }
```

```css
.m-fit { margin: fit-content }
```

```css
.m-3xs { margin: 256px }
```

```css
.m-2xs { margin: 288px }
```

```css
.m-xs { margin: 320px }
```

```css
.m-sm { margin: 384px }
```

```css
.m-md { margin: 448px }
```

```css
.m-lg { margin: 512px }
```

```css
.m-xl { margin: 576px }
```

```css
.m-2xl { margin: 672px }
```

```css
.m-3xl { margin: 768px }
```

```css
.m-4xl { margin: 896px }
```

```css
.m-5xl { margin: 1024px }
```

```css
.m-6xl { margin: 1152px }
```

```css
.m-7xl { margin: 1280px }
```

```css
.m-<number> { margin: calc(<number> * 4px) }
```

```css
.-m-<number> { margin: calc(-<number> * 4px) }
```

```css
.m-[<value>] { margin: <value> }
```

```css
.m-(<custom-property>) { margin: var(<custom-property>) }
```

```css
.mx-auto { margin-inline: auto }
```

```css
.mx-px { margin-inline: 1px }
```

```css
.-mx-px { margin-inline: -1px }
```

```css
.mx-full { margin-inline: 100% }
```

```css
.-mx-full { margin-inline: -100% }
```

```css
.mx-screen { margin-inline: 100vw }
```

```css
.mx-dvw { margin-inline: 100vw }
```

```css
.mx-dvh { margin-inline: 100vh }
```

```css
.mx-lvw { margin-inline: 100lvw }
```

```css
.mx-lvh { margin-inline: 100lvh }
```

```css
.mx-svw { margin-inline: 100svw }
```

```css
.mx-svh { margin-inline: 100svh }
```

```css
.mx-min { margin-inline: min-content }
```

```css
.mx-max { margin-inline: max-content }
```

```css
.mx-fit { margin-inline: fit-content }
```

```css
.mx-3xs { margin-inline: 256px }
```

```css
.mx-2xs { margin-inline: 288px }
```

```css
.mx-xs { margin-inline: 320px }
```

```css
.mx-sm { margin-inline: 384px }
```

```css
.mx-md { margin-inline: 448px }
```

```css
.mx-lg { margin-inline: 512px }
```

```css
.mx-xl { margin-inline: 576px }
```

```css
.mx-2xl { margin-inline: 672px }
```

```css
.mx-3xl { margin-inline: 768px }
```

```css
.mx-4xl { margin-inline: 896px }
```

```css
.mx-5xl { margin-inline: 1024px }
```

```css
.mx-6xl { margin-inline: 1152px }
```

```css
.mx-7xl { margin-inline: 1280px }
```

```css
.mx-<number> { margin-inline: calc(<number> * 4px) }
```

```css
.-mx-<number> { margin-inline: calc(-<number> * 4px) }
```

```css
.mx-[<value>] { margin-inline: <value> }
```

```css
.mx-(<custom-property>) { margin-inline: var(<custom-property>) }
```

```css
.my-auto { margin-block: auto }
```

```css
.my-px { margin-block: 1px }
```

```css
.-my-px { margin-block: -1px }
```

```css
.my-full { margin-block: 100% }
```

```css
.-my-full { margin-block: -100% }
```

```css
.my-screen { margin-block: 100vw }
```

```css
.my-dvw { margin-block: 100vw }
```

```css
.my-dvh { margin-block: 100vh }
```

```css
.my-lvw { margin-block: 100lvw }
```

```css
.my-lvh { margin-block: 100lvh }
```

```css
.my-svw { margin-block: 100svw }
```

```css
.my-svh { margin-block: 100svh }
```

```css
.my-min { margin-block: min-content }
```

```css
.my-max { margin-block: max-content }
```

```css
.my-fit { margin-block: fit-content }
```

```css
.my-3xs { margin-block: 256px }
```

```css
.my-2xs { margin-block: 288px }
```

```css
.my-xs { margin-block: 320px }
```

```css
.my-sm { margin-block: 384px }
```

```css
.my-md { margin-block: 448px }
```

```css
.my-lg { margin-block: 512px }
```

```css
.my-xl { margin-block: 576px }
```

```css
.my-2xl { margin-block: 672px }
```

```css
.my-3xl { margin-block: 768px }
```

```css
.my-4xl { margin-block: 896px }
```

```css
.my-5xl { margin-block: 1024px }
```

```css
.my-6xl { margin-block: 1152px }
```

```css
.my-7xl { margin-block: 1280px }
```

```css
.my-<number> { margin-block: calc(<number> * 4px) }
```

```css
.-my-<number> { margin-block: calc(-<number> * 4px) }
```

```css
.my-[<value>] { margin-block: <value> }
```

```css
.my-(<custom-property>) { margin-block: var(<custom-property>) }
```

```css
.ms-auto { margin-inline-start: auto }
```

```css
.ms-px { margin-inline-start: 1px }
```

```css
.-ms-px { margin-inline-start: -1px }
```

```css
.ms-full { margin-inline-start: 100% }
```

```css
.-ms-full { margin-inline-start: -100% }
```

```css
.ms-screen { margin-inline-start: 100vw }
```

```css
.ms-dvw { margin-inline-start: 100vw }
```

```css
.ms-dvh { margin-inline-start: 100vh }
```

```css
.ms-lvw { margin-inline-start: 100lvw }
```

```css
.ms-lvh { margin-inline-start: 100lvh }
```

```css
.ms-svw { margin-inline-start: 100svw }
```

```css
.ms-svh { margin-inline-start: 100svh }
```

```css
.ms-min { margin-inline-start: min-content }
```

```css
.ms-max { margin-inline-start: max-content }
```

```css
.ms-fit { margin-inline-start: fit-content }
```

```css
.ms-3xs { margin-inline-start: 256px }
```

```css
.ms-2xs { margin-inline-start: 288px }
```

```css
.ms-xs { margin-inline-start: 320px }
```

```css
.ms-sm { margin-inline-start: 384px }
```

```css
.ms-md { margin-inline-start: 448px }
```

```css
.ms-lg { margin-inline-start: 512px }
```

```css
.ms-xl { margin-inline-start: 576px }
```

```css
.ms-2xl { margin-inline-start: 672px }
```

```css
.ms-3xl { margin-inline-start: 768px }
```

```css
.ms-4xl { margin-inline-start: 896px }
```

```css
.ms-5xl { margin-inline-start: 1024px }
```

```css
.ms-6xl { margin-inline-start: 1152px }
```

```css
.ms-7xl { margin-inline-start: 1280px }
```

```css
.ms-<number> { margin-inline-start: calc(<number> * 4px) }
```

```css
.-ms-<number> { margin-inline-start: calc(-<number> * 4px) }
```

```css
.ms-[<value>] { margin-inline-start: <value> }
```

```css
.ms-(<custom-property>) { margin-inline-start: var(<custom-property>) }
```

```css
.me-auto { margin-inline-end: auto }
```

```css
.me-px { margin-inline-end: 1px }
```

```css
.-me-px { margin-inline-end: -1px }
```

```css
.me-full { margin-inline-end: 100% }
```

```css
.-me-full { margin-inline-end: -100% }
```

```css
.me-screen { margin-inline-end: 100vw }
```

```css
.me-dvw { margin-inline-end: 100vw }
```

```css
.me-dvh { margin-inline-end: 100vh }
```

```css
.me-lvw { margin-inline-end: 100lvw }
```

```css
.me-lvh { margin-inline-end: 100lvh }
```

```css
.me-svw { margin-inline-end: 100svw }
```

```css
.me-svh { margin-inline-end: 100svh }
```

```css
.me-min { margin-inline-end: min-content }
```

```css
.me-max { margin-inline-end: max-content }
```

```css
.me-fit { margin-inline-end: fit-content }
```

```css
.me-3xs { margin-inline-end: 256px }
```

```css
.me-2xs { margin-inline-end: 288px }
```

```css
.me-xs { margin-inline-end: 320px }
```

```css
.me-sm { margin-inline-end: 384px }
```

```css
.me-md { margin-inline-end: 448px }
```

```css
.me-lg { margin-inline-end: 512px }
```

```css
.me-xl { margin-inline-end: 576px }
```

```css
.me-2xl { margin-inline-end: 672px }
```

```css
.me-3xl { margin-inline-end: 768px }
```

```css
.me-4xl { margin-inline-end: 896px }
```

```css
.me-5xl { margin-inline-end: 1024px }
```

```css
.me-6xl { margin-inline-end: 1152px }
```

```css
.me-7xl { margin-inline-end: 1280px }
```

```css
.me-<number> { margin-inline-end: calc(<number> * 4px) }
```

```css
.-me-<number> { margin-inline-end: calc(-<number> * 4px) }
```

```css
.me-[<value>] { margin-inline-end: <value> }
```

```css
.me-(<custom-property>) { margin-inline-end: var(<custom-property>) }
```

```css
.mt-auto { margin-top: auto }
```

```css
.mt-px { margin-top: 1px }
```

```css
.-mt-px { margin-top: -1px }
```

```css
.mt-full { margin-top: 100% }
```

```css
.-mt-full { margin-top: -100% }
```

```css
.mt-screen { margin-top: 100vw }
```

```css
.mt-dvw { margin-top: 100vw }
```

```css
.mt-dvh { margin-top: 100vh }
```

```css
.mt-lvw { margin-top: 100lvw }
```

```css
.mt-lvh { margin-top: 100lvh }
```

```css
.mt-svw { margin-top: 100svw }
```

```css
.mt-svh { margin-top: 100svh }
```

```css
.mt-min { margin-top: min-content }
```

```css
.mt-max { margin-top: max-content }
```

```css
.mt-fit { margin-top: fit-content }
```

```css
.mt-3xs { margin-top: 256px }
```

```css
.mt-2xs { margin-top: 288px }
```

```css
.mt-xs { margin-top: 320px }
```

```css
.mt-sm { margin-top: 384px }
```

```css
.mt-md { margin-top: 448px }
```

```css
.mt-lg { margin-top: 512px }
```

```css
.mt-xl { margin-top: 576px }
```

```css
.mt-2xl { margin-top: 672px }
```

```css
.mt-3xl { margin-top: 768px }
```

```css
.mt-4xl { margin-top: 896px }
```

```css
.mt-5xl { margin-top: 1024px }
```

```css
.mt-6xl { margin-top: 1152px }
```

```css
.mt-7xl { margin-top: 1280px }
```

```css
.mt-<number> { margin-top: calc(<number> * 4px) }
```

```css
.-mt-<number> { margin-top: calc(-<number> * 4px) }
```

```css
.mt-[<value>] { margin-top: <value> }
```

```css
.mt-(<custom-property>) { margin-top: var(<custom-property>) }
```

```css
.mr-auto { margin-right: auto }
```

```css
.mr-px { margin-right: 1px }
```

```css
.-mr-px { margin-right: -1px }
```

```css
.mr-full { margin-right: 100% }
```

```css
.-mr-full { margin-right: -100% }
```

```css
.mr-screen { margin-right: 100vw }
```

```css
.mr-dvw { margin-right: 100vw }
```

```css
.mr-dvh { margin-right: 100vh }
```

```css
.mr-lvw { margin-right: 100lvw }
```

```css
.mr-lvh { margin-right: 100lvh }
```

```css
.mr-svw { margin-right: 100svw }
```

```css
.mr-svh { margin-right: 100svh }
```

```css
.mr-min { margin-right: min-content }
```

```css
.mr-max { margin-right: max-content }
```

```css
.mr-fit { margin-right: fit-content }
```

```css
.mr-3xs { margin-right: 256px }
```

```css
.mr-2xs { margin-right: 288px }
```

```css
.mr-xs { margin-right: 320px }
```

```css
.mr-sm { margin-right: 384px }
```

```css
.mr-md { margin-right: 448px }
```

```css
.mr-lg { margin-right: 512px }
```

```css
.mr-xl { margin-right: 576px }
```

```css
.mr-2xl { margin-right: 672px }
```

```css
.mr-3xl { margin-right: 768px }
```

```css
.mr-4xl { margin-right: 896px }
```

```css
.mr-5xl { margin-right: 1024px }
```

```css
.mr-6xl { margin-right: 1152px }
```

```css
.mr-7xl { margin-right: 1280px }
```

```css
.mr-<number> { margin-right: calc(<number> * 4px) }
```

```css
.-mr-<number> { margin-right: calc(-<number> * 4px) }
```

```css
.mr-[<value>] { margin-right: <value> }
```

```css
.mr-(<custom-property>) { margin-right: var(<custom-property>) }
```

```css
.mb-auto { margin-bottom: auto }
```

```css
.mb-px { margin-bottom: 1px }
```

```css
.-mb-px { margin-bottom: -1px }
```

```css
.mb-full { margin-bottom: 100% }
```

```css
.-mb-full { margin-bottom: -100% }
```

```css
.mb-screen { margin-bottom: 100vw }
```

```css
.mb-dvw { margin-bottom: 100vw }
```

```css
.mb-dvh { margin-bottom: 100vh }
```

```css
.mb-lvw { margin-bottom: 100lvw }
```

```css
.mb-lvh { margin-bottom: 100lvh }
```

```css
.mb-svw { margin-bottom: 100svw }
```

```css
.mb-svh { margin-bottom: 100svh }
```

```css
.mb-min { margin-bottom: min-content }
```

```css
.mb-max { margin-bottom: max-content }
```

```css
.mb-fit { margin-bottom: fit-content }
```

```css
.mb-3xs { margin-bottom: 256px }
```

```css
.mb-2xs { margin-bottom: 288px }
```

```css
.mb-xs { margin-bottom: 320px }
```

```css
.mb-sm { margin-bottom: 384px }
```

```css
.mb-md { margin-bottom: 448px }
```

```css
.mb-lg { margin-bottom: 512px }
```

```css
.mb-xl { margin-bottom: 576px }
```

```css
.mb-2xl { margin-bottom: 672px }
```

```css
.mb-3xl { margin-bottom: 768px }
```

```css
.mb-4xl { margin-bottom: 896px }
```

```css
.mb-5xl { margin-bottom: 1024px }
```

```css
.mb-6xl { margin-bottom: 1152px }
```

```css
.mb-7xl { margin-bottom: 1280px }
```

```css
.mb-<number> { margin-bottom: calc(<number> * 4px) }
```

```css
.-mb-<number> { margin-bottom: calc(-<number> * 4px) }
```

```css
.mb-[<value>] { margin-bottom: <value> }
```

```css
.mb-(<custom-property>) { margin-bottom: var(<custom-property>) }
```

```css
.ml-auto { margin-left: auto }
```

```css
.ml-px { margin-left: 1px }
```

```css
.-ml-px { margin-left: -1px }
```

```css
.ml-full { margin-left: 100% }
```

```css
.-ml-full { margin-left: -100% }
```

```css
.ml-screen { margin-left: 100vw }
```

```css
.ml-dvw { margin-left: 100vw }
```

```css
.ml-dvh { margin-left: 100vh }
```

```css
.ml-lvw { margin-left: 100lvw }
```

```css
.ml-lvh { margin-left: 100lvh }
```

```css
.ml-svw { margin-left: 100svw }
```

```css
.ml-svh { margin-left: 100svh }
```

```css
.ml-min { margin-left: min-content }
```

```css
.ml-max { margin-left: max-content }
```

```css
.ml-fit { margin-left: fit-content }
```

```css
.ml-3xs { margin-left: 256px }
```

```css
.ml-2xs { margin-left: 288px }
```

```css
.ml-xs { margin-left: 320px }
```

```css
.ml-sm { margin-left: 384px }
```

```css
.ml-md { margin-left: 448px }
```

```css
.ml-lg { margin-left: 512px }
```

```css
.ml-xl { margin-left: 576px }
```

```css
.ml-2xl { margin-left: 672px }
```

```css
.ml-3xl { margin-left: 768px }
```

```css
.ml-4xl { margin-left: 896px }
```

```css
.ml-5xl { margin-left: 1024px }
```

```css
.ml-6xl { margin-left: 1152px }
```

```css
.ml-7xl { margin-left: 1280px }
```

```css
.ml-<number> { margin-left: calc(<number> * 4px) }
```

```css
.-ml-<number> { margin-left: calc(-<number> * 4px) }
```

```css
.ml-[<value>] { margin-left: <value> }
```

```css
.ml-(<custom-property>) { margin-left: var(<custom-property>) }
```

```css
.space-x-auto  > :not(:last-child) { margin-inline-end: auto }
```

```css
.space-x-px  > :not(:last-child) { margin-inline-end: 1px }
```

```css
.-space-x-px  > :not(:last-child) { margin-inline-end: -1px }
```

```css
.space-x-full  > :not(:last-child) { margin-inline-end: 100% }
```

```css
.-space-x-full  > :not(:last-child) { margin-inline-end: -100% }
```

```css
.space-x-screen  > :not(:last-child) { margin-inline-end: 100vw }
```

```css
.space-x-dvw  > :not(:last-child) { margin-inline-end: 100vw }
```

```css
.space-x-dvh  > :not(:last-child) { margin-inline-end: 100vh }
```

```css
.space-x-lvw  > :not(:last-child) { margin-inline-end: 100lvw }
```

```css
.space-x-lvh  > :not(:last-child) { margin-inline-end: 100lvh }
```

```css
.space-x-svw  > :not(:last-child) { margin-inline-end: 100svw }
```

```css
.space-x-svh  > :not(:last-child) { margin-inline-end: 100svh }
```

```css
.space-x-min  > :not(:last-child) { margin-inline-end: min-content }
```

```css
.space-x-max  > :not(:last-child) { margin-inline-end: max-content }
```

```css
.space-x-fit  > :not(:last-child) { margin-inline-end: fit-content }
```

```css
.space-x-3xs  > :not(:last-child) { margin-inline-end: 256px }
```

```css
.space-x-2xs  > :not(:last-child) { margin-inline-end: 288px }
```

```css
.space-x-xs  > :not(:last-child) { margin-inline-end: 320px }
```

```css
.space-x-sm  > :not(:last-child) { margin-inline-end: 384px }
```

```css
.space-x-md  > :not(:last-child) { margin-inline-end: 448px }
```

```css
.space-x-lg  > :not(:last-child) { margin-inline-end: 512px }
```

```css
.space-x-xl  > :not(:last-child) { margin-inline-end: 576px }
```

```css
.space-x-2xl  > :not(:last-child) { margin-inline-end: 672px }
```

```css
.space-x-3xl  > :not(:last-child) { margin-inline-end: 768px }
```

```css
.space-x-4xl  > :not(:last-child) { margin-inline-end: 896px }
```

```css
.space-x-5xl  > :not(:last-child) { margin-inline-end: 1024px }
```

```css
.space-x-6xl  > :not(:last-child) { margin-inline-end: 1152px }
```

```css
.space-x-7xl  > :not(:last-child) { margin-inline-end: 1280px }
```

```css
.space-x-<number>  > :not(:last-child) { margin-inline-end: calc(<number> * 4px) }
```

```css
.-space-x-<number>  > :not(:last-child) { margin-inline-end: calc(-<number> * 4px) }
```

```css
.space-x-[<value>]  > :not(:last-child) { margin-inline-end: <value> }
```

```css
.space-x-(<custom-property>)  > :not(:last-child) { margin-inline-end: var(<custom-property>) }
```

```css
.space-y-auto  > :not(:last-child) { margin-bottom: auto }
```

```css
.space-y-px  > :not(:last-child) { margin-bottom: 1px }
```

```css
.-space-y-px  > :not(:last-child) { margin-bottom: -1px }
```

```css
.space-y-full  > :not(:last-child) { margin-bottom: 100% }
```

```css
.-space-y-full  > :not(:last-child) { margin-bottom: -100% }
```

```css
.space-y-screen  > :not(:last-child) { margin-bottom: 100vw }
```

```css
.space-y-dvw  > :not(:last-child) { margin-bottom: 100vw }
```

```css
.space-y-dvh  > :not(:last-child) { margin-bottom: 100vh }
```

```css
.space-y-lvw  > :not(:last-child) { margin-bottom: 100lvw }
```

```css
.space-y-lvh  > :not(:last-child) { margin-bottom: 100lvh }
```

```css
.space-y-svw  > :not(:last-child) { margin-bottom: 100svw }
```

```css
.space-y-svh  > :not(:last-child) { margin-bottom: 100svh }
```

```css
.space-y-min  > :not(:last-child) { margin-bottom: min-content }
```

```css
.space-y-max  > :not(:last-child) { margin-bottom: max-content }
```

```css
.space-y-fit  > :not(:last-child) { margin-bottom: fit-content }
```

```css
.space-y-3xs  > :not(:last-child) { margin-bottom: 256px }
```

```css
.space-y-2xs  > :not(:last-child) { margin-bottom: 288px }
```

```css
.space-y-xs  > :not(:last-child) { margin-bottom: 320px }
```

```css
.space-y-sm  > :not(:last-child) { margin-bottom: 384px }
```

```css
.space-y-md  > :not(:last-child) { margin-bottom: 448px }
```

```css
.space-y-lg  > :not(:last-child) { margin-bottom: 512px }
```

```css
.space-y-xl  > :not(:last-child) { margin-bottom: 576px }
```

```css
.space-y-2xl  > :not(:last-child) { margin-bottom: 672px }
```

```css
.space-y-3xl  > :not(:last-child) { margin-bottom: 768px }
```

```css
.space-y-4xl  > :not(:last-child) { margin-bottom: 896px }
```

```css
.space-y-5xl  > :not(:last-child) { margin-bottom: 1024px }
```

```css
.space-y-6xl  > :not(:last-child) { margin-bottom: 1152px }
```

```css
.space-y-7xl  > :not(:last-child) { margin-bottom: 1280px }
```

```css
.space-y-<number>  > :not(:last-child) { margin-bottom: calc(<number> * 4px) }
```

```css
.-space-y-<number>  > :not(:last-child) { margin-bottom: calc(-<number> * 4px) }
```

```css
.space-y-[<value>]  > :not(:last-child) { margin-bottom: <value> }
```

```css
.space-y-(<custom-property>)  > :not(:last-child) { margin-bottom: var(<custom-property>) }
```

## Sizing

### width

```css
.w-auto { width: auto }
```

```css
.w-px { width: 1px }
```

```css
.-w-px { width: -1px }
```

```css
.w-full { width: 100% }
```

```css
.-w-full { width: -100% }
```

```css
.w-screen { width: 100vw }
```

```css
.w-dvw { width: 100vw }
```

```css
.w-dvh { width: 100vh }
```

```css
.w-lvw { width: 100lvw }
```

```css
.w-lvh { width: 100lvh }
```

```css
.w-svw { width: 100svw }
```

```css
.w-svh { width: 100svh }
```

```css
.w-min { width: min-content }
```

```css
.w-max { width: max-content }
```

```css
.w-fit { width: fit-content }
```

```css
.w-3xs { width: 256px }
```

```css
.w-2xs { width: 288px }
```

```css
.w-xs { width: 320px }
```

```css
.w-sm { width: 384px }
```

```css
.w-md { width: 448px }
```

```css
.w-lg { width: 512px }
```

```css
.w-xl { width: 576px }
```

```css
.w-2xl { width: 672px }
```

```css
.w-3xl { width: 768px }
```

```css
.w-4xl { width: 896px }
```

```css
.w-5xl { width: 1024px }
```

```css
.w-6xl { width: 1152px }
```

```css
.w-7xl { width: 1280px }
```

```css
.w-<number> { width: calc(<number> * 4px) }
```

```css
.-w-<number> { width: calc(-<number> * 4px) }
```

```css
.w-<fraction> { width: calc(<fraction> * 100%) }
```

```css
.w-[<value>] { width: <value> }
```

```css
.w-(<custom-property>) { width: var(<custom-property>) }
```

### min-width

```css
.min-w-auto { min-width: auto }
```

```css
.min-w-px { min-width: 1px }
```

```css
.-min-w-px { min-width: -1px }
```

```css
.min-w-full { min-width: 100% }
```

```css
.-min-w-full { min-width: -100% }
```

```css
.min-w-screen { min-width: 100vw }
```

```css
.min-w-dvw { min-width: 100vw }
```

```css
.min-w-dvh { min-width: 100vh }
```

```css
.min-w-lvw { min-width: 100lvw }
```

```css
.min-w-lvh { min-width: 100lvh }
```

```css
.min-w-svw { min-width: 100svw }
```

```css
.min-w-svh { min-width: 100svh }
```

```css
.min-w-min { min-width: min-content }
```

```css
.min-w-max { min-width: max-content }
```

```css
.min-w-fit { min-width: fit-content }
```

```css
.min-w-3xs { min-width: 256px }
```

```css
.min-w-2xs { min-width: 288px }
```

```css
.min-w-xs { min-width: 320px }
```

```css
.min-w-sm { min-width: 384px }
```

```css
.min-w-md { min-width: 448px }
```

```css
.min-w-lg { min-width: 512px }
```

```css
.min-w-xl { min-width: 576px }
```

```css
.min-w-2xl { min-width: 672px }
```

```css
.min-w-3xl { min-width: 768px }
```

```css
.min-w-4xl { min-width: 896px }
```

```css
.min-w-5xl { min-width: 1024px }
```

```css
.min-w-6xl { min-width: 1152px }
```

```css
.min-w-7xl { min-width: 1280px }
```

```css
.min-w-<number> { min-width: calc(<number> * 4px) }
```

```css
.-min-w-<number> { min-width: calc(-<number> * 4px) }
```

```css
.min-w-<fraction> { min-width: calc(<fraction> * 100%) }
```

```css
.min-w-[<value>] { min-width: <value> }
```

```css
.min-w-(<custom-property>) { min-width: var(<custom-property>) }
```

### max-width

```css
.max-w-auto { max-width: auto }
```

```css
.max-w-px { max-width: 1px }
```

```css
.-max-w-px { max-width: -1px }
```

```css
.max-w-full { max-width: 100% }
```

```css
.-max-w-full { max-width: -100% }
```

```css
.max-w-screen { max-width: 100vw }
```

```css
.max-w-dvw { max-width: 100vw }
```

```css
.max-w-dvh { max-width: 100vh }
```

```css
.max-w-lvw { max-width: 100lvw }
```

```css
.max-w-lvh { max-width: 100lvh }
```

```css
.max-w-svw { max-width: 100svw }
```

```css
.max-w-svh { max-width: 100svh }
```

```css
.max-w-min { max-width: min-content }
```

```css
.max-w-max { max-width: max-content }
```

```css
.max-w-fit { max-width: fit-content }
```

```css
.max-w-3xs { max-width: 256px }
```

```css
.max-w-2xs { max-width: 288px }
```

```css
.max-w-xs { max-width: 320px }
```

```css
.max-w-sm { max-width: 384px }
```

```css
.max-w-md { max-width: 448px }
```

```css
.max-w-lg { max-width: 512px }
```

```css
.max-w-xl { max-width: 576px }
```

```css
.max-w-2xl { max-width: 672px }
```

```css
.max-w-3xl { max-width: 768px }
```

```css
.max-w-4xl { max-width: 896px }
```

```css
.max-w-5xl { max-width: 1024px }
```

```css
.max-w-6xl { max-width: 1152px }
```

```css
.max-w-7xl { max-width: 1280px }
```

```css
.max-w-<number> { max-width: calc(<number> * 4px) }
```

```css
.-max-w-<number> { max-width: calc(-<number> * 4px) }
```

```css
.max-w-<fraction> { max-width: calc(<fraction> * 100%) }
```

```css
.max-w-[<value>] { max-width: <value> }
```

```css
.max-w-(<custom-property>) { max-width: var(<custom-property>) }
```

### height

```css
.h-auto { height: auto }
```

```css
.h-px { height: 1px }
```

```css
.-h-px { height: -1px }
```

```css
.h-full { height: 100% }
```

```css
.-h-full { height: -100% }
```

```css
.h-screen { height: 100vw }
```

```css
.h-dvw { height: 100vw }
```

```css
.h-dvh { height: 100vh }
```

```css
.h-lvw { height: 100lvw }
```

```css
.h-lvh { height: 100lvh }
```

```css
.h-svw { height: 100svw }
```

```css
.h-svh { height: 100svh }
```

```css
.h-min { height: min-content }
```

```css
.h-max { height: max-content }
```

```css
.h-fit { height: fit-content }
```

```css
.h-3xs { height: 256px }
```

```css
.h-2xs { height: 288px }
```

```css
.h-xs { height: 320px }
```

```css
.h-sm { height: 384px }
```

```css
.h-md { height: 448px }
```

```css
.h-lg { height: 512px }
```

```css
.h-xl { height: 576px }
```

```css
.h-2xl { height: 672px }
```

```css
.h-3xl { height: 768px }
```

```css
.h-4xl { height: 896px }
```

```css
.h-5xl { height: 1024px }
```

```css
.h-6xl { height: 1152px }
```

```css
.h-7xl { height: 1280px }
```

```css
.h-<number> { height: calc(<number> * 4px) }
```

```css
.-h-<number> { height: calc(-<number> * 4px) }
```

```css
.h-<fraction> { height: calc(<fraction> * 100%) }
```

```css
.h-[<value>] { height: <value> }
```

```css
.h-(<custom-property>) { height: var(<custom-property>) }
```

### min-height

```css
.min-h-auto { min-height: auto }
```

```css
.min-h-px { min-height: 1px }
```

```css
.-min-h-px { min-height: -1px }
```

```css
.min-h-full { min-height: 100% }
```

```css
.-min-h-full { min-height: -100% }
```

```css
.min-h-screen { min-height: 100vw }
```

```css
.min-h-dvw { min-height: 100vw }
```

```css
.min-h-dvh { min-height: 100vh }
```

```css
.min-h-lvw { min-height: 100lvw }
```

```css
.min-h-lvh { min-height: 100lvh }
```

```css
.min-h-svw { min-height: 100svw }
```

```css
.min-h-svh { min-height: 100svh }
```

```css
.min-h-min { min-height: min-content }
```

```css
.min-h-max { min-height: max-content }
```

```css
.min-h-fit { min-height: fit-content }
```

```css
.min-h-3xs { min-height: 256px }
```

```css
.min-h-2xs { min-height: 288px }
```

```css
.min-h-xs { min-height: 320px }
```

```css
.min-h-sm { min-height: 384px }
```

```css
.min-h-md { min-height: 448px }
```

```css
.min-h-lg { min-height: 512px }
```

```css
.min-h-xl { min-height: 576px }
```

```css
.min-h-2xl { min-height: 672px }
```

```css
.min-h-3xl { min-height: 768px }
```

```css
.min-h-4xl { min-height: 896px }
```

```css
.min-h-5xl { min-height: 1024px }
```

```css
.min-h-6xl { min-height: 1152px }
```

```css
.min-h-7xl { min-height: 1280px }
```

```css
.min-h-<number> { min-height: calc(<number> * 4px) }
```

```css
.-min-h-<number> { min-height: calc(-<number> * 4px) }
```

```css
.min-h-<fraction> { min-height: calc(<fraction> * 100%) }
```

```css
.min-h-[<value>] { min-height: <value> }
```

```css
.min-h-(<custom-property>) { min-height: var(<custom-property>) }
```

### max-height

```css
.max-h-auto { max-height: auto }
```

```css
.max-h-px { max-height: 1px }
```

```css
.-max-h-px { max-height: -1px }
```

```css
.max-h-full { max-height: 100% }
```

```css
.-max-h-full { max-height: -100% }
```

```css
.max-h-screen { max-height: 100vw }
```

```css
.max-h-dvw { max-height: 100vw }
```

```css
.max-h-dvh { max-height: 100vh }
```

```css
.max-h-lvw { max-height: 100lvw }
```

```css
.max-h-lvh { max-height: 100lvh }
```

```css
.max-h-svw { max-height: 100svw }
```

```css
.max-h-svh { max-height: 100svh }
```

```css
.max-h-min { max-height: min-content }
```

```css
.max-h-max { max-height: max-content }
```

```css
.max-h-fit { max-height: fit-content }
```

```css
.max-h-3xs { max-height: 256px }
```

```css
.max-h-2xs { max-height: 288px }
```

```css
.max-h-xs { max-height: 320px }
```

```css
.max-h-sm { max-height: 384px }
```

```css
.max-h-md { max-height: 448px }
```

```css
.max-h-lg { max-height: 512px }
```

```css
.max-h-xl { max-height: 576px }
```

```css
.max-h-2xl { max-height: 672px }
```

```css
.max-h-3xl { max-height: 768px }
```

```css
.max-h-4xl { max-height: 896px }
```

```css
.max-h-5xl { max-height: 1024px }
```

```css
.max-h-6xl { max-height: 1152px }
```

```css
.max-h-7xl { max-height: 1280px }
```

```css
.max-h-<number> { max-height: calc(<number> * 4px) }
```

```css
.-max-h-<number> { max-height: calc(-<number> * 4px) }
```

```css
.max-h-<fraction> { max-height: calc(<fraction> * 100%) }
```

```css
.max-h-[<value>] { max-height: <value> }
```

```css
.max-h-(<custom-property>) { max-height: var(<custom-property>) }
```

## Typography

### font-family

```css
.font-sans { font-family: var(--font-sans) }
```

```css
.font-serif { font-family: var(--font-serif) }
```

```css
.font-mono { font-family: var(--font-mono) }
```

```css
.font-[<value>] { font-family: <value> }
```

```css
.font-(<custom-property>) { font-family: var(<custom-property>) }
```

### font-size

```css
.text-xs {
  font-size: var(--text-xs);
  line-height: var(--text-xs--line-height);
}
```

```css
.text-sm {
  font-size: var(--text-sm);
  line-height: var(--text-sm--line-height);
}
```

```css
.text-base {
  font-size: var(--text-base);
  line-height: var(--text-base--line-height);
}
```

```css
.text-lg {
  font-size: var(--text-lg);
  line-height: var(--text-lg--line-height);
}
```

```css
.text-xl {
  font-size: var(--text-xl);
  line-height: var(--text-xl--line-height);
}
```

```css
.text-2xl {
  font-size: var(--text-2xl);
  line-height: var(--text-2xl--line-height);
}
```

```css
.text-3xl {
  font-size: var(--text-3xl);
  line-height: var(--text-3xl--line-height);
}
```

```css
.text-4xl {
  font-size: var(--text-4xl);
  line-height: var(--text-4xl--line-height);
}
```

```css
.text-5xl {
  font-size: var(--text-5xl);
  line-height: var(--text-5xl--line-height);
}
```

```css
.text-6xl {
  font-size: var(--text-6xl);
  line-height: var(--text-6xl--line-height);
}
```

```css
.text-7xl {
  font-size: var(--text-7xl);
  line-height: var(--text-7xl--line-height);
}
```

```css
.text-8xl {
  font-size: var(--text-8xl);
  line-height: var(--text-8xl--line-height);
}
```

```css
.text-9xl {
  font-size: var(--text-9xl);
  line-height: var(--text-9xl--line-height);
}
```

```css
.text-[<value>] { font-size: <value> }
```

```css
.text-(<custom-property>) { font-size: var(<custom-property>) }
```

### font-smoothing

```css
.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

```css
.subpixel-antialiased {
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
```

### font-style

```css
.italic { font-style: italic }
```

```css
.not-italic { font-style: normal }
```

### font-weight

```css
.font-thin { font-weight: 100 }
```

```css
.font-extralight { font-weight: 200 }
```

```css
.font-light { font-weight: 300 }
```

```css
.font-normal { font-weight: 400 }
```

```css
.font-medium { font-weight: 500 }
```

```css
.font-semibold { font-weight: 600 }
```

```css
.font-bold { font-weight: 700 }
```

```css
.font-extrabold { font-weight: 800 }
```

```css
.font-black { font-weight: 900 }
```

### font-stretch

```css
.font-stretch-ultra-condensed { font-stretch: ultra-condensed }
```

```css
.font-stretch-extra-condensed { font-stretch: extra-condensed }
```

```css
.font-stretch-condensed { font-stretch: condensed }
```

```css
.font-stretch-semi-condensed { font-stretch: semi-condensed }
```

```css
.font-stretch-normal { font-stretch: normal }
```

```css
.font-stretch-semi-expanded { font-stretch: semi-expanded }
```

```css
.font-stretch-expanded { font-stretch: expanded }
```

```css
.font-stretch-extra-expanded { font-stretch: extra-expanded }
```

```css
.font-stretch-ultra-expanded { font-stretch: ultra-expanded }
```

### font-variant-numeric

```css
.normal-nums { font-variant-numeric: normal }
```

```css
.ordinal { font-variant-numeric: ordinal }
```

```css
.slashed-zero { font-variant-numeric: slashed-zero }
```

```css
.lining-nums { font-variant-numeric: lining-nums }
```

```css
.oldstyle-nums { font-variant-numeric: oldstyle-nums }
```

```css
.proportional-nums { font-variant-numeric: proportional-nums }
```

```css
.tabular-nums { font-variant-numeric: tabular-nums }
```

```css
.diagonal-fractions { font-variant-numeric: diagonal-fractions }
```

```css
.stacked-fractions { font-variant-numeric: stacked-fractions }
```

### letter-spacing

```css
.tracking-tighter { letter-spacing: -0.05em }
```

```css
.tracking-tight { letter-spacing: -0.025em }
```

```css
.tracking-normal { letter-spacing: 0px }
```

```css
.tracking-wide { letter-spacing: 0.025em }
```

```css
.tracking-wider { letter-spacing: 0.05em }
```

```css
.tracking-widest { letter-spacing: 0.1em }
```

```css
.tracking-[<value>] { letter-spacing: <value> }
```

```css
.tracking-(<custom-property>) { letter-spacing: var(<custom-property>) }
```

### line-clamp

```css
.line-clamp-none {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: none;
}
```

```css
.line-clamp-[<value>] {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: <value>;
}
```

```css
.line-clamp-(<custom-property>) {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(<custom-property>);
}
```

### line-height

```css
.leading-none { line-height: 1 }
```

```css
.leading-<number> { line-height: calc(<number> * 4px) }
```

```css
.-leading-<number> { line-height: calc(-<number> * 4px) }
```

```css
.leading-[<value>] { line-height: <value> }
```

```css
.leading-(<custom-property>) { line-height: var(<custom-property>) }
```

### list-style-image

```css
.list-image-none { list-style-image: none }
```

```css
.list-image-[<value>] { list-style-image: <value> }
```

```css
.list-image-(<custom-property>) { list-style-image: var(<custom-property>) }
```

### list-style-position

```css
.list-inside { list-style-position: inside }
```

```css
.list-outside { list-style-position: outside }
```

### list-style-type

```css
.list-disc { list-style-type: disc }
```

```css
.list-decimal { list-style-type: decimal }
```

```css
.list-none { list-style-type: none }
```

```css
.list-[<value>] { list-style-type: <value> }
```

```css
.list-(<custom-property>) { list-style-type: var(<custom-property>) }
```

### text-align

```css
.text-left { text-align: left }
```

```css
.text-center { text-align: center }
```

```css
.text-right { text-align: right }
```

```css
.text-justify { text-align: justify }
```

```css
.text-start { text-align: start }
```

```css
.text-end { text-align: end }
```

### color

```css
.text-<color> { color: oklch(...) }
```

### text-decoration-line

```css
.underline { text-decoration-line: underline }
```

```css
.overline { text-decoration-line: overline }
```

```css
.line-through { text-decoration-line: line-through }
```

```css
.no-underline { text-decoration-line: none }
```

### text-decoration-color

```css
.decoration-<color> { text-decoration-color: oklch(...) }
```

### text-decoration-style

```css
.decoration-solid { text-decoration-style: solid }
```

```css
.decoration-double { text-decoration-style: double }
```

```css
.decoration-dotted { text-decoration-style: dotted }
```

```css
.decoration-dashed { text-decoration-style: dashed }
```

```css
.decoration-wavy { text-decoration-style: wavy }
```

### text-decoration-thickness

```css
.decoration-auto { text-decoration-thickness: auto }
```

```css
.decoration-from-font { text-decoration-thickness: from-font }
```

```css
.decoration-<number> { text-decoration-thickness: <number>px }
```

```css
.-decoration-<number> { text-decoration-thickness: -<number>px }
```

```css
.decoration-[<value>] { text-decoration-thickness: <value> }
```

```css
.decoration-(<custom-property>) { text-decoration-thickness: var(<custom-property>) }
```

### text-underline-offset

```css
.underline-offset-auto { text-underline-offset: auto }
```

```css
.underline-offset-<number> { text-underline-offset: <number>px }
```

```css
.-underline-offset-<number> { text-underline-offset: -<number>px }
```

```css
.underline-offset-[<value>] { text-underline-offset: <value> }
```

```css
.underline-offset-(<custom-property>) { text-underline-offset: var(<custom-property>) }
```

### text-transform

```css
.uppercase { text-transform: uppercase }
```

```css
.lowercase { text-transform: lowercase }
```

```css
.capitalize { text-transform: capitalize }
```

```css
.normal-case { text-transform: none }
```

### text-overflow

```css
.overflow-clip { text-overflow: clip }
```

```css
.truncate {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
```

```css
.overflow-ellipsis { text-overflow: ellipsis }
```

### text-wrap

```css
.text-wrap { text-wrap: wrap }
```

```css
.text-nowrap { text-wrap: nowrap }
```

```css
.text-balance { text-wrap: balance }
```

```css
.text-pretty { text-wrap: pretty }
```

### text-indent

```css
.indent-auto { text-indent: auto }
```

```css
.indent-px { text-indent: 1px }
```

```css
.-indent-px { text-indent: -1px }
```

```css
.indent-full { text-indent: 100% }
```

```css
.-indent-full { text-indent: -100% }
```

```css
.indent-screen { text-indent: 100vw }
```

```css
.indent-dvw { text-indent: 100vw }
```

```css
.indent-dvh { text-indent: 100vh }
```

```css
.indent-lvw { text-indent: 100lvw }
```

```css
.indent-lvh { text-indent: 100lvh }
```

```css
.indent-svw { text-indent: 100svw }
```

```css
.indent-svh { text-indent: 100svh }
```

```css
.indent-min { text-indent: min-content }
```

```css
.indent-max { text-indent: max-content }
```

```css
.indent-fit { text-indent: fit-content }
```

```css
.indent-3xs { text-indent: 256px }
```

```css
.indent-2xs { text-indent: 288px }
```

```css
.indent-xs { text-indent: 320px }
```

```css
.indent-sm { text-indent: 384px }
```

```css
.indent-md { text-indent: 448px }
```

```css
.indent-lg { text-indent: 512px }
```

```css
.indent-xl { text-indent: 576px }
```

```css
.indent-2xl { text-indent: 672px }
```

```css
.indent-3xl { text-indent: 768px }
```

```css
.indent-4xl { text-indent: 896px }
```

```css
.indent-5xl { text-indent: 1024px }
```

```css
.indent-6xl { text-indent: 1152px }
```

```css
.indent-7xl { text-indent: 1280px }
```

```css
.indent-<number> { text-indent: calc(<number> * 4px) }
```

```css
.-indent-<number> { text-indent: calc(-<number> * 4px) }
```

```css
.indent-[<value>] { text-indent: <value> }
```

```css
.indent-(<custom-property>) { text-indent: var(<custom-property>) }
```

### vertical-align

```css
.align-baseline { vertical-align: baseline }
```

```css
.align-top { vertical-align: top }
```

```css
.align-middle { vertical-align: middle }
```

```css
.align-bottom { vertical-align: bottom }
```

```css
.align-text-top { vertical-align: text-top }
```

```css
.align-text-bottom { vertical-align: text-bottom }
```

```css
.align-sub { vertical-align: sub }
```

```css
.align-super { vertical-align: super }
```

```css
.align-[<value>] { vertical-align: <value> }
```

```css
.align-(<custom-property>) { vertical-align: var(<custom-property>) }
```

### white-space

```css
.whitespace-normal { white-space: normal }
```

```css
.whitespace-nowrap { white-space: nowrap }
```

```css
.whitespace-pre { white-space: pre }
```

```css
.whitespace-pre-line { white-space: pre-line }
```

```css
.whitespace-pre-wrap { white-space: pre-wrap }
```

```css
.whitespace-break-spaces { white-space: break-spaces }
```

### word-break

```css
.break-normal { word-break: normal }
```

```css
.break-all { word-break: break-all }
```

```css
.break-keep { word-break: keep-all }
```

### overflow-wrap

```css
.wrap-break-word { overflow-wrap: break-word }
```

```css
.wrap-anywhere { overflow-wrap: anywhere }
```

```css
.wrap-normal { overflow-wrap: normal }
```

### hyphens

```css
.hyphens-none { hyphens: none }
```

```css
.hyphens-manual { hyphens: manual }
```

```css
.hyphens-auto { hyphens: auto }
```

### content

```css
.content-none { content: none }
```

```css
.content-[<value>] { content: <value> }
```

```css
.content-(<custom-property>) { content: var(<custom-property>) }
```

## Backgrounds

### background-attachment

```css
.bg-fixed { background-attachment: fixed }
```

```css
.bg-local { background-attachment: local }
```

```css
.bg-scroll { background-attachment: scroll }
```

### background-clip

```css
.bg-clip-border { background-clip: border-box }
```

```css
.bg-clip-padding { background-clip: padding-box }
```

```css
.bg-clip-content { background-clip: content-box }
```

```css
.bg-clip-text { background-clip: text }
```

### background-color

```css
.bg-<color> { background-color: oklch(...) }
```

### background-image

```css
.bg-none { background-image: none }
```

```css
.bg-[<value>] { background-image: <value> }
```

```css
.bg-(<custom-property>) { background-image: var(<custom-property>) }
```

### background-origin

```css
.bg-border-box { background-origin: border-box }
```

```css
.bg-padding-box { background-origin: padding-box }
```

```css
.bg-content-box { background-origin: content-box }
```

### background-position

```css
.bg-top-left { background-position: top left }
```

```css
.bg-top { background-position: top }
```

```css
.bg-top-right { background-position: top right }
```

```css
.bg-left { background-position: left }
```

```css
.bg-center { background-position: center }
```

```css
.bg-right { background-position: right }
```

```css
.bg-bottom-left { background-position: bottom left }
```

```css
.bg-bottom { background-position: bottom }
```

```css
.bg-bottom-right { background-position: bottom right }
```

```css
.bg-position-[<value>] { background-position: <value> }
```

```css
.bg-position-(<custom-property>) { background-position: var(<custom-property>) }
```

### background-repeat

```css
.bg-repeat { background-repeat: repeat }
```

```css
.bg-repeat-x { background-repeat: repeat-x }
```

```css
.bg-repeat-y { background-repeat: repeat-y }
```

```css
.bg-space { background-repeat: space }
```

```css
.bg-round { background-repeat: round }
```

```css
.bg-no-repeat { background-repeat: no-repeat }
```

### background-size

```css
.bg-auto { background-size: auto }
```

```css
.bg-cover { background-size: cover }
```

```css
.bg-contain { background-size: contain }
```

```css
.bg-size-[<value>] { background-size: <value> }
```

```css
.bg-size-(<custom-property>) { background-size: var(<custom-property>) }
```

## Borders

### border-radius

```css
.rounded-xs { border-radius: var(--radius-xs) }
```

```css
.rounded-sm { border-radius: var(--radius-sm) }
```

```css
.rounded-md { border-radius: var(--radius-md) }
```

```css
.rounded-lg { border-radius: var(--radius-lg) }
```

```css
.rounded-xl { border-radius: var(--radius-xl) }
```

```css
.rounded-2xl { border-radius: var(--radius-2xl) }
```

```css
.rounded-3xl { border-radius: var(--radius-3xl) }
```

```css
.rounded-4xl { border-radius: var(--radius-4xl) }
```

```css
.rounded-full { border-radius: var(--radius-full) }
```

```css
.rounded-none { border-radius: var(--radius-none) }
```

```css
.rounded-[<value>] { border-radius: <value> }
```

```css
.rounded-(<custom-property>) { border-radius: var(<custom-property>) }
```

```css
.rounded-tl-xs { border-top-left-radius: var(--radius-xs) }
```

```css
.rounded-tl-sm { border-top-left-radius: var(--radius-sm) }
```

```css
.rounded-tl-md { border-top-left-radius: var(--radius-md) }
```

```css
.rounded-tl-lg { border-top-left-radius: var(--radius-lg) }
```

```css
.rounded-tl-xl { border-top-left-radius: var(--radius-xl) }
```

```css
.rounded-tl-2xl { border-top-left-radius: var(--radius-2xl) }
```

```css
.rounded-tl-3xl { border-top-left-radius: var(--radius-3xl) }
```

```css
.rounded-tl-4xl { border-top-left-radius: var(--radius-4xl) }
```

```css
.rounded-tl-full { border-top-left-radius: var(--radius-full) }
```

```css
.rounded-tl-none { border-top-left-radius: var(--radius-none) }
```

```css
.rounded-tl-[<value>] { border-top-left-radius: <value> }
```

```css
.rounded-tl-(<custom-property>) { border-top-left-radius: var(<custom-property>) }
```

```css
.rounded-tr-xs { border-top-right-radius: var(--radius-xs) }
```

```css
.rounded-tr-sm { border-top-right-radius: var(--radius-sm) }
```

```css
.rounded-tr-md { border-top-right-radius: var(--radius-md) }
```

```css
.rounded-tr-lg { border-top-right-radius: var(--radius-lg) }
```

```css
.rounded-tr-xl { border-top-right-radius: var(--radius-xl) }
```

```css
.rounded-tr-2xl { border-top-right-radius: var(--radius-2xl) }
```

```css
.rounded-tr-3xl { border-top-right-radius: var(--radius-3xl) }
```

```css
.rounded-tr-4xl { border-top-right-radius: var(--radius-4xl) }
```

```css
.rounded-tr-full { border-top-right-radius: var(--radius-full) }
```

```css
.rounded-tr-none { border-top-right-radius: var(--radius-none) }
```

```css
.rounded-tr-[<value>] { border-top-right-radius: <value> }
```

```css
.rounded-tr-(<custom-property>) { border-top-right-radius: var(<custom-property>) }
```

```css
.rounded-br-xs { border-bottom-right-radius: var(--radius-xs) }
```

```css
.rounded-br-sm { border-bottom-right-radius: var(--radius-sm) }
```

```css
.rounded-br-md { border-bottom-right-radius: var(--radius-md) }
```

```css
.rounded-br-lg { border-bottom-right-radius: var(--radius-lg) }
```

```css
.rounded-br-xl { border-bottom-right-radius: var(--radius-xl) }
```

```css
.rounded-br-2xl { border-bottom-right-radius: var(--radius-2xl) }
```

```css
.rounded-br-3xl { border-bottom-right-radius: var(--radius-3xl) }
```

```css
.rounded-br-4xl { border-bottom-right-radius: var(--radius-4xl) }
```

```css
.rounded-br-full { border-bottom-right-radius: var(--radius-full) }
```

```css
.rounded-br-none { border-bottom-right-radius: var(--radius-none) }
```

```css
.rounded-br-[<value>] { border-bottom-right-radius: <value> }
```

```css
.rounded-br-(<custom-property>) { border-bottom-right-radius: var(<custom-property>) }
```

```css
.rounded-bl-xs { border-bottom-left-radius: var(--radius-xs) }
```

```css
.rounded-bl-sm { border-bottom-left-radius: var(--radius-sm) }
```

```css
.rounded-bl-md { border-bottom-left-radius: var(--radius-md) }
```

```css
.rounded-bl-lg { border-bottom-left-radius: var(--radius-lg) }
```

```css
.rounded-bl-xl { border-bottom-left-radius: var(--radius-xl) }
```

```css
.rounded-bl-2xl { border-bottom-left-radius: var(--radius-2xl) }
```

```css
.rounded-bl-3xl { border-bottom-left-radius: var(--radius-3xl) }
```

```css
.rounded-bl-4xl { border-bottom-left-radius: var(--radius-4xl) }
```

```css
.rounded-bl-full { border-bottom-left-radius: var(--radius-full) }
```

```css
.rounded-bl-none { border-bottom-left-radius: var(--radius-none) }
```

```css
.rounded-bl-[<value>] { border-bottom-left-radius: <value> }
```

```css
.rounded-bl-(<custom-property>) { border-bottom-left-radius: var(<custom-property>) }
```

### border-width

```css
.border { border-width: 1px }
```

```css
.border-<number> { border-width: <number>px }
```

```css
.-border-<number> { border-width: -<number>px }
```

```css
.border-[<value>] { border-width: <value> }
```

```css
.border-(<custom-property>) { border-width: var(<custom-property>) }
```

```css
.border-s { border-inline-start-width: 1px }
```

```css
.border-s-<number> { border-inline-start-width: <number>px }
```

```css
.-border-s-<number> { border-inline-start-width: -<number>px }
```

```css
.border-s-[<value>] { border-inline-start-width: <value> }
```

```css
.border-s-(<custom-property>) { border-inline-start-width: var(<custom-property>) }
```

```css
.border-e { border-inline-end-width: 1px }
```

```css
.border-e-<number> { border-inline-end-width: <number>px }
```

```css
.-border-e-<number> { border-inline-end-width: -<number>px }
```

```css
.border-e-[<value>] { border-inline-end-width: <value> }
```

```css
.border-e-(<custom-property>) { border-inline-end-width: var(<custom-property>) }
```

```css
.border-t { border-top-width: 1px }
```

```css
.border-t-<number> { border-top-width: <number>px }
```

```css
.-border-t-<number> { border-top-width: -<number>px }
```

```css
.border-t-[<value>] { border-top-width: <value> }
```

```css
.border-t-(<custom-property>) { border-top-width: var(<custom-property>) }
```

```css
.border-r { border-right-width: 1px }
```

```css
.border-r-<number> { border-right-width: <number>px }
```

```css
.-border-r-<number> { border-right-width: -<number>px }
```

```css
.border-r-[<value>] { border-right-width: <value> }
```

```css
.border-r-(<custom-property>) { border-right-width: var(<custom-property>) }
```

```css
.border-b { border-bottom-width: 1px }
```

```css
.border-b-<number> { border-bottom-width: <number>px }
```

```css
.-border-b-<number> { border-bottom-width: -<number>px }
```

```css
.border-b-[<value>] { border-bottom-width: <value> }
```

```css
.border-b-(<custom-property>) { border-bottom-width: var(<custom-property>) }
```

```css
.border-l { border-left-width: 1px }
```

```css
.border-l-<number> { border-left-width: <number>px }
```

```css
.-border-l-<number> { border-left-width: -<number>px }
```

```css
.border-l-[<value>] { border-left-width: <value> }
```

```css
.border-l-(<custom-property>) { border-left-width: var(<custom-property>) }
```

### border-color

```css
.border-<color> { border-color: oklch(...) }
```

### border-style

```css
.border-solid { border-style: solid }
```

```css
.border-dashed { border-style: dashed }
```

```css
.border-dotted { border-style: dotted }
```

```css
.border-double { border-style: double }
```

```css
.border-hidden { border-style: hidden }
```

```css
.border-none { border-style: none }
```

### outline-width

```css
.outline { outline-width: 1px }
```

```css
.outline-<number> { outline-width: <number>px }
```

```css
.-outline-<number> { outline-width: -<number>px }
```

```css
.outline-[<value>] { outline-width: <value> }
```

```css
.outline-(<custom-property>) { outline-width: var(<custom-property>) }
```

### outline-color

```css
.outline-<color> { outline-color: oklch(...) }
```

### outline-style

```css
.outline-solid { outline-style: solid }
```

```css
.outline-dashed { outline-style: dashed }
```

```css
.outline-dotted { outline-style: dotted }
```

```css
.outline-double { outline-style: double }
```

```css
.outline-none { outline-style: none }
```

### outline-offset

```css
.outline-offset-<number> { outline-offset: <number>px }
```

```css
.-outline-offset-<number> { outline-offset: -<number>px }
```

```css
.outline-offset-[<value>] { outline-offset: <value> }
```

```css
.outline-offset-(<custom-property>) { outline-offset: var(<custom-property>) }
```

## Effects

### box-shadow

```css
.shadow { box-shadow: 0 1px rgb(0 0 0 / 0.05) }
```

```css
.shadow-2xs { box-shadow: 0 1px rgb(0 0 0 / 0.05) }
```

```css
.shadow-xs { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) }
```

```css
.shadow-sm { box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) }
```

```css
.shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) }
```

```css
.shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) }
```

```css
.shadow-xl { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) }
```

```css
.shadow-2xl { box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) }
```

```css
.shadow-none { box-shadow: 0 0 rgb(0 0 0 / 0) }
```

```css
.shadow-[<value>] { box-shadow: <value> }
```

```css
.shadow-(<custom-property>) { box-shadow: var(<custom-property>) }
```

### text-shadow

```css
.text-shadow-2xs { text-shadow: 0px 1px 0px rgb(0 0 0 / 0.15) }
```

```css
.text-shadow-xs { text-shadow: 0px 1px 1px rgb(0 0 0 / 0.2) }
```

```css
.text-shadow-sm { text-shadow: 0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075) }
```

```css
.text-shadow-md { text-shadow: 0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1) }
```

```css
.text-shadow-lg { text-shadow: 0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1) }
```

```css
.text-shadow-none { text-shadow: none }
```

```css
.text-shadow-[<value>] { text-shadow: <value> }
```

```css
.text-shadow-(<custom-property>) { text-shadow: var(<custom-property>) }
```

### opacity

```css
.opacity-<number> { opacity: <number>% }
```

```css
.-opacity-<number> { opacity: -<number>% }
```

```css
.opacity-[<value>] { opacity: <value> }
```

```css
.opacity-(<custom-property>) { opacity: var(<custom-property>) }
```

### mix-blend-mode

```css
.mix-blend-normal { mix-blend-mode: normal }
```

```css
.mix-blend-multiply { mix-blend-mode: multiply }
```

```css
.mix-blend-screen { mix-blend-mode: screen }
```

```css
.mix-blend-overlay { mix-blend-mode: overlay }
```

```css
.mix-blend-darken { mix-blend-mode: darken }
```

```css
.mix-blend-lighten { mix-blend-mode: lighten }
```

```css
.mix-blend-color-dodge { mix-blend-mode: color-dodge }
```

```css
.mix-blend-color-burn { mix-blend-mode: color-burn }
```

```css
.mix-blend-hard-light { mix-blend-mode: hard-light }
```

```css
.mix-blend-soft-light { mix-blend-mode: soft-light }
```

```css
.mix-blend-difference { mix-blend-mode: difference }
```

```css
.mix-blend-exclusion { mix-blend-mode: exclusion }
```

```css
.mix-blend-hue { mix-blend-mode: hue }
```

```css
.mix-blend-saturation { mix-blend-mode: saturation }
```

```css
.mix-blend-color { mix-blend-mode: color }
```

```css
.mix-blend-luminosity { mix-blend-mode: luminosity }
```

### background-blend-mode

```css
.bg-blend-normal { background-blend-mode: normal }
```

```css
.bg-blend-multiply { background-blend-mode: multiply }
```

```css
.bg-blend-screen { background-blend-mode: screen }
```

```css
.bg-blend-overlay { background-blend-mode: overlay }
```

```css
.bg-blend-darken { background-blend-mode: darken }
```

```css
.bg-blend-lighten { background-blend-mode: lighten }
```

```css
.bg-blend-color-dodge { background-blend-mode: color-dodge }
```

```css
.bg-blend-color-burn { background-blend-mode: color-burn }
```

```css
.bg-blend-hard-light { background-blend-mode: hard-light }
```

```css
.bg-blend-soft-light { background-blend-mode: soft-light }
```

```css
.bg-blend-difference { background-blend-mode: difference }
```

```css
.bg-blend-exclusion { background-blend-mode: exclusion }
```

```css
.bg-blend-hue { background-blend-mode: hue }
```

```css
.bg-blend-saturation { background-blend-mode: saturation }
```

```css
.bg-blend-color { background-blend-mode: color }
```

```css
.bg-blend-luminosity { background-blend-mode: luminosity }
```

### mask-clip

```css
.mask-clip-border { mask-clip: border-box }
```

```css
.mask-clip-padding { mask-clip: padding-box }
```

```css
.mask-clip-content { mask-clip: content-box }
```

```css
.mask-clip-fill { mask-clip: fill-box }
```

```css
.mask-clip-stroke { mask-clip: stroke-box }
```

```css
.mask-clip-view { mask-clip: view-box }
```

```css
.mask-no-clip { mask-clip: no-clip }
```

### mask-composite

```css
.mask-add { mask-composite: add }
```

```css
.mask-subtract { mask-composite: subtract }
```

```css
.mask-intersect { mask-composite: intersect }
```

```css
.mask-exclude { mask-composite: exclude }
```

### mask-image

```css
.mask-none { mask-image: none }
```

```css
.mask-[<value>] { mask-image: <value> }
```

```css
.mask-(<custom-property>) { mask-image: var(<custom-property>) }
```

### mask-mode

```css
.mask-alpha { mask-mode: alpha }
```

```css
.mask-luminance { mask-mode: luminance }
```

```css
.mask-match { mask-mode: match-source }
```

### mask-origin

```css
.mask-origin-border { mask-origin: border-box }
```

```css
.mask-origin-padding { mask-origin: padding-box }
```

```css
.mask-origin-content { mask-origin: content-box }
```

```css
.mask-origin-fill { mask-origin: fill-box }
```

```css
.mask-origin-stroke { mask-origin: stroke-box }
```

```css
.mask-origin-view { mask-origin: view-box }
```

### mask-position

```css
.mask-top-left { mask-position: top left }
```

```css
.mask-top { mask-position: top }
```

```css
.mask-top-right { mask-position: top right }
```

```css
.mask-left { mask-position: left }
```

```css
.mask-center { mask-position: center }
```

```css
.mask-right { mask-position: right }
```

```css
.mask-bottom-left { mask-position: bottom left }
```

```css
.mask-bottom { mask-position: bottom }
```

```css
.mask-bottom-right { mask-position: bottom right }
```

```css
.mask-position-[<value>] { mask-position: <value> }
```

```css
.mask-position-(<custom-property>) { mask-position: var(<custom-property>) }
```

### mask-repeat

```css
.mask-repeat { mask-repeat: repeat }
```

```css
.mask-no-repeat { mask-repeat: no-repeat }
```

```css
.mask-repeat-x { mask-repeat: repeat-x }
```

```css
.mask-repeat-y { mask-repeat: repeat-y }
```

```css
.mask-repeat-space { mask-repeat: space }
```

```css
.mask-repeat-round { mask-repeat: round }
```

### mask-size

```css
.mask-auto { mask-size: auto }
```

```css
.mask-cover { mask-size: cover }
```

```css
.mask-contain { mask-size: contain }
```

```css
.mask-size-[<value>] { mask-size: <value> }
```

```css
.mask-size-(<custom-property>) { mask-size: var(<custom-property>) }
```

### mask-type

```css
.mask-type-alpha { mask-type: alpha }
```

```css
.mask-type-luminance { mask-type: luminance }
```

## Filters

### filter

```css
.blur-xs { filter: blur(var(--blur-xs)) }
```

```css
.blur-sm { filter: blur(var(--blur-sm)) }
```

```css
.blur-md { filter: blur(var(--blur-md)) }
```

```css
.blur-lg { filter: blur(var(--blur-lg)) }
```

```css
.blur-xl { filter: blur(var(--blur-xl)) }
```

```css
.blur-2xl { filter: blur(var(--blur-2xl)) }
```

```css
.blur-3xl { filter: blur(var(--blur-3xl)) }
```

```css
.blur-none { filter: none }
```

```css
.blur-[<value>] { filter: <value> }
```

```css
.blur-(<custom-property>) { filter: var(<custom-property>) }
```

```css
.brightness-<number> { filter: brightness(<number>%) }
```

```css
.-brightness-<number> { filter: brightness(-<number>%) }
```

```css
.brightness-[<value>] { filter: <value> }
```

```css
.brightness-(<custom-property>) { filter: var(<custom-property>) }
```

```css
.contrast-<number> { filter: contrast(<number>%) }
```

```css
.-contrast-<number> { filter: contrast(-<number>%) }
```

```css
.contrast-[<value>] { filter: <value> }
```

```css
.contrast-(<custom-property>) { filter: var(<custom-property>) }
```

```css
.drop-shadow-xs { filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05)) }
```

```css
.drop-shadow-sm { filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.15)) }
```

```css
.drop-shadow-md { filter: drop-shadow(0 3px 3px rgb(0 0 0 / 0.12)) }
```

```css
.drop-shadow-lg { filter: drop-shadow(0 4px 4px rgb(0 0 0 / 0.15)) }
```

```css
.drop-shadow-xl { filter: drop-shadow(0 9px 7px rgb(0 0 0 / 0.1)) }
```

```css
.drop-shadow-2xl { filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15)) }
```

```css
.drop-shadow-none { filter: drop-shadow(0 0 rgba(0, 0, 0, 0)) }
```

```css
.drop-shadow-[<value>] { filter: <value> }
```

```css
.drop-shadow-(<custom-property>) { filter: var(<custom-property>) }
```

```css
.grayscale { filter: grayscale(100%) }
```

```css
.grayscale-<number> { filter: grayscale(<number>%) }
```

```css
.-grayscale-<number> { filter: grayscale(-<number>%) }
```

```css
.grayscale-[<value>] { filter: <value> }
```

```css
.grayscale-(<custom-property>) { filter: var(<custom-property>) }
```

```css
.hue-rotate-<number> { filter: hue-rotate(<number>deg) }
```

```css
.-hue-rotate-<number> { filter: hue-rotate(-<number>deg) }
```

```css
.hue-rotate-[<value>] { filter: <value> }
```

```css
.hue-rotate-(<custom-property>) { filter: var(<custom-property>) }
```

```css
.invert { filter: invert(100%) }
```

```css
.invert-<number> { filter: invert(<number>%) }
```

```css
.-invert-<number> { filter: invert(-<number>%) }
```

```css
.invert-[<value>] { filter: <value> }
```

```css
.invert-(<custom-property>) { filter: var(<custom-property>) }
```

```css
.saturate-<number> { filter: saturate(<number>%) }
```

```css
.-saturate-<number> { filter: saturate(-<number>%) }
```

```css
.saturate-[<value>] { filter: <value> }
```

```css
.saturate-(<custom-property>) { filter: var(<custom-property>) }
```

```css
.sepia { filter: sepia(100%) }
```

```css
.sepia-<number> { filter: sepia(<number>%) }
```

```css
.-sepia-<number> { filter: sepia(-<number>%) }
```

```css
.sepia-[<value>] { filter: <value> }
```

```css
.sepia-(<custom-property>) { filter: var(<custom-property>) }
```

```css
.filter-none { filter: none }
```

```css
.filter-[<value>] { filter: <value> }
```

```css
.filter-(<custom-property>) { filter: var(<custom-property>) }
```

### backdrop-filter

```css
.backdrop-blur-xs { backdrop-filter: blur(var(--blur-xs)) }
```

```css
.backdrop-blur-sm { backdrop-filter: blur(var(--blur-sm)) }
```

```css
.backdrop-blur-md { backdrop-filter: blur(var(--blur-md)) }
```

```css
.backdrop-blur-lg { backdrop-filter: blur(var(--blur-lg)) }
```

```css
.backdrop-blur-xl { backdrop-filter: blur(var(--blur-xl)) }
```

```css
.backdrop-blur-2xl { backdrop-filter: blur(var(--blur-2xl)) }
```

```css
.backdrop-blur-3xl { backdrop-filter: blur(var(--blur-3xl)) }
```

```css
.backdrop-blur-none { backdrop-filter: none }
```

```css
.backdrop-blur-[<value>] { backdrop-filter: <value> }
```

```css
.backdrop-blur-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```css
.backdrop-brightness-<number> { backdrop-filter: brightness(<number>%) }
```

```css
.-backdrop-brightness-<number> { backdrop-filter: brightness(-<number>%) }
```

```css
.backdrop-brightness-[<value>] { backdrop-filter: <value> }
```

```css
.backdrop-brightness-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```css
.backdrop-contrast-<number> { backdrop-filter: contrast(<number>%) }
```

```css
.-backdrop-contrast-<number> { backdrop-filter: contrast(-<number>%) }
```

```css
.backdrop-contrast-[<value>] { backdrop-filter: <value> }
```

```css
.backdrop-contrast-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```css
.backdrop-grayscale { backdrop-filter: grayscale(100%) }
```

```css
.backdrop-grayscale-<number> { backdrop-filter: grayscale(<number>%) }
```

```css
.-backdrop-grayscale-<number> { backdrop-filter: grayscale(-<number>%) }
```

```css
.backdrop-grayscale-[<value>] { backdrop-filter: <value> }
```

```css
.backdrop-grayscale-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```css
.backdrop-hue-rotate-<number> { backdrop-filter: hue-rotate(<number>deg) }
```

```css
.-backdrop-hue-rotate-<number> { backdrop-filter: hue-rotate(-<number>deg) }
```

```css
.backdrop-hue-rotate-[<value>] { backdrop-filter: <value> }
```

```css
.backdrop-hue-rotate-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```css
.backdrop-invert { backdrop-filter: invert(100%) }
```

```css
.backdrop-invert-<number> { backdrop-filter: invert(<number>%) }
```

```css
.-backdrop-invert-<number> { backdrop-filter: invert(-<number>%) }
```

```css
.backdrop-invert-[<value>] { backdrop-filter: <value> }
```

```css
.backdrop-invert-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```css
.backdrop-opacity-<number> { backdrop-filter: opacity(<number>%) }
```

```css
.-backdrop-opacity-<number> { backdrop-filter: opacity(-<number>%) }
```

```css
.backdrop-opacity-[<value>] { backdrop-filter: <value> }
```

```css
.backdrop-opacity-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```css
.backdrop-saturate-<number> { backdrop-filter: saturate(<number>%) }
```

```css
.-backdrop-saturate-<number> { backdrop-filter: saturate(-<number>%) }
```

```css
.backdrop-saturate-[<value>] { backdrop-filter: <value> }
```

```css
.backdrop-saturate-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```css
.backdrop-sepia { backdrop-filter: sepia(100%) }
```

```css
.backdrop-sepia-<number> { backdrop-filter: sepia(<number>%) }
```

```css
.-backdrop-sepia-<number> { backdrop-filter: sepia(-<number>%) }
```

```css
.backdrop-sepia-[<value>] { backdrop-filter: <value> }
```

```css
.backdrop-sepia-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```css
.backdrop-filter-none { backdrop-filter: none }
```

```css
.backdrop-filter-[<value>] { backdrop-filter: <value> }
```

```css
.backdrop-filter-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

## Tables

### border-collapse

```css
.border-collapse { border-collapse: collapse }
```

```css
.border-separate { border-collapse: separate }
```

### border-spacing

```css
.border-spacing-<number> { border-spacing: calc(<number> * 4px) }
```

```css
.-border-spacing-<number> { border-spacing: calc(-<number> * 4px) }
```

```css
.border-spacing-[<value>] { border-spacing: <value> }
```

```css
.border-spacing-(<custom-property>) { border-spacing: var(<custom-property>) }
```

```css
.border-spacing-x-<number> { border-spacing: calc(<number> * 4px) 0 }
```

```css
.-border-spacing-x-<number> { border-spacing: calc(-<number> * 4px) 0 }
```

```css
.border-spacing-x-[<value>] { border-spacing: <value> }
```

```css
.border-spacing-x-(<custom-property>) { border-spacing: var(<custom-property>) }
```

```css
.border-spacing-y-<number> { border-spacing: 0 calc(<number> * 4px) }
```

```css
.-border-spacing-y-<number> { border-spacing: 0 calc(-<number> * 4px) }
```

```css
.border-spacing-y-[<value>] { border-spacing: <value> }
```

```css
.border-spacing-y-(<custom-property>) { border-spacing: var(<custom-property>) }
```

### table-layout

```css
.table-auto { table-layout: auto }
```

```css
.table-fixed { table-layout: fixed }
```

### caption-side

```css
.caption-top { caption-side: top }
```

```css
.caption-bottom { caption-side: bottom }
```

## Transitions & Animations

### transition-property

```css
.transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter }
```

```css
.transition-all { transition-property: all }
```

```css
.transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke }
```

```css
.transition-opacity { transition-property: opacity }
```

```css
.transition-shadow { transition-property: box-shadow }
```

```css
.transition-transform { transition-property: transform }
```

```css
.transition-none { transition-property: none }
```

```css
.transition-[<value>] { transition-property: <value> }
```

```css
.transition-(<custom-property>) { transition-property: var(<custom-property>) }
```

### transition-behavior

```css
.transition-normal { transition-behavior: normal }
```

```css
.transition-discrete { transition-behavior: allow-discrete }
```

### transition-duration

```css
.duration-initial { transition-duration: initial }
```

```css
.duration-<number> { transition-duration: <number>ms }
```

```css
.-duration-<number> { transition-duration: -<number>ms }
```

```css
.duration-[<value>] { transition-duration: <value> }
```

```css
.duration-(<custom-property>) { transition-duration: var(<custom-property>) }
```

### transition-timing-function

```css
.ease-linear { transition-timing-function: linear }
```

```css
.ease-in { transition-timing-function: ease-in }
```

```css
.ease-out { transition-timing-function: ease-out }
```

```css
.ease-in-out { transition-timing-function: ease-in-out }
```

```css
.ease-initial { transition-timing-function: initial }
```

```css
.ease-[<value>] { transition-timing-function: <value> }
```

```css
.ease-(<custom-property>) { transition-timing-function: var(<custom-property>) }
```

### animation

```css
.animate-expand { animation: expand 250ms ease-in-out }
```

```css
.animate-toast { animation: toast 250ms ease-in-out }
```

```css
.animate-fade { animation: fade 250ms ease-in-out }
```

```css
.animate-none { animation: none }
```

```css
.animate-[<value>] { animation: <value> }
```

```css
.animate-(<custom-property>) { animation: var(<custom-property>) }
```

## Transforms

### backface-visibility

```css
.backface-visible { backface-visibility: visible }
```

```css
.backface-hidden { backface-visibility: hidden }
```

### perspective

```css
.perspective-dramatic { perspective: 100px }
```

```css
.perspective-near { perspective: 300px }
```

```css
.perspective-normal { perspective: 500px }
```

```css
.perspective-midrange { perspective: 800px }
```

```css
.perspective-distant { perspective: 1200px }
```

```css
.perspective-none { perspective: none }
```

```css
.perspective-[<value>] { perspective: <value> }
```

```css
.perspective-(<custom-property>) { perspective: var(<custom-property>) }
```

### perspective-origin

```css
.perspective-origin-top-left { perspective-origin: top left }
```

```css
.perspective-origin-top { perspective-origin: top }
```

```css
.perspective-origin-top-right { perspective-origin: top right }
```

```css
.perspective-origin-left { perspective-origin: left }
```

```css
.perspective-origin-center { perspective-origin: center }
```

```css
.perspective-origin-right { perspective-origin: right }
```

```css
.perspective-origin-bottom-left { perspective-origin: bottom left }
```

```css
.perspective-origin-bottom { perspective-origin: bottom }
```

```css
.perspective-origin-bottom-right { perspective-origin: bottom right }
```

```css
.perspective-origin-[<value>] { perspective-origin: <value> }
```

```css
.perspective-origin-(<custom-property>) { perspective-origin: var(<custom-property>) }
```

### rotate

```css
.rotate-none { rotate: none }
```

```css
.rotate-<number> { rotate: <number>deg }
```

```css
.-rotate-<number> { rotate: -<number>deg }
```

```css
.rotate-[<value>] { rotate: <value> }
```

```css
.rotate-(<custom-property>) { rotate: var(<custom-property>) }
```

### scale

```css
.scale-<number> { scale: <number>% <number>% }
```

```css
.-scale-<number> { scale: -<number>% -<number>% }
```

```css
.scale-[<value>] { scale: <value> }
```

```css
.scale-(<custom-property>) { scale: var(<custom-property>) }
```

### transform

```css
.skew-<number> { transform: skewX(<number>deg) skewY(<number>deg) }
```

```css
.-skew-<number> { transform: skewX(-<number>deg) skewY(-<number>deg) }
```

```css
.skew-[<value>] { transform: <value> }
```

```css
.skew-(<custom-property>) { transform: var(<custom-property>) }
```

```css
.transform-none { transform: none }
```

```css
.transform-[<value>] { transform: <value> }
```

```css
.transform-(<custom-property>) { transform: var(<custom-property>) }
```

### transform-origin

```css
.origin-top-left { transform-origin: top left }
```

```css
.origin-top { transform-origin: top }
```

```css
.origin-top-right { transform-origin: top right }
```

```css
.origin-left { transform-origin: left }
```

```css
.origin-center { transform-origin: center }
```

```css
.origin-right { transform-origin: right }
```

```css
.origin-bottom-left { transform-origin: bottom left }
```

```css
.origin-bottom { transform-origin: bottom }
```

```css
.origin-bottom-right { transform-origin: bottom right }
```

```css
.origin-[<value>] { transform-origin: <value> }
```

```css
.origin-(<custom-property>) { transform-origin: var(<custom-property>) }
```

### transform-style

```css
.transform-3d { transform-style: preserve-3d }
```

```css
.transform-flat { transform-style: flat }
```

### translate

```css
.translate-auto { translate: auto auto }
```

```css
.translate-px { translate: 1px 1px }
```

```css
.-translate-px { translate: -1px -1px }
```

```css
.translate-full { translate: 100% 100% }
```

```css
.-translate-full { translate: -100% -100% }
```

```css
.translate-screen { translate: 100vw 100vw }
```

```css
.translate-dvw { translate: 100vw 100vw }
```

```css
.translate-dvh { translate: 100vh 100vh }
```

```css
.translate-lvw { translate: 100lvw 100lvw }
```

```css
.translate-lvh { translate: 100lvh 100lvh }
```

```css
.translate-svw { translate: 100svw 100svw }
```

```css
.translate-svh { translate: 100svh 100svh }
```

```css
.translate-min { translate: min-content min-content }
```

```css
.translate-max { translate: max-content max-content }
```

```css
.translate-fit { translate: fit-content fit-content }
```

```css
.translate-3xs { translate: 256px 256px }
```

```css
.translate-2xs { translate: 288px 288px }
```

```css
.translate-xs { translate: 320px 320px }
```

```css
.translate-sm { translate: 384px 384px }
```

```css
.translate-md { translate: 448px 448px }
```

```css
.translate-lg { translate: 512px 512px }
```

```css
.translate-xl { translate: 576px 576px }
```

```css
.translate-2xl { translate: 672px 672px }
```

```css
.translate-3xl { translate: 768px 768px }
```

```css
.translate-4xl { translate: 896px 896px }
```

```css
.translate-5xl { translate: 1024px 1024px }
```

```css
.translate-6xl { translate: 1152px 1152px }
```

```css
.translate-7xl { translate: 1280px 1280px }
```

```css
.translate-<number> { translate: calc(<number> * 4px) calc(<number> * 4px) }
```

```css
.-translate-<number> { translate: calc(-<number> * 4px) calc(-<number> * 4px) }
```

```css
.translate-<fraction> { translate: calc(<fraction> * 100%) calc(<fraction> * 100%) }
```

```css
.translate-[<value>] { translate: <value> }
```

```css
.translate-(<custom-property>) { translate: var(<custom-property>) }
```

## Interactivity

### accent-color

```css
.accent-<color> { accent-color: oklch(...) }
```

### appearance

```css
.appearance-none { appearance: none }
```

```css
.appearance-auto { appearance: auto }
```

### caret-color

```css
.caret-<color> { caret-color: oklch(...) }
```

### color-scheme

```css
.scheme-normal { color-scheme: normal }
```

```css
.scheme-dark { color-scheme: dark }
```

```css
.scheme-light { color-scheme: light }
```

```css
.scheme-light-dark { color-scheme: light dark }
```

```css
.scheme-only-dark { color-scheme: only dark }
```

```css
.scheme-only-light { color-scheme: only light }
```

### cursor

```css
.cursor-auto { cursor: auto }
```

```css
.cursor-default { cursor: default }
```

```css
.cursor-none { cursor: none }
```

```css
.cursor-context-menu { cursor: context-menu }
```

```css
.cursor-help { cursor: help }
```

```css
.cursor-pointer { cursor: pointer }
```

```css
.cursor-progress { cursor: progress }
```

```css
.cursor-wait { cursor: wait }
```

```css
.cursor-cell { cursor: cell }
```

```css
.cursor-crosshair { cursor: crosshair }
```

```css
.cursor-text { cursor: text }
```

```css
.cursor-vertical-text { cursor: vertical-text }
```

```css
.cursor-alias { cursor: alias }
```

```css
.cursor-copy { cursor: copy }
```

```css
.cursor-move { cursor: move }
```

```css
.cursor-no-drop { cursor: no-drop }
```

```css
.cursor-not-allowed { cursor: not-allowed }
```

```css
.cursor-grab { cursor: grab }
```

```css
.cursor-grabbing { cursor: grabbing }
```

```css
.cursor-all-scroll { cursor: all-scroll }
```

```css
.cursor-col-resize { cursor: col-resize }
```

```css
.cursor-row-resize { cursor: row-resize }
```

```css
.cursor-n-resize { cursor: n-resize }
```

```css
.cursor-e-resize { cursor: e-resize }
```

```css
.cursor-s-resize { cursor: s-resize }
```

```css
.cursor-w-resize { cursor: w-resize }
```

```css
.cursor-ne-resize { cursor: ne-resize }
```

```css
.cursor-nw-resize { cursor: nw-resize }
```

```css
.cursor-se-resize { cursor: se-resize }
```

```css
.cursor-sw-resize { cursor: sw-resize }
```

```css
.cursor-ew-resize { cursor: ew-resize }
```

```css
.cursor-ns-resize { cursor: ns-resize }
```

```css
.cursor-nesw-resize { cursor: nesw-resize }
```

```css
.cursor-nwse-resize { cursor: nwse-resize }
```

```css
.cursor-zoom-in { cursor: zoom-in }
```

```css
.cursor-zoom-out { cursor: zoom-out }
```

### field-sizing

```css
.field-sizing-fixed { field-sizing: fixed }
```

```css
.field-sizing-content { field-sizing: content }
```

### pointer-events

```css
.pointer-events-none { pointer-events: none }
```

```css
.pointer-events-auto { pointer-events: auto }
```

### resize

```css
.resize-none { resize: none }
```

```css
.resize-x { resize: horizontal }
```

```css
.resize-y { resize: vertical }
```

```css
.resize-both { resize: both }
```

### scroll-behavior

```css
.scroll-auto { scroll-behavior: auto }
```

```css
.scroll-smooth { scroll-behavior: smooth }
```

### scroll-margin

```css
.scroll-m-<number> { scroll-margin: calc(<number> * 4px) }
```

```css
.-scroll-m-<number> { scroll-margin: calc(-<number> * 4px) }
```

```css
.scroll-m-[<value>] { scroll-margin: <value> }
```

```css
.scroll-m-(<custom-property>) { scroll-margin: var(<custom-property>) }
```

### scroll-padding

```css
.scroll-p-<number> { scroll-padding: calc(<number> * 4px) }
```

```css
.-scroll-p-<number> { scroll-padding: calc(-<number> * 4px) }
```

```css
.scroll-p-[<value>] { scroll-padding: <value> }
```

```css
.scroll-p-(<custom-property>) { scroll-padding: var(<custom-property>) }
```

### scroll-snap-align

```css
.snap-start { scroll-snap-align: start }
```

```css
.snap-end { scroll-snap-align: end }
```

```css
.snap-center { scroll-snap-align: center }
```

```css
.snap-align-none { scroll-snap-align: none }
```

### scroll-snap-stop

```css
.snap-normal { scroll-snap-stop: normal }
```

```css
.snap-always { scroll-snap-stop: always }
```

### scroll-snap-type

```css
.snap-none { scroll-snap-type: none }
```

```css
.snap-x { scroll-snap-type: x mandatory }
```

```css
.snap-y { scroll-snap-type: y mandatory }
```

```css
.snap-both { scroll-snap-type: both proximity }
```

### touch-action

```css
.touch-auto { touch-action: auto }
```

```css
.touch-none { touch-action: none }
```

```css
.touch-pan-x { touch-action: pan-x }
```

```css
.touch-pan-left { touch-action: pan-left }
```

```css
.touch-pan-right { touch-action: pan-right }
```

```css
.touch-pan-y { touch-action: pan-y }
```

```css
.touch-pan-up { touch-action: pan-up }
```

```css
.touch-pan-down { touch-action: pan-down }
```

```css
.touch-pinch-zoom { touch-action: pinch-zoom }
```

```css
.touch-manipulation { touch-action: manipulation }
```

### user-select

```css
.select-text { user-select: text }
```

```css
.select-all { user-select: all }
```

```css
.select-auto { user-select: auto }
```

```css
.select-none { user-select: none }
```

### will-change

```css
.will-change-auto { will-change: auto }
```

```css
.will-change-scroll { will-change: scroll-position }
```

```css
.will-change-contents { will-change: contents }
```

```css
.will-change-transform { will-change: transform }
```

```css
.will-change-[<value>] { will-change: <value> }
```

```css
.will-change-(<custom-property>) { will-change: var(<custom-property>) }
```

## SVG

### fill

```css
.fill-<color> { fill: oklch(...) }
```

### stroke

```css
.stroke-<color> { stroke: oklch(...) }
```

### stroke-width

```css
.stroke-<number> { stroke-width: <number>px }
```

```css
.-stroke-<number> { stroke-width: -<number>px }
```

```css
.stroke-[<value>] { stroke-width: <value> }
```

```css
.stroke-(<custom-property>) { stroke-width: var(<custom-property>) }
```

## Accessibility

### forced-color-adjust

```css
.forced-color-adjust-auto { forced-color-adjust: auto }
```

```css
.forced-color-adjust-none { forced-color-adjust: none }
```
