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

```
.aspect-square { aspect-ratio: 1 / 1 }
```

```
.aspect-video { aspect-ratio: 16 / 9 }
```

```
.aspect-auto { aspect-ratio: auto }
```

```
.aspect-<fraction> { aspect-ratio: <fraction> }
```

```
.aspect-[<value>] { aspect-ratio: <value> }
```

```
.aspect-(<custom-property>) { aspect-ratio: var(<custom-property>) }
```

### columns

```
.columns-auto { columns: auto }
```

```
.columns-px { columns: 1px }
```

```
.-columns-px { columns: -1px }
```

```
.columns-full { columns: 100% }
```

```
.-columns-full { columns: -100% }
```

```
.columns-screen { columns: 100vw }
```

```
.columns-dvw { columns: 100vw }
```

```
.columns-dvh { columns: 100vh }
```

```
.columns-lvw { columns: 100lvw }
```

```
.columns-lvh { columns: 100lvh }
```

```
.columns-svw { columns: 100svw }
```

```
.columns-svh { columns: 100svh }
```

```
.columns-min { columns: min-content }
```

```
.columns-max { columns: max-content }
```

```
.columns-fit { columns: fit-content }
```

```
.columns-3xs { columns: 256px }
```

```
.columns-2xs { columns: 288px }
```

```
.columns-xs { columns: 320px }
```

```
.columns-sm { columns: 384px }
```

```
.columns-md { columns: 448px }
```

```
.columns-lg { columns: 512px }
```

```
.columns-xl { columns: 576px }
```

```
.columns-2xl { columns: 672px }
```

```
.columns-3xl { columns: 768px }
```

```
.columns-4xl { columns: 896px }
```

```
.columns-5xl { columns: 1024px }
```

```
.columns-6xl { columns: 1152px }
```

```
.columns-7xl { columns: 1280px }
```

```
.columns-<number> { columns: <number> }
```

```
.-columns-<number> { columns: -<number> }
```

```
.columns-<fraction> { columns: <fraction> }
```

```
.columns-[<value>] { columns: <value> }
```

```
.columns-(<custom-property>) { columns: var(<custom-property>) }
```

### break-after

```
.break-after-auto { break-after: auto }
```

```
.break-after-avoid { break-after: avoid }
```

```
.break-after-avoid-page { break-after: avoid-page }
```

```
.break-after-page { break-after: page }
```

```
.break-after-left { break-after: left }
```

```
.break-after-right { break-after: right }
```

```
.break-after-column { break-after: column }
```

### break-before

```
.break-before-auto { break-before: auto }
```

```
.break-before-avoid { break-before: avoid }
```

```
.break-before-avoid-page { break-before: avoid-page }
```

```
.break-before-page { break-before: page }
```

```
.break-before-left { break-before: left }
```

```
.break-before-right { break-before: right }
```

```
.break-before-column { break-before: column }
```

### break-inside

```
.break-inside-auto { break-inside: auto }
```

```
.break-inside-avoid { break-inside: avoid }
```

```
.break-inside-avoid-page { break-inside: avoid-page }
```

```
.break-inside-avoid-column { break-inside: avoid-column }
```

### box-decoration-break

```
.box-decoration-clone { box-decoration-break: clone }
```

```
.box-decoration-slice { box-decoration-break: slice }
```

### box-sizing

```
.box-border { box-sizing: border-box }
```

```
.box-content { box-sizing: content-box }
```

### display

```
.inline { display: inline }
```

```
.block { display: block }
```

```
.inline-block { display: inline-block }
```

```
.flow-root { display: flow-root }
```

```
.flex { display: flex }
```

```
.inline-flex { display: inline-flex }
```

```
.grid { display: grid }
```

```
.inline-grid { display: inline-grid }
```

```
.contents { display: contents }
```

```
.table { display: table }
```

```
.inline-table { display: inline-table }
```

```
.list-item { display: list-item }
```

```
.hidden { display: none }
```

```
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

```
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

```
.float-start { float: inline-start }
```

```
.float-end { float: inline-end }
```

```
.float-left { float: left }
```

```
.float-right { float: right }
```

```
.float-none { float: none }
```

### clear

```
.clear-start { clear: inline-start }
```

```
.clear-end { clear: inline-end }
```

```
.clear-left { clear: left }
```

```
.clear-right { clear: right }
```

```
.clear-both { clear: both }
```

```
.clear-none { clear: none }
```

### isolation

```
.isolate { isolation: isolate }
```

```
.isolation-auto { isolation: auto }
```

### object-fit

```
.object-contain { object-fit: contain }
```

```
.object-cover { object-fit: cover }
```

```
.object-fill { object-fit: fill }
```

```
.object-none { object-fit: none }
```

```
.object-scale-down { object-fit: scale-down }
```

### object-position

```
.object-bottom { object-position: bottom }
```

```
.object-center { object-position: center }
```

```
.object-left { object-position: left }
```

```
.object-left-bottom { object-position: left bottom }
```

```
.object-left-top { object-position: left top }
```

```
.object-right { object-position: right }
```

```
.object-right-bottom { object-position: right bottom }
```

```
.object-right-top { object-position: right top }
```

```
.object-top { object-position: top }
```

```
.object-[<value>] { object-position: <value> }
```

```
.object-(<custom-property>) { object-position: var(<custom-property>) }
```

### overflow

```
.overflow-auto { overflow: auto }
```

```
.overflow-hidden { overflow: hidden }
```

```
.overflow-visible { overflow: visible }
```

```
.overflow-scroll { overflow: scroll }
```

```
.overflow-x-auto { overflow-x: auto }
```

```
.overflow-x-hidden { overflow-x: hidden }
```

```
.overflow-x-clip { overflow-x: clip }
```

```
.overflow-x-visible { overflow-x: visible }
```

```
.overflow-x-scroll { overflow-x: scroll }
```

```
.overflow-y-auto { overflow-y: auto }
```

```
.overflow-y-hidden { overflow-y: hidden }
```

```
.overflow-y-clip { overflow-y: clip }
```

```
.overflow-y-visible { overflow-y: visible }
```

```
.overflow-y-scroll { overflow-y: scroll }
```

```
.line-clamp-none {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: none;
}
```

```
.line-clamp-[<value>] {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: <value>;
}
```

```
.line-clamp-(<custom-property>) {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(<custom-property>);
}
```

### overscroll-behavior

```
.overscroll-auto { overscroll-behavior: auto }
```

```
.overscroll-contain { overscroll-behavior: contain }
```

```
.overscroll-none { overscroll-behavior: none }
```

```
.overscroll-x-auto { overscroll-behavior-x: auto }
```

```
.overscroll-x-contain { overscroll-behavior-x: contain }
```

```
.overscroll-x-none { overscroll-behavior-x: none }
```

```
.overscroll-y-auto { overscroll-behavior-y: auto }
```

```
.overscroll-y-contain { overscroll-behavior-y: contain }
```

```
.overscroll-y-none { overscroll-behavior-y: none }
```

### scrollbar-gutter

```
.scrollbar-auto { scrollbar-gutter: auto }
```

```
.scrollbar-stable { scrollbar-gutter: stable }
```

```
.scrollbar-both { scrollbar-gutter: stable both-edges }
```

### position

```
.static { position: static }
```

```
.fixed { position: fixed }
```

```
.absolute { position: absolute }
```

```
.relative { position: relative }
```

```
.sticky { position: sticky }
```

### top / right / bottom / left

```
.inset-auto { inset: auto }
```

```
.inset-px { inset: 1px }
```

```
.-inset-px { inset: -1px }
```

```
.inset-full { inset: 100% }
```

```
.-inset-full { inset: -100% }
```

```
.inset-screen { inset: 100vw }
```

```
.inset-dvw { inset: 100vw }
```

```
.inset-dvh { inset: 100vh }
```

```
.inset-lvw { inset: 100lvw }
```

```
.inset-lvh { inset: 100lvh }
```

```
.inset-svw { inset: 100svw }
```

```
.inset-svh { inset: 100svh }
```

```
.inset-min { inset: min-content }
```

```
.inset-max { inset: max-content }
```

```
.inset-fit { inset: fit-content }
```

```
.inset-3xs { inset: 256px }
```

```
.inset-2xs { inset: 288px }
```

```
.inset-xs { inset: 320px }
```

```
.inset-sm { inset: 384px }
```

```
.inset-md { inset: 448px }
```

```
.inset-lg { inset: 512px }
```

```
.inset-xl { inset: 576px }
```

```
.inset-2xl { inset: 672px }
```

```
.inset-3xl { inset: 768px }
```

```
.inset-4xl { inset: 896px }
```

```
.inset-5xl { inset: 1024px }
```

```
.inset-6xl { inset: 1152px }
```

```
.inset-7xl { inset: 1280px }
```

```
.inset-<number> { inset: calc(<number> * 4px) }
```

```
.-inset-<number> { inset: calc(-<number> * 4px) }
```

```
.inset-<fraction> { inset: calc(<fraction> * 100%) }
```

```
.inset-[<value>] { inset: <value> }
```

```
.inset-(<custom-property>) { inset: var(<custom-property>) }
```

```
.inset-x-auto { inset-inline: auto }
```

```
.inset-x-px { inset-inline: 1px }
```

```
.-inset-x-px { inset-inline: -1px }
```

```
.inset-x-full { inset-inline: 100% }
```

```
.-inset-x-full { inset-inline: -100% }
```

```
.inset-x-screen { inset-inline: 100vw }
```

```
.inset-x-dvw { inset-inline: 100vw }
```

```
.inset-x-dvh { inset-inline: 100vh }
```

```
.inset-x-lvw { inset-inline: 100lvw }
```

```
.inset-x-lvh { inset-inline: 100lvh }
```

```
.inset-x-svw { inset-inline: 100svw }
```

```
.inset-x-svh { inset-inline: 100svh }
```

```
.inset-x-min { inset-inline: min-content }
```

```
.inset-x-max { inset-inline: max-content }
```

```
.inset-x-fit { inset-inline: fit-content }
```

```
.inset-x-3xs { inset-inline: 256px }
```

```
.inset-x-2xs { inset-inline: 288px }
```

```
.inset-x-xs { inset-inline: 320px }
```

```
.inset-x-sm { inset-inline: 384px }
```

```
.inset-x-md { inset-inline: 448px }
```

```
.inset-x-lg { inset-inline: 512px }
```

```
.inset-x-xl { inset-inline: 576px }
```

```
.inset-x-2xl { inset-inline: 672px }
```

```
.inset-x-3xl { inset-inline: 768px }
```

```
.inset-x-4xl { inset-inline: 896px }
```

```
.inset-x-5xl { inset-inline: 1024px }
```

```
.inset-x-6xl { inset-inline: 1152px }
```

```
.inset-x-7xl { inset-inline: 1280px }
```

```
.inset-x-<number> { inset-inline: calc(<number> * 4px) }
```

```
.-inset-x-<number> { inset-inline: calc(-<number> * 4px) }
```

```
.inset-x-<fraction> { inset-inline: calc(<fraction> * 100%) }
```

```
.inset-x-[<value>] { inset-inline: <value> }
```

```
.inset-x-(<custom-property>) { inset-inline: var(<custom-property>) }
```

```
.inset-y-auto { inset-block: auto }
```

```
.inset-y-px { inset-block: 1px }
```

```
.-inset-y-px { inset-block: -1px }
```

```
.inset-y-full { inset-block: 100% }
```

```
.-inset-y-full { inset-block: -100% }
```

```
.inset-y-screen { inset-block: 100vw }
```

```
.inset-y-dvw { inset-block: 100vw }
```

```
.inset-y-dvh { inset-block: 100vh }
```

```
.inset-y-lvw { inset-block: 100lvw }
```

```
.inset-y-lvh { inset-block: 100lvh }
```

```
.inset-y-svw { inset-block: 100svw }
```

```
.inset-y-svh { inset-block: 100svh }
```

```
.inset-y-min { inset-block: min-content }
```

```
.inset-y-max { inset-block: max-content }
```

```
.inset-y-fit { inset-block: fit-content }
```

```
.inset-y-3xs { inset-block: 256px }
```

```
.inset-y-2xs { inset-block: 288px }
```

```
.inset-y-xs { inset-block: 320px }
```

```
.inset-y-sm { inset-block: 384px }
```

```
.inset-y-md { inset-block: 448px }
```

```
.inset-y-lg { inset-block: 512px }
```

```
.inset-y-xl { inset-block: 576px }
```

```
.inset-y-2xl { inset-block: 672px }
```

```
.inset-y-3xl { inset-block: 768px }
```

```
.inset-y-4xl { inset-block: 896px }
```

```
.inset-y-5xl { inset-block: 1024px }
```

```
.inset-y-6xl { inset-block: 1152px }
```

```
.inset-y-7xl { inset-block: 1280px }
```

```
.inset-y-<number> { inset-block: calc(<number> * 4px) }
```

```
.-inset-y-<number> { inset-block: calc(-<number> * 4px) }
```

```
.inset-y-<fraction> { inset-block: calc(<fraction> * 100%) }
```

```
.inset-y-[<value>] { inset-block: <value> }
```

```
.inset-y-(<custom-property>) { inset-block: var(<custom-property>) }
```

```
.start-auto { inset-inline-start: auto }
```

```
.start-px { inset-inline-start: 1px }
```

```
.-start-px { inset-inline-start: -1px }
```

```
.start-full { inset-inline-start: 100% }
```

```
.-start-full { inset-inline-start: -100% }
```

```
.start-screen { inset-inline-start: 100vw }
```

```
.start-dvw { inset-inline-start: 100vw }
```

```
.start-dvh { inset-inline-start: 100vh }
```

```
.start-lvw { inset-inline-start: 100lvw }
```

```
.start-lvh { inset-inline-start: 100lvh }
```

```
.start-svw { inset-inline-start: 100svw }
```

```
.start-svh { inset-inline-start: 100svh }
```

```
.start-min { inset-inline-start: min-content }
```

```
.start-max { inset-inline-start: max-content }
```

```
.start-fit { inset-inline-start: fit-content }
```

```
.start-3xs { inset-inline-start: 256px }
```

```
.start-2xs { inset-inline-start: 288px }
```

```
.start-xs { inset-inline-start: 320px }
```

```
.start-sm { inset-inline-start: 384px }
```

```
.start-md { inset-inline-start: 448px }
```

```
.start-lg { inset-inline-start: 512px }
```

```
.start-xl { inset-inline-start: 576px }
```

```
.start-2xl { inset-inline-start: 672px }
```

```
.start-3xl { inset-inline-start: 768px }
```

```
.start-4xl { inset-inline-start: 896px }
```

```
.start-5xl { inset-inline-start: 1024px }
```

```
.start-6xl { inset-inline-start: 1152px }
```

```
.start-7xl { inset-inline-start: 1280px }
```

```
.start-<number> { inset-inline-start: calc(<number> * 4px) }
```

```
.-start-<number> { inset-inline-start: calc(-<number> * 4px) }
```

```
.start-<fraction> { inset-inline-start: calc(<fraction> * 100%) }
```

```
.start-[<value>] { inset-inline-start: <value> }
```

```
.start-(<custom-property>) { inset-inline-start: var(<custom-property>) }
```

```
.end-auto { inset-inline-end: auto }
```

```
.end-px { inset-inline-end: 1px }
```

```
.-end-px { inset-inline-end: -1px }
```

```
.end-full { inset-inline-end: 100% }
```

```
.-end-full { inset-inline-end: -100% }
```

```
.end-screen { inset-inline-end: 100vw }
```

```
.end-dvw { inset-inline-end: 100vw }
```

```
.end-dvh { inset-inline-end: 100vh }
```

```
.end-lvw { inset-inline-end: 100lvw }
```

```
.end-lvh { inset-inline-end: 100lvh }
```

```
.end-svw { inset-inline-end: 100svw }
```

```
.end-svh { inset-inline-end: 100svh }
```

```
.end-min { inset-inline-end: min-content }
```

```
.end-max { inset-inline-end: max-content }
```

```
.end-fit { inset-inline-end: fit-content }
```

```
.end-3xs { inset-inline-end: 256px }
```

```
.end-2xs { inset-inline-end: 288px }
```

```
.end-xs { inset-inline-end: 320px }
```

```
.end-sm { inset-inline-end: 384px }
```

```
.end-md { inset-inline-end: 448px }
```

```
.end-lg { inset-inline-end: 512px }
```

```
.end-xl { inset-inline-end: 576px }
```

```
.end-2xl { inset-inline-end: 672px }
```

```
.end-3xl { inset-inline-end: 768px }
```

```
.end-4xl { inset-inline-end: 896px }
```

```
.end-5xl { inset-inline-end: 1024px }
```

```
.end-6xl { inset-inline-end: 1152px }
```

```
.end-7xl { inset-inline-end: 1280px }
```

```
.end-<number> { inset-inline-end: calc(<number> * 4px) }
```

```
.-end-<number> { inset-inline-end: calc(-<number> * 4px) }
```

```
.end-<fraction> { inset-inline-end: calc(<fraction> * 100%) }
```

```
.end-[<value>] { inset-inline-end: <value> }
```

```
.end-(<custom-property>) { inset-inline-end: var(<custom-property>) }
```

```
.top-auto { top: auto }
```

```
.top-px { top: 1px }
```

```
.-top-px { top: -1px }
```

```
.top-full { top: 100% }
```

```
.-top-full { top: -100% }
```

```
.top-screen { top: 100vw }
```

