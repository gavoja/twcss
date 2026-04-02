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
/* landscape */
@media (orientation: landscape)
```

```css
/* portrait */
@media (orientation: portrait)
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
/* print */
@media print
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

```txt
.aspect-square { aspect-ratio: 1 / 1 }
```

```txt
.aspect-video { aspect-ratio: 16 / 9 }
```

```txt
.aspect-auto { aspect-ratio: auto }
```

```txt
.aspect-<fraction> { aspect-ratio: <fraction> }
```

```txt
.aspect-[<value>] { aspect-ratio: <value> }
```

```txt
.aspect-(<custom-property>) { aspect-ratio: var(<custom-property>) }
```

### columns

```txt
.columns-auto { columns: auto }
```

```txt
.columns-px { columns: 1px }
```

```txt
.-columns-px { columns: -1px }
```

```txt
.columns-full { columns: 100% }
```

```txt
.-columns-full { columns: -100% }
```

```txt
.columns-screen { columns: 100vw }
```

```txt
.columns-dvw { columns: 100vw }
```

```txt
.columns-dvh { columns: 100vh }
```

```txt
.columns-lvw { columns: 100lvw }
```

```txt
.columns-lvh { columns: 100lvh }
```

```txt
.columns-svw { columns: 100svw }
```

```txt
.columns-svh { columns: 100svh }
```

```txt
.columns-min { columns: min-content }
```

```txt
.columns-max { columns: max-content }
```

```txt
.columns-fit { columns: fit-content }
```

```txt
.columns-3xs { columns: 256px }
```

```txt
.columns-2xs { columns: 288px }
```

```txt
.columns-xs { columns: 320px }
```

```txt
.columns-sm { columns: 384px }
```

```txt
.columns-md { columns: 448px }
```

```txt
.columns-lg { columns: 512px }
```

```txt
.columns-xl { columns: 576px }
```

```txt
.columns-2xl { columns: 672px }
```

```txt
.columns-3xl { columns: 768px }
```

```txt
.columns-4xl { columns: 896px }
```

```txt
.columns-5xl { columns: 1024px }
```

```txt
.columns-6xl { columns: 1152px }
```

```txt
.columns-7xl { columns: 1280px }
```

```txt
.columns-<number> { columns: <number> }
```

```txt
.-columns-<number> { columns: -<number> }
```

```txt
.columns-<fraction> { columns: <fraction> }
```

```txt
.columns-[<value>] { columns: <value> }
```

```txt
.columns-(<custom-property>) { columns: var(<custom-property>) }
```

### break-after

```txt
.break-after-auto { break-after: auto }
```

```txt
.break-after-avoid { break-after: avoid }
```

```txt
.break-after-avoid-page { break-after: avoid-page }
```

```txt
.break-after-page { break-after: page }
```

```txt
.break-after-left { break-after: left }
```

```txt
.break-after-right { break-after: right }
```

```txt
.break-after-column { break-after: column }
```

### break-before

```txt
.break-before-auto { break-before: auto }
```

```txt
.break-before-avoid { break-before: avoid }
```

```txt
.break-before-avoid-page { break-before: avoid-page }
```

```txt
.break-before-page { break-before: page }
```

```txt
.break-before-left { break-before: left }
```

```txt
.break-before-right { break-before: right }
```

```txt
.break-before-column { break-before: column }
```

### break-inside

```txt
.break-inside-auto { break-inside: auto }
```

```txt
.break-inside-avoid { break-inside: avoid }
```

```txt
.break-inside-avoid-page { break-inside: avoid-page }
```

```txt
.break-inside-avoid-column { break-inside: avoid-column }
```

### box-decoration-break

```txt
.box-decoration-clone { box-decoration-break: clone }
```

```txt
.box-decoration-slice { box-decoration-break: slice }
```

### box-sizing

```txt
.box-border { box-sizing: border-box }
```

```txt
.box-content { box-sizing: content-box }
```

### display

```txt
.inline { display: inline }
```

```txt
.block { display: block }
```

```txt
.inline-block { display: inline-block }
```

```txt
.flow-root { display: flow-root }
```

```txt
.flex { display: flex }
```

```txt
.inline-flex { display: inline-flex }
```

```txt
.grid { display: grid }
```

```txt
.inline-grid { display: inline-grid }
```

```txt
.contents { display: contents }
```

```txt
.table { display: table }
```

```txt
.inline-table { display: inline-table }
```

```txt
.list-item { display: list-item }
```

```txt
.hidden { display: none }
```

```txt
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

```txt
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

```txt
.float-start { float: inline-start }
```

```txt
.float-end { float: inline-end }
```

```txt
.float-left { float: left }
```

```txt
.float-right { float: right }
```

```txt
.float-none { float: none }
```

### clear

```txt
.clear-start { clear: inline-start }
```

```txt
.clear-end { clear: inline-end }
```

```txt
.clear-left { clear: left }
```

```txt
.clear-right { clear: right }
```

```txt
.clear-both { clear: both }
```

```txt
.clear-none { clear: none }
```

### isolation

```txt
.isolate { isolation: isolate }
```

```txt
.isolation-auto { isolation: auto }
```

### object-fit

```txt
.object-contain { object-fit: contain }
```

```txt
.object-cover { object-fit: cover }
```

```txt
.object-fill { object-fit: fill }
```

```txt
.object-none { object-fit: none }
```

```txt
.object-scale-down { object-fit: scale-down }
```

### object-position

```txt
.object-bottom { object-position: bottom }
```

```txt
.object-center { object-position: center }
```

```txt
.object-left { object-position: left }
```

```txt
.object-left-bottom { object-position: left bottom }
```

```txt
.object-left-top { object-position: left top }
```

```txt
.object-right { object-position: right }
```

```txt
.object-right-bottom { object-position: right bottom }
```

```txt
.object-right-top { object-position: right top }
```

```txt
.object-top { object-position: top }
```

```txt
.object-[<value>] { object-position: <value> }
```

```txt
.object-(<custom-property>) { object-position: var(<custom-property>) }
```

### overflow

```txt
.overflow-auto { overflow: auto }
```

```txt
.overflow-hidden { overflow: hidden }
```

```txt
.overflow-visible { overflow: visible }
```

```txt
.overflow-scroll { overflow: scroll }
```

```txt
.overflow-x-auto { overflow-x: auto }
```

```txt
.overflow-x-hidden { overflow-x: hidden }
```

```txt
.overflow-x-clip { overflow-x: clip }
```

```txt
.overflow-x-visible { overflow-x: visible }
```

```txt
.overflow-x-scroll { overflow-x: scroll }
```

```txt
.overflow-y-auto { overflow-y: auto }
```

```txt
.overflow-y-hidden { overflow-y: hidden }
```

```txt
.overflow-y-clip { overflow-y: clip }
```

```txt
.overflow-y-visible { overflow-y: visible }
```

```txt
.overflow-y-scroll { overflow-y: scroll }
```

```txt
.line-clamp-none {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: none;
}
```

```txt
.line-clamp-[<value>] {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: <value>;
}
```

```txt
.line-clamp-(<custom-property>) {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(<custom-property>);
}
```

### overscroll-behavior

```txt
.overscroll-auto { overscroll-behavior: auto }
```

```txt
.overscroll-contain { overscroll-behavior: contain }
```

```txt
.overscroll-none { overscroll-behavior: none }
```

```txt
.overscroll-x-auto { overscroll-behavior-x: auto }
```

```txt
.overscroll-x-contain { overscroll-behavior-x: contain }
```

```txt
.overscroll-x-none { overscroll-behavior-x: none }
```

```txt
.overscroll-y-auto { overscroll-behavior-y: auto }
```

```txt
.overscroll-y-contain { overscroll-behavior-y: contain }
```

```txt
.overscroll-y-none { overscroll-behavior-y: none }
```

### scrollbar-gutter

```txt
.scrollbar-gutter-auto { scrollbar-gutter: auto }
```

```txt
.scrollbar-gutter-stable { scrollbar-gutter: stable }
```

```txt
.scrollbar-gutter-both { scrollbar-gutter: stable both-edges }
```

### scrollbar-width

```txt
.scrollbar-width-auto { scrollbar-width: auto }
```

```txt
.scrollbar-width-thin { scrollbar-width: thin }
```

```txt
.scrollbar-width-none { scrollbar-width: none }
```

### scrollbar-color

```txt
.scrollbar-color-auto { scrollbar-color: auto }
```

```txt
.scrollbar-color-[<value>] { scrollbar-color: <value> }
```

```txt
.scrollbar-color-(<custom-property>) { scrollbar-color: var(<custom-property>) }
```

### position

```txt
.static { position: static }
```

```txt
.fixed { position: fixed }
```

```txt
.absolute { position: absolute }
```

```txt
.relative { position: relative }
```

```txt
.sticky { position: sticky }
```

### top / right / bottom / left

```txt
.inset-auto { inset: auto }
```

```txt
.inset-px { inset: 1px }
```

```txt
.-inset-px { inset: -1px }
```

```txt
.inset-full { inset: 100% }
```

```txt
.-inset-full { inset: -100% }
```

```txt
.inset-screen { inset: 100vw }
```

```txt
.inset-dvw { inset: 100vw }
```

```txt
.inset-dvh { inset: 100vh }
```

```txt
.inset-lvw { inset: 100lvw }
```

```txt
.inset-lvh { inset: 100lvh }
```

```txt
.inset-svw { inset: 100svw }
```

```txt
.inset-svh { inset: 100svh }
```

```txt
.inset-min { inset: min-content }
```

```txt
.inset-max { inset: max-content }
```

```txt
.inset-fit { inset: fit-content }
```

```txt
.inset-3xs { inset: 256px }
```

```txt
.inset-2xs { inset: 288px }
```

```txt
.inset-xs { inset: 320px }
```

```txt
.inset-sm { inset: 384px }
```

```txt
.inset-md { inset: 448px }
```

```txt
.inset-lg { inset: 512px }
```

```txt
.inset-xl { inset: 576px }
```

```txt
.inset-2xl { inset: 672px }
```

```txt
.inset-3xl { inset: 768px }
```

```txt
.inset-4xl { inset: 896px }
```

```txt
.inset-5xl { inset: 1024px }
```

```txt
.inset-6xl { inset: 1152px }
```

```txt
.inset-7xl { inset: 1280px }
```

```txt
.inset-<number> { inset: calc(<number> * 4px) }
```

```txt
.-inset-<number> { inset: calc(-<number> * 4px) }
```

```txt
.inset-<fraction> { inset: calc(<fraction> * 100%) }
```

```txt
.inset-[<value>] { inset: <value> }
```

```txt
.inset-(<custom-property>) { inset: var(<custom-property>) }
```

```txt
.inset-x-auto { inset-inline: auto }
```

```txt
.inset-x-px { inset-inline: 1px }
```

```txt
.-inset-x-px { inset-inline: -1px }
```

```txt
.inset-x-full { inset-inline: 100% }
```

```txt
.-inset-x-full { inset-inline: -100% }
```

```txt
.inset-x-screen { inset-inline: 100vw }
```

```txt
.inset-x-dvw { inset-inline: 100vw }
```

```txt
.inset-x-dvh { inset-inline: 100vh }
```

```txt
.inset-x-lvw { inset-inline: 100lvw }
```

```txt
.inset-x-lvh { inset-inline: 100lvh }
```

```txt
.inset-x-svw { inset-inline: 100svw }
```

```txt
.inset-x-svh { inset-inline: 100svh }
```

```txt
.inset-x-min { inset-inline: min-content }
```

```txt
.inset-x-max { inset-inline: max-content }
```

```txt
.inset-x-fit { inset-inline: fit-content }
```

```txt
.inset-x-3xs { inset-inline: 256px }
```

```txt
.inset-x-2xs { inset-inline: 288px }
```

```txt
.inset-x-xs { inset-inline: 320px }
```

```txt
.inset-x-sm { inset-inline: 384px }
```

```txt
.inset-x-md { inset-inline: 448px }
```

```txt
.inset-x-lg { inset-inline: 512px }
```

```txt
.inset-x-xl { inset-inline: 576px }
```

```txt
.inset-x-2xl { inset-inline: 672px }
```

```txt
.inset-x-3xl { inset-inline: 768px }
```

```txt
.inset-x-4xl { inset-inline: 896px }
```

```txt
.inset-x-5xl { inset-inline: 1024px }
```

```txt
.inset-x-6xl { inset-inline: 1152px }
```

```txt
.inset-x-7xl { inset-inline: 1280px }
```

```txt
.inset-x-<number> { inset-inline: calc(<number> * 4px) }
```

```txt
.-inset-x-<number> { inset-inline: calc(-<number> * 4px) }
```

```txt
.inset-x-<fraction> { inset-inline: calc(<fraction> * 100%) }
```

```txt
.inset-x-[<value>] { inset-inline: <value> }
```

```txt
.inset-x-(<custom-property>) { inset-inline: var(<custom-property>) }
```

```txt
.inset-y-auto { inset-block: auto }
```

```txt
.inset-y-px { inset-block: 1px }
```

```txt
.-inset-y-px { inset-block: -1px }
```

```txt
.inset-y-full { inset-block: 100% }
```

```txt
.-inset-y-full { inset-block: -100% }
```

```txt
.inset-y-screen { inset-block: 100vw }
```

```txt
.inset-y-dvw { inset-block: 100vw }
```

```txt
.inset-y-dvh { inset-block: 100vh }
```

```txt
.inset-y-lvw { inset-block: 100lvw }
```

```txt
.inset-y-lvh { inset-block: 100lvh }
```

```txt
.inset-y-svw { inset-block: 100svw }
```

```txt
.inset-y-svh { inset-block: 100svh }
```

```txt
.inset-y-min { inset-block: min-content }
```

```txt
.inset-y-max { inset-block: max-content }
```

```txt
.inset-y-fit { inset-block: fit-content }
```

```txt
.inset-y-3xs { inset-block: 256px }
```

```txt
.inset-y-2xs { inset-block: 288px }
```

```txt
.inset-y-xs { inset-block: 320px }
```

```txt
.inset-y-sm { inset-block: 384px }
```

```txt
.inset-y-md { inset-block: 448px }
```

```txt
.inset-y-lg { inset-block: 512px }
```

```txt
.inset-y-xl { inset-block: 576px }
```

```txt
.inset-y-2xl { inset-block: 672px }
```

```txt
.inset-y-3xl { inset-block: 768px }
```

```txt
.inset-y-4xl { inset-block: 896px }
```

```txt
.inset-y-5xl { inset-block: 1024px }
```

```txt
.inset-y-6xl { inset-block: 1152px }
```

```txt
.inset-y-7xl { inset-block: 1280px }
```

```txt
.inset-y-<number> { inset-block: calc(<number> * 4px) }
```

```txt
.-inset-y-<number> { inset-block: calc(-<number> * 4px) }
```

```txt
.inset-y-<fraction> { inset-block: calc(<fraction> * 100%) }
```

```txt
.inset-y-[<value>] { inset-block: <value> }
```

```txt
.inset-y-(<custom-property>) { inset-block: var(<custom-property>) }
```

```txt
.start-auto { inset-inline-start: auto }
```

```txt
.start-px { inset-inline-start: 1px }
```

```txt
.-start-px { inset-inline-start: -1px }
```

```txt
.start-full { inset-inline-start: 100% }
```

```txt
.-start-full { inset-inline-start: -100% }
```

```txt
.start-screen { inset-inline-start: 100vw }
```

```txt
.start-dvw { inset-inline-start: 100vw }
```

```txt
.start-dvh { inset-inline-start: 100vh }
```

```txt
.start-lvw { inset-inline-start: 100lvw }
```

```txt
.start-lvh { inset-inline-start: 100lvh }
```

```txt
.start-svw { inset-inline-start: 100svw }
```

```txt
.start-svh { inset-inline-start: 100svh }
```

```txt
.start-min { inset-inline-start: min-content }
```

```txt
.start-max { inset-inline-start: max-content }
```

```txt
.start-fit { inset-inline-start: fit-content }
```

```txt
.start-3xs { inset-inline-start: 256px }
```

```txt
.start-2xs { inset-inline-start: 288px }
```

```txt
.start-xs { inset-inline-start: 320px }
```

```txt
.start-sm { inset-inline-start: 384px }
```

```txt
.start-md { inset-inline-start: 448px }
```

```txt
.start-lg { inset-inline-start: 512px }
```

```txt
.start-xl { inset-inline-start: 576px }
```

```txt
.start-2xl { inset-inline-start: 672px }
```

```txt
.start-3xl { inset-inline-start: 768px }
```

```txt
.start-4xl { inset-inline-start: 896px }
```

```txt
.start-5xl { inset-inline-start: 1024px }
```

```txt
.start-6xl { inset-inline-start: 1152px }
```

```txt
.start-7xl { inset-inline-start: 1280px }
```

```txt
.start-<number> { inset-inline-start: calc(<number> * 4px) }
```

```txt
.-start-<number> { inset-inline-start: calc(-<number> * 4px) }
```

```txt
.start-<fraction> { inset-inline-start: calc(<fraction> * 100%) }
```

```txt
.start-[<value>] { inset-inline-start: <value> }
```

```txt
.start-(<custom-property>) { inset-inline-start: var(<custom-property>) }
```

```txt
.end-auto { inset-inline-end: auto }
```

```txt
.end-px { inset-inline-end: 1px }
```

```txt
.-end-px { inset-inline-end: -1px }
```

```txt
.end-full { inset-inline-end: 100% }
```

```txt
.-end-full { inset-inline-end: -100% }
```

```txt
.end-screen { inset-inline-end: 100vw }
```

```txt
.end-dvw { inset-inline-end: 100vw }
```

```txt
.end-dvh { inset-inline-end: 100vh }
```

```txt
.end-lvw { inset-inline-end: 100lvw }
```

```txt
.end-lvh { inset-inline-end: 100lvh }
```

```txt
.end-svw { inset-inline-end: 100svw }
```

```txt
.end-svh { inset-inline-end: 100svh }
```

```txt
.end-min { inset-inline-end: min-content }
```

```txt
.end-max { inset-inline-end: max-content }
```

```txt
.end-fit { inset-inline-end: fit-content }
```

```txt
.end-3xs { inset-inline-end: 256px }
```

```txt
.end-2xs { inset-inline-end: 288px }
```

```txt
.end-xs { inset-inline-end: 320px }
```

```txt
.end-sm { inset-inline-end: 384px }
```

```txt
.end-md { inset-inline-end: 448px }
```

```txt
.end-lg { inset-inline-end: 512px }
```

```txt
.end-xl { inset-inline-end: 576px }
```

```txt
.end-2xl { inset-inline-end: 672px }
```

```txt
.end-3xl { inset-inline-end: 768px }
```

```txt
.end-4xl { inset-inline-end: 896px }
```

```txt
.end-5xl { inset-inline-end: 1024px }
```