```
.top-dvw { top: 100vw }
```

```
.top-dvh { top: 100vh }
```

```
.top-lvw { top: 100lvw }
```

```
.top-lvh { top: 100lvh }
```

```
.top-svw { top: 100svw }
```

```
.top-svh { top: 100svh }
```

```
.top-min { top: min-content }
```

```
.top-max { top: max-content }
```

```
.top-fit { top: fit-content }
```

```
.top-3xs { top: 256px }
```

```
.top-2xs { top: 288px }
```

```
.top-xs { top: 320px }
```

```
.top-sm { top: 384px }
```

```
.top-md { top: 448px }
```

```
.top-lg { top: 512px }
```

```
.top-xl { top: 576px }
```

```
.top-2xl { top: 672px }
```

```
.top-3xl { top: 768px }
```

```
.top-4xl { top: 896px }
```

```
.top-5xl { top: 1024px }
```

```
.top-6xl { top: 1152px }
```

```
.top-7xl { top: 1280px }
```

```
.top-<number> { top: calc(<number> * 4px) }
```

```
.-top-<number> { top: calc(-<number> * 4px) }
```

```
.top-<fraction> { top: calc(<fraction> * 100%) }
```

```
.top-[<value>] { top: <value> }
```

```
.top-(<custom-property>) { top: var(<custom-property>) }
```

```
.right-auto { right: auto }
```

```
.right-px { right: 1px }
```

```
.-right-px { right: -1px }
```

```
.right-full { right: 100% }
```

```
.-right-full { right: -100% }
```

```
.right-screen { right: 100vw }
```

```
.right-dvw { right: 100vw }
```

```
.right-dvh { right: 100vh }
```

```
.right-lvw { right: 100lvw }
```

```
.right-lvh { right: 100lvh }
```

```
.right-svw { right: 100svw }
```

```
.right-svh { right: 100svh }
```

```
.right-min { right: min-content }
```

```
.right-max { right: max-content }
```

```
.right-fit { right: fit-content }
```

```
.right-3xs { right: 256px }
```

```
.right-2xs { right: 288px }
```

```
.right-xs { right: 320px }
```

```
.right-sm { right: 384px }
```

```
.right-md { right: 448px }
```

```
.right-lg { right: 512px }
```

```
.right-xl { right: 576px }
```

```
.right-2xl { right: 672px }
```

```
.right-3xl { right: 768px }
```

```
.right-4xl { right: 896px }
```

```
.right-5xl { right: 1024px }
```

```
.right-6xl { right: 1152px }
```

```
.right-7xl { right: 1280px }
```

```
.right-<number> { right: calc(<number> * 4px) }
```

```
.-right-<number> { right: calc(-<number> * 4px) }
```

```
.right-<fraction> { right: calc(<fraction> * 100%) }
```

```
.right-[<value>] { right: <value> }
```

```
.right-(<custom-property>) { right: var(<custom-property>) }
```

```
.bottom-auto { bottom: auto }
```

```
.bottom-px { bottom: 1px }
```

```
.-bottom-px { bottom: -1px }
```

```
.bottom-full { bottom: 100% }
```

```
.-bottom-full { bottom: -100% }
```

```
.bottom-screen { bottom: 100vw }
```

```
.bottom-dvw { bottom: 100vw }
```

```
.bottom-dvh { bottom: 100vh }
```

```
.bottom-lvw { bottom: 100lvw }
```

```
.bottom-lvh { bottom: 100lvh }
```

```
.bottom-svw { bottom: 100svw }
```

```
.bottom-svh { bottom: 100svh }
```

```
.bottom-min { bottom: min-content }
```

```
.bottom-max { bottom: max-content }
```

```
.bottom-fit { bottom: fit-content }
```

```
.bottom-3xs { bottom: 256px }
```

```
.bottom-2xs { bottom: 288px }
```

```
.bottom-xs { bottom: 320px }
```

```
.bottom-sm { bottom: 384px }
```

```
.bottom-md { bottom: 448px }
```

```
.bottom-lg { bottom: 512px }
```

```
.bottom-xl { bottom: 576px }
```

```
.bottom-2xl { bottom: 672px }
```

```
.bottom-3xl { bottom: 768px }
```

```
.bottom-4xl { bottom: 896px }
```

```
.bottom-5xl { bottom: 1024px }
```

```
.bottom-6xl { bottom: 1152px }
```

```
.bottom-7xl { bottom: 1280px }
```

```
.bottom-<number> { bottom: calc(<number> * 4px) }
```

```
.-bottom-<number> { bottom: calc(-<number> * 4px) }
```

```
.bottom-<fraction> { bottom: calc(<fraction> * 100%) }
```

```
.bottom-[<value>] { bottom: <value> }
```

```
.bottom-(<custom-property>) { bottom: var(<custom-property>) }
```

```
.left-auto { left: auto }
```

```
.left-px { left: 1px }
```

```
.-left-px { left: -1px }
```

```
.left-full { left: 100% }
```

```
.-left-full { left: -100% }
```

```
.left-screen { left: 100vw }
```

```
.left-dvw { left: 100vw }
```

```
.left-dvh { left: 100vh }
```

```
.left-lvw { left: 100lvw }
```

```
.left-lvh { left: 100lvh }
```

```
.left-svw { left: 100svw }
```

```
.left-svh { left: 100svh }
```

```
.left-min { left: min-content }
```

```
.left-max { left: max-content }
```

```
.left-fit { left: fit-content }
```

```
.left-3xs { left: 256px }
```

```
.left-2xs { left: 288px }
```

```
.left-xs { left: 320px }
```

```
.left-sm { left: 384px }
```

```
.left-md { left: 448px }
```

```
.left-lg { left: 512px }
```

```
.left-xl { left: 576px }
```

```
.left-2xl { left: 672px }
```

```
.left-3xl { left: 768px }
```

```
.left-4xl { left: 896px }
```

```
.left-5xl { left: 1024px }
```

```
.left-6xl { left: 1152px }
```

```
.left-7xl { left: 1280px }
```

```
.left-<number> { left: calc(<number> * 4px) }
```

```
.-left-<number> { left: calc(-<number> * 4px) }
```

```
.left-<fraction> { left: calc(<fraction> * 100%) }
```

```
.left-[<value>] { left: <value> }
```

```
.left-(<custom-property>) { left: var(<custom-property>) }
```

### visibility

```
.visible { visibility: visible }
```

```
.invisible { visibility: hidden }
```

```
.collapse { visibility: collapse }
```

### z-index

```
.z-auto { z-index: auto }
```

```
.z-<number> { z-index: <number> }
```

```
.-z-<number> { z-index: -<number> }
```

```
.z-[<value>] { z-index: <value> }
```

```
.z-(<custom-property>) { z-index: var(<custom-property>) }
```

## Flexbox & Grid

### flex-basis

```
.basis-auto { flex-basis: auto }
```

```
.basis-px { flex-basis: 1px }
```

```
.-basis-px { flex-basis: -1px }
```

```
.basis-full { flex-basis: 100% }
```

```
.-basis-full { flex-basis: -100% }
```

```
.basis-screen { flex-basis: 100vw }
```

```
.basis-dvw { flex-basis: 100vw }
```

```
.basis-dvh { flex-basis: 100vh }
```

```
.basis-lvw { flex-basis: 100lvw }
```

```
.basis-lvh { flex-basis: 100lvh }
```

```
.basis-svw { flex-basis: 100svw }
```

```
.basis-svh { flex-basis: 100svh }
```

```
.basis-min { flex-basis: min-content }
```

```
.basis-max { flex-basis: max-content }
```

```
.basis-fit { flex-basis: fit-content }
```

```
.basis-3xs { flex-basis: 256px }
```

```
.basis-2xs { flex-basis: 288px }
```

```
.basis-xs { flex-basis: 320px }
```

```
.basis-sm { flex-basis: 384px }
```

```
.basis-md { flex-basis: 448px }
```

```
.basis-lg { flex-basis: 512px }
```

```
.basis-xl { flex-basis: 576px }
```

```
.basis-2xl { flex-basis: 672px }
```

```
.basis-3xl { flex-basis: 768px }
```

```
.basis-4xl { flex-basis: 896px }
```

```
.basis-5xl { flex-basis: 1024px }
```

```
.basis-6xl { flex-basis: 1152px }
```

```
.basis-7xl { flex-basis: 1280px }
```

```
.basis-<number> { flex-basis: calc(<number> * 4px) }
```

```
.-basis-<number> { flex-basis: calc(-<number> * 4px) }
```

```
.basis-<fraction> { flex-basis: calc(<fraction> * 100%) }
```

```
.basis-[<value>] { flex-basis: <value> }
```

```
.basis-(<custom-property>) { flex-basis: var(<custom-property>) }
```

### flex-direction

```
.flex-row { flex-direction: row }
```

```
.flex-row-reverse { flex-direction: row-reverse }
```

```
.flex-col { flex-direction: column }
```

```
.flex-col-reverse { flex-direction: column-reverse }
```

### flex-wrap

```
.flex-nowrap { flex-wrap: nowrap }
```

```
.flex-wrap { flex-wrap: wrap }
```

```
.flex-wrap-reverse { flex-wrap: wrap-reverse }
```

### flex

```
.flex-auto { flex: 1 1 auto }
```

```
.flex-initial { flex: 0 1 auto }
```

```
.flex-none { flex: none }
```

```
.flex-<number> { flex: <number> }
```

```
.-flex-<number> { flex: -<number> }
```

```
.flex-<fraction> { flex: calc(<fraction> * 100%) }
```

```
.flex-[<value>] { flex: <value> }
```

```
.flex-(<custom-property>) { flex: var(<custom-property>) }
```

### flex-grow

```
.grow { flex-grow: 1 }
```

```
.grow-<number> { flex-grow: <number> }
```

```
.-grow-<number> { flex-grow: -<number> }
```

```
.grow-[<value>] { flex-grow: <value> }
```

```
.grow-(<custom-property>) { flex-grow: var(<custom-property>) }
```

### flex-shrink

```
.shrink { flex-shrink: 1 }
```

```
.shrink-<number> { flex-shrink: <number> }
```

```
.-shrink-<number> { flex-shrink: -<number> }
```

```
.shrink-[<value>] { flex-shrink: <value> }
```

```
.shrink-(<custom-property>) { flex-shrink: var(<custom-property>) }
```

### order

```
.order-first { order: -9999 }
```

```
.order-last { order: 9999 }
```

```
.order-none { order: 0 }
```

```
.order-<number> { order: <number> }
```

```
.-order-<number> { order: -<number> }
```

```
.order-[<value>] { order: <value> }
```

```
.order-(<custom-property>) { order: var(<custom-property>) }
```

### grid-template-columns

```
.grid-cols-none { grid-template-columns: none }
```

```
.grid-cols-subgrid { grid-template-columns: subgrid }
```

```
.grid-cols-<number> { grid-template-columns: repeat(<number>, minmax(0, 1fr)) }
```

```
.-grid-cols-<number> { grid-template-columns: repeat(-<number>, minmax(0, 1fr)) }
```

```
.grid-cols-[<value>] { grid-template-columns: <value> }
```

```
.grid-cols-(<custom-property>) { grid-template-columns: var(<custom-property>) }
```

### grid-column

```
.col-span-full { grid-column: 1 / -1 }
```

```
.col-span-<number> { grid-column: span <number> / span <number> }
```

```
.-col-span-<number> { grid-column: span -<number> / span -<number> }
```

```
.col-span-[<value>] { grid-column: <value> }
```

```
.col-span-(<custom-property>) { grid-column: var(<custom-property>) }
```

```
.col-start-auto { grid-column-start: auto }
```

```
.col-start-<number> { grid-column-start: <number> }
```

```
.-col-start-<number> { grid-column-start: -<number> }
```

```
.col-start-[<value>] { grid-column-start: <value> }
```

```
.col-start-(<custom-property>) { grid-column-start: var(<custom-property>) }
```

```
.col-end-auto { grid-column-end: auto }
```

```
.col-end-<number> { grid-column-end: <number> }
```

```
.-col-end-<number> { grid-column-end: -<number> }
```

```
.col-end-[<value>] { grid-column-end: <value> }
```

```
.col-end-(<custom-property>) { grid-column-end: var(<custom-property>) }
```

```
.col-auto { grid-column: auto }
```

```
.col-<number> { grid-column: <number> }
```

```
.-col-<number> { grid-column: -<number> }
```

```
.col-[<value>] { grid-column: <value> }
```

```
.col-(<custom-property>) { grid-column: var(<custom-property>) }
```

### grid-template-rows

```
.grid-rows-none { grid-template-rows: none }
```

```
.grid-rows-subgrid { grid-template-rows: subgrid }
```

```
.grid-rows-<number> { grid-template-rows: repeat(<number>, minmax(0, 1fr)) }
```

```
.-grid-rows-<number> { grid-template-rows: repeat(-<number>, minmax(0, 1fr)) }
```

```
.grid-rows-[<value>] { grid-template-rows: <value> }
```

```
.grid-rows-(<custom-property>) { grid-template-rows: var(<custom-property>) }
```

### grid-row

```
.row-span-full { grid-row: 1 / -1 }
```

```
.row-span-<number> { grid-row: span <number> / span <number> }
```

```
.-row-span-<number> { grid-row: span -<number> / span -<number> }
```

```
.row-span-[<value>] { grid-row: <value> }
```

```
.row-span-(<custom-property>) { grid-row: var(<custom-property>) }
```

```
.row-start-auto { grid-row-start: auto }
```

```
.row-start-<number> { grid-row-start: <number> }
```

```
.-row-start-<number> { grid-row-start: -<number> }
```

```
.row-start-[<value>] { grid-row-start: <value> }
```

```
.row-start-(<custom-property>) { grid-row-start: var(<custom-property>) }
```

```
.row-end-auto { grid-row-end: auto }
```

```
.row-end-<number> { grid-row-end: <number> }
```

```
.-row-end-<number> { grid-row-end: -<number> }
```

```
.row-end-[<value>] { grid-row-end: <value> }
```

```
.row-end-(<custom-property>) { grid-row-end: var(<custom-property>) }
```

```
.row-auto { grid-row: auto }
```

```
.row-<number> { grid-row: <number> }
```

```
.-row-<number> { grid-row: -<number> }
```

```
.row-[<value>] { grid-row: <value> }
```

```
.row-(<custom-property>) { grid-row: var(<custom-property>) }
```

### grid-auto-flow

```
.grid-flow-row { grid-auto-flow: row }
```

```
.grid-flow-col { grid-auto-flow: column }
```

```
.grid-flow-dense { grid-auto-flow: dense }
```

```
.grid-flow-row-dense { grid-auto-flow: row dense }
```

```
.grid-flow-col-dense { grid-auto-flow: column dense }
```

### grid-auto-columns

```
.auto-cols-auto { grid-auto-columns: auto }
```

```
.auto-cols-min { grid-auto-columns: min-content }
```

```
.auto-cols-max { grid-auto-columns: max-content }
```

```
.auto-cols-fr { grid-auto-columns: minmax(0, 1fr) }
```

```
.auto-cols-[<value>] { grid-auto-columns: <value> }
```

```
.auto-cols-(<custom-property>) { grid-auto-columns: var(<custom-property>) }
```

### grid-auto-rows

```
.auto-rows-auto { grid-auto-rows: auto }
```

```
.auto-rows-min { grid-auto-rows: min-content }
```

```
.auto-rows-max { grid-auto-rows: max-content }
```

```
.auto-rows-fr { grid-auto-rows: minmax(0, 1fr) }
```

```
.auto-rows-[<value>] { grid-auto-rows: <value> }
```

```
.auto-rows-(<custom-property>) { grid-auto-rows: var(<custom-property>) }
```

### gap

```
.gap-<number> { gap: calc(<number> * 4px) }
```

```
.-gap-<number> { gap: calc(-<number> * 4px) }
```

```
.gap-[<value>] { gap: <value> }
```

```
.gap-(<custom-property>) { gap: var(<custom-property>) }
```

```
.gap-x-<number> { column-gap: calc(<number> * 4px) }
```

```
.-gap-x-<number> { column-gap: calc(-<number> * 4px) }
```

```
.gap-x-[<value>] { column-gap: <value> }
```

```
.gap-x-(<custom-property>) { column-gap: var(<custom-property>) }
```

```
.gap-y-<number> { row-gap: calc(<number> * 4px) }
```

```
.-gap-y-<number> { row-gap: calc(-<number> * 4px) }
```

```
.gap-y-[<value>] { row-gap: <value> }
```

```
.gap-y-(<custom-property>) { row-gap: var(<custom-property>) }
```

### justify-content

```
.justify-start { justify-content: flex-start }
```

```
.justify-end { justify-content: flex-end }
```

```
.justify-center { justify-content: center }
```

```
.justify-between { justify-content: space-between }
```

```
.justify-around { justify-content: space-around }
```

```
.justify-evenly { justify-content: space-evenly }
```

```
.justify-stretch { justify-content: stretch }
```

```
.justify-normal { justify-content: normal }
```

### justify-items

```
.justify-items-start { justify-items: start }
```

```
.justify-items-end { justify-items: end }
```

```
.justify-items-center { justify-items: center }
```

```
.justify-items-stretch { justify-items: stretch }
```

```
.justify-items-normal { justify-items: normal }
```

### justify-self

```
.justify-self-auto { justify-self: auto }
```

```
.justify-self-start { justify-self: start }
```

```
.justify-self-end { justify-self: end }
```

```
.justify-self-center { justify-self: center }
```

```
.justify-self-stretch { justify-self: stretch }
```

### align-content

```
.content-normal { align-content: normal }
```

```
.content-center { align-content: center }
```

```
.content-start { align-content: flex-start }
```

```
.content-end { align-content: flex-end }
```

```
.content-between { align-content: space-between }
```

```
.content-around { align-content: space-around }
```

```
.content-evenly { align-content: space-evenly }
```

```
.content-baseline { align-content: baseline }
```

```
.content-stretch { align-content: stretch }
```

### align-items

```
.items-start { align-items: flex-start }
```

```
.items-end { align-items: flex-end }
```

```
.items-end-safe { align-items: safe flex-end }
```

```
.items-center { align-items: center }
```

```
.items-center-safe { align-items: safe center }
```

```
.items-baseline { align-items: baseline }
```

```
.items-baseline-last { align-items: last baseline }
```

```
.items-stretch { align-items: stretch }
```

### align-self

```
.self-auto { align-self: auto }
```

```
.self-start { align-self: flex-start }
```

```
.self-end { align-self: flex-end }
```

```
.self-center { align-self: center }
```

```
.self-stretch { align-self: stretch }
```

```
.self-baseline { align-self: baseline }
```

### place-content

```
.place-content-center { place-content: center }
```

```
.place-content-start { place-content: flex-start }
```

```
.place-content-end { place-content: flex-end }
```

```
.place-content-between { place-content: space-between }
```

```
.place-content-around { place-content: space-around }
```

```
.place-content-evenly { place-content: space-evenly }
```

```
.place-content-baseline { place-content: baseline }
```

```
.place-content-stretch { place-content: stretch }
```

### place-items

```
.place-items-start { place-items: start }
```

```
.place-items-end { place-items: end }
```

```
.place-items-center { place-items: center }
```

```
.place-items-baseline { place-items: baseline }
```

```
.place-items-stretch { place-items: stretch }
```

### place-self

```
.place-self-auto { place-self: auto }
```

```
.place-self-start { place-self: start }
```

```
.place-self-end { place-self: end }
```

```
.place-self-center { place-self: center }
```

```
.place-self-stretch { place-self: stretch }
```

## Spacing

### padding

```
.p-auto { padding: auto }
```

```
.p-px { padding: 1px }
```

```
.-p-px { padding: -1px }
```

```
.p-full { padding: 100% }
```

```
.-p-full { padding: -100% }
```

```
.p-screen { padding: 100vw }
```

```
.p-dvw { padding: 100vw }
```

```
.p-dvh { padding: 100vh }
```

```
.p-lvw { padding: 100lvw }
```

```
.p-lvh { padding: 100lvh }
```

```
.p-svw { padding: 100svw }
```

```
.p-svh { padding: 100svh }
```

```
.p-min { padding: min-content }
```

```
.p-max { padding: max-content }
```

```
.p-fit { padding: fit-content }
```

```
.p-3xs { padding: 256px }
```

```
.p-2xs { padding: 288px }
```

```
.p-xs { padding: 320px }
```

```
.p-sm { padding: 384px }
```

```
.p-md { padding: 448px }
```

```
.p-lg { padding: 512px }
```

```
.p-xl { padding: 576px }
```

```
.p-2xl { padding: 672px }
```

```
.p-3xl { padding: 768px }
```

```
.p-4xl { padding: 896px }
```

```
.p-5xl { padding: 1024px }
```

```
.p-6xl { padding: 1152px }
```

```
.p-7xl { padding: 1280px }
```

```
.p-<number> { padding: calc(<number> * 4px) }
```

```
.-p-<number> { padding: calc(-<number> * 4px) }
```

```
.p-[<value>] { padding: <value> }
```

```
.p-(<custom-property>) { padding: var(<custom-property>) }
```

```
.px-auto { padding-inline: auto }
```

```
.px-px { padding-inline: 1px }
```

```
.-px-px { padding-inline: -1px }
```

```
.px-full { padding-inline: 100% }
```

```
.-px-full { padding-inline: -100% }
```

```
.px-screen { padding-inline: 100vw }
```

```
.px-dvw { padding-inline: 100vw }
```

```
.px-dvh { padding-inline: 100vh }
```

```
.px-lvw { padding-inline: 100lvw }
```

```
.px-lvh { padding-inline: 100lvh }
```

```
.px-svw { padding-inline: 100svw }
```

```
.px-svh { padding-inline: 100svh }
```

```
.px-min { padding-inline: min-content }
```

```
.px-max { padding-inline: max-content }
```

```
.px-fit { padding-inline: fit-content }
```

```
.px-3xs { padding-inline: 256px }
```

```
.px-2xs { padding-inline: 288px }
```

```
.px-xs { padding-inline: 320px }
```

```
.px-sm { padding-inline: 384px }
```

```
.px-md { padding-inline: 448px }
```

```
.px-lg { padding-inline: 512px }
```

```
.px-xl { padding-inline: 576px }
```

```
.px-2xl { padding-inline: 672px }
```

```
.px-3xl { padding-inline: 768px }
```

```
.px-4xl { padding-inline: 896px }
```

```
.px-5xl { padding-inline: 1024px }
```

```
.px-6xl { padding-inline: 1152px }
```

```
.px-7xl { padding-inline: 1280px }
```

```
.px-<number> { padding-inline: calc(<number> * 4px) }
```

```
.-px-<number> { padding-inline: calc(-<number> * 4px) }
```

```
.px-[<value>] { padding-inline: <value> }
```

```
.px-(<custom-property>) { padding-inline: var(<custom-property>) }
```

```
.py-auto { padding-block: auto }
```

```
.py-px { padding-block: 1px }
```

```
.-py-px { padding-block: -1px }
```

```
.py-full { padding-block: 100% }
```

```
.-py-full { padding-block: -100% }
```

```
.py-screen { padding-block: 100vw }
```

```
.py-dvw { padding-block: 100vw }
```

```
.py-dvh { padding-block: 100vh }
```

```
.py-lvw { padding-block: 100lvw }
```

```
.py-lvh { padding-block: 100lvh }
```

```
.py-svw { padding-block: 100svw }
```

```
.py-svh { padding-block: 100svh }
```

```
.py-min { padding-block: min-content }
```

```
.py-max { padding-block: max-content }
```

```
.py-fit { padding-block: fit-content }
```

```
.py-3xs { padding-block: 256px }
```

```
.py-2xs { padding-block: 288px }
```

```
.py-xs { padding-block: 320px }
```

```
.py-sm { padding-block: 384px }
```

```
.py-md { padding-block: 448px }
```

```
.py-lg { padding-block: 512px }
```

```
.py-xl { padding-block: 576px }
```

```
.py-2xl { padding-block: 672px }
```

```
.py-3xl { padding-block: 768px }
```

```
.py-4xl { padding-block: 896px }
```

```
.py-5xl { padding-block: 1024px }
```

```
.py-6xl { padding-block: 1152px }
```

```
.py-7xl { padding-block: 1280px }
```

```
.py-<number> { padding-block: calc(<number> * 4px) }
```

```
.-py-<number> { padding-block: calc(-<number> * 4px) }
```

```
.py-[<value>] { padding-block: <value> }
```

```
.py-(<custom-property>) { padding-block: var(<custom-property>) }
```

```
.ps-auto { padding-inline-start: auto }
```

```
.ps-px { padding-inline-start: 1px }
```

```
.-ps-px { padding-inline-start: -1px }
```

```
.ps-full { padding-inline-start: 100% }
```

```
.-ps-full { padding-inline-start: -100% }
```

```
.ps-screen { padding-inline-start: 100vw }
```

```
.ps-dvw { padding-inline-start: 100vw }
```

```
.ps-dvh { padding-inline-start: 100vh }
```

```
.ps-lvw { padding-inline-start: 100lvw }
```

```
.ps-lvh { padding-inline-start: 100lvh }
```

```
.ps-svw { padding-inline-start: 100svw }
```

```
.ps-svh { padding-inline-start: 100svh }
```

```
.ps-min { padding-inline-start: min-content }
```

```
.ps-max { padding-inline-start: max-content }
```

```
.ps-fit { padding-inline-start: fit-content }
```

```
.ps-3xs { padding-inline-start: 256px }
```

```
.ps-2xs { padding-inline-start: 288px }
```

```
.ps-xs { padding-inline-start: 320px }
```

```
.ps-sm { padding-inline-start: 384px }
```

```
.ps-md { padding-inline-start: 448px }
```

```
.ps-lg { padding-inline-start: 512px }
```

```
.ps-xl { padding-inline-start: 576px }
```

```
.ps-2xl { padding-inline-start: 672px }
```

```
.ps-3xl { padding-inline-start: 768px }
```

```
.ps-4xl { padding-inline-start: 896px }
```

```
.ps-5xl { padding-inline-start: 1024px }
```

```
.ps-6xl { padding-inline-start: 1152px }
```

```
.ps-7xl { padding-inline-start: 1280px }
```

```
.ps-<number> { padding-inline-start: calc(<number> * 4px) }
```

```
.-ps-<number> { padding-inline-start: calc(-<number> * 4px) }
```

```
.ps-[<value>] { padding-inline-start: <value> }
```

```
.ps-(<custom-property>) { padding-inline-start: var(<custom-property>) }
```

```
.pe-auto { padding-inline-end: auto }
```

```
.pe-px { padding-inline-end: 1px }
```

```
.-pe-px { padding-inline-end: -1px }
```

```
.pe-full { padding-inline-end: 100% }
```

```
.-pe-full { padding-inline-end: -100% }
```

```
.pe-screen { padding-inline-end: 100vw }
```

```
.pe-dvw { padding-inline-end: 100vw }
```

```
.pe-dvh { padding-inline-end: 100vh }
```

```
.pe-lvw { padding-inline-end: 100lvw }
```

```
.pe-lvh { padding-inline-end: 100lvh }
```

```
.pe-svw { padding-inline-end: 100svw }
```

```
.pe-svh { padding-inline-end: 100svh }
```

```
.pe-min { padding-inline-end: min-content }
```

```
.pe-max { padding-inline-end: max-content }
```

```
.pe-fit { padding-inline-end: fit-content }
```

```
.pe-3xs { padding-inline-end: 256px }
```

```
.pe-2xs { padding-inline-end: 288px }
```

```
.pe-xs { padding-inline-end: 320px }
```

```
.pe-sm { padding-inline-end: 384px }
```

```
.pe-md { padding-inline-end: 448px }
```

```
.pe-lg { padding-inline-end: 512px }
```

```
.pe-xl { padding-inline-end: 576px }
```

```
.pe-2xl { padding-inline-end: 672px }
```

```
.pe-3xl { padding-inline-end: 768px }
```

```
.pe-4xl { padding-inline-end: 896px }
```

```
.pe-5xl { padding-inline-end: 1024px }
```

```
.pe-6xl { padding-inline-end: 1152px }
```

```
.pe-7xl { padding-inline-end: 1280px }
```

```
.pe-<number> { padding-inline-end: calc(<number> * 4px) }
```

```
.-pe-<number> { padding-inline-end: calc(-<number> * 4px) }
```

```
.pe-[<value>] { padding-inline-end: <value> }
```

```
.pe-(<custom-property>) { padding-inline-end: var(<custom-property>) }
```

```
.pt-auto { padding-top: auto }
```

```
.pt-px { padding-top: 1px }
```

```
.-pt-px { padding-top: -1px }
```

```
.pt-full { padding-top: 100% }
```

```
.-pt-full { padding-top: -100% }
```

```
.pt-screen { padding-top: 100vw }
```

```
.pt-dvw { padding-top: 100vw }
```

```
.pt-dvh { padding-top: 100vh }
```

```
.pt-lvw { padding-top: 100lvw }
```

```
.pt-lvh { padding-top: 100lvh }
```

```
.pt-svw { padding-top: 100svw }
```

```
.pt-svh { padding-top: 100svh }
```

```
.pt-min { padding-top: min-content }
```

```
.pt-max { padding-top: max-content }
```

```
.pt-fit { padding-top: fit-content }
```

```
.pt-3xs { padding-top: 256px }
```

```
.pt-2xs { padding-top: 288px }
```

```
.pt-xs { padding-top: 320px }
```

```
.pt-sm { padding-top: 384px }
```

```
.pt-md { padding-top: 448px }
```

```
.pt-lg { padding-top: 512px }
```

```
.pt-xl { padding-top: 576px }
```

```
.pt-2xl { padding-top: 672px }
```

```
.pt-3xl { padding-top: 768px }
```

```
.pt-4xl { padding-top: 896px }
```

```
.pt-5xl { padding-top: 1024px }
```

```
.pt-6xl { padding-top: 1152px }
```

```
.pt-7xl { padding-top: 1280px }
```

```
.pt-<number> { padding-top: calc(<number> * 4px) }
```

```
.-pt-<number> { padding-top: calc(-<number> * 4px) }
```

```
.pt-[<value>] { padding-top: <value> }
```

```
.pt-(<custom-property>) { padding-top: var(<custom-property>) }
```

```
.pr-auto { padding-right: auto }
```

```
.pr-px { padding-right: 1px }
```

```
.-pr-px { padding-right: -1px }
```

```
.pr-full { padding-right: 100% }
```

```
.-pr-full { padding-right: -100% }
```

```
.pr-screen { padding-right: 100vw }
```

```
.pr-dvw { padding-right: 100vw }
```

```
.pr-dvh { padding-right: 100vh }
```

```
.pr-lvw { padding-right: 100lvw }
```

```
.pr-lvh { padding-right: 100lvh }
```

```
.pr-svw { padding-right: 100svw }
```

```
.pr-svh { padding-right: 100svh }
```

```
.pr-min { padding-right: min-content }
```

```
.pr-max { padding-right: max-content }
```

```
.pr-fit { padding-right: fit-content }
```

```
.pr-3xs { padding-right: 256px }
```

```
.pr-2xs { padding-right: 288px }
```

```
.pr-xs { padding-right: 320px }
```

```
.pr-sm { padding-right: 384px }
```

```
.pr-md { padding-right: 448px }
```

```
.pr-lg { padding-right: 512px }
```

```
.pr-xl { padding-right: 576px }
```

```
.pr-2xl { padding-right: 672px }
```

```
.pr-3xl { padding-right: 768px }
```

```
.pr-4xl { padding-right: 896px }
```

```
.pr-5xl { padding-right: 1024px }
```

```
.pr-6xl { padding-right: 1152px }
```

```
.pr-7xl { padding-right: 1280px }
```

```
.pr-<number> { padding-right: calc(<number> * 4px) }
```

```
.-pr-<number> { padding-right: calc(-<number> * 4px) }
```

```
.pr-[<value>] { padding-right: <value> }
```

```
.pr-(<custom-property>) { padding-right: var(<custom-property>) }
```

```
.pb-auto { padding-bottom: auto }
```

```
.pb-px { padding-bottom: 1px }
```

```
.-pb-px { padding-bottom: -1px }
```

```
.pb-full { padding-bottom: 100% }
```

```
.-pb-full { padding-bottom: -100% }
```

```
.pb-screen { padding-bottom: 100vw }
```

```
.pb-dvw { padding-bottom: 100vw }
```

```
.pb-dvh { padding-bottom: 100vh }
```

```
.pb-lvw { padding-bottom: 100lvw }
```

```
.pb-lvh { padding-bottom: 100lvh }
```

```
.pb-svw { padding-bottom: 100svw }
```

```
.pb-svh { padding-bottom: 100svh }
```

```
.pb-min { padding-bottom: min-content }
```

```
.pb-max { padding-bottom: max-content }
```

```
.pb-fit { padding-bottom: fit-content }
```

```
.pb-3xs { padding-bottom: 256px }
```

```
.pb-2xs { padding-bottom: 288px }
```

```
.pb-xs { padding-bottom: 320px }
```

```
.pb-sm { padding-bottom: 384px }
```

```
.pb-md { padding-bottom: 448px }
```

```
.pb-lg { padding-bottom: 512px }
```

```
.pb-xl { padding-bottom: 576px }
```

```
.pb-2xl { padding-bottom: 672px }
```

```
.pb-3xl { padding-bottom: 768px }
```

```
.pb-4xl { padding-bottom: 896px }
```

```
.pb-5xl { padding-bottom: 1024px }
```

```
.pb-6xl { padding-bottom: 1152px }
```

```
.pb-7xl { padding-bottom: 1280px }
```

```
.pb-<number> { padding-bottom: calc(<number> * 4px) }
```

```
.-pb-<number> { padding-bottom: calc(-<number> * 4px) }
```

```
.pb-[<value>] { padding-bottom: <value> }
```

```
.pb-(<custom-property>) { padding-bottom: var(<custom-property>) }
```

```
.pl-auto { padding-left: auto }
```

```
.pl-px { padding-left: 1px }
```

```
.-pl-px { padding-left: -1px }
```

```
.pl-full { padding-left: 100% }
```

```
.-pl-full { padding-left: -100% }
```

```
.pl-screen { padding-left: 100vw }
```

```
.pl-dvw { padding-left: 100vw }
```

```
.pl-dvh { padding-left: 100vh }
```

```
.pl-lvw { padding-left: 100lvw }
```

```
.pl-lvh { padding-left: 100lvh }
```

```
.pl-svw { padding-left: 100svw }
```

```
.pl-svh { padding-left: 100svh }
```