```txt
.end-6xl { inset-inline-end: 1152px }
```

```txt
.end-7xl { inset-inline-end: 1280px }
```

```txt
.end-<number> { inset-inline-end: calc(<number> * 4px) }
```

```txt
.-end-<number> { inset-inline-end: calc(-<number> * 4px) }
```

```txt
.end-<fraction> { inset-inline-end: calc(<fraction> * 100%) }
```

```txt
.end-[<value>] { inset-inline-end: <value> }
```

```txt
.end-(<custom-property>) { inset-inline-end: var(<custom-property>) }
```

```txt
.top-auto { top: auto }
```

```txt
.top-px { top: 1px }
```

```txt
.-top-px { top: -1px }
```

```txt
.top-full { top: 100% }
```

```txt
.-top-full { top: -100% }
```

```txt
.top-screen { top: 100vw }
```

```txt
.top-dvw { top: 100vw }
```

```txt
.top-dvh { top: 100vh }
```

```txt
.top-lvw { top: 100lvw }
```

```txt
.top-lvh { top: 100lvh }
```

```txt
.top-svw { top: 100svw }
```

```txt
.top-svh { top: 100svh }
```

```txt
.top-min { top: min-content }
```

```txt
.top-max { top: max-content }
```

```txt
.top-fit { top: fit-content }
```

```txt
.top-3xs { top: 256px }
```

```txt
.top-2xs { top: 288px }
```

```txt
.top-xs { top: 320px }
```

```txt
.top-sm { top: 384px }
```

```txt
.top-md { top: 448px }
```

```txt
.top-lg { top: 512px }
```

```txt
.top-xl { top: 576px }
```

```txt
.top-2xl { top: 672px }
```

```txt
.top-3xl { top: 768px }
```

```txt
.top-4xl { top: 896px }
```

```txt
.top-5xl { top: 1024px }
```

```txt
.top-6xl { top: 1152px }
```

```txt
.top-7xl { top: 1280px }
```

```txt
.top-<number> { top: calc(<number> * 4px) }
```

```txt
.-top-<number> { top: calc(-<number> * 4px) }
```

```txt
.top-<fraction> { top: calc(<fraction> * 100%) }
```

```txt
.top-[<value>] { top: <value> }
```

```txt
.top-(<custom-property>) { top: var(<custom-property>) }
```

```txt
.right-auto { right: auto }
```

```txt
.right-px { right: 1px }
```

```txt
.-right-px { right: -1px }
```

```txt
.right-full { right: 100% }
```

```txt
.-right-full { right: -100% }
```

```txt
.right-screen { right: 100vw }
```

```txt
.right-dvw { right: 100vw }
```

```txt
.right-dvh { right: 100vh }
```

```txt
.right-lvw { right: 100lvw }
```

```txt
.right-lvh { right: 100lvh }
```

```txt
.right-svw { right: 100svw }
```

```txt
.right-svh { right: 100svh }
```

```txt
.right-min { right: min-content }
```

```txt
.right-max { right: max-content }
```

```txt
.right-fit { right: fit-content }
```

```txt
.right-3xs { right: 256px }
```

```txt
.right-2xs { right: 288px }
```

```txt
.right-xs { right: 320px }
```

```txt
.right-sm { right: 384px }
```

```txt
.right-md { right: 448px }
```

```txt
.right-lg { right: 512px }
```

```txt
.right-xl { right: 576px }
```

```txt
.right-2xl { right: 672px }
```

```txt
.right-3xl { right: 768px }
```

```txt
.right-4xl { right: 896px }
```

```txt
.right-5xl { right: 1024px }
```

```txt
.right-6xl { right: 1152px }
```

```txt
.right-7xl { right: 1280px }
```

```txt
.right-<number> { right: calc(<number> * 4px) }
```

```txt
.-right-<number> { right: calc(-<number> * 4px) }
```

```txt
.right-<fraction> { right: calc(<fraction> * 100%) }
```

```txt
.right-[<value>] { right: <value> }
```

```txt
.right-(<custom-property>) { right: var(<custom-property>) }
```

```txt
.bottom-auto { bottom: auto }
```

```txt
.bottom-px { bottom: 1px }
```

```txt
.-bottom-px { bottom: -1px }
```

```txt
.bottom-full { bottom: 100% }
```

```txt
.-bottom-full { bottom: -100% }
```

```txt
.bottom-screen { bottom: 100vw }
```

```txt
.bottom-dvw { bottom: 100vw }
```

```txt
.bottom-dvh { bottom: 100vh }
```

```txt
.bottom-lvw { bottom: 100lvw }
```

```txt
.bottom-lvh { bottom: 100lvh }
```

```txt
.bottom-svw { bottom: 100svw }
```

```txt
.bottom-svh { bottom: 100svh }
```

```txt
.bottom-min { bottom: min-content }
```

```txt
.bottom-max { bottom: max-content }
```

```txt
.bottom-fit { bottom: fit-content }
```

```txt
.bottom-3xs { bottom: 256px }
```

```txt
.bottom-2xs { bottom: 288px }
```

```txt
.bottom-xs { bottom: 320px }
```

```txt
.bottom-sm { bottom: 384px }
```

```txt
.bottom-md { bottom: 448px }
```

```txt
.bottom-lg { bottom: 512px }
```

```txt
.bottom-xl { bottom: 576px }
```

```txt
.bottom-2xl { bottom: 672px }
```

```txt
.bottom-3xl { bottom: 768px }
```

```txt
.bottom-4xl { bottom: 896px }
```

```txt
.bottom-5xl { bottom: 1024px }
```

```txt
.bottom-6xl { bottom: 1152px }
```

```txt
.bottom-7xl { bottom: 1280px }
```

```txt
.bottom-<number> { bottom: calc(<number> * 4px) }
```

```txt
.-bottom-<number> { bottom: calc(-<number> * 4px) }
```

```txt
.bottom-<fraction> { bottom: calc(<fraction> * 100%) }
```

```txt
.bottom-[<value>] { bottom: <value> }
```

```txt
.bottom-(<custom-property>) { bottom: var(<custom-property>) }
```

```txt
.left-auto { left: auto }
```

```txt
.left-px { left: 1px }
```

```txt
.-left-px { left: -1px }
```

```txt
.left-full { left: 100% }
```

```txt
.-left-full { left: -100% }
```

```txt
.left-screen { left: 100vw }
```

```txt
.left-dvw { left: 100vw }
```

```txt
.left-dvh { left: 100vh }
```

```txt
.left-lvw { left: 100lvw }
```

```txt
.left-lvh { left: 100lvh }
```

```txt
.left-svw { left: 100svw }
```

```txt
.left-svh { left: 100svh }
```

```txt
.left-min { left: min-content }
```

```txt
.left-max { left: max-content }
```

```txt
.left-fit { left: fit-content }
```

```txt
.left-3xs { left: 256px }
```

```txt
.left-2xs { left: 288px }
```

```txt
.left-xs { left: 320px }
```

```txt
.left-sm { left: 384px }
```

```txt
.left-md { left: 448px }
```

```txt
.left-lg { left: 512px }
```

```txt
.left-xl { left: 576px }
```

```txt
.left-2xl { left: 672px }
```

```txt
.left-3xl { left: 768px }
```

```txt
.left-4xl { left: 896px }
```

```txt
.left-5xl { left: 1024px }
```

```txt
.left-6xl { left: 1152px }
```

```txt
.left-7xl { left: 1280px }
```

```txt
.left-<number> { left: calc(<number> * 4px) }
```

```txt
.-left-<number> { left: calc(-<number> * 4px) }
```

```txt
.left-<fraction> { left: calc(<fraction> * 100%) }
```

```txt
.left-[<value>] { left: <value> }
```

```txt
.left-(<custom-property>) { left: var(<custom-property>) }
```

### visibility

```txt
.visible { visibility: visible }
```

```txt
.invisible { visibility: hidden }
```

```txt
.collapse { visibility: collapse }
```

### z-index

```txt
.z-auto { z-index: auto }
```

```txt
.z-<number> { z-index: <number> }
```

```txt
.-z-<number> { z-index: -<number> }
```

```txt
.z-[<value>] { z-index: <value> }
```

```txt
.z-(<custom-property>) { z-index: var(<custom-property>) }
```

## Flexbox & Grid

### flex-basis

```txt
.basis-auto { flex-basis: auto }
```

```txt
.basis-px { flex-basis: 1px }
```

```txt
.-basis-px { flex-basis: -1px }
```

```txt
.basis-full { flex-basis: 100% }
```

```txt
.-basis-full { flex-basis: -100% }
```

```txt
.basis-screen { flex-basis: 100vw }
```

```txt
.basis-dvw { flex-basis: 100vw }
```

```txt
.basis-dvh { flex-basis: 100vh }
```

```txt
.basis-lvw { flex-basis: 100lvw }
```

```txt
.basis-lvh { flex-basis: 100lvh }
```

```txt
.basis-svw { flex-basis: 100svw }
```

```txt
.basis-svh { flex-basis: 100svh }
```

```txt
.basis-min { flex-basis: min-content }
```

```txt
.basis-max { flex-basis: max-content }
```

```txt
.basis-fit { flex-basis: fit-content }
```

```txt
.basis-3xs { flex-basis: 256px }
```

```txt
.basis-2xs { flex-basis: 288px }
```

```txt
.basis-xs { flex-basis: 320px }
```

```txt
.basis-sm { flex-basis: 384px }
```

```txt
.basis-md { flex-basis: 448px }
```

```txt
.basis-lg { flex-basis: 512px }
```

```txt
.basis-xl { flex-basis: 576px }
```

```txt
.basis-2xl { flex-basis: 672px }
```

```txt
.basis-3xl { flex-basis: 768px }
```

```txt
.basis-4xl { flex-basis: 896px }
```

```txt
.basis-5xl { flex-basis: 1024px }
```

```txt
.basis-6xl { flex-basis: 1152px }
```

```txt
.basis-7xl { flex-basis: 1280px }
```

```txt
.basis-<number> { flex-basis: calc(<number> * 4px) }
```

```txt
.-basis-<number> { flex-basis: calc(-<number> * 4px) }
```

```txt
.basis-<fraction> { flex-basis: calc(<fraction> * 100%) }
```

```txt
.basis-[<value>] { flex-basis: <value> }
```

```txt
.basis-(<custom-property>) { flex-basis: var(<custom-property>) }
```

### flex-direction

```txt
.flex-row { flex-direction: row }
```

```txt
.flex-row-reverse { flex-direction: row-reverse }
```

```txt
.flex-col { flex-direction: column }
```

```txt
.flex-col-reverse { flex-direction: column-reverse }
```

### flex-wrap

```txt
.flex-nowrap { flex-wrap: nowrap }
```

```txt
.flex-wrap { flex-wrap: wrap }
```

```txt
.flex-wrap-reverse { flex-wrap: wrap-reverse }
```

### flex

```txt
.flex-auto { flex: 1 1 auto }
```

```txt
.flex-initial { flex: 0 1 auto }
```

```txt
.flex-none { flex: none }
```

```txt
.flex-<number> { flex: <number> }
```

```txt
.-flex-<number> { flex: -<number> }
```

```txt
.flex-<fraction> { flex: calc(<fraction> * 100%) }
```

```txt
.flex-[<value>] { flex: <value> }
```

```txt
.flex-(<custom-property>) { flex: var(<custom-property>) }
```

### flex-grow

```txt
.grow { flex-grow: 1 }
```

```txt
.grow-<number> { flex-grow: <number> }
```

```txt
.-grow-<number> { flex-grow: -<number> }
```

```txt
.grow-[<value>] { flex-grow: <value> }
```

```txt
.grow-(<custom-property>) { flex-grow: var(<custom-property>) }
```

### flex-shrink

```txt
.shrink { flex-shrink: 1 }
```

```txt
.shrink-<number> { flex-shrink: <number> }
```

```txt
.-shrink-<number> { flex-shrink: -<number> }
```

```txt
.shrink-[<value>] { flex-shrink: <value> }
```

```txt
.shrink-(<custom-property>) { flex-shrink: var(<custom-property>) }
```

### order

```txt
.order-first { order: -9999 }
```

```txt
.order-last { order: 9999 }
```

```txt
.order-none { order: 0 }
```

```txt
.order-<number> { order: <number> }
```

```txt
.-order-<number> { order: -<number> }
```

```txt
.order-[<value>] { order: <value> }
```

```txt
.order-(<custom-property>) { order: var(<custom-property>) }
```

### grid-template-columns

```txt
.grid-cols-none { grid-template-columns: none }
```

```txt
.grid-cols-subgrid { grid-template-columns: subgrid }
```

```txt
.grid-cols-<number> { grid-template-columns: repeat(<number>, minmax(0, 1fr)) }
```

```txt
.-grid-cols-<number> { grid-template-columns: repeat(-<number>, minmax(0, 1fr)) }
```

```txt
.grid-cols-[<value>] { grid-template-columns: <value> }
```

```txt
.grid-cols-(<custom-property>) { grid-template-columns: var(<custom-property>) }
```

### grid-column

```txt
.col-span-full { grid-column: 1 / -1 }
```

```txt
.col-span-<number> { grid-column: span <number> / span <number> }
```

```txt
.-col-span-<number> { grid-column: span -<number> / span -<number> }
```

```txt
.col-span-[<value>] { grid-column: <value> }
```

```txt
.col-span-(<custom-property>) { grid-column: var(<custom-property>) }
```

```txt
.col-start-auto { grid-column-start: auto }
```

```txt
.col-start-<number> { grid-column-start: <number> }
```

```txt
.-col-start-<number> { grid-column-start: -<number> }
```

```txt
.col-start-[<value>] { grid-column-start: <value> }
```

```txt
.col-start-(<custom-property>) { grid-column-start: var(<custom-property>) }
```

```txt
.col-end-auto { grid-column-end: auto }
```

```txt
.col-end-<number> { grid-column-end: <number> }
```

```txt
.-col-end-<number> { grid-column-end: -<number> }
```

```txt
.col-end-[<value>] { grid-column-end: <value> }
```

```txt
.col-end-(<custom-property>) { grid-column-end: var(<custom-property>) }
```

```txt
.col-auto { grid-column: auto }
```

```txt
.col-<number> { grid-column: <number> }
```

```txt
.-col-<number> { grid-column: -<number> }
```

```txt
.col-[<value>] { grid-column: <value> }
```

```txt
.col-(<custom-property>) { grid-column: var(<custom-property>) }
```

### grid-template-rows

```txt
.grid-rows-none { grid-template-rows: none }
```

```txt
.grid-rows-subgrid { grid-template-rows: subgrid }
```

```txt
.grid-rows-<number> { grid-template-rows: repeat(<number>, minmax(0, 1fr)) }
```

```txt
.-grid-rows-<number> { grid-template-rows: repeat(-<number>, minmax(0, 1fr)) }
```

```txt
.grid-rows-[<value>] { grid-template-rows: <value> }
```

```txt
.grid-rows-(<custom-property>) { grid-template-rows: var(<custom-property>) }
```

### grid-row

```txt
.row-span-full { grid-row: 1 / -1 }
```

```txt
.row-span-<number> { grid-row: span <number> / span <number> }
```

```txt
.-row-span-<number> { grid-row: span -<number> / span -<number> }
```

```txt
.row-span-[<value>] { grid-row: <value> }
```

```txt
.row-span-(<custom-property>) { grid-row: var(<custom-property>) }
```

```txt
.row-start-auto { grid-row-start: auto }
```

```txt
.row-start-<number> { grid-row-start: <number> }
```

```txt
.-row-start-<number> { grid-row-start: -<number> }
```

```txt
.row-start-[<value>] { grid-row-start: <value> }
```

```txt
.row-start-(<custom-property>) { grid-row-start: var(<custom-property>) }
```

```txt
.row-end-auto { grid-row-end: auto }
```

```txt
.row-end-<number> { grid-row-end: <number> }
```

```txt
.-row-end-<number> { grid-row-end: -<number> }
```

```txt
.row-end-[<value>] { grid-row-end: <value> }
```

```txt
.row-end-(<custom-property>) { grid-row-end: var(<custom-property>) }
```

```txt
.row-auto { grid-row: auto }
```

```txt
.row-<number> { grid-row: <number> }
```

```txt
.-row-<number> { grid-row: -<number> }
```

```txt
.row-[<value>] { grid-row: <value> }
```

```txt
.row-(<custom-property>) { grid-row: var(<custom-property>) }
```

### grid-auto-flow

```txt
.grid-flow-row { grid-auto-flow: row }
```

```txt
.grid-flow-col { grid-auto-flow: column }
```

```txt
.grid-flow-dense { grid-auto-flow: dense }
```

```txt
.grid-flow-row-dense { grid-auto-flow: row dense }
```

```txt
.grid-flow-col-dense { grid-auto-flow: column dense }
```

### grid-auto-columns

```txt
.auto-cols-auto { grid-auto-columns: auto }
```

```txt
.auto-cols-min { grid-auto-columns: min-content }
```

```txt
.auto-cols-max { grid-auto-columns: max-content }
```

```txt
.auto-cols-fr { grid-auto-columns: minmax(0, 1fr) }
```

```txt
.auto-cols-[<value>] { grid-auto-columns: <value> }
```

```txt
.auto-cols-(<custom-property>) { grid-auto-columns: var(<custom-property>) }
```

### grid-auto-rows

```txt
.auto-rows-auto { grid-auto-rows: auto }
```

```txt
.auto-rows-min { grid-auto-rows: min-content }
```

```txt
.auto-rows-max { grid-auto-rows: max-content }
```

```txt
.auto-rows-fr { grid-auto-rows: minmax(0, 1fr) }
```

```txt
.auto-rows-[<value>] { grid-auto-rows: <value> }
```

```txt
.auto-rows-(<custom-property>) { grid-auto-rows: var(<custom-property>) }
```

### gap

```txt
.gap-<number> { gap: calc(<number> * 4px) }
```

```txt
.-gap-<number> { gap: calc(-<number> * 4px) }
```

```txt
.gap-[<value>] { gap: <value> }
```

```txt
.gap-(<custom-property>) { gap: var(<custom-property>) }
```

```txt
.gap-x-<number> { column-gap: calc(<number> * 4px) }
```

```txt
.-gap-x-<number> { column-gap: calc(-<number> * 4px) }
```

```txt
.gap-x-[<value>] { column-gap: <value> }
```

```txt
.gap-x-(<custom-property>) { column-gap: var(<custom-property>) }
```

```txt
.gap-y-<number> { row-gap: calc(<number> * 4px) }
```

```txt
.-gap-y-<number> { row-gap: calc(-<number> * 4px) }
```

```txt
.gap-y-[<value>] { row-gap: <value> }
```

```txt
.gap-y-(<custom-property>) { row-gap: var(<custom-property>) }
```

### justify-content

```txt
.justify-start { justify-content: flex-start }
```

```txt
.justify-end { justify-content: flex-end }
```