```
.pl-min { padding-left: min-content }
```

```
.pl-max { padding-left: max-content }
```

```
.pl-fit { padding-left: fit-content }
```

```
.pl-3xs { padding-left: 256px }
```

```
.pl-2xs { padding-left: 288px }
```

```
.pl-xs { padding-left: 320px }
```

```
.pl-sm { padding-left: 384px }
```

```
.pl-md { padding-left: 448px }
```

```
.pl-lg { padding-left: 512px }
```

```
.pl-xl { padding-left: 576px }
```

```
.pl-2xl { padding-left: 672px }
```

```
.pl-3xl { padding-left: 768px }
```

```
.pl-4xl { padding-left: 896px }
```

```
.pl-5xl { padding-left: 1024px }
```

```
.pl-6xl { padding-left: 1152px }
```

```
.pl-7xl { padding-left: 1280px }
```

```
.pl-<number> { padding-left: calc(<number> * 4px) }
```

```
.-pl-<number> { padding-left: calc(-<number> * 4px) }
```

```
.pl-[<value>] { padding-left: <value> }
```

```
.pl-(<custom-property>) { padding-left: var(<custom-property>) }
```

### margin

```
.m-auto { margin: auto }
```

```
.m-px { margin: 1px }
```

```
.-m-px { margin: -1px }
```

```
.m-full { margin: 100% }
```

```
.-m-full { margin: -100% }
```

```
.m-screen { margin: 100vw }
```

```
.m-dvw { margin: 100vw }
```

```
.m-dvh { margin: 100vh }
```

```
.m-lvw { margin: 100lvw }
```

```
.m-lvh { margin: 100lvh }
```

```
.m-svw { margin: 100svw }
```

```
.m-svh { margin: 100svh }
```

```
.m-min { margin: min-content }
```

```
.m-max { margin: max-content }
```

```
.m-fit { margin: fit-content }
```

```
.m-3xs { margin: 256px }
```

```
.m-2xs { margin: 288px }
```

```
.m-xs { margin: 320px }
```

```
.m-sm { margin: 384px }
```

```
.m-md { margin: 448px }
```

```
.m-lg { margin: 512px }
```

```
.m-xl { margin: 576px }
```

```
.m-2xl { margin: 672px }
```

```
.m-3xl { margin: 768px }
```

```
.m-4xl { margin: 896px }
```

```
.m-5xl { margin: 1024px }
```

```
.m-6xl { margin: 1152px }
```

```
.m-7xl { margin: 1280px }
```

```
.m-<number> { margin: calc(<number> * 4px) }
```

```
.-m-<number> { margin: calc(-<number> * 4px) }
```

```
.m-[<value>] { margin: <value> }
```

```
.m-(<custom-property>) { margin: var(<custom-property>) }
```

```
.mx-auto { margin-inline: auto }
```

```
.mx-px { margin-inline: 1px }
```

```
.-mx-px { margin-inline: -1px }
```

```
.mx-full { margin-inline: 100% }
```

```
.-mx-full { margin-inline: -100% }
```

```
.mx-screen { margin-inline: 100vw }
```

```
.mx-dvw { margin-inline: 100vw }
```

```
.mx-dvh { margin-inline: 100vh }
```

```
.mx-lvw { margin-inline: 100lvw }
```

```
.mx-lvh { margin-inline: 100lvh }
```

```
.mx-svw { margin-inline: 100svw }
```

```
.mx-svh { margin-inline: 100svh }
```

```
.mx-min { margin-inline: min-content }
```

```
.mx-max { margin-inline: max-content }
```

```
.mx-fit { margin-inline: fit-content }
```

```
.mx-3xs { margin-inline: 256px }
```

```
.mx-2xs { margin-inline: 288px }
```

```
.mx-xs { margin-inline: 320px }
```

```
.mx-sm { margin-inline: 384px }
```

```
.mx-md { margin-inline: 448px }
```

```
.mx-lg { margin-inline: 512px }
```

```
.mx-xl { margin-inline: 576px }
```

```
.mx-2xl { margin-inline: 672px }
```

```
.mx-3xl { margin-inline: 768px }
```

```
.mx-4xl { margin-inline: 896px }
```

```
.mx-5xl { margin-inline: 1024px }
```

```
.mx-6xl { margin-inline: 1152px }
```

```
.mx-7xl { margin-inline: 1280px }
```

```
.mx-<number> { margin-inline: calc(<number> * 4px) }
```

```
.-mx-<number> { margin-inline: calc(-<number> * 4px) }
```

```
.mx-[<value>] { margin-inline: <value> }
```

```
.mx-(<custom-property>) { margin-inline: var(<custom-property>) }
```

```
.my-auto { margin-block: auto }
```

```
.my-px { margin-block: 1px }
```

```
.-my-px { margin-block: -1px }
```

```
.my-full { margin-block: 100% }
```

```
.-my-full { margin-block: -100% }
```

```
.my-screen { margin-block: 100vw }
```

```
.my-dvw { margin-block: 100vw }
```

```
.my-dvh { margin-block: 100vh }
```

```
.my-lvw { margin-block: 100lvw }
```

```
.my-lvh { margin-block: 100lvh }
```

```
.my-svw { margin-block: 100svw }
```

```
.my-svh { margin-block: 100svh }
```

```
.my-min { margin-block: min-content }
```

```
.my-max { margin-block: max-content }
```

```
.my-fit { margin-block: fit-content }
```

```
.my-3xs { margin-block: 256px }
```

```
.my-2xs { margin-block: 288px }
```

```
.my-xs { margin-block: 320px }
```

```
.my-sm { margin-block: 384px }
```

```
.my-md { margin-block: 448px }
```

```
.my-lg { margin-block: 512px }
```

```
.my-xl { margin-block: 576px }
```

```
.my-2xl { margin-block: 672px }
```

```
.my-3xl { margin-block: 768px }
```

```
.my-4xl { margin-block: 896px }
```

```
.my-5xl { margin-block: 1024px }
```

```
.my-6xl { margin-block: 1152px }
```

```
.my-7xl { margin-block: 1280px }
```

```
.my-<number> { margin-block: calc(<number> * 4px) }
```

```
.-my-<number> { margin-block: calc(-<number> * 4px) }
```

```
.my-[<value>] { margin-block: <value> }
```

```
.my-(<custom-property>) { margin-block: var(<custom-property>) }
```

```
.ms-auto { margin-inline-start: auto }
```

```
.ms-px { margin-inline-start: 1px }
```

```
.-ms-px { margin-inline-start: -1px }
```

```
.ms-full { margin-inline-start: 100% }
```

```
.-ms-full { margin-inline-start: -100% }
```

```
.ms-screen { margin-inline-start: 100vw }
```

```
.ms-dvw { margin-inline-start: 100vw }
```

```
.ms-dvh { margin-inline-start: 100vh }
```

```
.ms-lvw { margin-inline-start: 100lvw }
```

```
.ms-lvh { margin-inline-start: 100lvh }
```

```
.ms-svw { margin-inline-start: 100svw }
```

```
.ms-svh { margin-inline-start: 100svh }
```

```
.ms-min { margin-inline-start: min-content }
```

```
.ms-max { margin-inline-start: max-content }
```

```
.ms-fit { margin-inline-start: fit-content }
```

```
.ms-3xs { margin-inline-start: 256px }
```

```
.ms-2xs { margin-inline-start: 288px }
```

```
.ms-xs { margin-inline-start: 320px }
```

```
.ms-sm { margin-inline-start: 384px }
```

```
.ms-md { margin-inline-start: 448px }
```

```
.ms-lg { margin-inline-start: 512px }
```

```
.ms-xl { margin-inline-start: 576px }
```

```
.ms-2xl { margin-inline-start: 672px }
```

```
.ms-3xl { margin-inline-start: 768px }
```

```
.ms-4xl { margin-inline-start: 896px }
```

```
.ms-5xl { margin-inline-start: 1024px }
```

```
.ms-6xl { margin-inline-start: 1152px }
```

```
.ms-7xl { margin-inline-start: 1280px }
```

```
.ms-<number> { margin-inline-start: calc(<number> * 4px) }
```

```
.-ms-<number> { margin-inline-start: calc(-<number> * 4px) }
```

```
.ms-[<value>] { margin-inline-start: <value> }
```

```
.ms-(<custom-property>) { margin-inline-start: var(<custom-property>) }
```

```
.me-auto { margin-inline-end: auto }
```

```
.me-px { margin-inline-end: 1px }
```

```
.-me-px { margin-inline-end: -1px }
```

```
.me-full { margin-inline-end: 100% }
```

```
.-me-full { margin-inline-end: -100% }
```

```
.me-screen { margin-inline-end: 100vw }
```

```
.me-dvw { margin-inline-end: 100vw }
```

```
.me-dvh { margin-inline-end: 100vh }
```

```
.me-lvw { margin-inline-end: 100lvw }
```

```
.me-lvh { margin-inline-end: 100lvh }
```

```
.me-svw { margin-inline-end: 100svw }
```

```
.me-svh { margin-inline-end: 100svh }
```

```
.me-min { margin-inline-end: min-content }
```

```
.me-max { margin-inline-end: max-content }
```

```
.me-fit { margin-inline-end: fit-content }
```

```
.me-3xs { margin-inline-end: 256px }
```

```
.me-2xs { margin-inline-end: 288px }
```

```
.me-xs { margin-inline-end: 320px }
```

```
.me-sm { margin-inline-end: 384px }
```

```
.me-md { margin-inline-end: 448px }
```

```
.me-lg { margin-inline-end: 512px }
```

```
.me-xl { margin-inline-end: 576px }
```

```
.me-2xl { margin-inline-end: 672px }
```

```
.me-3xl { margin-inline-end: 768px }
```

```
.me-4xl { margin-inline-end: 896px }
```

```
.me-5xl { margin-inline-end: 1024px }
```

```
.me-6xl { margin-inline-end: 1152px }
```

```
.me-7xl { margin-inline-end: 1280px }
```

```
.me-<number> { margin-inline-end: calc(<number> * 4px) }
```

```
.-me-<number> { margin-inline-end: calc(-<number> * 4px) }
```

```
.me-[<value>] { margin-inline-end: <value> }
```

```
.me-(<custom-property>) { margin-inline-end: var(<custom-property>) }
```

```
.mt-auto { margin-top: auto }
```

```
.mt-px { margin-top: 1px }
```

```
.-mt-px { margin-top: -1px }
```

```
.mt-full { margin-top: 100% }
```

```
.-mt-full { margin-top: -100% }
```

```
.mt-screen { margin-top: 100vw }
```

```
.mt-dvw { margin-top: 100vw }
```

```
.mt-dvh { margin-top: 100vh }
```

```
.mt-lvw { margin-top: 100lvw }
```

```
.mt-lvh { margin-top: 100lvh }
```

```
.mt-svw { margin-top: 100svw }
```

```
.mt-svh { margin-top: 100svh }
```

```
.mt-min { margin-top: min-content }
```

```
.mt-max { margin-top: max-content }
```

```
.mt-fit { margin-top: fit-content }
```

```
.mt-3xs { margin-top: 256px }
```

```
.mt-2xs { margin-top: 288px }
```

```
.mt-xs { margin-top: 320px }
```

```
.mt-sm { margin-top: 384px }
```

```
.mt-md { margin-top: 448px }
```

```
.mt-lg { margin-top: 512px }
```

```
.mt-xl { margin-top: 576px }
```

```
.mt-2xl { margin-top: 672px }
```

```
.mt-3xl { margin-top: 768px }
```

```
.mt-4xl { margin-top: 896px }
```

```
.mt-5xl { margin-top: 1024px }
```

```
.mt-6xl { margin-top: 1152px }
```

```
.mt-7xl { margin-top: 1280px }
```

```
.mt-<number> { margin-top: calc(<number> * 4px) }
```

```
.-mt-<number> { margin-top: calc(-<number> * 4px) }
```

```
.mt-[<value>] { margin-top: <value> }
```

```
.mt-(<custom-property>) { margin-top: var(<custom-property>) }
```

```
.mr-auto { margin-right: auto }
```

```
.mr-px { margin-right: 1px }
```

```
.-mr-px { margin-right: -1px }
```

```
.mr-full { margin-right: 100% }
```

```
.-mr-full { margin-right: -100% }
```

```
.mr-screen { margin-right: 100vw }
```

```
.mr-dvw { margin-right: 100vw }
```

```
.mr-dvh { margin-right: 100vh }
```

```
.mr-lvw { margin-right: 100lvw }
```

```
.mr-lvh { margin-right: 100lvh }
```

```
.mr-svw { margin-right: 100svw }
```

```
.mr-svh { margin-right: 100svh }
```

```
.mr-min { margin-right: min-content }
```

```
.mr-max { margin-right: max-content }
```

```
.mr-fit { margin-right: fit-content }
```

```
.mr-3xs { margin-right: 256px }
```

```
.mr-2xs { margin-right: 288px }
```

```
.mr-xs { margin-right: 320px }
```

```
.mr-sm { margin-right: 384px }
```

```
.mr-md { margin-right: 448px }
```

```
.mr-lg { margin-right: 512px }
```

```
.mr-xl { margin-right: 576px }
```

```
.mr-2xl { margin-right: 672px }
```

```
.mr-3xl { margin-right: 768px }
```

```
.mr-4xl { margin-right: 896px }
```

```
.mr-5xl { margin-right: 1024px }
```

```
.mr-6xl { margin-right: 1152px }
```

```
.mr-7xl { margin-right: 1280px }
```

```
.mr-<number> { margin-right: calc(<number> * 4px) }
```

```
.-mr-<number> { margin-right: calc(-<number> * 4px) }
```

```
.mr-[<value>] { margin-right: <value> }
```

```
.mr-(<custom-property>) { margin-right: var(<custom-property>) }
```

```
.mb-auto { margin-bottom: auto }
```

```
.mb-px { margin-bottom: 1px }
```

```
.-mb-px { margin-bottom: -1px }
```

```
.mb-full { margin-bottom: 100% }
```

```
.-mb-full { margin-bottom: -100% }
```

```
.mb-screen { margin-bottom: 100vw }
```

```
.mb-dvw { margin-bottom: 100vw }
```

```
.mb-dvh { margin-bottom: 100vh }
```

```
.mb-lvw { margin-bottom: 100lvw }
```

```
.mb-lvh { margin-bottom: 100lvh }
```

```
.mb-svw { margin-bottom: 100svw }
```

```
.mb-svh { margin-bottom: 100svh }
```

```
.mb-min { margin-bottom: min-content }
```

```
.mb-max { margin-bottom: max-content }
```

```
.mb-fit { margin-bottom: fit-content }
```

```
.mb-3xs { margin-bottom: 256px }
```

```
.mb-2xs { margin-bottom: 288px }
```

```
.mb-xs { margin-bottom: 320px }
```

```
.mb-sm { margin-bottom: 384px }
```

```
.mb-md { margin-bottom: 448px }
```

```
.mb-lg { margin-bottom: 512px }
```

```
.mb-xl { margin-bottom: 576px }
```

```
.mb-2xl { margin-bottom: 672px }
```

```
.mb-3xl { margin-bottom: 768px }
```

```
.mb-4xl { margin-bottom: 896px }
```

```
.mb-5xl { margin-bottom: 1024px }
```

```
.mb-6xl { margin-bottom: 1152px }
```

```
.mb-7xl { margin-bottom: 1280px }
```

```
.mb-<number> { margin-bottom: calc(<number> * 4px) }
```

```
.-mb-<number> { margin-bottom: calc(-<number> * 4px) }
```

```
.mb-[<value>] { margin-bottom: <value> }
```

```
.mb-(<custom-property>) { margin-bottom: var(<custom-property>) }
```

```
.ml-auto { margin-left: auto }
```

```
.ml-px { margin-left: 1px }
```

```
.-ml-px { margin-left: -1px }
```

```
.ml-full { margin-left: 100% }
```

```
.-ml-full { margin-left: -100% }
```

```
.ml-screen { margin-left: 100vw }
```

```
.ml-dvw { margin-left: 100vw }
```

```
.ml-dvh { margin-left: 100vh }
```

```
.ml-lvw { margin-left: 100lvw }
```

```
.ml-lvh { margin-left: 100lvh }
```

```
.ml-svw { margin-left: 100svw }
```

```
.ml-svh { margin-left: 100svh }
```

```
.ml-min { margin-left: min-content }
```

```
.ml-max { margin-left: max-content }
```

```
.ml-fit { margin-left: fit-content }
```

```
.ml-3xs { margin-left: 256px }
```

```
.ml-2xs { margin-left: 288px }
```

```
.ml-xs { margin-left: 320px }
```

```
.ml-sm { margin-left: 384px }
```

```
.ml-md { margin-left: 448px }
```

```
.ml-lg { margin-left: 512px }
```

```
.ml-xl { margin-left: 576px }
```

```
.ml-2xl { margin-left: 672px }
```

```
.ml-3xl { margin-left: 768px }
```

```
.ml-4xl { margin-left: 896px }
```

```
.ml-5xl { margin-left: 1024px }
```

```
.ml-6xl { margin-left: 1152px }
```

```
.ml-7xl { margin-left: 1280px }
```

```
.ml-<number> { margin-left: calc(<number> * 4px) }
```

```
.-ml-<number> { margin-left: calc(-<number> * 4px) }
```

```
.ml-[<value>] { margin-left: <value> }
```

```
.ml-(<custom-property>) { margin-left: var(<custom-property>) }
```

```
.space-x-auto  > :not(:last-child) { margin-inline-end: auto }
```

```
.space-x-px  > :not(:last-child) { margin-inline-end: 1px }
```

```
.-space-x-px  > :not(:last-child) { margin-inline-end: -1px }
```

```
.space-x-full  > :not(:last-child) { margin-inline-end: 100% }
```

```
.-space-x-full  > :not(:last-child) { margin-inline-end: -100% }
```

```
.space-x-screen  > :not(:last-child) { margin-inline-end: 100vw }
```

```
.space-x-dvw  > :not(:last-child) { margin-inline-end: 100vw }
```

```
.space-x-dvh  > :not(:last-child) { margin-inline-end: 100vh }
```

```
.space-x-lvw  > :not(:last-child) { margin-inline-end: 100lvw }
```

```
.space-x-lvh  > :not(:last-child) { margin-inline-end: 100lvh }
```

```
.space-x-svw  > :not(:last-child) { margin-inline-end: 100svw }
```

```
.space-x-svh  > :not(:last-child) { margin-inline-end: 100svh }
```

```
.space-x-min  > :not(:last-child) { margin-inline-end: min-content }
```

```
.space-x-max  > :not(:last-child) { margin-inline-end: max-content }
```

```
.space-x-fit  > :not(:last-child) { margin-inline-end: fit-content }
```

```
.space-x-3xs  > :not(:last-child) { margin-inline-end: 256px }
```

```
.space-x-2xs  > :not(:last-child) { margin-inline-end: 288px }
```

```
.space-x-xs  > :not(:last-child) { margin-inline-end: 320px }
```

```
.space-x-sm  > :not(:last-child) { margin-inline-end: 384px }
```

```
.space-x-md  > :not(:last-child) { margin-inline-end: 448px }
```

```
.space-x-lg  > :not(:last-child) { margin-inline-end: 512px }
```

```
.space-x-xl  > :not(:last-child) { margin-inline-end: 576px }
```

```
.space-x-2xl  > :not(:last-child) { margin-inline-end: 672px }
```

```
.space-x-3xl  > :not(:last-child) { margin-inline-end: 768px }
```

```
.space-x-4xl  > :not(:last-child) { margin-inline-end: 896px }
```

```
.space-x-5xl  > :not(:last-child) { margin-inline-end: 1024px }
```

```
.space-x-6xl  > :not(:last-child) { margin-inline-end: 1152px }
```

```
.space-x-7xl  > :not(:last-child) { margin-inline-end: 1280px }
```

```
.space-x-<number>  > :not(:last-child) { margin-inline-end: calc(<number> * 4px) }
```

```
.-space-x-<number>  > :not(:last-child) { margin-inline-end: calc(-<number> * 4px) }
```

```
.space-x-[<value>]  > :not(:last-child) { margin-inline-end: <value> }
```

```
.space-x-(<custom-property>)  > :not(:last-child) { margin-inline-end: var(<custom-property>) }
```

```
.space-y-auto  > :not(:last-child) { margin-bottom: auto }
```

```
.space-y-px  > :not(:last-child) { margin-bottom: 1px }
```

```
.-space-y-px  > :not(:last-child) { margin-bottom: -1px }
```

```
.space-y-full  > :not(:last-child) { margin-bottom: 100% }
```

```
.-space-y-full  > :not(:last-child) { margin-bottom: -100% }
```

```
.space-y-screen  > :not(:last-child) { margin-bottom: 100vw }
```

```
.space-y-dvw  > :not(:last-child) { margin-bottom: 100vw }
```

```
.space-y-dvh  > :not(:last-child) { margin-bottom: 100vh }
```

```
.space-y-lvw  > :not(:last-child) { margin-bottom: 100lvw }
```

```
.space-y-lvh  > :not(:last-child) { margin-bottom: 100lvh }
```

```
.space-y-svw  > :not(:last-child) { margin-bottom: 100svw }
```

```
.space-y-svh  > :not(:last-child) { margin-bottom: 100svh }
```

```
.space-y-min  > :not(:last-child) { margin-bottom: min-content }
```

```
.space-y-max  > :not(:last-child) { margin-bottom: max-content }
```

```
.space-y-fit  > :not(:last-child) { margin-bottom: fit-content }
```

```
.space-y-3xs  > :not(:last-child) { margin-bottom: 256px }
```

```
.space-y-2xs  > :not(:last-child) { margin-bottom: 288px }
```

```
.space-y-xs  > :not(:last-child) { margin-bottom: 320px }
```

```
.space-y-sm  > :not(:last-child) { margin-bottom: 384px }
```

```
.space-y-md  > :not(:last-child) { margin-bottom: 448px }
```

```
.space-y-lg  > :not(:last-child) { margin-bottom: 512px }
```

```
.space-y-xl  > :not(:last-child) { margin-bottom: 576px }
```

```
.space-y-2xl  > :not(:last-child) { margin-bottom: 672px }
```

```
.space-y-3xl  > :not(:last-child) { margin-bottom: 768px }
```

```
.space-y-4xl  > :not(:last-child) { margin-bottom: 896px }
```

```
.space-y-5xl  > :not(:last-child) { margin-bottom: 1024px }
```

```
.space-y-6xl  > :not(:last-child) { margin-bottom: 1152px }
```

```
.space-y-7xl  > :not(:last-child) { margin-bottom: 1280px }
```

```
.space-y-<number>  > :not(:last-child) { margin-bottom: calc(<number> * 4px) }
```

```
.-space-y-<number>  > :not(:last-child) { margin-bottom: calc(-<number> * 4px) }
```

```
.space-y-[<value>]  > :not(:last-child) { margin-bottom: <value> }
```

```
.space-y-(<custom-property>)  > :not(:last-child) { margin-bottom: var(<custom-property>) }
```

## Sizing

### width

```
.w-auto { width: auto }
```

```
.w-px { width: 1px }
```

```
.-w-px { width: -1px }
```

```
.w-full { width: 100% }
```

```
.-w-full { width: -100% }
```

```
.w-screen { width: 100vw }
```

```
.w-dvw { width: 100vw }
```

```
.w-dvh { width: 100vh }
```

```
.w-lvw { width: 100lvw }
```

```
.w-lvh { width: 100lvh }
```

```
.w-svw { width: 100svw }
```

```
.w-svh { width: 100svh }
```

```
.w-min { width: min-content }
```

```
.w-max { width: max-content }
```

```
.w-fit { width: fit-content }
```

```
.w-3xs { width: 256px }
```

```
.w-2xs { width: 288px }
```

```
.w-xs { width: 320px }
```

```
.w-sm { width: 384px }
```

```
.w-md { width: 448px }
```

```
.w-lg { width: 512px }
```

```
.w-xl { width: 576px }
```

```
.w-2xl { width: 672px }
```

```
.w-3xl { width: 768px }
```

```
.w-4xl { width: 896px }
```

```
.w-5xl { width: 1024px }
```

```
.w-6xl { width: 1152px }
```

```
.w-7xl { width: 1280px }
```

```
.w-<number> { width: calc(<number> * 4px) }
```

```
.-w-<number> { width: calc(-<number> * 4px) }
```

```
.w-<fraction> { width: calc(<fraction> * 100%) }
```

```
.w-[<value>] { width: <value> }
```

```
.w-(<custom-property>) { width: var(<custom-property>) }
```

### min-width

```
.min-w-auto { min-width: auto }
```

```
.min-w-px { min-width: 1px }
```

```
.-min-w-px { min-width: -1px }
```

```
.min-w-full { min-width: 100% }
```

```
.-min-w-full { min-width: -100% }
```

```
.min-w-screen { min-width: 100vw }
```

```
.min-w-dvw { min-width: 100vw }
```

```
.min-w-dvh { min-width: 100vh }
```

```
.min-w-lvw { min-width: 100lvw }
```

```
.min-w-lvh { min-width: 100lvh }
```

```
.min-w-svw { min-width: 100svw }
```

```
.min-w-svh { min-width: 100svh }
```

```
.min-w-min { min-width: min-content }
```

```
.min-w-max { min-width: max-content }
```

```
.min-w-fit { min-width: fit-content }
```

```
.min-w-3xs { min-width: 256px }
```

```
.min-w-2xs { min-width: 288px }
```

```
.min-w-xs { min-width: 320px }
```

```
.min-w-sm { min-width: 384px }
```

```
.min-w-md { min-width: 448px }
```

```
.min-w-lg { min-width: 512px }
```

```
.min-w-xl { min-width: 576px }
```

```
.min-w-2xl { min-width: 672px }
```

```
.min-w-3xl { min-width: 768px }
```

```
.min-w-4xl { min-width: 896px }
```

```
.min-w-5xl { min-width: 1024px }
```

```
.min-w-6xl { min-width: 1152px }
```

```
.min-w-7xl { min-width: 1280px }
```

```
.min-w-<number> { min-width: calc(<number> * 4px) }
```

```
.-min-w-<number> { min-width: calc(-<number> * 4px) }
```

```
.min-w-<fraction> { min-width: calc(<fraction> * 100%) }
```

```
.min-w-[<value>] { min-width: <value> }
```

```
.min-w-(<custom-property>) { min-width: var(<custom-property>) }
```

### max-width

```
.max-w-auto { max-width: auto }
```

```
.max-w-px { max-width: 1px }
```

```
.-max-w-px { max-width: -1px }
```

```
.max-w-full { max-width: 100% }
```

```
.-max-w-full { max-width: -100% }
```

```
.max-w-screen { max-width: 100vw }
```

```
.max-w-dvw { max-width: 100vw }
```

```
.max-w-dvh { max-width: 100vh }
```

```
.max-w-lvw { max-width: 100lvw }
```

```
.max-w-lvh { max-width: 100lvh }
```

```
.max-w-svw { max-width: 100svw }
```

```
.max-w-svh { max-width: 100svh }
```

```
.max-w-min { max-width: min-content }
```

```
.max-w-max { max-width: max-content }
```

```
.max-w-fit { max-width: fit-content }
```

```
.max-w-3xs { max-width: 256px }
```

```
.max-w-2xs { max-width: 288px }
```

```
.max-w-xs { max-width: 320px }
```

```
.max-w-sm { max-width: 384px }
```

```
.max-w-md { max-width: 448px }
```

```
.max-w-lg { max-width: 512px }
```

```
.max-w-xl { max-width: 576px }
```

```
.max-w-2xl { max-width: 672px }
```

```
.max-w-3xl { max-width: 768px }
```

```
.max-w-4xl { max-width: 896px }
```

```
.max-w-5xl { max-width: 1024px }
```

```
.max-w-6xl { max-width: 1152px }
```

```
.max-w-7xl { max-width: 1280px }
```

```
.max-w-<number> { max-width: calc(<number> * 4px) }
```

```
.-max-w-<number> { max-width: calc(-<number> * 4px) }
```

```
.max-w-<fraction> { max-width: calc(<fraction> * 100%) }
```

```
.max-w-[<value>] { max-width: <value> }
```

```
.max-w-(<custom-property>) { max-width: var(<custom-property>) }
```

### height

```
.h-auto { height: auto }
```

```
.h-px { height: 1px }
```

```
.-h-px { height: -1px }
```

```
.h-full { height: 100% }
```

```
.-h-full { height: -100% }
```

```
.h-screen { height: 100vw }
```

```
.h-dvw { height: 100vw }
```

```
.h-dvh { height: 100vh }
```

```
.h-lvw { height: 100lvw }
```

```
.h-lvh { height: 100lvh }
```

```
.h-svw { height: 100svw }
```

```
.h-svh { height: 100svh }
```

```
.h-min { height: min-content }
```

```
.h-max { height: max-content }
```

```
.h-fit { height: fit-content }
```

```
.h-3xs { height: 256px }
```

```
.h-2xs { height: 288px }
```

```
.h-xs { height: 320px }
```

```
.h-sm { height: 384px }
```

```
.h-md { height: 448px }
```

```
.h-lg { height: 512px }
```

```
.h-xl { height: 576px }
```

```
.h-2xl { height: 672px }
```

```
.h-3xl { height: 768px }
```

```
.h-4xl { height: 896px }
```

```
.h-5xl { height: 1024px }
```

```
.h-6xl { height: 1152px }
```

```
.h-7xl { height: 1280px }
```

```
.h-<number> { height: calc(<number> * 4px) }
```

```
.-h-<number> { height: calc(-<number> * 4px) }
```

```
.h-<fraction> { height: calc(<fraction> * 100%) }
```

```
.h-[<value>] { height: <value> }
```

```
.h-(<custom-property>) { height: var(<custom-property>) }
```

### min-height

```
.min-h-auto { min-height: auto }
```

```
.min-h-px { min-height: 1px }
```

```
.-min-h-px { min-height: -1px }
```

```
.min-h-full { min-height: 100% }
```

```
.-min-h-full { min-height: -100% }
```

```
.min-h-screen { min-height: 100vw }
```

```
.min-h-dvw { min-height: 100vw }
```

```
.min-h-dvh { min-height: 100vh }
```

```
.min-h-lvw { min-height: 100lvw }
```

```
.min-h-lvh { min-height: 100lvh }
```

```
.min-h-svw { min-height: 100svw }
```

```
.min-h-svh { min-height: 100svh }
```

```
.min-h-min { min-height: min-content }
```

```
.min-h-max { min-height: max-content }
```

```
.min-h-fit { min-height: fit-content }
```

```
.min-h-3xs { min-height: 256px }
```

```
.min-h-2xs { min-height: 288px }
```

```
.min-h-xs { min-height: 320px }
```

```
.min-h-sm { min-height: 384px }
```

```
.min-h-md { min-height: 448px }
```

```
.min-h-lg { min-height: 512px }
```

```
.min-h-xl { min-height: 576px }
```

```
.min-h-2xl { min-height: 672px }
```

```
.min-h-3xl { min-height: 768px }
```

```
.min-h-4xl { min-height: 896px }
```

```
.min-h-5xl { min-height: 1024px }
```

```
.min-h-6xl { min-height: 1152px }
```

```
.min-h-7xl { min-height: 1280px }
```

```
.min-h-<number> { min-height: calc(<number> * 4px) }
```

```
.-min-h-<number> { min-height: calc(-<number> * 4px) }
```

```
.min-h-<fraction> { min-height: calc(<fraction> * 100%) }
```

```
.min-h-[<value>] { min-height: <value> }
```

```
.min-h-(<custom-property>) { min-height: var(<custom-property>) }
```

### max-height

```
.max-h-auto { max-height: auto }
```

```
.max-h-px { max-height: 1px }
```

```
.-max-h-px { max-height: -1px }
```

```
.max-h-full { max-height: 100% }
```

```
.-max-h-full { max-height: -100% }
```

```
.max-h-screen { max-height: 100vw }
```

```
.max-h-dvw { max-height: 100vw }
```

```
.max-h-dvh { max-height: 100vh }
```

```
.max-h-lvw { max-height: 100lvw }
```

```
.max-h-lvh { max-height: 100lvh }
```

```
.max-h-svw { max-height: 100svw }
```

```
.max-h-svh { max-height: 100svh }
```

```
.max-h-min { max-height: min-content }
```

```
.max-h-max { max-height: max-content }
```

```
.max-h-fit { max-height: fit-content }
```

```
.max-h-3xs { max-height: 256px }
```

```
.max-h-2xs { max-height: 288px }
```

```
.max-h-xs { max-height: 320px }
```

```
.max-h-sm { max-height: 384px }
```

```
.max-h-md { max-height: 448px }
```

```
.max-h-lg { max-height: 512px }
```

```
.max-h-xl { max-height: 576px }
```

```
.max-h-2xl { max-height: 672px }
```

```
.max-h-3xl { max-height: 768px }
```

```
.max-h-4xl { max-height: 896px }
```

```
.max-h-5xl { max-height: 1024px }
```

```
.max-h-6xl { max-height: 1152px }
```

```
.max-h-7xl { max-height: 1280px }
```

```
.max-h-<number> { max-height: calc(<number> * 4px) }
```

```
.-max-h-<number> { max-height: calc(-<number> * 4px) }
```

```
.max-h-<fraction> { max-height: calc(<fraction> * 100%) }
```

```
.max-h-[<value>] { max-height: <value> }
```

```
.max-h-(<custom-property>) { max-height: var(<custom-property>) }
```

## Typography

### font-family

```
.font-sans { font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" }
```

```
.font-serif { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif }
```

```
.font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace }
```

```
.font-[<value>] { font-family: <value> }
```

```
.font-(<custom-property>) { font-family: var(<custom-property>) }
```

### font-size

```
.text-xs {
  font-size: 12px;
  line-height: 1.333;
}
```

```
.text-sm {
  font-size: 14px;
  line-height: 1.429;
}
```

```
.text-base {
  font-size: 16px;
  line-height: 1.5;
}
```

```
.text-lg {
  font-size: 18px;
  line-height: 1.555;
}
```

```
.text-xl {
  font-size: 20px;
  line-height: 1.4;
}
```

```
.text-2xl {
  font-size: 24px;
  line-height: 1.333;
}
```

```
.text-3xl {
  font-size: 30px;
  line-height: 1.2;
}
```

```
.text-4xl {
  font-size: 36px;
  line-height: 1.111;
}
```

```
.text-5xl {
  font-size: 48px;
  line-height: 1;
}
```

```
.text-6xl {
  font-size: 60px;
  line-height: 1;
}
```