```txt
.justify-center { justify-content: center }
```

```txt
.justify-between { justify-content: space-between }
```

```txt
.justify-around { justify-content: space-around }
```

```txt
.justify-evenly { justify-content: space-evenly }
```

```txt
.justify-stretch { justify-content: stretch }
```

```txt
.justify-normal { justify-content: normal }
```

### justify-items

```txt
.justify-items-start { justify-items: start }
```

```txt
.justify-items-end { justify-items: end }
```

```txt
.justify-items-center { justify-items: center }
```

```txt
.justify-items-stretch { justify-items: stretch }
```

```txt
.justify-items-normal { justify-items: normal }
```

### justify-self

```txt
.justify-self-auto { justify-self: auto }
```

```txt
.justify-self-start { justify-self: start }
```

```txt
.justify-self-end { justify-self: end }
```

```txt
.justify-self-center { justify-self: center }
```

```txt
.justify-self-stretch { justify-self: stretch }
```

### align-content

```txt
.content-normal { align-content: normal }
```

```txt
.content-center { align-content: center }
```

```txt
.content-start { align-content: flex-start }
```

```txt
.content-end { align-content: flex-end }
```

```txt
.content-between { align-content: space-between }
```

```txt
.content-around { align-content: space-around }
```

```txt
.content-evenly { align-content: space-evenly }
```

```txt
.content-baseline { align-content: baseline }
```

```txt
.content-stretch { align-content: stretch }
```

### align-items

```txt
.items-start { align-items: flex-start }
```

```txt
.items-end { align-items: flex-end }
```

```txt
.items-end-safe { align-items: safe flex-end }
```

```txt
.items-center { align-items: center }
```

```txt
.items-center-safe { align-items: safe center }
```

```txt
.items-baseline { align-items: baseline }
```

```txt
.items-baseline-last { align-items: last baseline }
```

```txt
.items-stretch { align-items: stretch }
```

### align-self

```txt
.self-auto { align-self: auto }
```

```txt
.self-start { align-self: flex-start }
```

```txt
.self-end { align-self: flex-end }
```

```txt
.self-center { align-self: center }
```

```txt
.self-stretch { align-self: stretch }
```

```txt
.self-baseline { align-self: baseline }
```

### place-content

```txt
.place-content-center { place-content: center }
```

```txt
.place-content-start { place-content: flex-start }
```

```txt
.place-content-end { place-content: flex-end }
```

```txt
.place-content-between { place-content: space-between }
```

```txt
.place-content-around { place-content: space-around }
```

```txt
.place-content-evenly { place-content: space-evenly }
```

```txt
.place-content-baseline { place-content: baseline }
```

```txt
.place-content-stretch { place-content: stretch }
```

### place-items

```txt
.place-items-start { place-items: start }
```

```txt
.place-items-end { place-items: end }
```

```txt
.place-items-center { place-items: center }
```

```txt
.place-items-baseline { place-items: baseline }
```

```txt
.place-items-stretch { place-items: stretch }
```

### place-self

```txt
.place-self-auto { place-self: auto }
```

```txt
.place-self-start { place-self: start }
```

```txt
.place-self-end { place-self: end }
```

```txt
.place-self-center { place-self: center }
```

```txt
.place-self-stretch { place-self: stretch }
```

## Spacing

### padding

```txt
.p-auto { padding: auto }
```

```txt
.p-px { padding: 1px }
```

```txt
.-p-px { padding: -1px }
```

```txt
.p-full { padding: 100% }
```

```txt
.-p-full { padding: -100% }
```

```txt
.p-screen { padding: 100vw }
```

```txt
.p-dvw { padding: 100vw }
```

```txt
.p-dvh { padding: 100vh }
```

```txt
.p-lvw { padding: 100lvw }
```

```txt
.p-lvh { padding: 100lvh }
```

```txt
.p-svw { padding: 100svw }
```

```txt
.p-svh { padding: 100svh }
```

```txt
.p-min { padding: min-content }
```

```txt
.p-max { padding: max-content }
```

```txt
.p-fit { padding: fit-content }
```

```txt
.p-3xs { padding: 256px }
```

```txt
.p-2xs { padding: 288px }
```

```txt
.p-xs { padding: 320px }
```

```txt
.p-sm { padding: 384px }
```

```txt
.p-md { padding: 448px }
```

```txt
.p-lg { padding: 512px }
```

```txt
.p-xl { padding: 576px }
```

```txt
.p-2xl { padding: 672px }
```

```txt
.p-3xl { padding: 768px }
```

```txt
.p-4xl { padding: 896px }
```

```txt
.p-5xl { padding: 1024px }
```

```txt
.p-6xl { padding: 1152px }
```

```txt
.p-7xl { padding: 1280px }
```

```txt
.p-<number> { padding: calc(<number> * 4px) }
```

```txt
.-p-<number> { padding: calc(-<number> * 4px) }
```

```txt
.p-[<value>] { padding: <value> }
```

```txt
.p-(<custom-property>) { padding: var(<custom-property>) }
```

```txt
.px-auto { padding-inline: auto }
```

```txt
.px-px { padding-inline: 1px }
```

```txt
.-px-px { padding-inline: -1px }
```

```txt
.px-full { padding-inline: 100% }
```

```txt
.-px-full { padding-inline: -100% }
```

```txt
.px-screen { padding-inline: 100vw }
```

```txt
.px-dvw { padding-inline: 100vw }
```

```txt
.px-dvh { padding-inline: 100vh }
```

```txt
.px-lvw { padding-inline: 100lvw }
```

```txt
.px-lvh { padding-inline: 100lvh }
```

```txt
.px-svw { padding-inline: 100svw }
```

```txt
.px-svh { padding-inline: 100svh }
```

```txt
.px-min { padding-inline: min-content }
```

```txt
.px-max { padding-inline: max-content }
```

```txt
.px-fit { padding-inline: fit-content }
```

```txt
.px-3xs { padding-inline: 256px }
```

```txt
.px-2xs { padding-inline: 288px }
```

```txt
.px-xs { padding-inline: 320px }
```

```txt
.px-sm { padding-inline: 384px }
```

```txt
.px-md { padding-inline: 448px }
```

```txt
.px-lg { padding-inline: 512px }
```

```txt
.px-xl { padding-inline: 576px }
```

```txt
.px-2xl { padding-inline: 672px }
```

```txt
.px-3xl { padding-inline: 768px }
```

```txt
.px-4xl { padding-inline: 896px }
```

```txt
.px-5xl { padding-inline: 1024px }
```

```txt
.px-6xl { padding-inline: 1152px }
```

```txt
.px-7xl { padding-inline: 1280px }
```

```txt
.px-<number> { padding-inline: calc(<number> * 4px) }
```

```txt
.-px-<number> { padding-inline: calc(-<number> * 4px) }
```

```txt
.px-[<value>] { padding-inline: <value> }
```

```txt
.px-(<custom-property>) { padding-inline: var(<custom-property>) }
```

```txt
.py-auto { padding-block: auto }
```

```txt
.py-px { padding-block: 1px }
```

```txt
.-py-px { padding-block: -1px }
```

```txt
.py-full { padding-block: 100% }
```

```txt
.-py-full { padding-block: -100% }
```

```txt
.py-screen { padding-block: 100vw }
```

```txt
.py-dvw { padding-block: 100vw }
```

```txt
.py-dvh { padding-block: 100vh }
```

```txt
.py-lvw { padding-block: 100lvw }
```

```txt
.py-lvh { padding-block: 100lvh }
```

```txt
.py-svw { padding-block: 100svw }
```

```txt
.py-svh { padding-block: 100svh }
```

```txt
.py-min { padding-block: min-content }
```

```txt
.py-max { padding-block: max-content }
```

```txt
.py-fit { padding-block: fit-content }
```

```txt
.py-3xs { padding-block: 256px }
```

```txt
.py-2xs { padding-block: 288px }
```

```txt
.py-xs { padding-block: 320px }
```

```txt
.py-sm { padding-block: 384px }
```

```txt
.py-md { padding-block: 448px }
```

```txt
.py-lg { padding-block: 512px }
```

```txt
.py-xl { padding-block: 576px }
```

```txt
.py-2xl { padding-block: 672px }
```

```txt
.py-3xl { padding-block: 768px }
```

```txt
.py-4xl { padding-block: 896px }
```

```txt
.py-5xl { padding-block: 1024px }
```

```txt
.py-6xl { padding-block: 1152px }
```

```txt
.py-7xl { padding-block: 1280px }
```

```txt
.py-<number> { padding-block: calc(<number> * 4px) }
```

```txt
.-py-<number> { padding-block: calc(-<number> * 4px) }
```

```txt
.py-[<value>] { padding-block: <value> }
```

```txt
.py-(<custom-property>) { padding-block: var(<custom-property>) }
```

```txt
.ps-auto { padding-inline-start: auto }
```

```txt
.ps-px { padding-inline-start: 1px }
```

```txt
.-ps-px { padding-inline-start: -1px }
```

```txt
.ps-full { padding-inline-start: 100% }
```

```txt
.-ps-full { padding-inline-start: -100% }
```

```txt
.ps-screen { padding-inline-start: 100vw }
```

```txt
.ps-dvw { padding-inline-start: 100vw }
```

```txt
.ps-dvh { padding-inline-start: 100vh }
```

```txt
.ps-lvw { padding-inline-start: 100lvw }
```

```txt
.ps-lvh { padding-inline-start: 100lvh }
```

```txt
.ps-svw { padding-inline-start: 100svw }
```

```txt
.ps-svh { padding-inline-start: 100svh }
```

```txt
.ps-min { padding-inline-start: min-content }
```

```txt
.ps-max { padding-inline-start: max-content }
```

```txt
.ps-fit { padding-inline-start: fit-content }
```

```txt
.ps-3xs { padding-inline-start: 256px }
```

```txt
.ps-2xs { padding-inline-start: 288px }
```

```txt
.ps-xs { padding-inline-start: 320px }
```

```txt
.ps-sm { padding-inline-start: 384px }
```

```txt
.ps-md { padding-inline-start: 448px }
```

```txt
.ps-lg { padding-inline-start: 512px }
```

```txt
.ps-xl { padding-inline-start: 576px }
```

```txt
.ps-2xl { padding-inline-start: 672px }
```

```txt
.ps-3xl { padding-inline-start: 768px }
```

```txt
.ps-4xl { padding-inline-start: 896px }
```

```txt
.ps-5xl { padding-inline-start: 1024px }
```

```txt
.ps-6xl { padding-inline-start: 1152px }
```

```txt
.ps-7xl { padding-inline-start: 1280px }
```

```txt
.ps-<number> { padding-inline-start: calc(<number> * 4px) }
```

```txt
.-ps-<number> { padding-inline-start: calc(-<number> * 4px) }
```

```txt
.ps-[<value>] { padding-inline-start: <value> }
```

```txt
.ps-(<custom-property>) { padding-inline-start: var(<custom-property>) }
```

```txt
.pe-auto { padding-inline-end: auto }
```

```txt
.pe-px { padding-inline-end: 1px }
```

```txt
.-pe-px { padding-inline-end: -1px }
```

```txt
.pe-full { padding-inline-end: 100% }
```

```txt
.-pe-full { padding-inline-end: -100% }
```

```txt
.pe-screen { padding-inline-end: 100vw }
```

```txt
.pe-dvw { padding-inline-end: 100vw }
```

```txt
.pe-dvh { padding-inline-end: 100vh }
```

```txt
.pe-lvw { padding-inline-end: 100lvw }
```

```txt
.pe-lvh { padding-inline-end: 100lvh }
```

```txt
.pe-svw { padding-inline-end: 100svw }
```

```txt
.pe-svh { padding-inline-end: 100svh }
```

```txt
.pe-min { padding-inline-end: min-content }
```

```txt
.pe-max { padding-inline-end: max-content }
```

```txt
.pe-fit { padding-inline-end: fit-content }
```

```txt
.pe-3xs { padding-inline-end: 256px }
```

```txt
.pe-2xs { padding-inline-end: 288px }
```

```txt
.pe-xs { padding-inline-end: 320px }
```

```txt
.pe-sm { padding-inline-end: 384px }
```

```txt
.pe-md { padding-inline-end: 448px }
```

```txt
.pe-lg { padding-inline-end: 512px }
```

```txt
.pe-xl { padding-inline-end: 576px }
```

```txt
.pe-2xl { padding-inline-end: 672px }
```

```txt
.pe-3xl { padding-inline-end: 768px }
```

```txt
.pe-4xl { padding-inline-end: 896px }
```

```txt
.pe-5xl { padding-inline-end: 1024px }
```

```txt
.pe-6xl { padding-inline-end: 1152px }
```

```txt
.pe-7xl { padding-inline-end: 1280px }
```

```txt
.pe-<number> { padding-inline-end: calc(<number> * 4px) }
```

```txt
.-pe-<number> { padding-inline-end: calc(-<number> * 4px) }
```

```txt
.pe-[<value>] { padding-inline-end: <value> }
```

```txt
.pe-(<custom-property>) { padding-inline-end: var(<custom-property>) }
```

```txt
.pt-auto { padding-top: auto }
```

```txt
.pt-px { padding-top: 1px }
```

```txt
.-pt-px { padding-top: -1px }
```

```txt
.pt-full { padding-top: 100% }
```

```txt
.-pt-full { padding-top: -100% }
```

```txt
.pt-screen { padding-top: 100vw }
```

```txt
.pt-dvw { padding-top: 100vw }
```

```txt
.pt-dvh { padding-top: 100vh }
```

```txt
.pt-lvw { padding-top: 100lvw }
```

```txt
.pt-lvh { padding-top: 100lvh }
```

```txt
.pt-svw { padding-top: 100svw }
```

```txt
.pt-svh { padding-top: 100svh }
```

```txt
.pt-min { padding-top: min-content }
```

```txt
.pt-max { padding-top: max-content }
```

```txt
.pt-fit { padding-top: fit-content }
```

```txt
.pt-3xs { padding-top: 256px }
```

```txt
.pt-2xs { padding-top: 288px }
```

```txt
.pt-xs { padding-top: 320px }
```

```txt
.pt-sm { padding-top: 384px }
```

```txt
.pt-md { padding-top: 448px }
```

```txt
.pt-lg { padding-top: 512px }
```

```txt
.pt-xl { padding-top: 576px }
```

```txt
.pt-2xl { padding-top: 672px }
```

```txt
.pt-3xl { padding-top: 768px }
```

```txt
.pt-4xl { padding-top: 896px }
```

```txt
.pt-5xl { padding-top: 1024px }
```

```txt
.pt-6xl { padding-top: 1152px }
```

```txt
.pt-7xl { padding-top: 1280px }
```

```txt
.pt-<number> { padding-top: calc(<number> * 4px) }
```

```txt
.-pt-<number> { padding-top: calc(-<number> * 4px) }
```

```txt
.pt-[<value>] { padding-top: <value> }
```

```txt
.pt-(<custom-property>) { padding-top: var(<custom-property>) }
```

```txt
.pr-auto { padding-right: auto }
```

```txt
.pr-px { padding-right: 1px }
```

```txt
.-pr-px { padding-right: -1px }
```

```txt
.pr-full { padding-right: 100% }
```

```txt
.-pr-full { padding-right: -100% }
```

```txt
.pr-screen { padding-right: 100vw }
```

```txt
.pr-dvw { padding-right: 100vw }
```

```txt
.pr-dvh { padding-right: 100vh }
```

```txt
.pr-lvw { padding-right: 100lvw }
```

```txt
.pr-lvh { padding-right: 100lvh }
```

```txt
.pr-svw { padding-right: 100svw }
```

```txt
.pr-svh { padding-right: 100svh }
```

```txt
.pr-min { padding-right: min-content }
```

```txt
.pr-max { padding-right: max-content }
```

```txt
.pr-fit { padding-right: fit-content }
```

```txt
.pr-3xs { padding-right: 256px }
```

```txt
.pr-2xs { padding-right: 288px }
```

```txt
.pr-xs { padding-right: 320px }
```

```txt
.pr-sm { padding-right: 384px }
```

```txt
.pr-md { padding-right: 448px }
```

```txt
.pr-lg { padding-right: 512px }
```

```txt
.pr-xl { padding-right: 576px }
```

```txt
.pr-2xl { padding-right: 672px }
```

```txt
.pr-3xl { padding-right: 768px }
```

```txt
.pr-4xl { padding-right: 896px }
```

```txt
.pr-5xl { padding-right: 1024px }
```

```txt
.pr-6xl { padding-right: 1152px }
```

```txt
.pr-7xl { padding-right: 1280px }
```

```txt
.pr-<number> { padding-right: calc(<number> * 4px) }
```

```txt
.-pr-<number> { padding-right: calc(-<number> * 4px) }
```

```txt
.pr-[<value>] { padding-right: <value> }
```

```txt
.pr-(<custom-property>) { padding-right: var(<custom-property>) }
```

```txt
.pb-auto { padding-bottom: auto }
```

```txt
.pb-px { padding-bottom: 1px }
```

```txt
.-pb-px { padding-bottom: -1px }
```

```txt
.pb-full { padding-bottom: 100% }
```

```txt
.-pb-full { padding-bottom: -100% }
```

```txt
.pb-screen { padding-bottom: 100vw }
```

```txt
.pb-dvw { padding-bottom: 100vw }
```

```txt
.pb-dvh { padding-bottom: 100vh }
```

```txt
.pb-lvw { padding-bottom: 100lvw }
```

```txt
.pb-lvh { padding-bottom: 100lvh }
```

```txt
.pb-svw { padding-bottom: 100svw }
```

```txt
.pb-svh { padding-bottom: 100svh }
```

```txt
.pb-min { padding-bottom: min-content }
```

```txt
.pb-max { padding-bottom: max-content }
```

```txt
.pb-fit { padding-bottom: fit-content }
```

```txt
.pb-3xs { padding-bottom: 256px }
```

```txt
.pb-2xs { padding-bottom: 288px }
```

```txt
.pb-xs { padding-bottom: 320px }
```

```txt
.pb-sm { padding-bottom: 384px }
```

```txt
.pb-md { padding-bottom: 448px }
```

```txt
.pb-lg { padding-bottom: 512px }
```

```txt
.pb-xl { padding-bottom: 576px }
```

```txt
.pb-2xl { padding-bottom: 672px }
```

```txt
.pb-3xl { padding-bottom: 768px }
```

```txt
.pb-4xl { padding-bottom: 896px }
```

```txt
.pb-5xl { padding-bottom: 1024px }
```

```txt
.pb-6xl { padding-bottom: 1152px }
```

```txt
.pb-7xl { padding-bottom: 1280px }
```

```txt
.pb-<number> { padding-bottom: calc(<number> * 4px) }
```

```txt
.-pb-<number> { padding-bottom: calc(-<number> * 4px) }
```

```txt
.pb-[<value>] { padding-bottom: <value> }
```