```
.text-7xl {
  font-size: 72px;
  line-height: 1;
}
```

```
.text-8xl {
  font-size: 96px;
  line-height: 1;
}
```

```
.text-9xl {
  font-size: 128px;
  line-height: 1;
}
```

### font-smoothing

```
.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

```
.subpixel-antialiased {
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto;
}
```

### font-style

```
.italic { font-style: italic }
```

```
.not-italic { font-style: normal }
```

### font-weight

```
.font-thin { font-weight: 100 }
```

```
.font-extralight { font-weight: 200 }
```

```
.font-light { font-weight: 300 }
```

```
.font-normal { font-weight: 400 }
```

```
.font-medium { font-weight: 500 }
```

```
.font-semibold { font-weight: 600 }
```

```
.font-bold { font-weight: 700 }
```

```
.font-extrabold { font-weight: 800 }
```

```
.font-black { font-weight: 900 }
```

### font-stretch

```
.font-stretch-ultra-condensed { font-stretch: ultra-condensed }
```

```
.font-stretch-extra-condensed { font-stretch: extra-condensed }
```

```
.font-stretch-condensed { font-stretch: condensed }
```

```
.font-stretch-semi-condensed { font-stretch: semi-condensed }
```

```
.font-stretch-normal { font-stretch: normal }
```

```
.font-stretch-semi-expanded { font-stretch: semi-expanded }
```

```
.font-stretch-expanded { font-stretch: expanded }
```

```
.font-stretch-extra-expanded { font-stretch: extra-expanded }
```

```
.font-stretch-ultra-expanded { font-stretch: ultra-expanded }
```

### font-variant-numeric

```
.normal-nums { font-variant-numeric: normal }
```

```
.ordinal { font-variant-numeric: ordinal }
```

```
.slashed-zero { font-variant-numeric: slashed-zero }
```

```
.lining-nums { font-variant-numeric: lining-nums }
```

```
.oldstyle-nums { font-variant-numeric: oldstyle-nums }
```

```
.proportional-nums { font-variant-numeric: proportional-nums }
```

```
.tabular-nums { font-variant-numeric: tabular-nums }
```

```
.diagonal-fractions { font-variant-numeric: diagonal-fractions }
```

```
.stacked-fractions { font-variant-numeric: stacked-fractions }
```

### letter-spacing

```
.tracking-tighter { letter-spacing: -0.05em }
```

```
.tracking-tight { letter-spacing: -0.025em }
```

```
.tracking-normal { letter-spacing: 0px }
```

```
.tracking-wide { letter-spacing: 0.025em }
```

```
.tracking-wider { letter-spacing: 0.05em }
```

```
.tracking-widest { letter-spacing: 0.1em }
```

```
.tracking-[<value>] { letter-spacing: <value> }
```

```
.tracking-(<custom-property>) { letter-spacing: var(<custom-property>) }
```

### line-clamp

Currently unsupported.

### line-height

```
.leading-none { line-height: 1 }
```

```
.leading-tight { line-height: 1.25 }
```

```
.leading-snug { line-height: 1.375 }
```

```
.leading-normal { line-height: 1.5 }
```

```
.leading-relaxed { line-height: 1.625 }
```

```
.leading-loose { line-height: 2 }
```

### list-style-image

```
.list-image-none { list-style-image: none }
```

```
.list-image-[<value>] { list-style-image: <value> }
```

```
.list-image-(<custom-property>) { list-style-image: var(<custom-property>) }
```

### list-style-position

```
.list-inside { list-style-position: inside }
```

```
.list-outside { list-style-position: outside }
```

### list-style-type

```
.list-disc { list-style-type: disc }
```

```
.list-decimal { list-style-type: decimal }
```

```
.list-none { list-style-type: none }
```

```
.list-[<value>] { list-style-type: <value> }
```

```
.list-(<custom-property>) { list-style-type: var(<custom-property>) }
```

### text-align

```
.text-left { text-align: left }
```

```
.text-center { text-align: center }
```

```
.text-right { text-align: right }
```

```
.text-justify { text-align: justify }
```

```
.text-start { text-align: start }
```

```
.text-end { text-align: end }
```

### color

```
.text-<color> { color: oklch(...) }
```

### text-decoration-line

```
.underline { text-decoration-line: underline }
```

```
.overline { text-decoration-line: overline }
```

```
.line-through { text-decoration-line: line-through }
```

```
.no-underline { text-decoration-line: none }
```

### text-decoration-color

```
.decoration-<color> { text-decoration-color: oklch(...) }
```

### text-decoration-style

```
.decoration-solid { text-decoration-style: solid }
```

```
.decoration-double { text-decoration-style: double }
```

```
.decoration-dotted { text-decoration-style: dotted }
```

```
.decoration-dashed { text-decoration-style: dashed }
```

```
.decoration-wavy { text-decoration-style: wavy }
```

### text-decoration-thickness

```
.decoration-auto { text-decoration-thickness: auto }
```

```
.decoration-from-font { text-decoration-thickness: from-font }
```

```
.decoration-<number> { text-decoration-thickness: <number>px }
```

```
.-decoration-<number> { text-decoration-thickness: -<number>px }
```

```
.decoration-[<value>] { text-decoration-thickness: <value> }
```

```
.decoration-(<custom-property>) { text-decoration-thickness: var(<custom-property>) }
```

### text-underline-offset

```
.underline-offset-auto { text-underline-offset: auto }
```

```
.underline-offset-<number> { text-underline-offset: <number>px }
```

```
.-underline-offset-<number> { text-underline-offset: -<number>px }
```

```
.underline-offset-[<value>] { text-underline-offset: <value> }
```

```
.underline-offset-(<custom-property>) { text-underline-offset: var(<custom-property>) }
```

### text-transform

```
.uppercase { text-transform: uppercase }
```

```
.lowercase { text-transform: lowercase }
```

```
.capitalize { text-transform: capitalize }
```

```
.normal-case { text-transform: none }
```

### text-overflow

```
.overflow-clip { text-overflow: clip }
```

```
.truncate {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
```

```
.overflow-ellipsis { text-overflow: ellipsis }
```

### text-wrap

```
.text-wrap { text-wrap: wrap }
```

```
.text-nowrap { text-wrap: nowrap }
```

```
.text-balance { text-wrap: balance }
```

```
.text-pretty { text-wrap: pretty }
```

### text-indent

```
.indent-auto { text-indent: auto }
```

```
.indent-px { text-indent: 1px }
```

```
.-indent-px { text-indent: -1px }
```

```
.indent-full { text-indent: 100% }
```

```
.-indent-full { text-indent: -100% }
```

```
.indent-screen { text-indent: 100vw }
```

```
.indent-dvw { text-indent: 100vw }
```

```
.indent-dvh { text-indent: 100vh }
```

```
.indent-lvw { text-indent: 100lvw }
```

```
.indent-lvh { text-indent: 100lvh }
```

```
.indent-svw { text-indent: 100svw }
```

```
.indent-svh { text-indent: 100svh }
```

```
.indent-min { text-indent: min-content }
```

```
.indent-max { text-indent: max-content }
```

```
.indent-fit { text-indent: fit-content }
```

```
.indent-3xs { text-indent: 256px }
```

```
.indent-2xs { text-indent: 288px }
```

```
.indent-xs { text-indent: 320px }
```

```
.indent-sm { text-indent: 384px }
```

```
.indent-md { text-indent: 448px }
```

```
.indent-lg { text-indent: 512px }
```

```
.indent-xl { text-indent: 576px }
```

```
.indent-2xl { text-indent: 672px }
```

```
.indent-3xl { text-indent: 768px }
```

```
.indent-4xl { text-indent: 896px }
```

```
.indent-5xl { text-indent: 1024px }
```

```
.indent-6xl { text-indent: 1152px }
```

```
.indent-7xl { text-indent: 1280px }
```

```
.indent-<number> { text-indent: calc(<number> * 4px) }
```

```
.-indent-<number> { text-indent: calc(-<number> * 4px) }
```

```
.indent-[<value>] { text-indent: <value> }
```

```
.indent-(<custom-property>) { text-indent: var(<custom-property>) }
```

### vertical-align

```
.align-baseline { vertical-align: baseline }
```

```
.align-top { vertical-align: top }
```

```
.align-middle { vertical-align: middle }
```

```
.align-bottom { vertical-align: bottom }
```

```
.align-text-top { vertical-align: text-top }
```

```
.align-text-bottom { vertical-align: text-bottom }
```

```
.align-sub { vertical-align: sub }
```

```
.align-super { vertical-align: super }
```

```
.align-[<value>] { vertical-align: <value> }
```

```
.align-(<custom-property>) { vertical-align: var(<custom-property>) }
```

### white-space

```
.whitespace-normal { white-space: normal }
```

```
.whitespace-nowrap { white-space: nowrap }
```

```
.whitespace-pre { white-space: pre }
```

```
.whitespace-pre-line { white-space: pre-line }
```

```
.whitespace-pre-wrap { white-space: pre-wrap }
```

```
.whitespace-break-spaces { white-space: break-spaces }
```

### word-break

```
.break-normal { word-break: normal }
```

```
.break-all { word-break: break-all }
```

```
.break-keep { word-break: keep-all }
```

### overflow-wrap

```
.wrap-break-word { overflow-wrap: break-word }
```

```
.wrap-anywhere { overflow-wrap: anywhere }
```

```
.wrap-normal { overflow-wrap: normal }
```

### hyphens

```
.hyphens-none { hyphens: none }
```

```
.hyphens-manual { hyphens: manual }
```

```
.hyphens-auto { hyphens: auto }
```

### content

```
.content-none { content: none }
```

```
.content-[<value>] { content: <value> }
```

```
.content-(<custom-property>) { content: var(<custom-property>) }
```

## Backgrounds

### background-attachment

```
.bg-fixed { background-attachment: fixed }
```

```
.bg-local { background-attachment: local }
```

```
.bg-scroll { background-attachment: scroll }
```

### background-clip

```
.bg-clip-border { background-clip: border-box }
```

```
.bg-clip-padding { background-clip: padding-box }
```

```
.bg-clip-content { background-clip: content-box }
```

```
.bg-clip-text { background-clip: text }
```

### background-color

```
.bg-<color> { background-color: oklch(...) }
```

### background-image

```
.bg-none { background-image: none }
```

```
.bg-[<value>] { background-image: <value> }
```

```
.bg-(<custom-property>) { background-image: var(<custom-property>) }
```

### background-origin

```
.bg-border-box { background-origin: border-box }
```

```
.bg-padding-box { background-origin: padding-box }
```

```
.bg-content-box { background-origin: content-box }
```

### background-position

```
.bg-top-left { background-position: top left }
```

```
.bg-top { background-position: top }
```

```
.bg-top-right { background-position: top right }
```

```
.bg-left { background-position: left }
```

```
.bg-center { background-position: center }
```

```
.bg-right { background-position: right }
```

```
.bg-bottom-left { background-position: bottom left }
```

```
.bg-bottom { background-position: bottom }
```

```
.bg-bottom-right { background-position: bottom right }
```

```
.bg-position-[<value>] { background-position: <value> }
```

```
.bg-position-(<custom-property>) { background-position: var(<custom-property>) }
```

### background-repeat

```
.bg-repeat { background-repeat: repeat }
```

```
.bg-repeat-x { background-repeat: repeat-x }
```

```
.bg-repeat-y { background-repeat: repeat-y }
```

```
.bg-space { background-repeat: space }
```

```
.bg-round { background-repeat: round }
```

```
.bg-no-repeat { background-repeat: no-repeat }
```

### background-size

```
.bg-auto { background-size: auto }
```

```
.bg-cover { background-size: cover }
```

```
.bg-contain { background-size: contain }
```

```
.bg-size-[<value>] { background-size: <value> }
```

```
.bg-size-(<custom-property>) { background-size: var(<custom-property>) }
```

## Borders

### border-radius

```
.rounded-xs { border-radius: 2px }
```

```
.rounded-sm { border-radius: 4px }
```

```
.rounded-md { border-radius: 6px }
```

```
.rounded-lg { border-radius: 8px }
```

```
.rounded-xl { border-radius: 12px }
```

```
.rounded-2xl { border-radius: 16px }
```

```
.rounded-3xl { border-radius: 24px }
```

```
.rounded-full { border-radius: 50% }
```

```
.rounded-none { border-radius: 0 }
```

```
.rounded-[<value>] { border-radius: <value> }
```

```
.rounded-(<custom-property>) { border-radius: var(<custom-property>) }
```

```
.rounded-tl-xs { border-top-left-radius: 2px }
```

```
.rounded-tl-sm { border-top-left-radius: 4px }
```

```
.rounded-tl-md { border-top-left-radius: 6px }
```

```
.rounded-tl-lg { border-top-left-radius: 8px }
```

```
.rounded-tl-xl { border-top-left-radius: 12px }
```

```
.rounded-tl-2xl { border-top-left-radius: 16px }
```

```
.rounded-tl-3xl { border-top-left-radius: 24px }
```

```
.rounded-tl-full { border-top-left-radius: 50% }
```

```
.rounded-tl-none { border-top-left-radius: 0 }
```

```
.rounded-tl-[<value>] { border-top-left-radius: <value> }
```

```
.rounded-tl-(<custom-property>) { border-top-left-radius: var(<custom-property>) }
```

```
.rounded-tr-xs { border-top-right-radius: 2px }
```

```
.rounded-tr-sm { border-top-right-radius: 4px }
```

```
.rounded-tr-md { border-top-right-radius: 6px }
```

```
.rounded-tr-lg { border-top-right-radius: 8px }
```

```
.rounded-tr-xl { border-top-right-radius: 12px }
```

```
.rounded-tr-2xl { border-top-right-radius: 16px }
```

```
.rounded-tr-3xl { border-top-right-radius: 24px }
```

```
.rounded-tr-full { border-top-right-radius: 50% }
```

```
.rounded-tr-none { border-top-right-radius: 0 }
```

```
.rounded-tr-[<value>] { border-top-right-radius: <value> }
```

```
.rounded-tr-(<custom-property>) { border-top-right-radius: var(<custom-property>) }
```

```
.rounded-br-xs { border-bottom-right-radius: 2px }
```

```
.rounded-br-sm { border-bottom-right-radius: 4px }
```

```
.rounded-br-md { border-bottom-right-radius: 6px }
```

```
.rounded-br-lg { border-bottom-right-radius: 8px }
```

```
.rounded-br-xl { border-bottom-right-radius: 12px }
```

```
.rounded-br-2xl { border-bottom-right-radius: 16px }
```

```
.rounded-br-3xl { border-bottom-right-radius: 24px }
```

```
.rounded-br-full { border-bottom-right-radius: 50% }
```

```
.rounded-br-none { border-bottom-right-radius: 0 }
```

```
.rounded-br-[<value>] { border-bottom-right-radius: <value> }
```

```
.rounded-br-(<custom-property>) { border-bottom-right-radius: var(<custom-property>) }
```

```
.rounded-bl-xs { border-bottom-left-radius: 2px }
```

```
.rounded-bl-sm { border-bottom-left-radius: 4px }
```

```
.rounded-bl-md { border-bottom-left-radius: 6px }
```

```
.rounded-bl-lg { border-bottom-left-radius: 8px }
```

```
.rounded-bl-xl { border-bottom-left-radius: 12px }
```

```
.rounded-bl-2xl { border-bottom-left-radius: 16px }
```

```
.rounded-bl-3xl { border-bottom-left-radius: 24px }
```

```
.rounded-bl-full { border-bottom-left-radius: 50% }
```

```
.rounded-bl-none { border-bottom-left-radius: 0 }
```

```
.rounded-bl-[<value>] { border-bottom-left-radius: <value> }
```

```
.rounded-bl-(<custom-property>) { border-bottom-left-radius: var(<custom-property>) }
```

### border-width

```
.border { border-width: 1px }
```

```
.border-<number> { border-width: <number>px }
```

```
.-border-<number> { border-width: -<number>px }
```

```
.border-[<value>] { border-width: <value> }
```

```
.border-(<custom-property>) { border-width: var(<custom-property>) }
```

```
.border-s { border-inline-start-width: 1px }
```

```
.border-s-<number> { border-inline-start-width: <number>px }
```

```
.-border-s-<number> { border-inline-start-width: -<number>px }
```

```
.border-s-[<value>] { border-inline-start-width: <value> }
```

```
.border-s-(<custom-property>) { border-inline-start-width: var(<custom-property>) }
```

```
.border-e { border-inline-end-width: 1px }
```

```
.border-e-<number> { border-inline-end-width: <number>px }
```

```
.-border-e-<number> { border-inline-end-width: -<number>px }
```

```
.border-e-[<value>] { border-inline-end-width: <value> }
```

```
.border-e-(<custom-property>) { border-inline-end-width: var(<custom-property>) }
```

```
.border-t { border-top-width: 1px }
```

```
.border-t-<number> { border-top-width: <number>px }
```

```
.-border-t-<number> { border-top-width: -<number>px }
```

```
.border-t-[<value>] { border-top-width: <value> }
```

```
.border-t-(<custom-property>) { border-top-width: var(<custom-property>) }
```

```
.border-r { border-right-width: 1px }
```

```
.border-r-<number> { border-right-width: <number>px }
```

```
.-border-r-<number> { border-right-width: -<number>px }
```

```
.border-r-[<value>] { border-right-width: <value> }
```

```
.border-r-(<custom-property>) { border-right-width: var(<custom-property>) }
```

```
.border-b { border-bottom-width: 1px }
```

```
.border-b-<number> { border-bottom-width: <number>px }
```

```
.-border-b-<number> { border-bottom-width: -<number>px }
```

```
.border-b-[<value>] { border-bottom-width: <value> }
```

```
.border-b-(<custom-property>) { border-bottom-width: var(<custom-property>) }
```

```
.border-l { border-left-width: 1px }
```

```
.border-l-<number> { border-left-width: <number>px }
```

```
.-border-l-<number> { border-left-width: -<number>px }
```

```
.border-l-[<value>] { border-left-width: <value> }
```

```
.border-l-(<custom-property>) { border-left-width: var(<custom-property>) }
```

### border-color

```
.border-<color> { border-color: oklch(...) }
```

### border-style

```
.border-solid { border-style: solid }
```

```
.border-dashed { border-style: dashed }
```

```
.border-dotted { border-style: dotted }
```

```
.border-double { border-style: double }
```

```
.border-hidden { border-style: hidden }
```

```
.border-none { border-style: none }
```

### outline-width

```
.outline { outline-width: 1px }
```

```
.outline-<number> { outline-width: <number>px }
```

```
.-outline-<number> { outline-width: -<number>px }
```

```
.outline-[<value>] { outline-width: <value> }
```

```
.outline-(<custom-property>) { outline-width: var(<custom-property>) }
```

### outline-color

```
.outline-<color> { outline-color: oklch(...) }
```

### outline-style

```
.outline-solid { outline-style: solid }
```

```
.outline-dashed { outline-style: dashed }
```

```
.outline-dotted { outline-style: dotted }
```

```
.outline-double { outline-style: double }
```

```
.outline-none { outline-style: none }
```

### outline-offset

```
.outline-offset-<number> { outline-offset: <number>px }
```

```
.-outline-offset-<number> { outline-offset: -<number>px }
```

```
.outline-offset-[<value>] { outline-offset: <value> }
```

```
.outline-offset-(<custom-property>) { outline-offset: var(<custom-property>) }
```

## Effects

### box-shadow

```
.shadow { box-shadow: 0 1px rgb(0 0 0 / 0.05) }
```

```
.shadow-2xs { box-shadow: 0 1px rgb(0 0 0 / 0.05) }
```

```
.shadow-xs { box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) }
```

```
.shadow-sm { box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) }
```

```
.shadow-md { box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) }
```

```
.shadow-lg { box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) }
```

```
.shadow-xl { box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) }
```

```
.shadow-2xl { box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) }
```

```
.shadow-none { box-shadow: 0 0 rgb(0 0 0 / 0) }
```

```
.shadow-[<value>] { box-shadow: <value> }
```

```
.shadow-(<custom-property>) { box-shadow: var(<custom-property>) }
```

### text-shadow

```
.text-shadow-2xs { text-shadow: 0px 1px 0px rgb(0 0 0 / 0.15) }
```

```
.text-shadow-xs { text-shadow: 0px 1px 1px rgb(0 0 0 / 0.2) }
```

```
.text-shadow-sm { text-shadow: 0px 1px 0px rgb(0 0 0 / 0.075), 0px 1px 1px rgb(0 0 0 / 0.075), 0px 2px 2px rgb(0 0 0 / 0.075) }
```

```
.text-shadow-md { text-shadow: 0px 1px 1px rgb(0 0 0 / 0.1), 0px 1px 2px rgb(0 0 0 / 0.1), 0px 2px 4px rgb(0 0 0 / 0.1) }
```

```
.text-shadow-lg { text-shadow: 0px 1px 2px rgb(0 0 0 / 0.1), 0px 3px 2px rgb(0 0 0 / 0.1), 0px 4px 8px rgb(0 0 0 / 0.1) }
```

```
.text-shadow-none { text-shadow: none }
```

```
.text-shadow-[<value>] { text-shadow: <value> }
```

```
.text-shadow-(<custom-property>) { text-shadow: var(<custom-property>) }
```

### opacity

```
.opacity-<number> { opacity: <number>% }
```

```
.-opacity-<number> { opacity: -<number>% }
```

```
.opacity-[<value>] { opacity: <value> }
```

```
.opacity-(<custom-property>) { opacity: var(<custom-property>) }
```

### mix-blend-mode

```
.mix-blend-normal { mix-blend-mode: normal }
```

```
.mix-blend-multiply { mix-blend-mode: multiply }
```

```
.mix-blend-screen { mix-blend-mode: screen }
```

```
.mix-blend-overlay { mix-blend-mode: overlay }
```

```
.mix-blend-darken { mix-blend-mode: darken }
```

```
.mix-blend-lighten { mix-blend-mode: lighten }
```

```
.mix-blend-color-dodge { mix-blend-mode: color-dodge }
```

```
.mix-blend-color-burn { mix-blend-mode: color-burn }
```

```
.mix-blend-hard-light { mix-blend-mode: hard-light }
```

```
.mix-blend-soft-light { mix-blend-mode: soft-light }
```

```
.mix-blend-difference { mix-blend-mode: difference }
```

```
.mix-blend-exclusion { mix-blend-mode: exclusion }
```

```
.mix-blend-hue { mix-blend-mode: hue }
```

```
.mix-blend-saturation { mix-blend-mode: saturation }
```

```
.mix-blend-color { mix-blend-mode: color }
```

```
.mix-blend-luminosity { mix-blend-mode: luminosity }
```

### background-blend-mode

```
.bg-blend-normal { background-blend-mode: normal }
```

```
.bg-blend-multiply { background-blend-mode: multiply }
```

```
.bg-blend-screen { background-blend-mode: screen }
```

```
.bg-blend-overlay { background-blend-mode: overlay }
```

```
.bg-blend-darken { background-blend-mode: darken }
```

```
.bg-blend-lighten { background-blend-mode: lighten }
```

```
.bg-blend-color-dodge { background-blend-mode: color-dodge }
```

```
.bg-blend-color-burn { background-blend-mode: color-burn }
```

```
.bg-blend-hard-light { background-blend-mode: hard-light }
```

```
.bg-blend-soft-light { background-blend-mode: soft-light }
```

```
.bg-blend-difference { background-blend-mode: difference }
```

```
.bg-blend-exclusion { background-blend-mode: exclusion }
```

```
.bg-blend-hue { background-blend-mode: hue }
```

```
.bg-blend-saturation { background-blend-mode: saturation }
```

```
.bg-blend-color { background-blend-mode: color }
```

```
.bg-blend-luminosity { background-blend-mode: luminosity }
```

### mask-clip

```
.mask-clip-border { mask-clip: border-box }
```

```
.mask-clip-padding { mask-clip: padding-box }
```

```
.mask-clip-content { mask-clip: content-box }
```

```
.mask-clip-fill { mask-clip: fill-box }
```

```
.mask-clip-stroke { mask-clip: stroke-box }
```

```
.mask-clip-view { mask-clip: view-box }
```

```
.mask-no-clip { mask-clip: no-clip }
```

### mask-composite

```
.mask-add { mask-composite: add }
```

```
.mask-subtract { mask-composite: subtract }
```

```
.mask-intersect { mask-composite: intersect }
```

```
.mask-exclude { mask-composite: exclude }
```

### mask-image

```
.mask-none { mask-image: none }
```

```
.mask-[<value>] { mask-image: <value> }
```

```
.mask-(<custom-property>) { mask-image: var(<custom-property>) }
```

### mask-mode

```
.mask-alpha { mask-mode: alpha }
```

```
.mask-luminance { mask-mode: luminance }
```

```
.mask-match { mask-mode: match-source }
```

### mask-origin

```
.mask-origin-border { mask-origin: border-box }
```

```
.mask-origin-padding { mask-origin: padding-box }
```

```
.mask-origin-content { mask-origin: content-box }
```

```
.mask-origin-fill { mask-origin: fill-box }
```

```
.mask-origin-stroke { mask-origin: stroke-box }
```

```
.mask-origin-view { mask-origin: view-box }
```

### mask-position

```
.mask-top-left { mask-position: top left }
```

```
.mask-top { mask-position: top }
```

```
.mask-top-right { mask-position: top right }
```

```
.mask-left { mask-position: left }
```

```
.mask-center { mask-position: center }
```

```
.mask-right { mask-position: right }
```

```
.mask-bottom-left { mask-position: bottom left }
```

```
.mask-bottom { mask-position: bottom }
```

```
.mask-bottom-right { mask-position: bottom right }
```

```
.mask-position-[<value>] { mask-position: <value> }
```

```
.mask-position-(<custom-property>) { mask-position: var(<custom-property>) }
```

### mask-repeat

```
.mask-repeat { mask-repeat: repeat }
```

```
.mask-no-repeat { mask-repeat: no-repeat }
```

```
.mask-repeat-x { mask-repeat: repeat-x }
```

```
.mask-repeat-y { mask-repeat: repeat-y }
```

```
.mask-repeat-space { mask-repeat: space }
```

```
.mask-repeat-round { mask-repeat: round }
```

### mask-size

```
.mask-auto { mask-size: auto }
```

```
.mask-cover { mask-size: cover }
```

```
.mask-contain { mask-size: contain }
```

```
.mask-size-[<value>] { mask-size: <value> }
```

```
.mask-size-(<custom-property>) { mask-size: var(<custom-property>) }
```

### mask-type

```
.mask-type-alpha { mask-type: alpha }
```

```
.mask-type-luminance { mask-type: luminance }
```

## Filters

### filter

```
.blur-xs { filter: blur(4px) }
```

```
.blur-sm { filter: blur(8px) }
```

```
.blur-md { filter: blur(12px) }
```

```
.blur-lg { filter: blur(16px) }
```

```
.blur-xl { filter: blur(24px) }
```

```
.blur-2xl { filter: blur(40px) }
```

```
.blur-3xl { filter: blur(64px) }
```

```
.blur-none { filter: none }
```

```
.blur-[<value>] { filter: <value> }
```

```
.blur-(<custom-property>) { filter: var(<custom-property>) }
```

```
.brightness-<number> { filter: brightness(<number>%) }
```

```
.-brightness-<number> { filter: brightness(-<number>%) }
```

```
.brightness-[<value>] { filter: <value> }
```

```
.brightness-(<custom-property>) { filter: var(<custom-property>) }
```

```
.contrast-<number> { filter: contrast(<number>%) }
```

```
.-contrast-<number> { filter: contrast(-<number>%) }
```

```
.contrast-[<value>] { filter: <value> }
```

```
.contrast-(<custom-property>) { filter: var(<custom-property>) }
```

```
.drop-shadow-xs { filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05)) }
```

```
.drop-shadow-sm { filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.15)) }
```

```
.drop-shadow-md { filter: drop-shadow(0 3px 3px rgb(0 0 0 / 0.12)) }
```

```
.drop-shadow-lg { filter: drop-shadow(0 4px 4px rgb(0 0 0 / 0.15)) }
```

```
.drop-shadow-xl { filter: drop-shadow(0 9px 7px rgb(0 0 0 / 0.1)) }
```

```
.drop-shadow-2xl { filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15)) }
```

```
.drop-shadow-none { filter: drop-shadow(0 0 rgba(0, 0, 0, 0)) }
```

```
.drop-shadow-[<value>] { filter: <value> }
```

```
.drop-shadow-(<custom-property>) { filter: var(<custom-property>) }
```

```
.grayscale { filter: grayscale(100%) }
```

```
.grayscale-<number> { filter: grayscale(<number>%) }
```

```
.-grayscale-<number> { filter: grayscale(-<number>%) }
```

```
.grayscale-[<value>] { filter: <value> }
```

```
.grayscale-(<custom-property>) { filter: var(<custom-property>) }
```

```
.hue-rotate-<number> { filter: hue-rotate(<number>deg) }
```

```
.-hue-rotate-<number> { filter: hue-rotate(-<number>deg) }
```

```
.hue-rotate-[<value>] { filter: <value> }
```

```
.hue-rotate-(<custom-property>) { filter: var(<custom-property>) }
```

```
.invert-<number> { filter: invert(<number>%) }
```

```
.-invert-<number> { filter: invert(-<number>%) }
```

```
.invert-[<value>] { filter: <value> }
```

```
.invert-(<custom-property>) { filter: var(<custom-property>) }
```

```
.saturate-<number> { filter: saturate(<number>%) }
```

```
.-saturate-<number> { filter: saturate(-<number>%) }
```

```
.saturate-[<value>] { filter: <value> }
```

```
.saturate-(<custom-property>) { filter: var(<custom-property>) }
```

```
.sepia { filter: sepia(100%) }
```

```
.sepia-<number> { filter: sepia(<number>%) }
```

```
.-sepia-<number> { filter: sepia(-<number>%) }
```

```
.sepia-[<value>] { filter: <value> }
```

```
.sepia-(<custom-property>) { filter: var(<custom-property>) }
```

```
.filter-none { filter: none }
```

```
.filter-[<value>] { filter: <value> }
```

```
.filter-(<custom-property>) { filter: var(<custom-property>) }
```

### backdrop-filter

```
.backdrop-blur-xs { backdrop-filter: blur(4px) }
```

```
.backdrop-blur-sm { backdrop-filter: blur(8px) }
```

```
.backdrop-blur-md { backdrop-filter: blur(12px) }
```

```
.backdrop-blur-lg { backdrop-filter: blur(16px) }
```

```
.backdrop-blur-xl { backdrop-filter: blur(24px) }
```

```
.backdrop-blur-2xl { backdrop-filter: blur(40px) }
```

```
.backdrop-blur-3xl { backdrop-filter: blur(64px) }
```

```
.backdrop-blur-none { backdrop-filter: none }
```

```
.backdrop-blur-[<value>] { backdrop-filter: <value> }
```

```
.backdrop-blur-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```
.backdrop-brightness-<number> { backdrop-filter: brightness(<number>%) }
```