```txt
.pb-(<custom-property>) { padding-bottom: var(<custom-property>) }
```

```txt
.pl-auto { padding-left: auto }
```

```txt
.pl-px { padding-left: 1px }
```

```txt
.-pl-px { padding-left: -1px }
```

```txt
.pl-full { padding-left: 100% }
```

```txt
.-pl-full { padding-left: -100% }
```

```txt
.pl-screen { padding-left: 100vw }
```

```txt
.pl-dvw { padding-left: 100vw }
```

```txt
.pl-dvh { padding-left: 100vh }
```

```txt
.pl-lvw { padding-left: 100lvw }
```

```txt
.pl-lvh { padding-left: 100lvh }
```

```txt
.pl-svw { padding-left: 100svw }
```

```txt
.pl-svh { padding-left: 100svh }
```

```txt
.pl-min { padding-left: min-content }
```

```txt
.pl-max { padding-left: max-content }
```

```txt
.pl-fit { padding-left: fit-content }
```

```txt
.pl-3xs { padding-left: 256px }
```

```txt
.pl-2xs { padding-left: 288px }
```

```txt
.pl-xs { padding-left: 320px }
```

```txt
.pl-sm { padding-left: 384px }
```

```txt
.pl-md { padding-left: 448px }
```

```txt
.pl-lg { padding-left: 512px }
```

```txt
.pl-xl { padding-left: 576px }
```

```txt
.pl-2xl { padding-left: 672px }
```

```txt
.pl-3xl { padding-left: 768px }
```

```txt
.pl-4xl { padding-left: 896px }
```

```txt
.pl-5xl { padding-left: 1024px }
```

```txt
.pl-6xl { padding-left: 1152px }
```

```txt
.pl-7xl { padding-left: 1280px }
```

```txt
.pl-<number> { padding-left: calc(<number> * 4px) }
```

```txt
.-pl-<number> { padding-left: calc(-<number> * 4px) }
```

```txt
.pl-[<value>] { padding-left: <value> }
```

```txt
.pl-(<custom-property>) { padding-left: var(<custom-property>) }
```

### margin

```txt
.m-auto { margin: auto }
```

```txt
.m-px { margin: 1px }
```

```txt
.-m-px { margin: -1px }
```

```txt
.m-full { margin: 100% }
```

```txt
.-m-full { margin: -100% }
```

```txt
.m-screen { margin: 100vw }
```

```txt
.m-dvw { margin: 100vw }
```

```txt
.m-dvh { margin: 100vh }
```

```txt
.m-lvw { margin: 100lvw }
```

```txt
.m-lvh { margin: 100lvh }
```

```txt
.m-svw { margin: 100svw }
```

```txt
.m-svh { margin: 100svh }
```

```txt
.m-min { margin: min-content }
```

```txt
.m-max { margin: max-content }
```

```txt
.m-fit { margin: fit-content }
```

```txt
.m-3xs { margin: 256px }
```

```txt
.m-2xs { margin: 288px }
```

```txt
.m-xs { margin: 320px }
```

```txt
.m-sm { margin: 384px }
```

```txt
.m-md { margin: 448px }
```

```txt
.m-lg { margin: 512px }
```

```txt
.m-xl { margin: 576px }
```

```txt
.m-2xl { margin: 672px }
```

```txt
.m-3xl { margin: 768px }
```

```txt
.m-4xl { margin: 896px }
```

```txt
.m-5xl { margin: 1024px }
```

```txt
.m-6xl { margin: 1152px }
```

```txt
.m-7xl { margin: 1280px }
```

```txt
.m-<number> { margin: calc(<number> * 4px) }
```

```txt
.-m-<number> { margin: calc(-<number> * 4px) }
```

```txt
.m-[<value>] { margin: <value> }
```

```txt
.m-(<custom-property>) { margin: var(<custom-property>) }
```

```txt
.mx-auto { margin-inline: auto }
```

```txt
.mx-px { margin-inline: 1px }
```

```txt
.-mx-px { margin-inline: -1px }
```

```txt
.mx-full { margin-inline: 100% }
```

```txt
.-mx-full { margin-inline: -100% }
```

```txt
.mx-screen { margin-inline: 100vw }
```

```txt
.mx-dvw { margin-inline: 100vw }
```

```txt
.mx-dvh { margin-inline: 100vh }
```

```txt
.mx-lvw { margin-inline: 100lvw }
```

```txt
.mx-lvh { margin-inline: 100lvh }
```

```txt
.mx-svw { margin-inline: 100svw }
```

```txt
.mx-svh { margin-inline: 100svh }
```

```txt
.mx-min { margin-inline: min-content }
```

```txt
.mx-max { margin-inline: max-content }
```

```txt
.mx-fit { margin-inline: fit-content }
```

```txt
.mx-3xs { margin-inline: 256px }
```

```txt
.mx-2xs { margin-inline: 288px }
```

```txt
.mx-xs { margin-inline: 320px }
```

```txt
.mx-sm { margin-inline: 384px }
```

```txt
.mx-md { margin-inline: 448px }
```

```txt
.mx-lg { margin-inline: 512px }
```

```txt
.mx-xl { margin-inline: 576px }
```

```txt
.mx-2xl { margin-inline: 672px }
```

```txt
.mx-3xl { margin-inline: 768px }
```

```txt
.mx-4xl { margin-inline: 896px }
```

```txt
.mx-5xl { margin-inline: 1024px }
```

```txt
.mx-6xl { margin-inline: 1152px }
```

```txt
.mx-7xl { margin-inline: 1280px }
```

```txt
.mx-<number> { margin-inline: calc(<number> * 4px) }
```

```txt
.-mx-<number> { margin-inline: calc(-<number> * 4px) }
```

```txt
.mx-[<value>] { margin-inline: <value> }
```

```txt
.mx-(<custom-property>) { margin-inline: var(<custom-property>) }
```

```txt
.my-auto { margin-block: auto }
```

```txt
.my-px { margin-block: 1px }
```

```txt
.-my-px { margin-block: -1px }
```

```txt
.my-full { margin-block: 100% }
```

```txt
.-my-full { margin-block: -100% }
```

```txt
.my-screen { margin-block: 100vw }
```

```txt
.my-dvw { margin-block: 100vw }
```

```txt
.my-dvh { margin-block: 100vh }
```

```txt
.my-lvw { margin-block: 100lvw }
```

```txt
.my-lvh { margin-block: 100lvh }
```

```txt
.my-svw { margin-block: 100svw }
```

```txt
.my-svh { margin-block: 100svh }
```

```txt
.my-min { margin-block: min-content }
```

```txt
.my-max { margin-block: max-content }
```

```txt
.my-fit { margin-block: fit-content }
```

```txt
.my-3xs { margin-block: 256px }
```

```txt
.my-2xs { margin-block: 288px }
```

```txt
.my-xs { margin-block: 320px }
```

```txt
.my-sm { margin-block: 384px }
```

```txt
.my-md { margin-block: 448px }
```

```txt
.my-lg { margin-block: 512px }
```

```txt
.my-xl { margin-block: 576px }
```

```txt
.my-2xl { margin-block: 672px }
```

```txt
.my-3xl { margin-block: 768px }
```

```txt
.my-4xl { margin-block: 896px }
```

```txt
.my-5xl { margin-block: 1024px }
```

```txt
.my-6xl { margin-block: 1152px }
```

```txt
.my-7xl { margin-block: 1280px }
```

```txt
.my-<number> { margin-block: calc(<number> * 4px) }
```

```txt
.-my-<number> { margin-block: calc(-<number> * 4px) }
```

```txt
.my-[<value>] { margin-block: <value> }
```

```txt
.my-(<custom-property>) { margin-block: var(<custom-property>) }
```

```txt
.ms-auto { margin-inline-start: auto }
```

```txt
.ms-px { margin-inline-start: 1px }
```

```txt
.-ms-px { margin-inline-start: -1px }
```

```txt
.ms-full { margin-inline-start: 100% }
```

```txt
.-ms-full { margin-inline-start: -100% }
```

```txt
.ms-screen { margin-inline-start: 100vw }
```

```txt
.ms-dvw { margin-inline-start: 100vw }
```

```txt
.ms-dvh { margin-inline-start: 100vh }
```

```txt
.ms-lvw { margin-inline-start: 100lvw }
```

```txt
.ms-lvh { margin-inline-start: 100lvh }
```

```txt
.ms-svw { margin-inline-start: 100svw }
```

```txt
.ms-svh { margin-inline-start: 100svh }
```

```txt
.ms-min { margin-inline-start: min-content }
```

```txt
.ms-max { margin-inline-start: max-content }
```

```txt
.ms-fit { margin-inline-start: fit-content }
```

```txt
.ms-3xs { margin-inline-start: 256px }
```

```txt
.ms-2xs { margin-inline-start: 288px }
```

```txt
.ms-xs { margin-inline-start: 320px }
```

```txt
.ms-sm { margin-inline-start: 384px }
```

```txt
.ms-md { margin-inline-start: 448px }
```

```txt
.ms-lg { margin-inline-start: 512px }
```

```txt
.ms-xl { margin-inline-start: 576px }
```

```txt
.ms-2xl { margin-inline-start: 672px }
```

```txt
.ms-3xl { margin-inline-start: 768px }
```

```txt
.ms-4xl { margin-inline-start: 896px }
```

```txt
.ms-5xl { margin-inline-start: 1024px }
```

```txt
.ms-6xl { margin-inline-start: 1152px }
```

```txt
.ms-7xl { margin-inline-start: 1280px }
```

```txt
.ms-<number> { margin-inline-start: calc(<number> * 4px) }
```

```txt
.-ms-<number> { margin-inline-start: calc(-<number> * 4px) }
```

```txt
.ms-[<value>] { margin-inline-start: <value> }
```

```txt
.ms-(<custom-property>) { margin-inline-start: var(<custom-property>) }
```

```txt
.me-auto { margin-inline-end: auto }
```

```txt
.me-px { margin-inline-end: 1px }
```

```txt
.-me-px { margin-inline-end: -1px }
```

```txt
.me-full { margin-inline-end: 100% }
```

```txt
.-me-full { margin-inline-end: -100% }
```

```txt
.me-screen { margin-inline-end: 100vw }
```

```txt
.me-dvw { margin-inline-end: 100vw }
```

```txt
.me-dvh { margin-inline-end: 100vh }
```

```txt
.me-lvw { margin-inline-end: 100lvw }
```

```txt
.me-lvh { margin-inline-end: 100lvh }
```

```txt
.me-svw { margin-inline-end: 100svw }
```

```txt
.me-svh { margin-inline-end: 100svh }
```

```txt
.me-min { margin-inline-end: min-content }
```

```txt
.me-max { margin-inline-end: max-content }
```

```txt
.me-fit { margin-inline-end: fit-content }
```

```txt
.me-3xs { margin-inline-end: 256px }
```

```txt
.me-2xs { margin-inline-end: 288px }
```

```txt
.me-xs { margin-inline-end: 320px }
```

```txt
.me-sm { margin-inline-end: 384px }
```

```txt
.me-md { margin-inline-end: 448px }
```

```txt
.me-lg { margin-inline-end: 512px }
```

```txt
.me-xl { margin-inline-end: 576px }
```

```txt
.me-2xl { margin-inline-end: 672px }
```

```txt
.me-3xl { margin-inline-end: 768px }
```

```txt
.me-4xl { margin-inline-end: 896px }
```

```txt
.me-5xl { margin-inline-end: 1024px }
```

```txt
.me-6xl { margin-inline-end: 1152px }
```

```txt
.me-7xl { margin-inline-end: 1280px }
```

```txt
.me-<number> { margin-inline-end: calc(<number> * 4px) }
```

```txt
.-me-<number> { margin-inline-end: calc(-<number> * 4px) }
```

```txt
.me-[<value>] { margin-inline-end: <value> }
```

```txt
.me-(<custom-property>) { margin-inline-end: var(<custom-property>) }
```

```txt
.mt-auto { margin-top: auto }
```

```txt
.mt-px { margin-top: 1px }
```

```txt
.-mt-px { margin-top: -1px }
```

```txt
.mt-full { margin-top: 100% }
```

```txt
.-mt-full { margin-top: -100% }
```

```txt
.mt-screen { margin-top: 100vw }
```

```txt
.mt-dvw { margin-top: 100vw }
```

```txt
.mt-dvh { margin-top: 100vh }
```

```txt
.mt-lvw { margin-top: 100lvw }
```

```txt
.mt-lvh { margin-top: 100lvh }
```

```txt
.mt-svw { margin-top: 100svw }
```

```txt
.mt-svh { margin-top: 100svh }
```

```txt
.mt-min { margin-top: min-content }
```

```txt
.mt-max { margin-top: max-content }
```

```txt
.mt-fit { margin-top: fit-content }
```

```txt
.mt-3xs { margin-top: 256px }
```

```txt
.mt-2xs { margin-top: 288px }
```

```txt
.mt-xs { margin-top: 320px }
```

```txt
.mt-sm { margin-top: 384px }
```

```txt
.mt-md { margin-top: 448px }
```

```txt
.mt-lg { margin-top: 512px }
```

```txt
.mt-xl { margin-top: 576px }
```

```txt
.mt-2xl { margin-top: 672px }
```

```txt
.mt-3xl { margin-top: 768px }
```

```txt
.mt-4xl { margin-top: 896px }
```

```txt
.mt-5xl { margin-top: 1024px }
```

```txt
.mt-6xl { margin-top: 1152px }
```

```txt
.mt-7xl { margin-top: 1280px }
```

```txt
.mt-<number> { margin-top: calc(<number> * 4px) }
```

```txt
.-mt-<number> { margin-top: calc(-<number> * 4px) }
```

```txt
.mt-[<value>] { margin-top: <value> }
```

```txt
.mt-(<custom-property>) { margin-top: var(<custom-property>) }
```

```txt
.mr-auto { margin-right: auto }
```

```txt
.mr-px { margin-right: 1px }
```

```txt
.-mr-px { margin-right: -1px }
```

```txt
.mr-full { margin-right: 100% }
```

```txt
.-mr-full { margin-right: -100% }
```

```txt
.mr-screen { margin-right: 100vw }
```

```txt
.mr-dvw { margin-right: 100vw }
```

```txt
.mr-dvh { margin-right: 100vh }
```

```txt
.mr-lvw { margin-right: 100lvw }
```

```txt
.mr-lvh { margin-right: 100lvh }
```

```txt
.mr-svw { margin-right: 100svw }
```

```txt
.mr-svh { margin-right: 100svh }
```

```txt
.mr-min { margin-right: min-content }
```

```txt
.mr-max { margin-right: max-content }
```

```txt
.mr-fit { margin-right: fit-content }
```

```txt
.mr-3xs { margin-right: 256px }
```

```txt
.mr-2xs { margin-right: 288px }
```

```txt
.mr-xs { margin-right: 320px }
```

```txt
.mr-sm { margin-right: 384px }
```

```txt
.mr-md { margin-right: 448px }
```

```txt
.mr-lg { margin-right: 512px }
```

```txt
.mr-xl { margin-right: 576px }
```

```txt
.mr-2xl { margin-right: 672px }
```

```txt
.mr-3xl { margin-right: 768px }
```

```txt
.mr-4xl { margin-right: 896px }
```

```txt
.mr-5xl { margin-right: 1024px }
```

```txt
.mr-6xl { margin-right: 1152px }
```

```txt
.mr-7xl { margin-right: 1280px }
```

```txt
.mr-<number> { margin-right: calc(<number> * 4px) }
```

```txt
.-mr-<number> { margin-right: calc(-<number> * 4px) }
```

```txt
.mr-[<value>] { margin-right: <value> }
```

```txt
.mr-(<custom-property>) { margin-right: var(<custom-property>) }
```

```txt
.mb-auto { margin-bottom: auto }
```

```txt
.mb-px { margin-bottom: 1px }
```

```txt
.-mb-px { margin-bottom: -1px }
```

```txt
.mb-full { margin-bottom: 100% }
```

```txt
.-mb-full { margin-bottom: -100% }
```

```txt
.mb-screen { margin-bottom: 100vw }
```

```txt
.mb-dvw { margin-bottom: 100vw }
```

```txt
.mb-dvh { margin-bottom: 100vh }
```

```txt
.mb-lvw { margin-bottom: 100lvw }
```

```txt
.mb-lvh { margin-bottom: 100lvh }
```

```txt
.mb-svw { margin-bottom: 100svw }
```

```txt
.mb-svh { margin-bottom: 100svh }
```

```txt
.mb-min { margin-bottom: min-content }
```

```txt
.mb-max { margin-bottom: max-content }
```

```txt
.mb-fit { margin-bottom: fit-content }
```

```txt
.mb-3xs { margin-bottom: 256px }
```

```txt
.mb-2xs { margin-bottom: 288px }
```

```txt
.mb-xs { margin-bottom: 320px }
```

```txt
.mb-sm { margin-bottom: 384px }
```

```txt
.mb-md { margin-bottom: 448px }
```

```txt
.mb-lg { margin-bottom: 512px }
```

```txt
.mb-xl { margin-bottom: 576px }
```

```txt
.mb-2xl { margin-bottom: 672px }
```

```txt
.mb-3xl { margin-bottom: 768px }
```

```txt
.mb-4xl { margin-bottom: 896px }
```

```txt
.mb-5xl { margin-bottom: 1024px }
```

```txt
.mb-6xl { margin-bottom: 1152px }
```

```txt
.mb-7xl { margin-bottom: 1280px }
```

```txt
.mb-<number> { margin-bottom: calc(<number> * 4px) }
```

```txt
.-mb-<number> { margin-bottom: calc(-<number> * 4px) }
```

```txt
.mb-[<value>] { margin-bottom: <value> }
```

```txt
.mb-(<custom-property>) { margin-bottom: var(<custom-property>) }
```

```txt
.ml-auto { margin-left: auto }
```

```txt
.ml-px { margin-left: 1px }
```

```txt
.-ml-px { margin-left: -1px }
```

```txt
.ml-full { margin-left: 100% }
```

```txt
.-ml-full { margin-left: -100% }
```

```txt
.ml-screen { margin-left: 100vw }
```

```txt
.ml-dvw { margin-left: 100vw }
```

```txt
.ml-dvh { margin-left: 100vh }
```

```txt
.ml-lvw { margin-left: 100lvw }
```

```txt
.ml-lvh { margin-left: 100lvh }
```

```txt
.ml-svw { margin-left: 100svw }
```

```txt
.ml-svh { margin-left: 100svh }
```

```txt
.ml-min { margin-left: min-content }
```

```txt
.ml-max { margin-left: max-content }
```

```txt
.ml-fit { margin-left: fit-content }
```

```txt
.ml-3xs { margin-left: 256px }
```

```txt
.ml-2xs { margin-left: 288px }
```

```txt
.ml-xs { margin-left: 320px }
```

```txt
.ml-sm { margin-left: 384px }
```

```txt
.ml-md { margin-left: 448px }
```

```txt
.ml-lg { margin-left: 512px }
```

```txt
.ml-xl { margin-left: 576px }
```

```txt
.ml-2xl { margin-left: 672px }
```

```txt
.ml-3xl { margin-left: 768px }
```

```txt
.ml-4xl { margin-left: 896px }
```

```txt
.ml-5xl { margin-left: 1024px }
```

```txt
.ml-6xl { margin-left: 1152px }
```

```txt
.ml-7xl { margin-left: 1280px }
```

```txt
.ml-<number> { margin-left: calc(<number> * 4px) }
```

```txt
.-ml-<number> { margin-left: calc(-<number> * 4px) }
```

```txt
.ml-[<value>] { margin-left: <value> }
```

```txt
.ml-(<custom-property>) { margin-left: var(<custom-property>) }
```

```txt
.space-x-auto  > :not(:last-child) { margin-inline-end: auto }
```

```txt
.space-x-px  > :not(:last-child) { margin-inline-end: 1px }
```

```txt
.-space-x-px  > :not(:last-child) { margin-inline-end: -1px }
```

```txt
.space-x-full  > :not(:last-child) { margin-inline-end: 100% }
```

```txt
.-space-x-full  > :not(:last-child) { margin-inline-end: -100% }
```

```txt
.space-x-screen  > :not(:last-child) { margin-inline-end: 100vw }
```

```txt
.space-x-dvw  > :not(:last-child) { margin-inline-end: 100vw }
```

```txt
.space-x-dvh  > :not(:last-child) { margin-inline-end: 100vh }
```

```txt
.space-x-lvw  > :not(:last-child) { margin-inline-end: 100lvw }
```

```txt
.space-x-lvh  > :not(:last-child) { margin-inline-end: 100lvh }
```

```txt
.space-x-svw  > :not(:last-child) { margin-inline-end: 100svw }
```

```txt
.space-x-svh  > :not(:last-child) { margin-inline-end: 100svh }
```

```txt
.space-x-min  > :not(:last-child) { margin-inline-end: min-content }
```

```txt
.space-x-max  > :not(:last-child) { margin-inline-end: max-content }
```

```txt
.space-x-fit  > :not(:last-child) { margin-inline-end: fit-content }
```

```txt
.space-x-3xs  > :not(:last-child) { margin-inline-end: 256px }
```

```txt
.space-x-2xs  > :not(:last-child) { margin-inline-end: 288px }
```

```txt
.space-x-xs  > :not(:last-child) { margin-inline-end: 320px }
```

```txt
.space-x-sm  > :not(:last-child) { margin-inline-end: 384px }
```

```txt
.space-x-md  > :not(:last-child) { margin-inline-end: 448px }
```

```txt
.space-x-lg  > :not(:last-child) { margin-inline-end: 512px }
```

```txt
.space-x-xl  > :not(:last-child) { margin-inline-end: 576px }
```

```txt
.space-x-2xl  > :not(:last-child) { margin-inline-end: 672px }
```

```txt
.space-x-3xl  > :not(:last-child) { margin-inline-end: 768px }
```

```txt
.space-x-4xl  > :not(:last-child) { margin-inline-end: 896px }
```

```txt
.space-x-5xl  > :not(:last-child) { margin-inline-end: 1024px }
```

```txt
.space-x-6xl  > :not(:last-child) { margin-inline-end: 1152px }
```

```txt
.space-x-7xl  > :not(:last-child) { margin-inline-end: 1280px }
```

```txt
.space-x-<number>  > :not(:last-child) { margin-inline-end: calc(<number> * 4px) }
```

```txt
.-space-x-<number>  > :not(:last-child) { margin-inline-end: calc(-<number> * 4px) }
```

```txt
.space-x-[<value>]  > :not(:last-child) { margin-inline-end: <value> }
```

```txt
.space-x-(<custom-property>)  > :not(:last-child) { margin-inline-end: var(<custom-property>) }
```

```txt
.space-y-auto  > :not(:last-child) { margin-bottom: auto }
```

```txt
.space-y-px  > :not(:last-child) { margin-bottom: 1px }
```

```txt
.-space-y-px  > :not(:last-child) { margin-bottom: -1px }
```

```txt
.space-y-full  > :not(:last-child) { margin-bottom: 100% }
```

```txt
.-space-y-full  > :not(:last-child) { margin-bottom: -100% }
```

```txt
.space-y-screen  > :not(:last-child) { margin-bottom: 100vw }
```

```txt
.space-y-dvw  > :not(:last-child) { margin-bottom: 100vw }
```

```txt
.space-y-dvh  > :not(:last-child) { margin-bottom: 100vh }
```

```txt
.space-y-lvw  > :not(:last-child) { margin-bottom: 100lvw }
```

```txt
.space-y-lvh  > :not(:last-child) { margin-bottom: 100lvh }
```

```txt
.space-y-svw  > :not(:last-child) { margin-bottom: 100svw }
```

```txt
.space-y-svh  > :not(:last-child) { margin-bottom: 100svh }
```

```txt
.space-y-min  > :not(:last-child) { margin-bottom: min-content }
```

```txt
.space-y-max  > :not(:last-child) { margin-bottom: max-content }
```

```txt
.space-y-fit  > :not(:last-child) { margin-bottom: fit-content }
```

```txt
.space-y-3xs  > :not(:last-child) { margin-bottom: 256px }
```

```txt
.space-y-2xs  > :not(:last-child) { margin-bottom: 288px }
```

```txt
.space-y-xs  > :not(:last-child) { margin-bottom: 320px }
```

```txt
.space-y-sm  > :not(:last-child) { margin-bottom: 384px }
```

```txt
.space-y-md  > :not(:last-child) { margin-bottom: 448px }
```

```txt
.space-y-lg  > :not(:last-child) { margin-bottom: 512px }
```

```txt
.space-y-xl  > :not(:last-child) { margin-bottom: 576px }
```

```txt
.space-y-2xl  > :not(:last-child) { margin-bottom: 672px }
```

```txt
.space-y-3xl  > :not(:last-child) { margin-bottom: 768px }
```

```txt
.space-y-4xl  > :not(:last-child) { margin-bottom: 896px }
```

```txt
.space-y-5xl  > :not(:last-child) { margin-bottom: 1024px }
```

```txt
.space-y-6xl  > :not(:last-child) { margin-bottom: 1152px }
```

```txt
.space-y-7xl  > :not(:last-child) { margin-bottom: 1280px }
```

```txt
.space-y-<number>  > :not(:last-child) { margin-bottom: calc(<number> * 4px) }
```

```txt
.-space-y-<number>  > :not(:last-child) { margin-bottom: calc(-<number> * 4px) }
```

```txt
.space-y-[<value>]  > :not(:last-child) { margin-bottom: <value> }
```

```txt
.space-y-(<custom-property>)  > :not(:last-child) { margin-bottom: var(<custom-property>) }
```

## Sizing

### width

```txt
.w-auto { width: auto }
```

```txt
.w-px { width: 1px }
```

```txt
.-w-px { width: -1px }
```

```txt
.w-full { width: 100% }
```

```txt
.-w-full { width: -100% }
```

```txt
.w-screen { width: 100vw }
```

```txt
.w-dvw { width: 100vw }
```

```txt
.w-dvh { width: 100vh }
```

```txt
.w-lvw { width: 100lvw }
```

```txt
.w-lvh { width: 100lvh }
```

```txt
.w-svw { width: 100svw }
```

```txt
.w-svh { width: 100svh }
```

```txt
.w-min { width: min-content }
```

```txt
.w-max { width: max-content }
```

```txt
.w-fit { width: fit-content }
```

```txt
.w-3xs { width: 256px }
```

```txt
.w-2xs { width: 288px }
```

```txt
.w-xs { width: 320px }
```

```txt
.w-sm { width: 384px }
```

```txt
.w-md { width: 448px }
```

```txt
.w-lg { width: 512px }
```

```txt
.w-xl { width: 576px }
```

```txt
.w-2xl { width: 672px }
```

```txt
.w-3xl { width: 768px }
```

```txt
.w-4xl { width: 896px }
```

```txt
.w-5xl { width: 1024px }
```

```txt
.w-6xl { width: 1152px }
```

```txt
.w-7xl { width: 1280px }
```

```txt
.w-<number> { width: calc(<number> * 4px) }
```

```txt
.-w-<number> { width: calc(-<number> * 4px) }
```

```txt
.w-<fraction> { width: calc(<fraction> * 100%) }
```

```txt
.w-[<value>] { width: <value> }
```

```txt
.w-(<custom-property>) { width: var(<custom-property>) }
```

### min-width

```txt
.min-w-auto { min-width: auto }
```

```txt
.min-w-px { min-width: 1px }
```

```txt
.-min-w-px { min-width: -1px }
```

```txt
.min-w-full { min-width: 100% }
```

```txt
.-min-w-full { min-width: -100% }
```

```txt
.min-w-screen { min-width: 100vw }
```

```txt
.min-w-dvw { min-width: 100vw }
```

```txt
.min-w-dvh { min-width: 100vh }
```

```txt
.min-w-lvw { min-width: 100lvw }
```

```txt
.min-w-lvh { min-width: 100lvh }
```

```txt
.min-w-svw { min-width: 100svw }
```

```txt
.min-w-svh { min-width: 100svh }
```

```txt
.min-w-min { min-width: min-content }
```

```txt
.min-w-max { min-width: max-content }
```

```txt
.min-w-fit { min-width: fit-content }
```

```txt
.min-w-3xs { min-width: 256px }
```

```txt
.min-w-2xs { min-width: 288px }
```

```txt
.min-w-xs { min-width: 320px }
```

```txt
.min-w-sm { min-width: 384px }
```

```txt
.min-w-md { min-width: 448px }
```

```txt
.min-w-lg { min-width: 512px }
```

```txt
.min-w-xl { min-width: 576px }
```

```txt
.min-w-2xl { min-width: 672px }
```

```txt
.min-w-3xl { min-width: 768px }
```

```txt
.min-w-4xl { min-width: 896px }
```

```txt
.min-w-5xl { min-width: 1024px }
```

```txt
.min-w-6xl { min-width: 1152px }
```

```txt
.min-w-7xl { min-width: 1280px }
```

```txt
.min-w-<number> { min-width: calc(<number> * 4px) }
```

```txt
.-min-w-<number> { min-width: calc(-<number> * 4px) }
```

```txt
.min-w-<fraction> { min-width: calc(<fraction> * 100%) }
```

```txt
.min-w-[<value>] { min-width: <value> }
```

```txt
.min-w-(<custom-property>) { min-width: var(<custom-property>) }
```

### max-width

```txt
.max-w-auto { max-width: auto }
```

```txt
.max-w-px { max-width: 1px }
```

```txt
.-max-w-px { max-width: -1px }
```

```txt
.max-w-full { max-width: 100% }
```

```txt
.-max-w-full { max-width: -100% }
```

```txt
.max-w-screen { max-width: 100vw }
```

```txt
.max-w-dvw { max-width: 100vw }
```

```txt
.max-w-dvh { max-width: 100vh }
```

```txt
.max-w-lvw { max-width: 100lvw }
```

```txt
.max-w-lvh { max-width: 100lvh }
```

```txt
.max-w-svw { max-width: 100svw }
```

```txt
.max-w-svh { max-width: 100svh }
```

```txt
.max-w-min { max-width: min-content }
```

```txt
.max-w-max { max-width: max-content }
```

```txt
.max-w-fit { max-width: fit-content }
```

```txt
.max-w-3xs { max-width: 256px }
```

```txt
.max-w-2xs { max-width: 288px }
```

```txt
.max-w-xs { max-width: 320px }
```

```txt
.max-w-sm { max-width: 384px }
```

```txt
.max-w-md { max-width: 448px }
```

```txt
.max-w-lg { max-width: 512px }
```

```txt
.max-w-xl { max-width: 576px }
```

```txt
.max-w-2xl { max-width: 672px }
```

```txt
.max-w-3xl { max-width: 768px }
```

```txt
.max-w-4xl { max-width: 896px }
```

```txt
.max-w-5xl { max-width: 1024px }
```

```txt
.max-w-6xl { max-width: 1152px }
```

```txt
.max-w-7xl { max-width: 1280px }
```

```txt
.max-w-<number> { max-width: calc(<number> * 4px) }
```

```txt
.-max-w-<number> { max-width: calc(-<number> * 4px) }
```

```txt
.max-w-<fraction> { max-width: calc(<fraction> * 100%) }
```

```txt
.max-w-[<value>] { max-width: <value> }
```

```txt
.max-w-(<custom-property>) { max-width: var(<custom-property>) }
```

### height

```txt
.h-auto { height: auto }
```

```txt
.h-px { height: 1px }
```

```txt
.-h-px { height: -1px }
```

```txt
.h-full { height: 100% }
```

```txt
.-h-full { height: -100% }
```

```txt
.h-screen { height: 100vw }
```

```txt
.h-dvw { height: 100vw }
```

```txt
.h-dvh { height: 100vh }
```

```txt
.h-lvw { height: 100lvw }
```

```txt
.h-lvh { height: 100lvh }
```

```txt
.h-svw { height: 100svw }
```

```txt
.h-svh { height: 100svh }
```

```txt
.h-min { height: min-content }
```

```txt
.h-max { height: max-content }
```

```txt
.h-fit { height: fit-content }
```

```txt
.h-3xs { height: 256px }
```

```txt
.h-2xs { height: 288px }
```

```txt
.h-xs { height: 320px }
```

```txt
.h-sm { height: 384px }
```

```txt
.h-md { height: 448px }
```

```txt
.h-lg { height: 512px }
```

```txt
.h-xl { height: 576px }
```

```txt
.h-2xl { height: 672px }
```

```txt
.h-3xl { height: 768px }
```

```txt
.h-4xl { height: 896px }
```

```txt
.h-5xl { height: 1024px }
```

```txt
.h-6xl { height: 1152px }
```

```txt
.h-7xl { height: 1280px }
```

```txt
.h-<number> { height: calc(<number> * 4px) }
```

```txt
.-h-<number> { height: calc(-<number> * 4px) }
```

```txt
.h-<fraction> { height: calc(<fraction> * 100%) }
```

```txt
.h-[<value>] { height: <value> }
```

```txt
.h-(<custom-property>) { height: var(<custom-property>) }
```

### min-height

```txt
.min-h-auto { min-height: auto }
```

```txt
.min-h-px { min-height: 1px }
```

```txt
.-min-h-px { min-height: -1px }
```

```txt
.min-h-full { min-height: 100% }
```

```txt
.-min-h-full { min-height: -100% }
```

```txt
.min-h-screen { min-height: 100vw }
```

```txt
.min-h-dvw { min-height: 100vw }
```

```txt
.min-h-dvh { min-height: 100vh }
```

```txt
.min-h-lvw { min-height: 100lvw }
```

```txt
.min-h-lvh { min-height: 100lvh }
```

```txt
.min-h-svw { min-height: 100svw }
```

```txt
.min-h-svh { min-height: 100svh }
```

```txt
.min-h-min { min-height: min-content }
```

```txt
.min-h-max { min-height: max-content }
```

```txt
.min-h-fit { min-height: fit-content }
```

```txt
.min-h-3xs { min-height: 256px }
```

```txt
.min-h-2xs { min-height: 288px }
```

```txt
.min-h-xs { min-height: 320px }
```

```txt
.min-h-sm { min-height: 384px }
```

```txt
.min-h-md { min-height: 448px }
```

```txt
.min-h-lg { min-height: 512px }
```

```txt
.min-h-xl { min-height: 576px }
```

```txt
.min-h-2xl { min-height: 672px }
```

```txt
.min-h-3xl { min-height: 768px }
```

```txt
.min-h-4xl { min-height: 896px }
```

```txt
.min-h-5xl { min-height: 1024px }
```

```txt
.min-h-6xl { min-height: 1152px }
```

```txt
.min-h-7xl { min-height: 1280px }
```

```txt
.min-h-<number> { min-height: calc(<number> * 4px) }
```

```txt
.-min-h-<number> { min-height: calc(-<number> * 4px) }
```

```txt
.min-h-<fraction> { min-height: calc(<fraction> * 100%) }
```

```txt
.min-h-[<value>] { min-height: <value> }
```

```txt
.min-h-(<custom-property>) { min-height: var(<custom-property>) }
```

### max-height

```txt
.max-h-auto { max-height: auto }
```

```txt
.max-h-px { max-height: 1px }
```

```txt
.-max-h-px { max-height: -1px }
```

```txt
.max-h-full { max-height: 100% }
```

```txt
.-max-h-full { max-height: -100% }
```

```txt
.max-h-screen { max-height: 100vw }
```

```txt
.max-h-dvw { max-height: 100vw }
```

```txt
.max-h-dvh { max-height: 100vh }
```

```txt
.max-h-lvw { max-height: 100lvw }
```

```txt
.max-h-lvh { max-height: 100lvh }
```

```txt
.max-h-svw { max-height: 100svw }
```

```txt
.max-h-svh { max-height: 100svh }
```

```txt
.max-h-min { max-height: min-content }
```

```txt
.max-h-max { max-height: max-content }
```

```txt
.max-h-fit { max-height: fit-content }
```

```txt
.max-h-3xs { max-height: 256px }
```

```txt
.max-h-2xs { max-height: 288px }
```

```txt
.max-h-xs { max-height: 320px }
```

```txt
.max-h-sm { max-height: 384px }
```

```txt
.max-h-md { max-height: 448px }
```

```txt
.max-h-lg { max-height: 512px }
```

```txt
.max-h-xl { max-height: 576px }
```

```txt
.max-h-2xl { max-height: 672px }
```

```txt
.max-h-3xl { max-height: 768px }
```

```txt
.max-h-4xl { max-height: 896px }
```

```txt
.max-h-5xl { max-height: 1024px }
```

```txt
.max-h-6xl { max-height: 1152px }
```

```txt
.max-h-7xl { max-height: 1280px }
```

```txt
.max-h-<number> { max-height: calc(<number> * 4px) }
```

```txt
.-max-h-<number> { max-height: calc(-<number> * 4px) }
```

```txt
.max-h-<fraction> { max-height: calc(<fraction> * 100%) }
```

```txt
.max-h-[<value>] { max-height: <value> }
```

```txt
.max-h-(<custom-property>) { max-height: var(<custom-property>) }
```

## Typography

### font-family

```txt
.font-sans { font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" }
```

```txt
.font-serif { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif }
```

```txt
.font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace }
```

```txt
.font-[<value>] { font-family: <value> }
```

```txt
.font-(<custom-property>) { font-family: var(<custom-property>) }
```

### font-size

```txt
.text-xs {
  font-size: 12px;
  line-height: 1.333;
}
```

```txt
.text-sm {
  font-size: 14px;
  line-height: 1.429;
}
```