```
.-backdrop-brightness-<number> { backdrop-filter: brightness(-<number>%) }
```

```
.backdrop-brightness-[<value>] { backdrop-filter: <value> }
```

```
.backdrop-brightness-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```
.backdrop-contrast-<number> { backdrop-filter: contrast(<number>%) }
```

```
.-backdrop-contrast-<number> { backdrop-filter: contrast(-<number>%) }
```

```
.backdrop-contrast-[<value>] { backdrop-filter: <value> }
```

```
.backdrop-contrast-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```
.backdrop-grayscale { backdrop-filter: grayscale(100%) }
```

```
.backdrop-grayscale-<number> { backdrop-filter: grayscale(<number>%) }
```

```
.-backdrop-grayscale-<number> { backdrop-filter: grayscale(-<number>%) }
```

```
.backdrop-grayscale-[<value>] { backdrop-filter: <value> }
```

```
.backdrop-grayscale-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```
.backdrop-hue-rotate-<number> { backdrop-filter: hue-rotate(<number>deg) }
```

```
.-backdrop-hue-rotate-<number> { backdrop-filter: hue-rotate(-<number>deg) }
```

```
.backdrop-hue-rotate-[<value>] { backdrop-filter: <value> }
```

```
.backdrop-hue-rotate-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```
.backdrop-invert-<number> { backdrop-filter: invert(<number>%) }
```

```
.-backdrop-invert-<number> { backdrop-filter: invert(-<number>%) }
```

```
.backdrop-invert-[<value>] { backdrop-filter: <value> }
```

```
.backdrop-invert-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```
.backdrop-opacity-<number> { backdrop-filter: opacity(<number>%) }
```

```
.-backdrop-opacity-<number> { backdrop-filter: opacity(-<number>%) }
```

```
.backdrop-opacity-[<value>] { backdrop-filter: <value> }
```

```
.backdrop-opacity-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```
.backdrop-saturate-<number> { backdrop-filter: saturate(<number>%) }
```

```
.-backdrop-saturate-<number> { backdrop-filter: saturate(-<number>%) }
```

```
.backdrop-saturate-[<value>] { backdrop-filter: <value> }
```

```
.backdrop-saturate-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```
.backdrop-sepia { backdrop-filter: sepia(100%) }
```

```
.backdrop-sepia-<number> { backdrop-filter: sepia(<number>%) }
```

```
.-backdrop-sepia-<number> { backdrop-filter: sepia(-<number>%) }
```

```
.backdrop-sepia-[<value>] { backdrop-filter: <value> }
```

```
.backdrop-sepia-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

```
.backdrop-filter-none { backdrop-filter: none }
```

```
.backdrop-filter-[<value>] { backdrop-filter: <value> }
```

```
.backdrop-filter-(<custom-property>) { backdrop-filter: var(<custom-property>) }
```

## Tables

### border-collapse

```
.border-collapse { border-collapse: collapse }
```

```
.border-separate { border-collapse: separate }
```

### border-spacing

```
.border-spacing-<number> { border-spacing: calc(<number> * 4px) }
```

```
.-border-spacing-<number> { border-spacing: calc(-<number> * 4px) }
```

```
.border-spacing-[<value>] { border-spacing: <value> }
```

```
.border-spacing-(<custom-property>) { border-spacing: var(<custom-property>) }
```

```
.border-spacing-x-<number> { border-spacing: calc(<number> * 4px) 0 }
```

```
.-border-spacing-x-<number> { border-spacing: calc(-<number> * 4px) 0 }
```

```
.border-spacing-x-[<value>] { border-spacing: <value> }
```

```
.border-spacing-x-(<custom-property>) { border-spacing: var(<custom-property>) }
```

```
.border-spacing-y-<number> { border-spacing: 0 calc(<number> * 4px) }
```