```txt
.text-base {
  font-size: 16px;
  line-height: 1.5;
}
```

```txt
.text-lg {
  font-size: 18px;
  line-height: 1.555;
}
```

```txt
.text-xl {
  font-size: 20px;
  line-height: 1.4;
}
```

```txt
.text-2xl {
  font-size: 24px;
  line-height: 1.333;
}
```

```txt
.text-3xl {
  font-size: 30px;
  line-height: 1.2;
}
```

```txt
.text-4xl {
  font-size: 36px;
  line-height: 1.111;
}
```

```txt
.text-5xl {
  font-size: 48px;
  line-height: 1;
}
```

```txt
.text-6xl {
  font-size: 60px;
  line-height: 1;
}
```

```txt
.text-7xl {
  font-size: 72px;
  line-height: 1;
}
```

```txt
.text-8xl {
  font-size: 96px;
  line-height: 1;
}
```

```txt
.text-9xl {
  font-size: 128px;
  line-height: 1;
}
```

```txt
.text-[<value>] { font-size: <value> }
```

```txt
.text-(<custom-property>) { font-size: var(<custom-property>) }
```

### font-smoothing

```txt
.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

```txt
.subpixel-antialiased {
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
```

### font-style

```txt
.italic { font-style: italic }
```

```txt
.not-italic { font-style: normal }
```

### font-weight

```txt
.font-thin { font-weight: 100 }
```

```txt
.font-extralight { font-weight: 200 }
```

```txt
.font-light { font-weight: 300 }
```

```txt
.font-normal { font-weight: 400 }
```

```txt
.font-medium { font-weight: 500 }
```

```txt
.font-semibold { font-weight: 600 }
```

```txt
.font-bold { font-weight: 700 }
```

```txt
.font-extrabold { font-weight: 800 }
```

```txt
.font-black { font-weight: 900 }
```

### font-stretch

```txt
.font-stretch-ultra-condensed { font-stretch: ultra-condensed }
```

```txt
.font-stretch-extra-condensed { font-stretch: extra-condensed }
```

```txt
.font-stretch-condensed { font-stretch: condensed }
```

```txt
.font-stretch-semi-condensed { font-stretch: semi-condensed }
```

```txt
.font-stretch-normal { font-stretch: normal }
```

```txt
.font-stretch-semi-expanded { font-stretch: semi-expanded }
```

```txt
.font-stretch-expanded { font-stretch: expanded }
```

```txt
.font-stretch-extra-expanded { font-stretch: extra-expanded }
```

```txt
.font-stretch-ultra-expanded { font-stretch: ultra-expanded }
```

### font-variant-numeric

```txt
.normal-nums { font-variant-numeric: normal }
```

```txt
.ordinal { font-variant-numeric: ordinal }
```

```txt
.slashed-zero { font-variant-numeric: slashed-zero }
```

```txt
.lining-nums { font-variant-numeric: lining-nums }
```

```txt
.oldstyle-nums { font-variant-numeric: oldstyle-nums }
```

```txt
.proportional-nums { font-variant-numeric: proportional-nums }
```

```txt
.tabular-nums { font-variant-numeric: tabular-nums }
```

```txt
.diagonal-fractions { font-variant-numeric: diagonal-fractions }
```

```txt
.stacked-fractions { font-variant-numeric: stacked-fractions }
```

### letter-spacing

```txt
.tracking-tighter { letter-spacing: -0.05em }
```

```txt
.tracking-tight { letter-spacing: -0.025em }
```

```txt
.tracking-normal { letter-spacing: 0px }
```

```txt
.tracking-wide { letter-spacing: 0.025em }
```

```txt
.tracking-wider { letter-spacing: 0.05em }
```

```txt
.tracking-widest { letter-spacing: 0.1em }
```

```txt
.tracking-[<value>] { letter-spacing: <value> }
```

```txt
.tracking-(<custom-property>) { letter-spacing: var(<custom-property>) }
```

### line-clamp

```txt
.line-clamp-none {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: none;
}
```

```txt
.line-clamp-[<value>] {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: <value>;
}
```

```txt
.line-clamp-(<custom-property>) {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(<custom-property>);
}
```

### line-height

```txt
.leading-none { line-height: 1 }
```

```txt
.leading-tight { line-height: 1.25 }
```

```txt
.leading-snug { line-height: 1.375 }
```

```txt
.leading-normal { line-height: 1.5 }
```

```txt
.leading-relaxed { line-height: 1.625 }
```

```txt
.leading-loose { line-height: 2 }
```

### list-style-image

```txt
.list-image-none { list-style-image: none }
```

```txt
.list-image-[<value>] { list-style-image: <value> }
```

```txt
.list-image-(<custom-property>) { list-style-image: var(<custom-property>) }
```

### list-style-position

```txt
.list-inside { list-style-position: inside }
```

```txt
.list-outside { list-style-position: outside }
```

### list-style-type

```txt
.list-disc { list-style-type: disc }
```

```txt
.list-decimal { list-style-type: decimal }
```

```txt
.list-none { list-style-type: none }
```

```txt
.list-[<value>] { list-style-type: <value> }
```

```txt
.list-(<custom-property>) { list-style-type: var(<custom-property>) }
```

### text-align

```txt
.text-left { text-align: left }
```

```txt
.text-center { text-align: center }
```

```txt
.text-right { text-align: right }
```

```txt
.text-justify { text-align: justify }
```

```txt
.text-start { text-align: start }
```

```txt
.text-end { text-align: end }
```

### color

```txt
.text-<color> { color: oklch(...) }
```

### text-decoration-line

```txt
.underline { text-decoration-line: underline }
```

```txt
.overline { text-decoration-line: overline }
```

```txt
.line-through { text-decoration-line: line-through }
```

```txt
.no-underline { text-decoration-line: none }
```

### text-decoration-color

```txt
.decoration-<color> { text-decoration-color: oklch(...) }
```

### text-decoration-style

```txt
.decoration-solid { text-decoration-style: solid }
```

```txt
.decoration-double { text-decoration-style: double }
```

```txt
.decoration-dotted { text-decoration-style: dotted }
```

```txt
.decoration-dashed { text-decoration-style: dashed }
```

```txt
.decoration-wavy { text-decoration-style: wavy }
```

### text-decoration-thickness

```txt
.decoration-auto { text-decoration-thickness: auto }
```

```txt
.decoration-from-font { text-decoration-thickness: from-font }
```

```txt
.decoration-<number> { text-decoration-thickness: <number>px }
```

```txt
.-decoration-<number> { text-decoration-thickness: -<number>px }
```

```txt
.decoration-[<value>] { text-decoration-thickness: <value> }
```

```txt
.decoration-(<custom-property>) { text-decoration-thickness: var(<custom-property>) }
```

### text-underline-offset

```txt
.underline-offset-auto { text-underline-offset: auto }
```

```txt
.underline-offset-<number> { text-underline-offset: <number>px }
```

```txt
.-underline-offset-<number> { text-underline-offset: -<number>px }
```

```txt
.underline-offset-[<value>] { text-underline-offset: <value> }
```

```txt
.underline-offset-(<custom-property>) { text-underline-offset: var(<custom-property>) }
```

### text-transform

```txt
.uppercase { text-transform: uppercase }
```

```txt
.lowercase { text-transform: lowercase }
```

```txt
.capitalize { text-transform: capitalize }
```

```txt
.normal-case { text-transform: none }
```

### text-overflow

```txt
.overflow-clip { text-overflow: clip }
```

```txt
.truncate {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
```

```txt
.overflow-ellipsis { text-overflow: ellipsis }
```

### text-wrap

```txt
.text-wrap { text-wrap: wrap }
```

```txt
.text-nowrap { text-wrap: nowrap }
```

```txt
.text-balance { text-wrap: balance }
```

```txt
.text-pretty { text-wrap: pretty }
```

### text-indent

```txt
.indent-auto { text-indent: auto }
```

```txt
.indent-px { text-indent: 1px }
```

```txt
.-indent-px { text-indent: -1px }
```

```txt
.indent-full { text-indent: 100% }
```

```txt
.-indent-full { text-indent: -100% }
```

```txt
.indent-screen { text-indent: 100vw }
```

```txt
.indent-dvw { text-indent: 100vw }
```

```txt
.indent-dvh { text-indent: 100vh }
```

```txt
.indent-lvw { text-indent: 100lvw }
```

```txt
.indent-lvh { text-indent: 100lvh }
```

```txt
.indent-svw { text-indent: 100svw }
```

```txt
.indent-svh { text-indent: 100svh }
```

```txt
.indent-min { text-indent: min-content }
```

```txt
.indent-max { text-indent: max-content }
```

```txt
.indent-fit { text-indent: fit-content }
```

```txt
.indent-3xs { text-indent: 256px }
```

```txt
.indent-2xs { text-indent: 288px }
```

```txt
.indent-xs { text-indent: 320px }
```

```txt
.indent-sm { text-indent: 384px }
```

```txt
.indent-md { text-indent: 448px }
```

```txt
.indent-lg { text-indent: 512px }
```

```txt
.indent-xl { text-indent: 576px }
```

```txt
.indent-2xl { text-indent: 672px }
```

```txt
.indent-3xl { text-indent: 768px }
```

```txt
.indent-4xl { text-indent: 896px }
```

```txt
.indent-5xl { text-indent: 1024px }
```

```txt
.indent-6xl { text-indent: 1152px }
```

```txt
.indent-7xl { text-indent: 1280px }
```

```txt
.indent-<number> { text-indent: calc(<number> * 4px) }
```

```txt
.-indent-<number> { text-indent: calc(-<number> * 4px) }
```

```txt
.indent-[<value>] { text-indent: <value> }
```

```txt
.indent-(<custom-property>) { text-indent: var(<custom-property>) }
```

### vertical-align

```txt
.align-baseline { vertical-align: baseline }
```

```txt
.align-top { vertical-align: top }
```

```txt
.align-middle { vertical-align: middle }
```

```txt
.align-bottom { vertical-align: bottom }
```

```txt
.align-text-top { vertical-align: text-top }
```

```txt
.align-text-bottom { vertical-align: text-bottom }
```

```txt
.align-sub { vertical-align: sub }
```

```txt
.align-super { vertical-align: super }
```

```txt
.align-[<value>] { vertical-align: <value> }
```

```txt
.align-(<custom-property>) { vertical-align: var(<custom-property>) }
```

### white-space

```txt
.whitespace-normal { white-space: normal }
```

```txt
.whitespace-nowrap { white-space: nowrap }
```

```txt
.whitespace-pre { white-space: pre }
```

```txt
.whitespace-pre-line { white-space: pre-line }
```

```txt
.whitespace-pre-wrap { white-space: pre-wrap }
```

```txt
.whitespace-break-spaces { white-space: break-spaces }
```

### word-break

```txt
.break-normal { word-break: normal }
```

```txt
.break-all { word-break: break-all }
```

```txt
.break-keep { word-break: keep-all }
```

### overflow-wrap

```txt
.wrap-break-word { overflow-wrap: break-word }
```

```txt
.wrap-anywhere { overflow-wrap: anywhere }
```

```txt
.wrap-normal { overflow-wrap: normal }
```

### hyphens

```txt
.hyphens-none { hyphens: none }
```

```txt
.hyphens-manual { hyphens: manual }
```

```txt
.hyphens-auto { hyphens: auto }
```

### content

```txt
.content-none { content: none }
```

```txt
.content-[<value>] { content: <value> }
```

```txt
.content-(<custom-property>) { content: var(<custom-property>) }
```

## Backgrounds

### background-attachment

```txt
.bg-fixed { background-attachment: fixed }
```

```txt
.bg-local { background-attachment: local }
```

```txt
.bg-scroll { background-attachment: scroll }
```

### background-clip

```txt
.bg-clip-border { background-clip: border-box }
```

```txt
.bg-clip-padding { background-clip: padding-box }
```

```txt
.bg-clip-content { background-clip: content-box }
```

```txt
.bg-clip-text { background-clip: text }
```

### background-color

```txt
.bg-<color> { background-color: oklch(...) }
```

### background-image

```txt
.bg-none { background-image: none }
```

```txt
.bg-[<value>] { background-image: <value> }
```

```txt
.bg-(<custom-property>) { background-image: var(<custom-property>) }
```

### background-origin

```txt
.bg-border-box { background-origin: border-box }
```

```txt
.bg-padding-box { background-origin: padding-box }
```

```txt
.bg-content-box { background-origin: content-box }
```

### background-position

```txt
.bg-top-left { background-position: top left }
```

```txt
.bg-top { background-position: top }
```

```txt
.bg-top-right { background-position: top right }
```

```txt
.bg-left { background-position: left }
```

```txt
.bg-center { background-position: center }
```

```txt
.bg-right { background-position: right }
```

```txt
.bg-bottom-left { background-position: bottom left }
```

```txt
.bg-bottom { background-position: bottom }
```

```txt
.bg-bottom-right { background-position: bottom right }
```

```txt
.bg-position-[<value>] { background-position: <value> }
```

```txt
.bg-position-(<custom-property>) { background-position: var(<custom-property>) }
```

### background-repeat

```txt
.bg-repeat { background-repeat: repeat }
```

```txt
.bg-repeat-x { background-repeat: repeat-x }
```

```txt
.bg-repeat-y { background-repeat: repeat-y }
```

```txt
.bg-space { background-repeat: space }
```

```txt
.bg-round { background-repeat: round }
```

```txt
.bg-no-repeat { background-repeat: no-repeat }
```

### background-size

```txt
.bg-auto { background-size: auto }
```

```txt
.bg-cover { background-size: cover }
```

```txt
.bg-contain { background-size: contain }
```

```txt
.bg-size-[<value>] { background-size: <value> }
```

```txt
.bg-size-(<custom-property>) { background-size: var(<custom-property>) }
```

## Borders

### border-radius

```txt
.rounded-xs { border-radius: 2px }
```

```txt
.rounded-sm { border-radius: 4px }
```

```txt
.rounded-md { border-radius: 6px }
```

```txt
.rounded-lg { border-radius: 8px }
```

```txt
.rounded-xl { border-radius: 12px }
```

```txt
.rounded-2xl { border-radius: 16px }
```

```txt
.rounded-3xl { border-radius: 24px }
```

```txt
.rounded-full { border-radius: 50% }
```

```txt
.rounded-none { border-radius: 0 }
```

```txt
.rounded-[<value>] { border-radius: <value> }
```

```txt
.rounded-(<custom-property>) { border-radius: var(<custom-property>) }
```

```txt
.rounded-tl-xs { border-top-left-radius: 2px }
```

```txt
.rounded-tl-sm { border-top-left-radius: 4px }
```

```txt
.rounded-tl-md { border-top-left-radius: 6px }
```

```txt
.rounded-tl-lg { border-top-left-radius: 8px }
```

```txt
.rounded-tl-xl { border-top-left-radius: 12px }
```

```txt
.rounded-tl-2xl { border-top-left-radius: 16px }
```

```txt
.rounded-tl-3xl { border-top-left-radius: 24px }
```

```txt
.rounded-tl-full { border-top-left-radius: 50% }
```

```txt
.rounded-tl-none { border-top-left-radius: 0 }
```

```txt
.rounded-tl-[<value>] { border-top-left-radius: <value> }
```

```txt
.rounded-tl-(<custom-property>) { border-top-left-radius: var(<custom-property>) }
```

```txt
.rounded-tr-xs { border-top-right-radius: 2px }
```

```txt
.rounded-tr-sm { border-top-right-radius: 4px }
```

```txt
.rounded-tr-md { border-top-right-radius: 6px }
```

```txt
.rounded-tr-lg { border-top-right-radius: 8px }
```

```txt
.rounded-tr-xl { border-top-right-radius: 12px }
```

```txt
.rounded-tr-2xl { border-top-right-radius: 16px }
```

```txt
.rounded-tr-3xl { border-top-right-radius: 24px }
```

```txt
.rounded-tr-full { border-top-right-radius: 50% }
```

```txt
.rounded-tr-none { border-top-right-radius: 0 }
```

```txt
.rounded-tr-[<value>] { border-top-right-radius: <value> }
```

```txt
.rounded-tr-(<custom-property>) { border-top-right-radius: var(<custom-property>) }
```

```txt
.rounded-br-xs { border-bottom-right-radius: 2px }
```

```txt
.rounded-br-sm { border-bottom-right-radius: 4px }
```

```txt
.rounded-br-md { border-bottom-right-radius: 6px }
```

```txt
.rounded-br-lg { border-bottom-right-radius: 8px }
```

```txt
.rounded-br-xl { border-bottom-right-radius: 12px }
```

```txt
.rounded-br-2xl { border-bottom-right-radius: 16px }
```

```txt
.rounded-br-3xl { border-bottom-right-radius: 24px }
```

```txt
.rounded-br-full { border-bottom-right-radius: 50% }
```

```txt
.rounded-br-none { border-bottom-right-radius: 0 }
```

```txt
.rounded-br-[<value>] { border-bottom-right-radius: <value> }
```

```txt
.rounded-br-(<custom-property>) { border-bottom-right-radius: var(<custom-property>) }
```

```txt
.rounded-bl-xs { border-bottom-left-radius: 2px }
```

```txt
.rounded-bl-sm { border-bottom-left-radius: 4px }
```

```txt
.rounded-bl-md { border-bottom-left-radius: 6px }
```

```txt
.rounded-bl-lg { border-bottom-left-radius: 8px }
```

```txt
.rounded-bl-xl { border-bottom-left-radius: 12px }
```

```txt
.rounded-bl-2xl { border-bottom-left-radius: 16px }
```

```txt
.rounded-bl-3xl { border-bottom-left-radius: 24px }
```

```txt
.rounded-bl-full { border-bottom-left-radius: 50% }
```

```txt
.rounded-bl-none { border-bottom-left-radius: 0 }
```

```txt
.rounded-bl-[<value>] { border-bottom-left-radius: <value> }
```

```txt
.rounded-bl-(<custom-property>) { border-bottom-left-radius: var(<custom-property>) }
```

### border-width

```txt
.border { border-width: 1px }
```

```txt
.border-<number> { border-width: <number>px }
```

```txt
.-border-<number> { border-width: -<number>px }
```

```txt
.border-[<value>] { border-width: <value> }
```

```txt
.border-(<custom-property>) { border-width: var(<custom-property>) }
```

```txt
.border-s { border-inline-start-width: 1px }
```

```txt
.border-s-<number> { border-inline-start-width: <number>px }
```

```txt
.-border-s-<number> { border-inline-start-width: -<number>px }
```

```txt
.border-s-[<value>] { border-inline-start-width: <value> }
```

```txt
.border-s-(<custom-property>) { border-inline-start-width: var(<custom-property>) }
```

```txt
.border-e { border-inline-end-width: 1px }
```

```txt
.border-e-<number> { border-inline-end-width: <number>px }
```

```txt
.-border-e-<number> { border-inline-end-width: -<number>px }
```

```txt
.border-e-[<value>] { border-inline-end-width: <value> }
```

```txt
.border-e-(<custom-property>) { border-inline-end-width: var(<custom-property>) }
```

```txt
.border-t { border-top-width: 1px }
```

```txt
.border-t-<number> { border-top-width: <number>px }
```

```txt
.-border-t-<number> { border-top-width: -<number>px }
```

```txt
.border-t-[<value>] { border-top-width: <value> }
```

```txt
.border-t-(<custom-property>) { border-top-width: var(<custom-property>) }
```

```txt
.border-r { border-right-width: 1px }
```

```txt
.border-r-<number> { border-right-width: <number>px }
```

```txt
.-border-r-<number> { border-right-width: -<number>px }
```

```txt
.border-r-[<value>] { border-right-width: <value> }
```

```txt
.border-r-(<custom-property>) { border-right-width: var(<custom-property>) }
```

```txt
.border-b { border-bottom-width: 1px }
```

```txt
.border-b-<number> { border-bottom-width: <number>px }
```

```txt
.-border-b-<number> { border-bottom-width: -<number>px }
```

```txt
.border-b-[<value>] { border-bottom-width: <value> }
```

```txt
.border-b-(<custom-property>) { border-bottom-width: var(<custom-property>) }
```

```txt
.border-l { border-left-width: 1px }
```

```txt
.border-l-<number> { border-left-width: <number>px }
```

```txt
.-border-l-<number> { border-left-width: -<number>px }
```

```txt
.border-l-[<value>] { border-left-width: <value> }
```

```txt
.border-l-(<custom-property>) { border-left-width: var(<custom-property>) }
```

### border-color

```txt
.border-<color> { border-color: oklch(...) }
```

### border-style

```txt
.border-solid { border-style: solid }
```

```txt
.border-dashed { border-style: dashed }
```

```txt
.border-dotted { border-style: dotted }
```

```txt
.border-double { border-style: double }
```

```txt
.border-hidden { border-style: hidden }
```

```txt
.border-none { border-style: none }
```

### outline-width

```txt
.outline { outline-width: 1px }
```

```txt
.outline-<number> { outline-width: <number>px }
```

```txt
.-outline-<number> { outline-width: -<number>px }
```

```txt
.outline-[<value>] { outline-width: <value> }
```

```txt
.outline-(<custom-property>) { outline-width: var(<custom-property>) }
```

### outline-color

```txt
.outline-<color> { outline-color: oklch(...) }
```

### outline-style

```txt
.outline-solid { outline-style: solid }
```

```txt
.outline-dashed { outline-style: dashed }
```

```txt
.outline-dotted { outline-style: dotted }
```

```txt
.outline-double { outline-style: double }
```

```txt
.outline-none { outline-style: none }
```

### outline-offset

```txt
.outline-offset-<number> { outline-offset: <number>px }
```

```txt
.-outline-offset-<number> { outline-offset: -<number>px }
```

```txt
.outline-offset-[<value>] { outline-offset: <value> }
```

```txt
.outline-offset-(<custom-property>) { outline-offset: var(<custom-property>) }
```

## Effects

### box-shadow

```txt
.shadow { box-shadow: 0 1px rgb(0 0 0 / 0.05) }
```

```txt
.shadow-2xs { box-shadow: 0 1px rgb(0 0 0 / 0.05) }
```

```txt
.shadow-xs { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) }
```

```txt
.shadow-sm { box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) }
```

```txt
.shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) }
```

```txt
.shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) }
```

```txt
.shadow-xl { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) }
```

```txt
.shadow-2xl { box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) }
```

```txt
.shadow-none { box-shadow: 0 0 rgb(0 0 0 / 0) }
```

```txt
.shadow-[<value>] { box-shadow: <value> }
```

```txt
.shadow-(<custom-property>) { box-shadow: var(<custom-property>) }
```

### text-shadow

```txt
.text-shadow-2xs { text-shadow: 0px 1px 0px rgb(0 0 0 / 0.15) }
```

```txt
.text-shadow-xs { text-shadow: 0px 1px 1px rgb(0 0 0 / 0.2) }
```

```txt
.text-shadow-sm { text-shadow: 0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075) }
```

```txt
.text-shadow-md { text-shadow: 0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1) }
```

```txt
.text-shadow-lg { text-shadow: 0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1) }
```

```txt
.text-shadow-none { text-shadow: none }
```

```txt
.text-shadow-[<value>] { text-shadow: <value> }
```

```txt
.text-shadow-(<custom-property>) { text-shadow: var(<custom-property>) }
```

### opacity

```txt
.opacity-<number> { opacity: <number>% }
```

```txt
.-opacity-<number> { opacity: -<number>% }
```

```txt
.opacity-[<value>] { opacity: <value> }
```

```txt
.opacity-(<custom-property>) { opacity: var(<custom-property>) }
```

### mix-blend-mode

```txt
.mix-blend-normal { mix-blend-mode: normal }
```

```txt
.mix-blend-multiply { mix-blend-mode: multiply }
```

```txt
.mix-blend-screen { mix-blend-mode: screen }
```

```txt
.mix-blend-overlay { mix-blend-mode: overlay }
```

```txt
.mix-blend-darken { mix-blend-mode: darken }
```

```txt
.mix-blend-lighten { mix-blend-mode: lighten }
```

```txt
.mix-blend-color-dodge { mix-blend-mode: color-dodge }
```

```txt
.mix-blend-color-burn { mix-blend-mode: color-burn }
```

```txt
.mix-blend-hard-light { mix-blend-mode: hard-light }
```

```txt
.mix-blend-soft-light { mix-blend-mode: soft-light }
```

```txt
.mix-blend-difference { mix-blend-mode: difference }
```

```txt
.mix-blend-exclusion { mix-blend-mode: exclusion }
```

```txt
.mix-blend-hue { mix-blend-mode: hue }
```

```txt
.mix-blend-saturation { mix-blend-mode: saturation }
```

```txt
.mix-blend-color { mix-blend-mode: color }
```

```txt
.mix-blend-luminosity { mix-blend-mode: luminosity }
```

### background-blend-mode

```txt
.bg-blend-normal { background-blend-mode: normal }
```

```txt
.bg-blend-multiply { background-blend-mode: multiply }
```

```txt
.bg-blend-screen { background-blend-mode: screen }
```

```txt
.bg-blend-overlay { background-blend-mode: overlay }
```

```txt
.bg-blend-darken { background-blend-mode: darken }
```

```txt
.bg-blend-lighten { background-blend-mode: lighten }
```

```txt
.bg-blend-color-dodge { background-blend-mode: color-dodge }
```

```txt
.bg-blend-color-burn { background-blend-mode: color-burn }
```

```txt
.bg-blend-hard-light { background-blend-mode: hard-light }
```

```txt
.bg-blend-soft-light { background-blend-mode: soft-light }
```

```txt
.bg-blend-difference { background-blend-mode: difference }
```

```txt
.bg-blend-exclusion { background-blend-mode: exclusion }
```

```txt
.bg-blend-hue { background-blend-mode: hue }
```

```txt
.bg-blend-saturation { background-blend-mode: saturation }
```

```txt
.bg-blend-color { background-blend-mode: color }
```

```txt
.bg-blend-luminosity { background-blend-mode: luminosity }
```

### mask-clip

```txt
.mask-clip-border { mask-clip: border-box }
```

```txt
.mask-clip-padding { mask-clip: padding-box }
```

```txt
.mask-clip-content { mask-clip: content-box }
```

```txt
.mask-clip-fill { mask-clip: fill-box }
```

```txt
.mask-clip-stroke { mask-clip: stroke-box }
```

```txt
.mask-clip-view { mask-clip: view-box }
```

```txt
.mask-no-clip { mask-clip: no-clip }
```

### mask-composite

```txt
.mask-add { mask-composite: add }
```

```txt
.mask-subtract { mask-composite: subtract }
```

```txt
.mask-intersect { mask-composite: intersect }
```

```txt
.mask-exclude { mask-composite: exclude }
```

### mask-image

```txt
.mask-none { mask-image: none }
```

```txt
.mask-[<value>] { mask-image: <value> }
```

```txt
.mask-(<custom-property>) { mask-image: var(<custom-property>) }
```

### mask-mode

```txt
.mask-alpha { mask-mode: alpha }
```

```txt
.mask-luminance { mask-mode: luminance }
```

```txt
.mask-match { mask-mode: match-source }
```

### mask-origin

```txt
.mask-origin-border { mask-origin: border-box }
```

```txt
.mask-origin-padding { mask-origin: padding-box }
```

```txt
.mask-origin-content { mask-origin: content-box }
```

```txt
.mask-origin-fill { mask-origin: fill-box }
```

```txt
.mask-origin-stroke { mask-origin: stroke-box }
```

```txt
.mask-origin-view { mask-origin: view-box }
```

### mask-position

```txt
.mask-top-left { mask-position: top left }
```

```txt
.mask-top { mask-position: top }
```

```txt
.mask-top-right { mask-position: top right }
```

```txt
.mask-left { mask-position: left }
```

```txt
.mask-center { mask-position: center }
```

```txt
.mask-right { mask-position: right }
```

```txt
.mask-bottom-left { mask-position: bottom left }
```

```txt
.mask-bottom { mask-position: bottom }
```

```txt
.mask-bottom-right { mask-position: bottom right }
```

```txt
.mask-position-[<value>] { mask-position: <value> }
```

```txt
.mask-position-(<custom-property>) { mask-position: var(<custom-property>) }
```

### mask-repeat

```txt
.mask-repeat { mask-repeat: repeat }
```

```txt
.mask-no-repeat { mask-repeat: no-repeat }
```

```txt
.mask-repeat-x { mask-repeat: repeat-x }
```

```txt
.mask-repeat-y { mask-repeat: repeat-y }
```

```txt
.mask-repeat-space { mask-repeat: space }
```

```txt
.mask-repeat-round { mask-repeat: round }
```

### mask-size

```txt
.mask-auto { mask-size: auto }
```

```txt
.mask-cover { mask-size: cover }
```

```txt
.mask-contain { mask-size: contain }
```

```txt
.mask-size-[<value>] { mask-size: <value> }
```

```txt
.mask-size-(<custom-property>) { mask-size: var(<custom-property>) }
```

### mask-type

```txt
.mask-type-alpha { mask-type: alpha }
```

```txt
.mask-type-luminance { mask-type: luminance }
```

## Filters

### filter

```txt
.blur-xs { filter: blur(4px) }
```

```txt
.blur-sm { filter: blur(8px) }
```

```txt
.blur-md { filter: blur(12px) }
```

```txt
.blur-lg { filter: blur(16px) }
```

```txt
.blur-xl { filter: blur(24px) }
```

```txt
.blur-2xl { filter: blur(40px) }
```

```txt
.blur-3xl { filter: blur(64px) }
```

```txt
.blur-none { filter: none }
```

```txt
.blur-[<value>] { filter: <value> }
```

```txt
.blur-(<custom-property>) { filter: var(<custom-property>) }
```

```txt
.brightness-<number> { filter: brightness(<number>%) }
```

```txt
.-brightness-<number> { filter: brightness(-<number>%) }
```

```txt
.brightness-[<value>] { filter: <value> }
```

```txt
.brightness-(<custom-property>) { filter: var(<custom-property>) }
```

```txt
.contrast-<number> { filter: contrast(<number>%) }
```

```txt
.-contrast-<number> { filter: contrast(-<number>%) }
```

```txt
.contrast-[<value>] { filter: <value> }
```

```txt
.contrast-(<custom-property>) { filter: var(<custom-property>) }
```

```txt
.drop-shadow-xs { filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05)) }
```

```txt
.drop-shadow-sm { filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.15)) }
```

```txt
.drop-shadow-md { filter: drop-shadow(0 3px 3px rgb(0 0 0 / 0.12)) }
```

```txt
.drop-shadow-lg { filter: drop-shadow(0 4px 4px rgb(0 0 0 / 0.15)) }
```

```txt
.drop-shadow-xl { filter: drop-shadow(0 9px 7px rgb(0 0 0 / 0.1)) }
```

```txt
.drop-shadow-2xl { filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15)) }
```

```txt
.drop-shadow-none { filter: drop-shadow(0 0 rgba(0, 0, 0, 0)) }
```

```txt
.drop-shadow-[<value>] { filter: <value> }
```

```txt
.drop-shadow-(<custom-property>) { filter: var(<custom-property>) }
```

```txt
.grayscale { filter: grayscale(100%) }
```

```txt
.grayscale-<number> { filter: grayscale(<number>%) }
```

```txt
.-grayscale-<number> { filter: grayscale(-<number>%) }
```

```txt
.grayscale-[<value>] { filter: <value> }
```

```txt
.grayscale-(<custom-property>) { filter: var(<custom-property>) }
```

```txt
.hue-rotate-<number> { filter: hue-rotate(<number>deg) }
```

```txt
.-hue-rotate-<number> { filter: hue-rotate(-<number>deg) }
```

```txt
.hue-rotate-[<value>] { filter: <value> }
```

```txt
.hue-rotate-(<custom-property>) { filter: var(<custom-property>) }
```

```txt
.invert { filter: invert(100%) }
```

```txt
.invert-<number> { filter: invert(<number>%) }
```

```txt
.-invert-<number> { filter: invert(-<number>%) }
```

```txt
.invert-[<value>] { filter: <value> }
```

```txt
.invert-(<custom-property>) { filter: var(<custom-property>) }
```

```txt
.saturate-<number> { filter: saturate(<number>%) }
```

```txt
.-saturate-<number> { filter: saturate(-<number>%) }
```

```txt
.saturate-[<value>] { filter: <value> }
```

```txt
.saturate-(<custom-property>) { filter: var(<custom-property>) }
```

```txt
.sepia { filter: sepia(100%) }
```

```txt
.sepia-<number> { filter: sepia(<number>%) }
```

```txt
.-sepia-<number> { filter: sepia(-<number>%) }
```

```txt
.sepia-[<value>] { filter: <value> }
```

```txt
.sepia-(<custom-property>) { filter: var(<custom-property>) }
```

```txt
.filter-none { filter: none }
```

```txt
.filter-[<value>] { filter: <value> }
```

```txt
.filter-(<custom-property>) { filter: var(<custom-property>) }
```

### backdrop-filter

```txt
.backdrop-blur-xs { backdrop-filter: blur(4px) }
```

```txt
.backdrop-blur-sm { backdrop-filter: blur(8px) }
```

```txt
.backdrop-blur-md { backdrop-filter: blur(12px) }
```

```txt
.backdrop-blur-lg { backdrop-filter: blur(16px) }
```

```txt
.backdrop-blur-xl { backdrop-filter: blur(24px) }
```

```txt
.backdrop-blur-2xl { backdrop-filter: blur(40px) }
```

```txt
.backdrop-blur-3xl { backdrop-filter: blur(64px) }
```

```txt
.backdrop-blur-none { backdrop-filter: none }
```

```txt
.backdrop-blur-[<value>] { backdrop-filter: <value> }
```

```txt
.backdrop-blur-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```txt
.backdrop-brightness-<number> { backdrop-filter: brightness(<number>%) }
```

```txt
.-backdrop-brightness-<number> { backdrop-filter: brightness(-<number>%) }
```

```txt
.backdrop-brightness-[<value>] { backdrop-filter: <value> }
```

```txt
.backdrop-brightness-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```txt
.backdrop-contrast-<number> { backdrop-filter: contrast(<number>%) }
```

```txt
.-backdrop-contrast-<number> { backdrop-filter: contrast(-<number>%) }
```

```txt
.backdrop-contrast-[<value>] { backdrop-filter: <value> }
```

```txt
.backdrop-contrast-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```txt
.backdrop-grayscale { backdrop-filter: grayscale(100%) }
```

```txt
.backdrop-grayscale-<number> { backdrop-filter: grayscale(<number>%) }
```

```txt
.-backdrop-grayscale-<number> { backdrop-filter: grayscale(-<number>%) }
```

```txt
.backdrop-grayscale-[<value>] { backdrop-filter: <value> }
```

```txt
.backdrop-grayscale-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```txt
.backdrop-hue-rotate-<number> { backdrop-filter: hue-rotate(<number>deg) }
```

```txt
.-backdrop-hue-rotate-<number> { backdrop-filter: hue-rotate(-<number>deg) }
```

```txt
.backdrop-hue-rotate-[<value>] { backdrop-filter: <value> }
```

```txt
.backdrop-hue-rotate-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```txt
.backdrop-invert { backdrop-filter: invert(100%) }
```

```txt
.backdrop-invert-<number> { backdrop-filter: invert(<number>%) }
```

```txt
.-backdrop-invert-<number> { backdrop-filter: invert(-<number>%) }
```

```txt
.backdrop-invert-[<value>] { backdrop-filter: <value> }
```

```txt
.backdrop-invert-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```txt
.backdrop-opacity-<number> { backdrop-filter: opacity(<number>%) }
```

```txt
.-backdrop-opacity-<number> { backdrop-filter: opacity(-<number>%) }
```

```txt
.backdrop-opacity-[<value>] { backdrop-filter: <value> }
```

```txt
.backdrop-opacity-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```txt
.backdrop-saturate-<number> { backdrop-filter: saturate(<number>%) }
```

```txt
.-backdrop-saturate-<number> { backdrop-filter: saturate(-<number>%) }
```

```txt
.backdrop-saturate-[<value>] { backdrop-filter: <value> }
```

```txt
.backdrop-saturate-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```txt
.backdrop-sepia { backdrop-filter: sepia(100%) }
```

```txt
.backdrop-sepia-<number> { backdrop-filter: sepia(<number>%) }
```

```txt
.-backdrop-sepia-<number> { backdrop-filter: sepia(-<number>%) }
```

```txt
.backdrop-sepia-[<value>] { backdrop-filter: <value> }
```

```txt
.backdrop-sepia-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```txt
.backdrop-filter-none { backdrop-filter: none }
```

```txt
.backdrop-filter-[<value>] { backdrop-filter: <value> }
```