```
.-border-spacing-y-<number> { border-spacing: 0 calc(-<number> * 4px) }
```

```
.border-spacing-y-[<value>] { border-spacing: <value> }
```

```
.border-spacing-y-(<custom-property>) { border-spacing: var(<custom-property>) }
```

### table-layout

```
.table-auto { table-layout: auto }
```

```
.table-fixed { table-layout: fixed }
```

### caption-side

```
.caption-top { caption-side: top }
```

```
.caption-bottom { caption-side: bottom }
```

## Transitions & Animations

### transition-property

```
.transition { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter }
```

```
.transition-all { transition-property: all }
```

```
.transition-colors { transition-property: color, background-color, border-color, text-decoration-color, fill, stroke }
```

```
.transition-opacity { transition-property: opacity }
```

```
.transition-shadow { transition-property: box-shadow }
```

```
.transition-transform { transition-property: transform }
```

```
.transition-none { transition-property: none }
```

```
.transition-[<value>] { transition-property: <value> }
```

```
.transition-(<custom-property>) { transition-property: var(<custom-property>) }
```

### transition-behavior

```
.transition-normal { transition-behavior: normal }
```

```
.transition-discrete { transition-behavior: allow-discrete }
```

### transition-duration

```
.duration-initial { transition-duration: initial }
```

```
.duration-<number> { transition-duration: <number>ms }
```

```
.-duration-<number> { transition-duration: -<number>ms }
```

```
.duration-[<value>] { transition-duration: <value> }
```

```
.duration-(<custom-property>) { transition-duration: var(<custom-property>) }
```

### transition-timing-function

```
.ease-linear { transition-timing-function: linear }
```

```
.ease-in { transition-timing-function: ease-in }
```

```
.ease-out { transition-timing-function: ease-out }
```

```
.ease-in-out { transition-timing-function: ease-in-out }
```

```
.ease-initial { transition-timing-function: initial }
```

```
.ease-[<value>] { transition-timing-function: <value> }
```

```
.ease-(<custom-property>) { transition-timing-function: var(<custom-property>) }
```

### animation

```
.animate-expand { animation: expand 250ms ease-in-out }
```

```
.animate-toast { animation: toast 250ms ease-in-out }
```

```
.animate-fade { animation: fade 250ms ease-in-out }
```

```
.animate-none { animation: none }
```

```
.animate-[<value>] { animation: <value> }
```

```
.animate-(<custom-property>) { animation: var(<custom-property>) }
```

## Transforms

### backface-visibility

```
.backface-visible { backface-visibility: visible }
```

```
.backface-hidden { backface-visibility: hidden }
```

### perspective

```
.perspective-dramatic { perspective: 100px }
```

```
.perspective-near { perspective: 300px }
```

```
.perspective-normal { perspective: 500px }
```

```
.perspective-midrange { perspective: 800px }
```

```
.perspective-distant { perspective: 1200px }
```

```
.perspective-none { perspective: none }
```

```
.perspective-[<value>] { perspective: <value> }
```

```
.perspective-(<custom-property>) { perspective: var(<custom-property>) }
```

### perspective-origin

```
.perspective-origin-top-left { perspective-origin: top left }
```

```
.perspective-origin-top { perspective-origin: top }
```

```
.perspective-origin-top-right { perspective-origin: top right }
```

```
.perspective-origin-left { perspective-origin: left }
```

```
.perspective-origin-center { perspective-origin: center }
```

```
.perspective-origin-right { perspective-origin: right }
```

```
.perspective-origin-bottom-left { perspective-origin: bottom left }
```

```
.perspective-origin-bottom { perspective-origin: bottom }
```

```
.perspective-origin-bottom-right { perspective-origin: bottom right }
```

```
.perspective-origin-[<value>] { perspective-origin: <value> }
```

```
.perspective-origin-(<custom-property>) { perspective-origin: var(<custom-property>) }
```

### rotate

```
.rotate-none { rotate: none }
```

```
.rotate-<number> { rotate: <number>deg }
```

```
.-rotate-<number> { rotate: -<number>deg }
```

```
.rotate-[<value>] { rotate: <value> }
```

```
.rotate-(<custom-property>) { rotate: var(<custom-property>) }
```

### scale

```
.scale-<number> { scale: <number>% <number>% }
```

```
.-scale-<number> { scale: -<number>% -<number>% }
```

```
.scale-[<value>] { scale: <value> }
```

```
.scale-(<custom-property>) { scale: var(<custom-property>) }
```

```
.scale-x-<number> { scale: <number>% 100% }
```

```
.-scale-x-<number> { scale: -<number>% 100% }
```

```
.scale-x-[<value>] { scale: <value> }
```

```
.scale-x-(<custom-property>) { scale: var(<custom-property>) }
```

```
.scale-y-<number> { scale: 100% <number>% }
```

```
.-scale-y-<number> { scale: 100% -<number>% }
```

```
.scale-y-[<value>] { scale: <value> }
```

```
.scale-y-(<custom-property>) { scale: var(<custom-property>) }
```

### transform

```
.skew-<number> { transform: skewX(<number>deg) skewY(<number>deg) }
```

```
.-skew-<number> { transform: skewX(-<number>deg) skewY(-<number>deg) }
```

```
.skew-[<value>] { transform: <value> }
```

```
.skew-(<custom-property>) { transform: var(<custom-property>) }
```

```
.skew-x-<number> { transform: skewX(<number>deg) }
```

```
.-skew-x-<number> { transform: skewX(-<number>deg) }
```

```
.skew-x-[<value>] { transform: <value> }
```

```
.skew-x-(<custom-property>) { transform: var(<custom-property>) }
```

```
.skew-y-<number> { transform: skewY(<number>deg) }
```

```
.-skew-y-<number> { transform: skewY(-<number>deg) }
```

```
.skew-y-[<value>] { transform: <value> }
```

```
.skew-y-(<custom-property>) { transform: var(<custom-property>) }
```

```
.transform-none { transform: none }
```

```
.transform-[<value>] { transform: <value> }
```

```
.transform-(<custom-property>) { transform: var(<custom-property>) }
```

### transform-origin

```
.origin-top-left { transform-origin: top left }
```

```
.origin-top { transform-origin: top }
```

```
.origin-top-right { transform-origin: top right }
```

```
.origin-left { transform-origin: left }
```

```
.origin-center { transform-origin: center }
```

```
.origin-right { transform-origin: right }
```

```
.origin-bottom-left { transform-origin: bottom left }
```

```
.origin-bottom { transform-origin: bottom }
```

```
.origin-bottom-right { transform-origin: bottom right }
```

```
.origin-[<value>] { transform-origin: <value> }
```

```
.origin-(<custom-property>) { transform-origin: var(<custom-property>) }
```

### transform-style

```
.transform-3d { transform-style: preserve-3d }
```

```
.transform-flat { transform-style: flat }
```

### translate

```
.translate-auto { translate: auto auto }
```

```
.translate-px { translate: 1px 1px }
```

```
.-translate-px { translate: -1px -1px }
```

```
.translate-full { translate: 100% 100% }
```

```
.-translate-full { translate: -100% -100% }
```

```
.translate-screen { translate: 100vw 100vw }
```

```
.translate-dvw { translate: 100vw 100vw }
```

```
.translate-dvh { translate: 100vh 100vh }
```

```
.translate-lvw { translate: 100lvw 100lvw }
```

```
.translate-lvh { translate: 100lvh 100lvh }
```

```
.translate-svw { translate: 100svw 100svw }
```

```
.translate-svh { translate: 100svh 100svh }
```

```
.translate-min { translate: min-content min-content }
```

```
.translate-max { translate: max-content max-content }
```

```
.translate-fit { translate: fit-content fit-content }
```

```
.translate-3xs { translate: 256px 256px }
```

```
.translate-2xs { translate: 288px 288px }
```

```
.translate-xs { translate: 320px 320px }
```

```
.translate-sm { translate: 384px 384px }
```

```
.translate-md { translate: 448px 448px }
```

```
.translate-lg { translate: 512px 512px }
```

```
.translate-xl { translate: 576px 576px }
```

```
.translate-2xl { translate: 672px 672px }
```

```
.translate-3xl { translate: 768px 768px }
```

```
.translate-4xl { translate: 896px 896px }
```

```
.translate-5xl { translate: 1024px 1024px }
```

```
.translate-6xl { translate: 1152px 1152px }
```

```
.translate-7xl { translate: 1280px 1280px }
```

```
.translate-<number> { translate: calc(<number> * 4px) calc(<number> * 4px) }
```

```
.-translate-<number> { translate: calc(-<number> * 4px) calc(-<number> * 4px) }
```

```
.translate-<fraction> { translate: calc(<fraction> * 100%) calc(<fraction> * 100%) }
```

```
.translate-[<value>] { translate: <value> }
```

```
.translate-(<custom-property>) { translate: var(<custom-property>) }
```

```
.translate-x-auto { translate: auto }
```

```
.translate-x-px { translate: 1px }
```

```
.-translate-x-px { translate: -1px }
```

```
.translate-x-full { translate: 100% }
```

```
.-translate-x-full { translate: -100% }
```

```
.translate-x-screen { translate: 100vw }
```

```
.translate-x-dvw { translate: 100vw }
```

```
.translate-x-dvh { translate: 100vh }
```

```
.translate-x-lvw { translate: 100lvw }
```

```
.translate-x-lvh { translate: 100lvh }
```

```
.translate-x-svw { translate: 100svw }
```

```
.translate-x-svh { translate: 100svh }
```

```
.translate-x-min { translate: min-content }
```

```
.translate-x-max { translate: max-content }
```

```
.translate-x-fit { translate: fit-content }
```

```
.translate-x-3xs { translate: 256px }
```

```
.translate-x-2xs { translate: 288px }
```

```
.translate-x-xs { translate: 320px }
```

```
.translate-x-sm { translate: 384px }
```

```
.translate-x-md { translate: 448px }
```

```
.translate-x-lg { translate: 512px }
```

```
.translate-x-xl { translate: 576px }
```

```
.translate-x-2xl { translate: 672px }
```

```
.translate-x-3xl { translate: 768px }
```

```
.translate-x-4xl { translate: 896px }
```

```
.translate-x-5xl { translate: 1024px }
```

```
.translate-x-6xl { translate: 1152px }
```

```
.translate-x-7xl { translate: 1280px }
```

```
.translate-x-<number> { translate: calc(<number> * 4px) }
```

```
.-translate-x-<number> { translate: calc(-<number> * 4px) }
```

```
.translate-x-<fraction> { translate: calc(<fraction> * 100%) }
```

```
.translate-x-[<value>] { translate: <value> }
```

```
.translate-x-(<custom-property>) { translate: var(<custom-property>) }
```

```
.translate-y-auto { translate: 0 auto }
```

```
.translate-y-px { translate: 0 1px }
```

```
.-translate-y-px { translate: 0 -1px }
```

```
.translate-y-full { translate: 0 100% }
```

```
.-translate-y-full { translate: 0 -100% }
```

```
.translate-y-screen { translate: 0 100vw }
```

```
.translate-y-dvw { translate: 0 100vw }
```

```
.translate-y-dvh { translate: 0 100vh }
```

```
.translate-y-lvw { translate: 0 100lvw }
```

```
.translate-y-lvh { translate: 0 100lvh }
```

```
.translate-y-svw { translate: 0 100svw }
```

```
.translate-y-svh { translate: 0 100svh }
```

```
.translate-y-min { translate: 0 min-content }
```

```
.translate-y-max { translate: 0 max-content }
```

```
.translate-y-fit { translate: 0 fit-content }
```

```
.translate-y-3xs { translate: 0 256px }
```

```
.translate-y-2xs { translate: 0 288px }
```

```
.translate-y-xs { translate: 0 320px }
```

```
.translate-y-sm { translate: 0 384px }
```

```
.translate-y-md { translate: 0 448px }
```

```
.translate-y-lg { translate: 0 512px }
```

```
.translate-y-xl { translate: 0 576px }
```

```
.translate-y-2xl { translate: 0 672px }
```

```
.translate-y-3xl { translate: 0 768px }
```

```
.translate-y-4xl { translate: 0 896px }
```

```
.translate-y-5xl { translate: 0 1024px }
```

```
.translate-y-6xl { translate: 0 1152px }
```

```
.translate-y-7xl { translate: 0 1280px }
```

```
.translate-y-<number> { translate: 0 calc(<number> * 4px) }
```

```
.-translate-y-<number> { translate: 0 calc(-<number> * 4px) }
```

```
.translate-y-<fraction> { translate: 0 calc(<fraction> * 100%) }
```

```
.translate-y-[<value>] { translate: <value> }
```

```
.translate-y-(<custom-property>) { translate: var(<custom-property>) }
```

## Interactivity

### accent-color

```
.accent-<color> { accent-color: oklch(...) }
```

### appearance

```
.appearance-none { appearance: none }
```

```
.appearance-auto { appearance: auto }
```

### caret-color

```
.caret-<color> { caret-color: oklch(...) }
```

### color-scheme

```
.scheme-normal { color-scheme: normal }
```

```
.scheme-dark { color-scheme: dark }
```

```
.scheme-light { color-scheme: light }
```

```
.scheme-light-dark { color-scheme: light dark }
```

```
.scheme-only-dark { color-scheme: only dark }
```

```
.scheme-only-light { color-scheme: only light }
```

### cursor

```
.cursor-auto { cursor: auto }
```

```
.cursor-default { cursor: default }
```

```
.cursor-pointer { cursor: pointer }
```

```
.cursor-wait { cursor: wait }
```

```
.cursor-text { cursor: text }
```

```
.cursor-move { cursor: move }
```

```
.cursor-not-allowed { cursor: not-allowed }
```

### field-sizing

```
.field-sizing-fixed { field-sizing: fixed }
```

```
.field-sizing-content { field-sizing: content }
```

### pointer-events

```
.pointer-events-none { pointer-events: none }
```

```
.pointer-events-auto { pointer-events: auto }
```

### resize

```
.resize-none { resize: none }
```

```
.resize-x { resize: horizontal }
```

```
.resize-y { resize: vertical }
```

```
.resize-both { resize: both }
```

### scroll-behavior

```
.scroll-auto { scroll-behavior: auto }
```

```
.scroll-smooth { scroll-behavior: smooth }
```

### scroll-margin

```
.scroll-m-<number> { scroll-margin: calc(<number> * 4px) }
```

```
.-scroll-m-<number> { scroll-margin: calc(-<number> * 4px) }
```

```
.scroll-m-[<value>] { scroll-margin: <value> }
```

```
.scroll-m-(<custom-property>) { scroll-margin: var(<custom-property>) }
```

### scroll-padding

```
.scroll-p-<number> { scroll-padding: calc(<number> * 4px) }
```

```
.-scroll-p-<number> { scroll-padding: calc(-<number> * 4px) }
```

```
.scroll-p-[<value>] { scroll-padding: <value> }
```

```
.scroll-p-(<custom-property>) { scroll-padding: var(<custom-property>) }
```

### scroll-snap-align

```
.snap-start { scroll-snap-align: start }
```

```
.snap-end { scroll-snap-align: end }
```

```
.snap-center { scroll-snap-align: center }
```

```
.snap-align-none { scroll-snap-align: none }
```

### scroll-snap-stop

```
.snap-normal { scroll-snap-stop: normal }
```

```
.snap-always { scroll-snap-stop: always }
```

### scroll-snap-type

```
.snap-none { scroll-snap-type: none }
```

```
.snap-x { scroll-snap-type: x mandatory }
```

```
.snap-y { scroll-snap-type: y mandatory }
```

```
.snap-both { scroll-snap-type: both proximity }
```

### touch-action

```
.touch-auto { touch-action: auto }
```

```
.touch-none { touch-action: none }
```

```
.touch-pan-x { touch-action: pan-x }
```

```
.touch-pan-left { touch-action: pan-left }
```

```
.touch-pan-right { touch-action: pan-right }
```

```
.touch-pan-y { touch-action: pan-y }
```

```
.touch-pan-up { touch-action: pan-up }
```

```
.touch-pan-down { touch-action: pan-down }
```

```
.touch-pinch-zoom { touch-action: pinch-zoom }
```

```
.touch-manipulation { touch-action: manipulation }
```

### user-select

```
.select-text { user-select: text }
```

```
.select-all { user-select: all }
```

```
.select-auto { user-select: auto }
```

```
.select-none { user-select: none }
```

### will-change

```
.will-change-auto { will-change: auto }
```

```
.will-change-scroll { will-change: scroll-position }
```

```
.will-change-contents { will-change: contents }
```

```
.will-change-transform { will-change: transform }
```

```
.will-change-[<value>] { will-change: <value> }
```

```
.will-change-(<custom-property>) { will-change: var(<custom-property>) }
```

## SVG

### fill

```
.fill-<color> { fill: oklch(...) }
```

### stroke

```
.stroke-<color> { stroke: oklch(...) }
```

### stroke-width

```
.stroke-<number> { stroke-width: <number>px }
```

```
.-stroke-<number> { stroke-width: -<number>px }
```

```
.stroke-[<value>] { stroke-width: <value> }
```

```
.stroke-(<custom-property>) { stroke-width: var(<custom-property>) }
```

## Accessibility

### forced-color-adjust

```
.forced-color-adjust-auto { forced-color-adjust: auto }
```

```
.forced-color-adjust-none { forced-color-adjust: none }
```