```txt
.backdrop-filter-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

## Tables

### border-collapse

```txt
.border-collapse { border-collapse: collapse }
```

```txt
.border-separate { border-collapse: separate }
```

### border-spacing

```txt
.border-spacing-<number> { border-spacing: calc(<number> * 4px) }
```

```txt
.-border-spacing-<number> { border-spacing: calc(-<number> * 4px) }
```

```txt
.border-spacing-[<value>] { border-spacing: <value> }
```

```txt
.border-spacing-(<custom-property>) { border-spacing: var(<custom-property>) }
```

```txt
.border-spacing-x-<number> { border-spacing: calc(<number> * 4px) 0 }
```

```txt
.-border-spacing-x-<number> { border-spacing: calc(-<number> * 4px) 0 }
```

```txt
.border-spacing-x-[<value>] { border-spacing: <value> }
```

```txt
.border-spacing-x-(<custom-property>) { border-spacing: var(<custom-property>) }
```

```txt
.border-spacing-y-<number> { border-spacing: 0 calc(<number> * 4px) }
```

```txt
.-border-spacing-y-<number> { border-spacing: 0 calc(-<number> * 4px) }
```

```txt
.border-spacing-y-[<value>] { border-spacing: <value> }
```

```txt
.border-spacing-y-(<custom-property>) { border-spacing: var(<custom-property>) }
```

### table-layout

```txt
.table-auto { table-layout: auto }
```

```txt
.table-fixed { table-layout: fixed }
```

### caption-side

```txt
.caption-top { caption-side: top }
```

```txt
.caption-bottom { caption-side: bottom }
```

## Transitions & Animations

### transition-property

```txt
.transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter }
```

```txt
.transition-all { transition-property: all }
```

```txt
.transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke }
```

```txt
.transition-opacity { transition-property: opacity }
```

```txt
.transition-shadow { transition-property: box-shadow }
```

```txt
.transition-transform { transition-property: transform }
```

```txt
.transition-none { transition-property: none }
```

```txt
.transition-[<value>] { transition-property: <value> }
```

```txt
.transition-(<custom-property>) { transition-property: var(<custom-property>) }
```

### transition-behavior

```txt
.transition-normal { transition-behavior: normal }
```

```txt
.transition-discrete { transition-behavior: allow-discrete }
```

### transition-duration

```txt
.duration-initial { transition-duration: initial }
```

```txt
.duration-<number> { transition-duration: <number>ms }
```

```txt
.-duration-<number> { transition-duration: -<number>ms }
```

```txt
.duration-[<value>] { transition-duration: <value> }
```

```txt
.duration-(<custom-property>) { transition-duration: var(<custom-property>) }
```

### transition-timing-function

```txt
.ease-linear { transition-timing-function: linear }
```

```txt
.ease-in { transition-timing-function: ease-in }
```

```txt
.ease-out { transition-timing-function: ease-out }
```

```txt
.ease-in-out { transition-timing-function: ease-in-out }
```

```txt
.ease-initial { transition-timing-function: initial }
```

```txt
.ease-[<value>] { transition-timing-function: <value> }
```

```txt
.ease-(<custom-property>) { transition-timing-function: var(<custom-property>) }
```

### animation

```txt
.animate-expand { animation: expand 250ms ease-in-out }
```

```txt
.animate-toast { animation: toast 250ms ease-in-out }
```

```txt
.animate-fade { animation: fade 250ms ease-in-out }
```

```txt
.animate-none { animation: none }
```

```txt
.animate-[<value>] { animation: <value> }
```

```txt
.animate-(<custom-property>) { animation: var(<custom-property>) }
```

## Transforms

### backface-visibility

```txt
.backface-visible { backface-visibility: visible }
```

```txt
.backface-hidden { backface-visibility: hidden }
```

### perspective

```txt
.perspective-dramatic { perspective: 100px }
```

```txt
.perspective-near { perspective: 300px }
```

```txt
.perspective-normal { perspective: 500px }
```

```txt
.perspective-midrange { perspective: 800px }
```

```txt
.perspective-distant { perspective: 1200px }
```

```txt
.perspective-none { perspective: none }
```

```txt
.perspective-[<value>] { perspective: <value> }
```

```txt
.perspective-(<custom-property>) { perspective: var(<custom-property>) }
```

### perspective-origin

```txt
.perspective-origin-top-left { perspective-origin: top left }
```

```txt
.perspective-origin-top { perspective-origin: top }
```

```txt
.perspective-origin-top-right { perspective-origin: top right }
```

```txt
.perspective-origin-left { perspective-origin: left }
```

```txt
.perspective-origin-center { perspective-origin: center }
```

```txt
.perspective-origin-right { perspective-origin: right }
```

```txt
.perspective-origin-bottom-left { perspective-origin: bottom left }
```

```txt
.perspective-origin-bottom { perspective-origin: bottom }
```

```txt
.perspective-origin-bottom-right { perspective-origin: bottom right }
```

```txt
.perspective-origin-[<value>] { perspective-origin: <value> }
```

```txt
.perspective-origin-(<custom-property>) { perspective-origin: var(<custom-property>) }
```

### rotate

```txt
.rotate-none { rotate: none }
```

```txt
.rotate-<number> { rotate: <number>deg }
```

```txt
.-rotate-<number> { rotate: -<number>deg }
```

```txt
.rotate-[<value>] { rotate: <value> }
```

```txt
.rotate-(<custom-property>) { rotate: var(<custom-property>) }
```

### scale

```txt
.scale-<number> { scale: <number>% <number>% }
```

```txt
.-scale-<number> { scale: -<number>% -<number>% }
```

```txt
.scale-[<value>] { scale: <value> }
```

```txt
.scale-(<custom-property>) { scale: var(<custom-property>) }
```

```txt
.scale-x-<number> { scale: <number>% 100% }
```

```txt
.-scale-x-<number> { scale: -<number>% 100% }
```

```txt
.scale-x-[<value>] { scale: <value> }
```

```txt
.scale-x-(<custom-property>) { scale: var(<custom-property>) }
```

```txt
.scale-y-<number> { scale: 100% <number>% }
```

```txt
.-scale-y-<number> { scale: 100% -<number>% }
```

```txt
.scale-y-[<value>] { scale: <value> }
```

```txt
.scale-y-(<custom-property>) { scale: var(<custom-property>) }
```

### transform

```txt
.skew-<number> { transform: skewX(<number>deg) skewY(<number>deg) }
```

```txt
.-skew-<number> { transform: skewX(-<number>deg) skewY(-<number>deg) }
```

```txt
.skew-[<value>] { transform: <value> }
```

```txt
.skew-(<custom-property>) { transform: var(<custom-property>) }
```

```txt
.skew-x-<number> { transform: skewX(<number>deg) }
```

```txt
.-skew-x-<number> { transform: skewX(-<number>deg) }
```

```txt
.skew-x-[<value>] { transform: <value> }
```

```txt
.skew-x-(<custom-property>) { transform: var(<custom-property>) }
```

```txt
.skew-y-<number> { transform: skewY(<number>deg) }
```

```txt
.-skew-y-<number> { transform: skewY(-<number>deg) }
```

```txt
.skew-y-[<value>] { transform: <value> }
```

```txt
.skew-y-(<custom-property>) { transform: var(<custom-property>) }
```

```txt
.transform-none { transform: none }
```

```txt
.transform-[<value>] { transform: <value> }
```

```txt
.transform-(<custom-property>) { transform: var(<custom-property>) }
```

### transform-origin

```txt
.origin-top-left { transform-origin: top left }
```

```txt
.origin-top { transform-origin: top }
```

```txt
.origin-top-right { transform-origin: top right }
```

```txt
.origin-left { transform-origin: left }
```

```txt
.origin-center { transform-origin: center }
```

```txt
.origin-right { transform-origin: right }
```

```txt
.origin-bottom-left { transform-origin: bottom left }
```

```txt
.origin-bottom { transform-origin: bottom }
```

```txt
.origin-bottom-right { transform-origin: bottom right }
```

```txt
.origin-[<value>] { transform-origin: <value> }
```

```txt
.origin-(<custom-property>) { transform-origin: var(<custom-property>) }
```

### transform-style

```txt
.transform-3d { transform-style: preserve-3d }
```

```txt
.transform-flat { transform-style: flat }
```

### translate

```txt
.translate-auto { translate: auto auto }
```

```txt
.translate-px { translate: 1px 1px }
```

```txt
.-translate-px { translate: -1px -1px }
```

```txt
.translate-full { translate: 100% 100% }
```

```txt
.-translate-full { translate: -100% -100% }
```

```txt
.translate-screen { translate: 100vw 100vw }
```

```txt
.translate-dvw { translate: 100vw 100vw }
```

```txt
.translate-dvh { translate: 100vh 100vh }
```

```txt
.translate-lvw { translate: 100lvw 100lvw }
```

```txt
.translate-lvh { translate: 100lvh 100lvh }
```

```txt
.translate-svw { translate: 100svw 100svw }
```

```txt
.translate-svh { translate: 100svh 100svh }
```

```txt
.translate-min { translate: min-content min-content }
```

```txt
.translate-max { translate: max-content max-content }
```

```txt
.translate-fit { translate: fit-content fit-content }
```

```txt
.translate-3xs { translate: 256px 256px }
```

```txt
.translate-2xs { translate: 288px 288px }
```

```txt
.translate-xs { translate: 320px 320px }
```

```txt
.translate-sm { translate: 384px 384px }
```

```txt
.translate-md { translate: 448px 448px }
```

```txt
.translate-lg { translate: 512px 512px }
```

```txt
.translate-xl { translate: 576px 576px }
```

```txt
.translate-2xl { translate: 672px 672px }
```

```txt
.translate-3xl { translate: 768px 768px }
```

```txt
.translate-4xl { translate: 896px 896px }
```

```txt
.translate-5xl { translate: 1024px 1024px }
```

```txt
.translate-6xl { translate: 1152px 1152px }
```

```txt
.translate-7xl { translate: 1280px 1280px }
```

```txt
.translate-<number> { translate: calc(<number> * 4px) calc(<number> * 4px) }
```

```txt
.-translate-<number> { translate: calc(-<number> * 4px) calc(-<number> * 4px) }
```

```txt
.translate-<fraction> { translate: calc(<fraction> * 100%) calc(<fraction> * 100%) }
```

```txt
.translate-[<value>] { translate: <value> }
```

```txt
.translate-(<custom-property>) { translate: var(<custom-property>) }
```

```txt
.translate-x-auto { translate: auto }
```

```txt
.translate-x-px { translate: 1px }
```

```txt
.-translate-x-px { translate: -1px }
```

```txt
.translate-x-full { translate: 100% }
```

```txt
.-translate-x-full { translate: -100% }
```

```txt
.translate-x-screen { translate: 100vw }
```

```txt
.translate-x-dvw { translate: 100vw }
```

```txt
.translate-x-dvh { translate: 100vh }
```

```txt
.translate-x-lvw { translate: 100lvw }
```

```txt
.translate-x-lvh { translate: 100lvh }
```

```txt
.translate-x-svw { translate: 100svw }
```

```txt
.translate-x-svh { translate: 100svh }
```

```txt
.translate-x-min { translate: min-content }
```

```txt
.translate-x-max { translate: max-content }
```

```txt
.translate-x-fit { translate: fit-content }
```

```txt
.translate-x-3xs { translate: 256px }
```

```txt
.translate-x-2xs { translate: 288px }
```

```txt
.translate-x-xs { translate: 320px }
```

```txt
.translate-x-sm { translate: 384px }
```

```txt
.translate-x-md { translate: 448px }
```

```txt
.translate-x-lg { translate: 512px }
```

```txt
.translate-x-xl { translate: 576px }
```

```txt
.translate-x-2xl { translate: 672px }
```

```txt
.translate-x-3xl { translate: 768px }
```

```txt
.translate-x-4xl { translate: 896px }
```

```txt
.translate-x-5xl { translate: 1024px }
```

```txt
.translate-x-6xl { translate: 1152px }
```

```txt
.translate-x-7xl { translate: 1280px }
```

```txt
.translate-x-<number> { translate: calc(<number> * 4px) }
```

```txt
.-translate-x-<number> { translate: calc(-<number> * 4px) }
```

```txt
.translate-x-<fraction> { translate: calc(<fraction> * 100%) }
```

```txt
.translate-x-[<value>] { translate: <value> }
```

```txt
.translate-x-(<custom-property>) { translate: var(<custom-property>) }
```

```txt
.translate-y-auto { translate: 0 auto }
```

```txt
.translate-y-px { translate: 0 1px }
```

```txt
.-translate-y-px { translate: 0 -1px }
```

```txt
.translate-y-full { translate: 0 100% }
```

```txt
.-translate-y-full { translate: 0 -100% }
```

```txt
.translate-y-screen { translate: 0 100vw }
```

```txt
.translate-y-dvw { translate: 0 100vw }
```

```txt
.translate-y-dvh { translate: 0 100vh }
```

```txt
.translate-y-lvw { translate: 0 100lvw }
```

```txt
.translate-y-lvh { translate: 0 100lvh }
```

```txt
.translate-y-svw { translate: 0 100svw }
```

```txt
.translate-y-svh { translate: 0 100svh }
```

```txt
.translate-y-min { translate: 0 min-content }
```

```txt
.translate-y-max { translate: 0 max-content }
```

```txt
.translate-y-fit { translate: 0 fit-content }
```

```txt
.translate-y-3xs { translate: 0 256px }
```

```txt
.translate-y-2xs { translate: 0 288px }
```

```txt
.translate-y-xs { translate: 0 320px }
```

```txt
.translate-y-sm { translate: 0 384px }
```

```txt
.translate-y-md { translate: 0 448px }
```

```txt
.translate-y-lg { translate: 0 512px }
```

```txt
.translate-y-xl { translate: 0 576px }
```

```txt
.translate-y-2xl { translate: 0 672px }
```

```txt
.translate-y-3xl { translate: 0 768px }
```

```txt
.translate-y-4xl { translate: 0 896px }
```

```txt
.translate-y-5xl { translate: 0 1024px }
```

```txt
.translate-y-6xl { translate: 0 1152px }
```

```txt
.translate-y-7xl { translate: 0 1280px }
```

```txt
.translate-y-<number> { translate: 0 calc(<number> * 4px) }
```

```txt
.-translate-y-<number> { translate: 0 calc(-<number> * 4px) }
```

```txt
.translate-y-<fraction> { translate: 0 calc(<fraction> * 100%) }
```

```txt
.translate-y-[<value>] { translate: <value> }
```

```txt
.translate-y-(<custom-property>) { translate: var(<custom-property>) }
```

## Interactivity

### accent-color

```txt
.accent-<color> { accent-color: oklch(...) }
```

### appearance

```txt
.appearance-none { appearance: none }
```

```txt
.appearance-auto { appearance: auto }
```

### caret-color

```txt
.caret-<color> { caret-color: oklch(...) }
```

### color-scheme

```txt
.scheme-normal { color-scheme: normal }
```

```txt
.scheme-dark { color-scheme: dark }
```

```txt
.scheme-light { color-scheme: light }
```

```txt
.scheme-light-dark { color-scheme: light dark }
```

```txt
.scheme-only-dark { color-scheme: only dark }
```

```txt
.scheme-only-light { color-scheme: only light }
```

### cursor

```txt
.cursor-auto { cursor: auto }
```

```txt
.cursor-default { cursor: default }
```

```txt
.cursor-pointer { cursor: pointer }
```

```txt
.cursor-wait { cursor: wait }
```

```txt
.cursor-text { cursor: text }
```

```txt
.cursor-move { cursor: move }
```

```txt
.cursor-not-allowed { cursor: not-allowed }
```

### field-sizing

```txt
.field-sizing-fixed { field-sizing: fixed }
```

```txt
.field-sizing-content { field-sizing: content }
```

### pointer-events

```txt
.pointer-events-none { pointer-events: none }
```

```txt
.pointer-events-auto { pointer-events: auto }
```

### resize

```txt
.resize-none { resize: none }
```

```txt
.resize-x { resize: horizontal }
```

```txt
.resize-y { resize: vertical }
```

```txt
.resize-both { resize: both }
```

### scroll-behavior

```txt
.scroll-auto { scroll-behavior: auto }
```

```txt
.scroll-smooth { scroll-behavior: smooth }
```

### scroll-margin

```txt
.scroll-m-<number> { scroll-margin: calc(<number> * 4px) }
```

```txt
.-scroll-m-<number> { scroll-margin: calc(-<number> * 4px) }
```

```txt
.scroll-m-[<value>] { scroll-margin: <value> }
```

```txt
.scroll-m-(<custom-property>) { scroll-margin: var(<custom-property>) }
```

### scroll-padding

```txt
.scroll-p-<number> { scroll-padding: calc(<number> * 4px) }
```

```txt
.-scroll-p-<number> { scroll-padding: calc(-<number> * 4px) }
```

```txt
.scroll-p-[<value>] { scroll-padding: <value> }
```

```txt
.scroll-p-(<custom-property>) { scroll-padding: var(<custom-property>) }
```

### scroll-snap-align

```txt
.snap-start { scroll-snap-align: start }
```

```txt
.snap-end { scroll-snap-align: end }
```

```txt
.snap-center { scroll-snap-align: center }
```

```txt
.snap-align-none { scroll-snap-align: none }
```

### scroll-snap-stop

```txt
.snap-normal { scroll-snap-stop: normal }
```

```txt
.snap-always { scroll-snap-stop: always }
```

### scroll-snap-type

```txt
.snap-none { scroll-snap-type: none }
```

```txt
.snap-x { scroll-snap-type: x mandatory }
```

```txt
.snap-y { scroll-snap-type: y mandatory }
```

```txt
.snap-both { scroll-snap-type: both proximity }
```

### touch-action

```txt
.touch-auto { touch-action: auto }
```

```txt
.touch-none { touch-action: none }
```

```txt
.touch-pan-x { touch-action: pan-x }
```

```txt
.touch-pan-left { touch-action: pan-left }
```

```txt
.touch-pan-right { touch-action: pan-right }
```

```txt
.touch-pan-y { touch-action: pan-y }
```

```txt
.touch-pan-up { touch-action: pan-up }
```

```txt
.touch-pan-down { touch-action: pan-down }
```

```txt
.touch-pinch-zoom { touch-action: pinch-zoom }
```

```txt
.touch-manipulation { touch-action: manipulation }
```

### user-select

```txt
.select-text { user-select: text }
```

```txt
.select-all { user-select: all }
```

```txt
.select-auto { user-select: auto }
```

```txt
.select-none { user-select: none }
```

### will-change

```txt
.will-change-auto { will-change: auto }
```

```txt
.will-change-scroll { will-change: scroll-position }
```

```txt
.will-change-contents { will-change: contents }
```

```txt
.will-change-transform { will-change: transform }
```

```txt
.will-change-[<value>] { will-change: <value> }
```

```txt
.will-change-(<custom-property>) { will-change: var(<custom-property>) }
```

## SVG

### fill

```txt
.fill-<color> { fill: oklch(...) }
```

### stroke

```txt
.stroke-<color> { stroke: oklch(...) }
```

### stroke-width

```txt
.stroke-<number> { stroke-width: <number>px }
```

```txt
.-stroke-<number> { stroke-width: -<number>px }
```

```txt
.stroke-[<value>] { stroke-width: <value> }
```

```txt
.stroke-(<custom-property>) { stroke-width: var(<custom-property>) }
```

## Accessibility

### forced-color-adjust

```txt
.forced-color-adjust-auto { forced-color-adjust: auto }
```

```txt
.forced-color-adjust-none { forced-color-adjust: none }
```
