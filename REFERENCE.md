# Reference

## Defaults

### CSS reset

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

Classes can be prefixed. The order is always `query:state:pseudo:class`.

- Supported states: `active`, `any-link`, `checked`, `default`, `defined`, `disabled`, `empty`, `enabled`, `first-child`, `first-of-type`, `focus`, `focus-visible`, `focus-within`, `fullscreen`, `future`, `host`, `hover`, `in-range`, `indeterminate`, `invalid`, `last-child`, `last-of-type`, `link`, `modal`, `only-child`, `only-of-type`, `open`, `optional`, `out-of-range`, `past`, `picture-in-picture`, `placeholder-shown`, `popover-open`, `read-only`, `read-write`, `required`, `root`, `scope`, `target`, `user-invalid`, `user-valid`, `valid`, `visited`.
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

In addition to the colors below, `black`, `white`, `transparent`, `current` and `inherit` are also supported.

|   | 50|100|200|300|400|500|600|700|800|900|950|
|---|---|---|---|---|---|---|---|---|---|---|---|
**red**|$\color{#fef2f2}{\textsf{█}}$|$\color{#ffe2e2}{\textsf{█}}$|$\color{#ffc9c9}{\textsf{█}}$|$\color{#ffa2a2}{\textsf{█}}$|$\color{#ff6467}{\textsf{█}}$|$\color{#fb2c36}{\textsf{█}}$|$\color{#e7000b}{\textsf{█}}$|$\color{#c10007}{\textsf{█}}$|$\color{#9f0712}{\textsf{█}}$|$\color{#82181a}{\textsf{█}}$|$\color{#460809}{\textsf{█}}$
**orange**|$\color{#fff7ed}{\textsf{█}}$|$\color{#ffedd4}{\textsf{█}}$|$\color{#ffd6a8}{\textsf{█}}$|$\color{#ffb86a}{\textsf{█}}$|$\color{#ff8904}{\textsf{█}}$|$\color{#ff6900}{\textsf{█}}$|$\color{#f54900}{\textsf{█}}$|$\color{#ca3500}{\textsf{█}}$|$\color{#9f2d00}{\textsf{█}}$|$\color{#7e2a0c}{\textsf{█}}$|$\color{#441306}{\textsf{█}}$
**amber**|$\color{#fffbeb}{\textsf{█}}$|$\color{#fef3c6}{\textsf{█}}$|$\color{#fee685}{\textsf{█}}$|$\color{#ffd230}{\textsf{█}}$|$\color{#ffb900}{\textsf{█}}$|$\color{#fe9a00}{\textsf{█}}$|$\color{#e17100}{\textsf{█}}$|$\color{#bb4d00}{\textsf{█}}$|$\color{#973c00}{\textsf{█}}$|$\color{#7b3306}{\textsf{█}}$|$\color{#461901}{\textsf{█}}$
**yellow**|$\color{#fefce8}{\textsf{█}}$|$\color{#fef9c2}{\textsf{█}}$|$\color{#fff085}{\textsf{█}}$|$\color{#ffdf20}{\textsf{█}}$|$\color{#fdc700}{\textsf{█}}$|$\color{#f0b100}{\textsf{█}}$|$\color{#d08700}{\textsf{█}}$|$\color{#a65f00}{\textsf{█}}$|$\color{#894b00}{\textsf{█}}$|$\color{#733e0a}{\textsf{█}}$|$\color{#432004}{\textsf{█}}$
**lime**|$\color{#f7fee7}{\textsf{█}}$|$\color{#ecfcca}{\textsf{█}}$|$\color{#d8f999}{\textsf{█}}$|$\color{#bbf451}{\textsf{█}}$|$\color{#9ae600}{\textsf{█}}$|$\color{#7ccf00}{\textsf{█}}$|$\color{#5ea500}{\textsf{█}}$|$\color{#497d00}{\textsf{█}}$|$\color{#3c6300}{\textsf{█}}$|$\color{#35530e}{\textsf{█}}$|$\color{#192e03}{\textsf{█}}$
**green**|$\color{#f0fdf4}{\textsf{█}}$|$\color{#dcfce7}{\textsf{█}}$|$\color{#b9f8cf}{\textsf{█}}$|$\color{#7bf1a8}{\textsf{█}}$|$\color{#05df72}{\textsf{█}}$|$\color{#00c950}{\textsf{█}}$|$\color{#00a63e}{\textsf{█}}$|$\color{#008236}{\textsf{█}}$|$\color{#016630}{\textsf{█}}$|$\color{#0d542b}{\textsf{█}}$|$\color{#032e15}{\textsf{█}}$
**emerald**|$\color{#ecfdf5}{\textsf{█}}$|$\color{#d0fae5}{\textsf{█}}$|$\color{#a4f4cf}{\textsf{█}}$|$\color{#5ee9b5}{\textsf{█}}$|$\color{#00d492}{\textsf{█}}$|$\color{#00bc7d}{\textsf{█}}$|$\color{#009966}{\textsf{█}}$|$\color{#007a55}{\textsf{█}}$|$\color{#006045}{\textsf{█}}$|$\color{#004f3b}{\textsf{█}}$|$\color{#002c22}{\textsf{█}}$
**teal**|$\color{#f0fdfa}{\textsf{█}}$|$\color{#cbfbf1}{\textsf{█}}$|$\color{#96f7e4}{\textsf{█}}$|$\color{#46ecd5}{\textsf{█}}$|$\color{#00d5be}{\textsf{█}}$|$\color{#00bba7}{\textsf{█}}$|$\color{#009689}{\textsf{█}}$|$\color{#00786f}{\textsf{█}}$|$\color{#005f5a}{\textsf{█}}$|$\color{#0b4f4a}{\textsf{█}}$|$\color{#022f2e}{\textsf{█}}$
**cyan**|$\color{#ecfeff}{\textsf{█}}$|$\color{#cefafe}{\textsf{█}}$|$\color{#a2f4fd}{\textsf{█}}$|$\color{#53eafd}{\textsf{█}}$|$\color{#00d3f3}{\textsf{█}}$|$\color{#00b8db}{\textsf{█}}$|$\color{#0092b8}{\textsf{█}}$|$\color{#007595}{\textsf{█}}$|$\color{#005f78}{\textsf{█}}$|$\color{#104e64}{\textsf{█}}$|$\color{#053345}{\textsf{█}}$
**sky**|$\color{#f0f9ff}{\textsf{█}}$|$\color{#dff2fe}{\textsf{█}}$|$\color{#b8e6fe}{\textsf{█}}$|$\color{#74d4ff}{\textsf{█}}$|$\color{#00bcff}{\textsf{█}}$|$\color{#00a6f4}{\textsf{█}}$|$\color{#0084d1}{\textsf{█}}$|$\color{#0069a8}{\textsf{█}}$|$\color{#00598a}{\textsf{█}}$|$\color{#024a70}{\textsf{█}}$|$\color{#052f4a}{\textsf{█}}$
**blue**|$\color{#eff6ff}{\textsf{█}}$|$\color{#dbeafe}{\textsf{█}}$|$\color{#bedbff}{\textsf{█}}$|$\color{#8ec5ff}{\textsf{█}}$|$\color{#51a2ff}{\textsf{█}}$|$\color{#2b7fff}{\textsf{█}}$|$\color{#155dfc}{\textsf{█}}$|$\color{#1447e6}{\textsf{█}}$|$\color{#193cb8}{\textsf{█}}$|$\color{#1c398e}{\textsf{█}}$|$\color{#162456}{\textsf{█}}$
**indigo**|$\color{#eef2ff}{\textsf{█}}$|$\color{#e0e7ff}{\textsf{█}}$|$\color{#c6d2ff}{\textsf{█}}$|$\color{#a3b3ff}{\textsf{█}}$|$\color{#7c86ff}{\textsf{█}}$|$\color{#615fff}{\textsf{█}}$|$\color{#4f39f6}{\textsf{█}}$|$\color{#432dd7}{\textsf{█}}$|$\color{#372aac}{\textsf{█}}$|$\color{#312c85}{\textsf{█}}$|$\color{#1e1a4d}{\textsf{█}}$
**violet**|$\color{#f5f3ff}{\textsf{█}}$|$\color{#ede9fe}{\textsf{█}}$|$\color{#ddd6ff}{\textsf{█}}$|$\color{#c4b4ff}{\textsf{█}}$|$\color{#a684ff}{\textsf{█}}$|$\color{#8e51ff}{\textsf{█}}$|$\color{#7f22fe}{\textsf{█}}$|$\color{#7008e7}{\textsf{█}}$|$\color{#5d0ec0}{\textsf{█}}$|$\color{#4d179a}{\textsf{█}}$|$\color{#2f0d68}{\textsf{█}}$
**purple**|$\color{#faf5ff}{\textsf{█}}$|$\color{#f3e8ff}{\textsf{█}}$|$\color{#e9d4ff}{\textsf{█}}$|$\color{#dab2ff}{\textsf{█}}$|$\color{#c27aff}{\textsf{█}}$|$\color{#ad46ff}{\textsf{█}}$|$\color{#9810fa}{\textsf{█}}$|$\color{#8200db}{\textsf{█}}$|$\color{#6e11b0}{\textsf{█}}$|$\color{#59168b}{\textsf{█}}$|$\color{#3c0366}{\textsf{█}}$
**fuchsia**|$\color{#fdf4ff}{\textsf{█}}$|$\color{#fae8ff}{\textsf{█}}$|$\color{#f6cfff}{\textsf{█}}$|$\color{#f4a8ff}{\textsf{█}}$|$\color{#ed6aff}{\textsf{█}}$|$\color{#e12afb}{\textsf{█}}$|$\color{#c800de}{\textsf{█}}$|$\color{#a800b7}{\textsf{█}}$|$\color{#8a0194}{\textsf{█}}$|$\color{#721378}{\textsf{█}}$|$\color{#4b004f}{\textsf{█}}$
**pink**|$\color{#fdf2f8}{\textsf{█}}$|$\color{#fce7f3}{\textsf{█}}$|$\color{#fccee8}{\textsf{█}}$|$\color{#fda5d5}{\textsf{█}}$|$\color{#fb64b6}{\textsf{█}}$|$\color{#f6339a}{\textsf{█}}$|$\color{#e60076}{\textsf{█}}$|$\color{#c6005c}{\textsf{█}}$|$\color{#a3004c}{\textsf{█}}$|$\color{#861043}{\textsf{█}}$|$\color{#510424}{\textsf{█}}$
**rose**|$\color{#fff1f2}{\textsf{█}}$|$\color{#ffe4e6}{\textsf{█}}$|$\color{#ffccd3}{\textsf{█}}$|$\color{#ffa1ad}{\textsf{█}}$|$\color{#ff637e}{\textsf{█}}$|$\color{#ff2056}{\textsf{█}}$|$\color{#ec003f}{\textsf{█}}$|$\color{#c70036}{\textsf{█}}$|$\color{#a50036}{\textsf{█}}$|$\color{#8b0836}{\textsf{█}}$|$\color{#4d0218}{\textsf{█}}$
**slate**|$\color{#f8fafc}{\textsf{█}}$|$\color{#f1f5f9}{\textsf{█}}$|$\color{#e2e8f0}{\textsf{█}}$|$\color{#cad5e2}{\textsf{█}}$|$\color{#90a1b9}{\textsf{█}}$|$\color{#62748e}{\textsf{█}}$|$\color{#45556c}{\textsf{█}}$|$\color{#314158}{\textsf{█}}$|$\color{#1d293d}{\textsf{█}}$|$\color{#0f172b}{\textsf{█}}$|$\color{#020618}{\textsf{█}}$
**gray**|$\color{#f9fafb}{\textsf{█}}$|$\color{#f3f4f6}{\textsf{█}}$|$\color{#e5e7eb}{\textsf{█}}$|$\color{#d1d5dc}{\textsf{█}}$|$\color{#99a1af}{\textsf{█}}$|$\color{#6a7282}{\textsf{█}}$|$\color{#4a5565}{\textsf{█}}$|$\color{#364153}{\textsf{█}}$|$\color{#1e2939}{\textsf{█}}$|$\color{#101828}{\textsf{█}}$|$\color{#030712}{\textsf{█}}$
**zinc**|$\color{#fafafa}{\textsf{█}}$|$\color{#f4f4f5}{\textsf{█}}$|$\color{#e4e4e7}{\textsf{█}}$|$\color{#d4d4d8}{\textsf{█}}$|$\color{#9f9fa9}{\textsf{█}}$|$\color{#71717b}{\textsf{█}}$|$\color{#52525c}{\textsf{█}}$|$\color{#3f3f47}{\textsf{█}}$|$\color{#27272a}{\textsf{█}}$|$\color{#18181b}{\textsf{█}}$|$\color{#09090b}{\textsf{█}}$
**neutral**|$\color{#fafafa}{\textsf{█}}$|$\color{#f5f5f5}{\textsf{█}}$|$\color{#e5e5e5}{\textsf{█}}$|$\color{#d4d4d4}{\textsf{█}}$|$\color{#a1a1a1}{\textsf{█}}$|$\color{#737373}{\textsf{█}}$|$\color{#525252}{\textsf{█}}$|$\color{#404040}{\textsf{█}}$|$\color{#262626}{\textsf{█}}$|$\color{#171717}{\textsf{█}}$|$\color{#0a0a0a}{\textsf{█}}$
**stone**|$\color{#fafaf9}{\textsf{█}}$|$\color{#f5f5f4}{\textsf{█}}$|$\color{#e7e5e4}{\textsf{█}}$|$\color{#d6d3d1}{\textsf{█}}$|$\color{#a6a09b}{\textsf{█}}$|$\color{#79716b}{\textsf{█}}$|$\color{#57534d}{\textsf{█}}$|$\color{#44403b}{\textsf{█}}$|$\color{#292524}{\textsf{█}}$|$\color{#1c1917}{\textsf{█}}$|$\color{#0c0a09}{\textsf{█}}$

### Dynamic properties

Dynamic properties can be set by adding a suffix according to the table below. With a few exceptions, this mainly applies to sizing. Note that for simplicity the engine treats all of them equally, which means not all combinations will result in a valid CSS. A good example is background image: `bg-[url(...)]` makes sense, whereas `bg-1/3` does not.

|Value|Output|
|-----|------|
|`class-<number>`|`property: calc(<number> * 4px)`|
|`-class-<number>`|`property: calc(-<number> * 4px)`|
|`class-<fraction>`|`property: calc(<fraction> * 100%)`|
|`-class-<fraction>`|`property: calc(-<fraction> * 100%)`|
|`class-[<value>]`|`property: <value>`|
|`class-(--custom-property)`|`property: var(--custom-property)`|
|`class-auto`|`property: auto`|
|`class-px`|`property: 1px`|
|`class-full`|`property: 100%`|
|`class-screen`|`property: 100vw`|
|`class-dvw`|`property: 100vw`|
|`class-dvh`|`property: 100vh`|
|`class-lvw`|`property: 100lvw`|
|`class-lvh`|`property: 100lvh`|
|`class-svw`|`property: 100svw`|
|`class-svh`|`property: 100svh`|
|`class-min`|`property: min-content`|
|`class-max`|`property: max-content`|
|`class-fit`|`property: fit-content`|

## Layout

### aspect-ratio

```css
.aspect-auto { aspect-ratio: auto }
```

```css
.aspect-square { aspect-ratio: 1 / 1 }
```

```css
.aspect-video { aspect-ratio: 16 / 9 }
```

```css
.aspect-SUFFIX { aspect-ratio: ... }
```

### columns

```css
.columns-1 { columns: 1 }
```

```css
.columns-2 { columns: 2 }
```

```css
.columns-3 { columns: 3 }
```

```css
.columns-4 { columns: 4 }
```

```css
.columns-5 { columns: 5 }
```

```css
.columns-6 { columns: 6 }
```

```css
.columns-7 { columns: 7 }
```

```css
.columns-8 { columns: 8 }
```

```css
.columns-9 { columns: 9 }
```

```css
.columns-10 { columns: 10 }
```

```css
.columns-11 { columns: 11 }
```

```css
.columns-12 { columns: 12 }
```

```css
.columns-auto { columns: auto }
```

```css
.order-1 { columns: 1 }
```

```css
.order-2 { columns: 2 }
```

```css
.order-3 { columns: 3 }
```

```css
.order-4 { columns: 4 }
```

```css
.order-5 { columns: 5 }
```

```css
.order-6 { columns: 6 }
```

```css
.order-7 { columns: 7 }
```

```css
.order-8 { columns: 8 }
```

```css
.order-9 { columns: 9 }
```

```css
.order-10 { columns: 10 }
```

```css
.order-11 { columns: 11 }
```

```css
.order-12 { columns: 12 }
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

```css
.break-before-auto { break-after: auto }
```

```css
.break-before-avoid { break-after: avoid }
```

```css
.break-before-avoid-page { break-after: avoid-page }
```

```css
.break-before-page { break-after: page }
```

```css
.break-before-left { break-after: left }
```

```css
.break-before-right { break-after: right }
```

```css
.break-before-column { break-after: column }
```

### break-before

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

```css
.break-before-auto { break-after: auto }
```

```css
.break-before-avoid { break-after: avoid }
```

```css
.break-before-avoid-page { break-after: avoid-page }
```

```css
.break-before-page { break-after: page }
```

```css
.break-before-left { break-after: left }
```

```css
.break-before-right { break-after: right }
```

```css
.break-before-column { break-after: column }
```

### break-inside

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

```css
.break-before-auto { break-after: auto }
```

```css
.break-before-avoid { break-after: avoid }
```

```css
.break-before-avoid-page { break-after: avoid-page }
```

```css
.break-before-page { break-after: page }
```

```css
.break-before-left { break-after: left }
```

```css
.break-before-right { break-after: right }
```

```css
.break-before-column { break-after: column }
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
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1 
}
```

```css
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2 
}
```

```css
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3 
}
```

```css
.line-clamp-4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4 
}
```

```css
.line-clamp-5 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5 
}
```

```css
.line-clamp-6 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6 
}
```

```css
.line-clamp-none {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: none 
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

### overflow

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0 
}
```

```css
.not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal 
}
```

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
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1 
}
```

```css
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2 
}
```

```css
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3 
}
```

```css
.line-clamp-4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4 
}
```

```css
.line-clamp-5 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5 
}
```

```css
.line-clamp-6 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6 
}
```

```css
.line-clamp-none {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: none 
}
```

```css
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap 
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

### position

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0 
}
```

```css
.not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal 
}
```

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
.inset-SUFFIX { inset: ... }
```

```css
.inset-x-SUFFIX { inset-inline: ... }
```

```css
.inset-y-SUFFIX { inset-block: ... }
```

```css
.start-SUFFIX { inset-inline-start: ... }
```

```css
.end-SUFFIX { inset-inline-end: ... }
```

```css
.top-SUFFIX { top: ... }
```

```css
.right-SUFFIX { right: ... }
```

```css
.bottom-SUFFIX { bottom: ... }
```

```css
.left-SUFFIX { left: ... }
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
.z-0 { z-index: 0 }
```

```css
.z-10 { z-index: 10 }
```

```css
.z-20 { z-index: 20 }
```

```css
.z-30 { z-index: 30 }
```

```css
.z-40 { z-index: 40 }
```

```css
.z-50 { z-index: 50 }
```

```css
.z-auto { z-index: auto }
```

## Flexbox & Grid

### flex-basis

```css
.basis-SUFFIX { flex-basis: ... }
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
.flex-SUFFIX { flex: ... }
```

```css
.flex-auto { flex: 1 1 auto }
```

```css
.flex-initial { flex: 0 1 auto }
```

```css
.flex-none { flex: none }
```

### flex-grow

```css
.grow { flex-grow: 1 }
```

```css
.grow-0 { flex-grow: 0 }
```

### flex-shrink

```css
.shrink { flex-shrink: 1 }
```

```css
.shrink-0 { flex-shrink: 0 }
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

### grid-template-columns

```css
.grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)) }
```

```css
.grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) }
```

```css
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) }
```

```css
.grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)) }
```

```css
.grid-cols-5 { grid-template-columns: repeat(5, minmax(0, 1fr)) }
```

```css
.grid-cols-6 { grid-template-columns: repeat(6, minmax(0, 1fr)) }
```

```css
.grid-cols-7 { grid-template-columns: repeat(7, minmax(0, 1fr)) }
```

```css
.grid-cols-8 { grid-template-columns: repeat(8, minmax(0, 1fr)) }
```

```css
.grid-cols-9 { grid-template-columns: repeat(9, minmax(0, 1fr)) }
```

```css
.grid-cols-10 { grid-template-columns: repeat(10, minmax(0, 1fr)) }
```

```css
.grid-cols-11 { grid-template-columns: repeat(11, minmax(0, 1fr)) }
```

```css
.grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)) }
```

```css
.grid-cols-none { grid-template-columns: none }
```

```css
.grid-cols-subgrid { grid-template-columns: subgrid }
```

### grid-column

```css
.col-auto { grid-column: auto }
```

```css
.col-span-1 { grid-column: span 1 / span 1 }
```

```css
.col-span-2 { grid-column: span 2 / span 2 }
```

```css
.col-span-3 { grid-column: span 3 / span 3 }
```

```css
.col-span-4 { grid-column: span 4 / span 4 }
```

```css
.col-span-5 { grid-column: span 5 / span 5 }
```

```css
.col-span-6 { grid-column: span 6 / span 6 }
```

```css
.col-span-7 { grid-column: span 7 / span 7 }
```

```css
.col-span-8 { grid-column: span 8 / span 8 }
```

```css
.col-span-9 { grid-column: span 9 / span 9 }
```

```css
.col-span-10 { grid-column: span 10 / span 10 }
```

```css
.col-span-11 { grid-column: span 11 / span 11 }
```

```css
.col-span-12 { grid-column: span 12 / span 12 }
```

```css
.col-span-full { grid-column: 1 / -1 }
```

```css
.col-start-1 { grid-column-start: 1 }
```

```css
.col-start-2 { grid-column-start: 2 }
```

```css
.col-start-3 { grid-column-start: 3 }
```

```css
.col-start-4 { grid-column-start: 4 }
```

```css
.col-start-5 { grid-column-start: 5 }
```

```css
.col-start-6 { grid-column-start: 6 }
```

```css
.col-start-7 { grid-column-start: 7 }
```

```css
.col-start-8 { grid-column-start: 8 }
```

```css
.col-start-9 { grid-column-start: 9 }
```

```css
.col-start-10 { grid-column-start: 10 }
```

```css
.col-start-11 { grid-column-start: 11 }
```

```css
.col-start-12 { grid-column-start: 12 }
```

```css
.col-start-13 { grid-column-start: 13 }
```

```css
.col-start-auto { grid-column-start: auto }
```

### grid-template-rows

```css
.grid-rows-1 { grid-template-rows: repeat(1, auto) }
```

```css
.grid-rows-2 { grid-template-rows: repeat(2, auto) }
```

```css
.grid-rows-3 { grid-template-rows: repeat(3, auto) }
```

```css
.grid-rows-4 { grid-template-rows: repeat(4, auto) }
```

```css
.grid-rows-5 { grid-template-rows: repeat(5, auto) }
```

```css
.grid-rows-6 { grid-template-rows: repeat(6, auto) }
```

```css
.grid-rows-7 { grid-template-rows: repeat(7, auto) }
```

```css
.grid-rows-8 { grid-template-rows: repeat(8, auto) }
```

```css
.grid-rows-9 { grid-template-rows: repeat(9, auto) }
```

```css
.grid-rows-10 { grid-template-rows: repeat(10, auto) }
```

```css
.grid-rows-11 { grid-template-rows: repeat(11, auto) }
```

```css
.grid-rows-12 { grid-template-rows: repeat(12, auto) }
```

```css
.grid-rows-none { grid-template-rows: none }
```

```css
.grid-rows-subgrid { grid-template-rows: subgrid }
```

### grid-row

```css
.row-auto { grid-row: auto }
```

```css
.row-span-1 { grid-row: span 1 / span 1 }
```

```css
.row-span-2 { grid-row: span 2 / span 2 }
```

```css
.row-span-3 { grid-row: span 3 / span 3 }
```

```css
.row-span-4 { grid-row: span 4 / span 4 }
```

```css
.row-span-5 { grid-row: span 5 / span 5 }
```

```css
.row-span-6 { grid-row: span 6 / span 6 }
```

```css
.row-span-7 { grid-row: span 7 / span 7 }
```

```css
.row-span-8 { grid-row: span 8 / span 8 }
```

```css
.row-span-9 { grid-row: span 9 / span 9 }
```

```css
.row-span-10 { grid-row: span 10 / span 10 }
```

```css
.row-span-11 { grid-row: span 11 / span 11 }
```

```css
.row-span-12 { grid-row: span 12 / span 12 }
```

```css
.row-span-full { grid-row: 1 / -1 }
```

```css
.row-start-1 { grid-row-start: 1 }
```

```css
.row-start-2 { grid-row-start: 2 }
```

```css
.row-start-3 { grid-row-start: 3 }
```

```css
.row-start-4 { grid-row-start: 4 }
```

```css
.row-start-5 { grid-row-start: 5 }
```

```css
.row-start-6 { grid-row-start: 6 }
```

```css
.row-start-7 { grid-row-start: 7 }
```

```css
.row-start-8 { grid-row-start: 8 }
```

```css
.row-start-9 { grid-row-start: 9 }
```

```css
.row-start-10 { grid-row-start: 10 }
```

```css
.row-start-11 { grid-row-start: 11 }
```

```css
.row-start-12 { grid-row-start: 12 }
```

```css
.row-start-13 { grid-row-start: 13 }
```

```css
.row-start-auto { grid-row-start: auto }
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

### gap

```css
.gap-SUFFIX { gap: ... }
```

```css
.gap-x-SUFFIX { column-gap: ... }
```

```css
.gap-y-SUFFIX { row-gap: ... }
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
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0 
}
```

```css
.not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal 
}
```

```css
.p-SUFFIX { padding: ... }
```

```css
.px-SUFFIX { padding-inline: ... }
```

```css
.py-SUFFIX { padding-block: ... }
```

```css
.pt-SUFFIX { padding-top: ... }
```

```css
.pr-SUFFIX { padding-right: ... }
```

```css
.pb-SUFFIX { padding-bottom: ... }
```

```css
.pl-SUFFIX { padding-left: ... }
```

```css
.ps-SUFFIX { padding-inline-start: ... }
```

```css
.pe-SUFFIX { padding-inline-end: ... }
```

### margin

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0 
}
```

```css
.not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal 
}
```

```css
.m-SUFFIX { margin: ... }
```

```css
.mx-SUFFIX { margin-inline: ... }
```

```css
.my-SUFFIX { margin-block: ... }
```

```css
.mt-SUFFIX { margin-top: ... }
```

```css
.mr-SUFFIX { margin-right: ... }
```

```css
.mb-SUFFIX { margin-bottom: ... }
```

```css
.ml-SUFFIX { margin-left: ... }
```

```css
.ms-SUFFIX { margin-inline-start: ... }
```

```css
.me-SUFFIX { margin-inline-end: ... }
```

```css
.space-x-SUFFIX  > :not(:last-child) { margin-inline-end: ... }
```

```css
.space-y-SUFFIX  > :not(:last-child) { margin-bottom: ... }
```

## Sizing

### width

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0 
}
```

```css
.not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal 
}
```

```css
.w-SUFFIX { width: ... }
```

### min-width

```css
.min-w-SUFFIX { min-width: ... }
```

### max-width

```css
.max-w-SUFFIX { max-width: ... }
```

### height

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0 
}
```

```css
.not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal 
}
```

```css
.h-SUFFIX { height: ... }
```

### min-height

```css
.min-h-SUFFIX { min-height: ... }
```

### max-height

```css
.max-h-SUFFIX { max-height: ... }
```

## Typography

### font-family

```css
.font-sans { font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" }
```

```css
.font-serif { font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif }
```

```css
.font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace }
```

### font-size

```css
.text-xs {
  font-size: 12px;
  line-height: 1.333 
}
```

```css
.text-sm {
  font-size: 14px;
  line-height: 1.429 
}
```

```css
.text-base {
  font-size: 16px;
  line-height: 1.5 
}
```

```css
.text-lg {
  font-size: 18px;
  line-height: 1.555 
}
```

```css
.text-xl {
  font-size: 20px;
  line-height: 1.4 
}
```

```css
.text-2xl {
  font-size: 24px;
  line-height: 1.333 
}
```

```css
.text-3xl {
  font-size: 30px;
  line-height: 1.2 
}
```

```css
.text-4xl {
  font-size: 36px;
  line-height: 1.111 
}
```

```css
.text-5xl {
  font-size: 48px;
  line-height: 1 
}
```

```css
.text-6xl {
  font-size: 60px;
  line-height: 1 
}
```

```css
.text-7xl {
  font-size: 72px;
  line-height: 1 
}
```

```css
.text-8xl {
  font-size: 96px;
  line-height: 1 
}
```

```css
.text-9xl {
  font-size: 128px;
  line-height: 1 
}
```

### font-smoothing

```css
.antialiased {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale 
}
```

```css
.subpixel-antialiased {
  -webkit-font-smoothing: auto;
  -moz-osx-font-smoothing: auto 
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
.tracking-normal { letter-spacing: 0 }
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

### line-clamp

```css
.line-clamp-1 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1 
}
```

```css
.line-clamp-2 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2 
}
```

```css
.line-clamp-3 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3 
}
```

```css
.line-clamp-4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4 
}
```

```css
.line-clamp-5 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5 
}
```

```css
.line-clamp-6 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 6 
}
```

```css
.line-clamp-none {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: none 
}
```

### line-height

```css
.text-xs {
  font-size: 12px;
  line-height: 1.333 
}
```

```css
.text-sm {
  font-size: 14px;
  line-height: 1.429 
}
```

```css
.text-base {
  font-size: 16px;
  line-height: 1.5 
}
```

```css
.text-lg {
  font-size: 18px;
  line-height: 1.555 
}
```

```css
.text-xl {
  font-size: 20px;
  line-height: 1.4 
}
```

```css
.text-2xl {
  font-size: 24px;
  line-height: 1.333 
}
```

```css
.text-3xl {
  font-size: 30px;
  line-height: 1.2 
}
```

```css
.text-4xl {
  font-size: 36px;
  line-height: 1.111 
}
```

```css
.text-5xl {
  font-size: 48px;
  line-height: 1 
}
```

```css
.text-6xl {
  font-size: 60px;
  line-height: 1 
}
```

```css
.text-7xl {
  font-size: 72px;
  line-height: 1 
}
```

```css
.text-8xl {
  font-size: 96px;
  line-height: 1 
}
```

```css
.text-9xl {
  font-size: 128px;
  line-height: 1 
}
```

```css
.leading-none { line-height: 1 }
```

```css
.leading-tight { line-height: 1.25 }
```

```css
.leading-snug { line-height: 1.375 }
```

```css
.leading-normal { line-height: 1.5 }
```

```css
.leading-relaxed { line-height: 1.625 }
```

```css
.leading-loose { line-height: 2 }
```

### list-style-image

```css
.list-image-none { list-style-image: none }
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
.text-COLOR { color: oklch(...) }
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
.decoration-COLOR { text-decoration-color: oklch(...) }
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
.decoration-0 { text-decoration-thickness: 0px }
```

```css
.decoration-1 { text-decoration-thickness: 1px }
```

```css
.decoration-2 { text-decoration-thickness: 2px }
```

```css
.decoration-4 { text-decoration-thickness: 4px }
```

```css
.decoration-8 { text-decoration-thickness: 8px }
```

### text-underline-offset

```css
.underline-offset-auto { text-underline-offset: auto }
```

```css
.underline-offset-0 { text-underline-offset: 0px }
```

```css
.underline-offset-1 { text-underline-offset: 1px }
```

```css
.underline-offset-2 { text-underline-offset: 2px }
```

```css
.underline-offset-4 { text-underline-offset: 4px }
```

```css
.underline-offset-8 { text-underline-offset: 8px }
```

### text-overflow

```css
.overflow-clip { text-overflow: clip }
```

```css
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap 
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
.indentSUFFIX { text-indent: ... }
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

### white-space

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0 
}
```

```css
.not-sr-only {
  position: static;
  width: auto;
  height: auto;
  padding: 0;
  margin: 0;
  overflow: visible;
  clip: auto;
  white-space: normal 
}
```

```css
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap 
}
```

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
.content-SUFFIX { content: ... }
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
.bg-COLOR { background-color: oklch(...) }
```

### background-image

```css
.bg-SUFFIX { background-image: ... }
```

```css
.bg-none { background-image: none }
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
.bg-bottom { background-position: bottom }
```

```css
.bg-center { background-position: center }
```

```css
.bg-left { background-position: left }
```

```css
.bg-left-bottom { background-position: left bottom }
```

```css
.bg-left-top { background-position: left top }
```

```css
.bg-right { background-position: right }
```

```css
.bg-right-bottom { background-position: right bottom }
```

```css
.bg-right-top { background-position: right top }
```

```css
.bg-top { background-position: top }
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

## Borders

### border-radius

```css
.rounded-xs { border-radius: 2px }
```

```css
.rounded-sm { border-radius: 4px }
```

```css
.rounded-md { border-radius: 6px }
```

```css
.rounded-lg { border-radius: 8px }
```

```css
.rounded-xl { border-radius: 12px }
```

```css
.rounded-2xl { border-radius: 16px }
```

```css
.rounded-3xl { border-radius: 24px }
```

```css
.rounded-full { border-radius: 50% }
```

```css
.rounded-none { border-radius: 0 }
```

```css
.rounded-tl-xs { border-top-left-radius: 2px }
```

```css
.rounded-tl-sm { border-top-left-radius: 4px }
```

```css
.rounded-tl-md { border-top-left-radius: 6px }
```

```css
.rounded-tl-lg { border-top-left-radius: 8px }
```

```css
.rounded-tl-xl { border-top-left-radius: 12px }
```

```css
.rounded-tl-2xl { border-top-left-radius: 16px }
```

```css
.rounded-tl-3xl { border-top-left-radius: 24px }
```

```css
.rounded-tl-full { border-top-left-radius: 50% }
```

```css
.rounded-tl-none { border-top-left-radius: 0 }
```

```css
.rounded-tr-xs { border-top-right-radius: 2px }
```

```css
.rounded-tr-sm { border-top-right-radius: 4px }
```

```css
.rounded-tr-md { border-top-right-radius: 6px }
```

```css
.rounded-tr-lg { border-top-right-radius: 8px }
```

```css
.rounded-tr-xl { border-top-right-radius: 12px }
```

```css
.rounded-tr-2xl { border-top-right-radius: 16px }
```

```css
.rounded-tr-3xl { border-top-right-radius: 24px }
```

```css
.rounded-tr-full { border-top-right-radius: 50% }
```

```css
.rounded-tr-none { border-top-right-radius: 0 }
```

```css
.rounded-bl-xs { border-bottom-left-radius: 2px }
```

```css
.rounded-bl-sm { border-bottom-left-radius: 4px }
```

```css
.rounded-bl-md { border-bottom-left-radius: 6px }
```

```css
.rounded-bl-lg { border-bottom-left-radius: 8px }
```

```css
.rounded-bl-xl { border-bottom-left-radius: 12px }
```

```css
.rounded-bl-2xl { border-bottom-left-radius: 16px }
```

```css
.rounded-bl-3xl { border-bottom-left-radius: 24px }
```

```css
.rounded-bl-full { border-bottom-left-radius: 50% }
```

```css
.rounded-bl-none { border-bottom-left-radius: 0 }
```

```css
.rounded-br-xs { border-bottom-right-radius: 2px }
```

```css
.rounded-br-sm { border-bottom-right-radius: 4px }
```

```css
.rounded-br-md { border-bottom-right-radius: 6px }
```

```css
.rounded-br-lg { border-bottom-right-radius: 8px }
```

```css
.rounded-br-xl { border-bottom-right-radius: 12px }
```

```css
.rounded-br-2xl { border-bottom-right-radius: 16px }
```

```css
.rounded-br-3xl { border-bottom-right-radius: 24px }
```

```css
.rounded-br-full { border-bottom-right-radius: 50% }
```

```css
.rounded-br-none { border-bottom-right-radius: 0 }
```

### border-width

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0 
}
```

```css
.border-0 { border-width: 0px }
```

```css
.border-1 { border-width: 1px }
```

```css
.border-2 { border-width: 2px }
```

```css
.border-4 { border-width: 4px }
```

```css
.border-8 { border-width: 8px }
```

```css
.border-t-0 { border-top-width: 0px }
```

```css
.border-t-1 { border-top-width: 1px }
```

```css
.border-t-2 { border-top-width: 2px }
```

```css
.border-t-4 { border-top-width: 4px }
```

```css
.border-t-8 { border-top-width: 8px }
```

```css
.border-b-0 { border-bottom-width: 0px }
```

```css
.border-b-1 { border-bottom-width: 1px }
```

```css
.border-b-2 { border-bottom-width: 2px }
```

```css
.border-b-4 { border-bottom-width: 4px }
```

```css
.border-b-8 { border-bottom-width: 8px }
```

```css
.border-l-0 { border-left-width: 0px }
```

```css
.border-l-1 { border-left-width: 1px }
```

```css
.border-l-2 { border-left-width: 2px }
```

```css
.border-l-4 { border-left-width: 4px }
```

```css
.border-l-8 { border-left-width: 8px }
```

```css
.border-r-0 { border-right-width: 0px }
```

```css
.border-r-1 { border-right-width: 1px }
```

```css
.border-r-2 { border-right-width: 2px }
```

```css
.border-r-4 { border-right-width: 4px }
```

```css
.border-r-8 { border-right-width: 8px }
```

```css
.border-s-0 { border-inline-start-width: 0px }
```

```css
.border-s-1 { border-inline-start-width: 1px }
```

```css
.border-s-2 { border-inline-start-width: 2px }
```

```css
.border-s-4 { border-inline-start-width: 4px }
```

```css
.border-s-8 { border-inline-start-width: 8px }
```

```css
.border-e-0 { border-inline-end-width: 0px }
```

```css
.border-e-1 { border-inline-end-width: 1px }
```

```css
.border-e-2 { border-inline-end-width: 2px }
```

```css
.border-e-4 { border-inline-end-width: 4px }
```

```css
.border-e-8 { border-inline-end-width: 8px }
```

```css
.border { border-width: 1px }
```

```css
.border-t { border-top-width: 1px }
```

```css
.border-b { border-bottom-width: 1px }
```

```css
.border-l { border-left-width: 1px }
```

```css
.border-r { border-right-width: 1px }
```

```css
.border-s { border-inline-start-width: 1px }
```

```css
.border-e { border-inline-end-width: 1px }
```

### border-color

```css
.border-COLOR { border-color: oklch(...) }
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
.outline-0 { outline-width: 0px }
```

```css
.outline-1 { outline-width: 1px }
```

```css
.outline-2 { outline-width: 2px }
```

```css
.outline-4 { outline-width: 4px }
```

```css
.outline-8 { outline-width: 8px }
```

### outline-color

```css
.outline-COLOR { outline-color: oklch(...) }
```

### outline-style

```css
.outline { outline-style: solid }
```

```css
.outline-none { outline-style: none }
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

### outline-offset

```css
.outline-offset-0 { outline-offset: 0px }
```

```css
.outline-offset-1 { outline-offset: 1px }
```

```css
.outline-offset-2 { outline-offset: 2px }
```

```css
.outline-offset-4 { outline-offset: 4px }
```

```css
.outline-offset-8 { outline-offset: 8px }
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

### opacity

```css
.opacity-0 { opacity: 0 }
```

```css
.opacity-5 { opacity: 0.05 }
```

```css
.opacity-10 { opacity: 0.1 }
```

```css
.opacity-20 { opacity: 0.2 }
```

```css
.opacity-25 { opacity: 0.25 }
```

```css
.opacity-30 { opacity: 0.3 }
```

```css
.opacity-40 { opacity: 0.4 }
```

```css
.opacity-50 { opacity: 0.5 }
```

```css
.opacity-60 { opacity: 0.6 }
```

```css
.opacity-70 { opacity: 0.7 }
```

```css
.opacity-75 { opacity: 0.75 }
```

```css
.opacity-80 { opacity: 0.8 }
```

```css
.opacity-90 { opacity: 0.9 }
```

```css
.opacity-95 { opacity: 0.95 }
```

```css
.opacity-100 { opacity: 1 }
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

## Filters

### filter

```css
.blur-xs { filter: blur(4px) }
```

```css
.blur-sm { filter: blur(8px) }
```

```css
.blur-md { filter: blur(12px) }
```

```css
.blur-lg { filter: blur(16px) }
```

```css
.blur-xl { filter: blur(24px) }
```

```css
.blur-2xl { filter: blur(40px) }
```

```css
.blur-3xl { filter: blur(64px) }
```

```css
.blur-none { filter: none }
```

```css
.brightness-0 { filter: brightness(0%) }
```

```css
.brightness-50 { filter: brightness(50%) }
```

```css
.brightness-75 { filter: brightness(75%) }
```

```css
.brightness-90 { filter: brightness(90%) }
```

```css
.brightness-95 { filter: brightness(95%) }
```

```css
.brightness-100 { filter: brightness(100%) }
```

```css
.brightness-105 { filter: brightness(105%) }
```

```css
.brightness-110 { filter: brightness(110%) }
```

```css
.brightness-125 { filter: brightness(125%) }
```

```css
.brightness-150 { filter: brightness(150%) }
```

```css
.brightness-200 { filter: brightness(200%) }
```

```css
.contrast-0 { filter: contrast(0%) }
```

```css
.contrast-50 { filter: contrast(50%) }
```

```css
.contrast-75 { filter: contrast(75%) }
```

```css
.contrast-100 { filter: contrast(100%) }
```

```css
.contrast-125 { filter: contrast(125%) }
```

```css
.contrast-150 { filter: contrast(150%) }
```

```css
.contrast-200 { filter: contrast(200%) }
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
.grayscale { filter: grayscale(100%) }
```

```css
.grayscale-0 { filter: grayscale(0) }
```

```css
.hue-rotate-0 { filter: hue-rotate(0deg) }
```

```css
.hue-rotate-15 { filter: hue-rotate(15deg) }
```

```css
.hue-rotate-30 { filter: hue-rotate(30deg) }
```

```css
.hue-rotate-60 { filter: hue-rotate(60deg) }
```

```css
.hue-rotate-90 { filter: hue-rotate(90deg) }
```

```css
.hue-rotate-180 { filter: hue-rotate(180deg) }
```

```css
.-hue-rotate-0 { filter: hue-rotate(-0deg) }
```

```css
.-hue-rotate-15 { filter: hue-rotate(-15deg) }
```

```css
.-hue-rotate-30 { filter: hue-rotate(-30deg) }
```

```css
.-hue-rotate-60 { filter: hue-rotate(-60deg) }
```

```css
.-hue-rotate-90 { filter: hue-rotate(-90deg) }
```

```css
.-hue-rotate-180 { filter: hue-rotate(-180deg) }
```

```css
.invert { filter: sepia(100%) }
```

```css
.invert-0 { filter: sepia(0) }
```

```css
.saturate-0 { filter: saturate(0%) }
```

```css
.saturate-50 { filter: saturate(50%) }
```

```css
.saturate-75 { filter: saturate(75%) }
```

```css
.saturate-100 { filter: saturate(100%) }
```

```css
.saturate-150 { filter: saturate(150%) }
```

```css
.saturate-200 { filter: saturate(200%) }
```

```css
.filter-none { filter: none }
```

### backdrop-filter

```css
.backdrop-blur-xs { backdrop-filter: blur(4px) }
```

```css
.backdrop-blur-sm { backdrop-filter: blur(8px) }
```

```css
.backdrop-blur-md { backdrop-filter: blur(12px) }
```

```css
.backdrop-blur-lg { backdrop-filter: blur(16px) }
```

```css
.backdrop-blur-xl { backdrop-filter: blur(24px) }
```

```css
.backdrop-blur-2xl { backdrop-filter: blur(40px) }
```

```css
.backdrop-blur-3xl { backdrop-filter: blur(64px) }
```

```css
.backdrop-blur-none { backdrop-filter: none }
```

```css
.backdrop-brightness-0 { backdrop-filter: brightness(0%) }
```

```css
.backdrop-brightness-50 { backdrop-filter: brightness(50%) }
```

```css
.backdrop-brightness-75 { backdrop-filter: brightness(75%) }
```

```css
.backdrop-brightness-90 { backdrop-filter: brightness(90%) }
```

```css
.backdrop-brightness-95 { backdrop-filter: brightness(95%) }
```

```css
.backdrop-brightness-100 { backdrop-filter: brightness(100%) }
```

```css
.backdrop-brightness-105 { backdrop-filter: brightness(105%) }
```

```css
.backdrop-brightness-110 { backdrop-filter: brightness(110%) }
```

```css
.backdrop-brightness-125 { backdrop-filter: brightness(125%) }
```

```css
.backdrop-brightness-150 { backdrop-filter: brightness(150%) }
```

```css
.backdrop-brightness-200 { backdrop-filter: brightness(200%) }
```

```css
.backdrop-contrast-0 { backdrop-filter: contrast(0%) }
```

```css
.backdrop-contrast-50 { backdrop-filter: contrast(50%) }
```

```css
.backdrop-contrast-75 { backdrop-filter: contrast(75%) }
```

```css
.backdrop-contrast-100 { backdrop-filter: contrast(100%) }
```

```css
.backdrop-contrast-125 { backdrop-filter: contrast(125%) }
```

```css
.backdrop-contrast-150 { backdrop-filter: contrast(150%) }
```

```css
.backdrop-contrast-200 { backdrop-filter: contrast(200%) }
```

```css
.backdrop-grayscale { backdrop-filter: grayscale(100%) }
```

```css
.backdrop-grayscale-0 { backdrop-filter: grayscale(0) }
```

```css
.backdrop-hue-rotate-0 { backdrop-filter: hue-rotate(0deg) }
```

```css
.backdrop-hue-rotate-15 { backdrop-filter: hue-rotate(15deg) }
```

```css
.backdrop-hue-rotate-30 { backdrop-filter: hue-rotate(30deg) }
```

```css
.backdrop-hue-rotate-60 { backdrop-filter: hue-rotate(60deg) }
```

```css
.backdrop-hue-rotate-90 { backdrop-filter: hue-rotate(90deg) }
```

```css
.backdrop-hue-rotate-180 { backdrop-filter: hue-rotate(180deg) }
```

```css
.backdrop--hue-rotate-0 { backdrop-filter: hue-rotate(-0deg) }
```

```css
.backdrop--hue-rotate-15 { backdrop-filter: hue-rotate(-15deg) }
```

```css
.backdrop--hue-rotate-30 { backdrop-filter: hue-rotate(-30deg) }
```

```css
.backdrop--hue-rotate-60 { backdrop-filter: hue-rotate(-60deg) }
```

```css
.backdrop--hue-rotate-90 { backdrop-filter: hue-rotate(-90deg) }
```

```css
.backdrop--hue-rotate-180 { backdrop-filter: hue-rotate(-180deg) }
```

```css
.backdrop-invert { backdrop-filter: sepia(100%) }
```

```css
.backdrop-invert-0 { backdrop-filter: sepia(0) }
```

```css
.backdrop-opacity-0 { backdrop-filter: opacity(0) }
```

```css
.backdrop-opacity-5 { backdrop-filter: opacity(0.05) }
```

```css
.backdrop-opacity-10 { backdrop-filter: opacity(0.1) }
```

```css
.backdrop-opacity-20 { backdrop-filter: opacity(0.2) }
```

```css
.backdrop-opacity-25 { backdrop-filter: opacity(0.25) }
```

```css
.backdrop-opacity-30 { backdrop-filter: opacity(0.3) }
```

```css
.backdrop-opacity-40 { backdrop-filter: opacity(0.4) }
```

```css
.backdrop-opacity-50 { backdrop-filter: opacity(0.5) }
```

```css
.backdrop-opacity-60 { backdrop-filter: opacity(0.6) }
```

```css
.backdrop-opacity-70 { backdrop-filter: opacity(0.7) }
```

```css
.backdrop-opacity-75 { backdrop-filter: opacity(0.75) }
```

```css
.backdrop-opacity-80 { backdrop-filter: opacity(0.8) }
```

```css
.backdrop-opacity-90 { backdrop-filter: opacity(0.9) }
```

```css
.backdrop-opacity-95 { backdrop-filter: opacity(0.95) }
```

```css
.backdrop-opacity-100 { backdrop-filter: opacity(1) }
```

```css
.backdrop-filter-none { backdrop-filter: none }
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
.border-spacing-SUFFIX { border-spacing: ... }
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
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-duration: 250ms 
}
```

```css
.transition-all {
  transition-property: all;
  transition-duration: 250ms 
}
```

```css
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-duration: 250ms 
}
```

```css
.transition-opacity {
  transition-property: opacity;
  transition-duration: 250ms 
}
```

```css
.transition-shadow {
  transition-property: box-shadow;
  transition-duration: 250ms 
}
```

```css
.transition-transform {
  transition-property: transform;
  transition-duration: 250ms 
}
```

```css
.transition-none { transition-property: none }
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
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-duration: 250ms 
}
```

```css
.transition-all {
  transition-property: all;
  transition-duration: 250ms 
}
```

```css
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-duration: 250ms 
}
```

```css
.transition-opacity {
  transition-property: opacity;
  transition-duration: 250ms 
}
```

```css
.transition-shadow {
  transition-property: box-shadow;
  transition-duration: 250ms 
}
```

```css
.transition-transform {
  transition-property: transform;
  transition-duration: 250ms 
}
```

```css
.duration-initial { transition-duration: initial }
```

```css
.duration-75 { transition-duration: 75ms }
```

```css
.duration-100 { transition-duration: 100ms }
```

```css
.duration-150 { transition-duration: 150ms }
```

```css
.duration-200 { transition-duration: 200ms }
```

```css
.duration-300 { transition-duration: 300ms }
```

```css
.duration-500 { transition-duration: 500ms }
```

```css
.duration-700 { transition-duration: 700ms }
```

```css
.duration-1000 { transition-duration: 1000ms }
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

## Transforms

### backface-visibility

```css
.blackface-visible { backface-visibility: visible }
```

```css
.blackface-hidden { backface-visibility: hidden }
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

### perspective-origin

```css
.perspective-origin-center { perspective-origin: center }
```

```css
.perspective-origin-top { perspective-origin: top }
```

```css
.perspective-origin-top-right { perspective-origin: top right }
```

```css
.perspective-origin-right { perspective-origin: right }
```

```css
.perspective-origin-bottom-right { perspective-origin: bottom right }
```

```css
.perspective-origin-bottom { perspective-origin: bottom }
```

```css
.perspective-origin-bottom-left { perspective-origin: bottom left }
```

```css
.perspective-origin-left { perspective-origin: left }
```

```css
.perspective-origin-top-left { perspective-origin: top left }
```

### rotate

```css
.rotate-0 { rotate: 0deg }
```

```css
.rotate-1 { rotate: 1deg }
```

```css
.rotate-2 { rotate: 2deg }
```

```css
.rotate-3 { rotate: 3deg }
```

```css
.rotate-6 { rotate: 6deg }
```

```css
.rotate-12 { rotate: 12deg }
```

```css
.rotate-45 { rotate: 45deg }
```

```css
.rotate-90 { rotate: 90deg }
```

```css
.rotate-180 { rotate: 180deg }
```

```css
.-rotate-0 { rotate: -0deg }
```

```css
.-rotate-1 { rotate: -1deg }
```

```css
.-rotate-2 { rotate: -2deg }
```

```css
.-rotate-3 { rotate: -3deg }
```

```css
.-rotate-6 { rotate: -6deg }
```

```css
.-rotate-12 { rotate: -12deg }
```

```css
.-rotate-45 { rotate: -45deg }
```

```css
.-rotate-90 { rotate: -90deg }
```

```css
.-rotate-180 { rotate: -180deg }
```

### transform

```css
.scale-0 { transform: scale(0) }
```

```css
.scale-50 { transform: scale(0.5) }
```

```css
.scale-75 { transform: scale(0.75) }
```

```css
.scale-90 { transform: scale(0.9) }
```

```css
.scale-95 { transform: scale(0.95) }
```

```css
.scale-100 { transform: scale(1) }
```

```css
.scale-105 { transform: scale(1.05) }
```

```css
.scale-110 { transform: scale(1.1) }
```

```css
.scale-125 { transform: scale(1.25) }
```

```css
.scale-150 { transform: scale(1.5) }
```

```css
.scale-x-0 { transform: scaleX(0) }
```

```css
.scale-x-50 { transform: scaleX(0.5) }
```

```css
.scale-x-75 { transform: scaleX(0.75) }
```

```css
.scale-x-90 { transform: scaleX(0.9) }
```

```css
.scale-x-95 { transform: scaleX(0.95) }
```

```css
.scale-x-100 { transform: scaleX(1) }
```

```css
.scale-x-105 { transform: scaleX(1.05) }
```

```css
.scale-x-110 { transform: scaleX(1.1) }
```

```css
.scale-x-125 { transform: scaleX(1.25) }
```

```css
.scale-x-150 { transform: scaleX(1.5) }
```

```css
.scale-y-0 { transform: scaleY(0) }
```

```css
.scale-y-50 { transform: scaleY(0.5) }
```

```css
.scale-y-75 { transform: scaleY(0.75) }
```

```css
.scale-y-90 { transform: scaleY(0.9) }
```

```css
.scale-y-95 { transform: scaleY(0.95) }
```

```css
.scale-y-100 { transform: scaleY(1) }
```

```css
.scale-y-105 { transform: scaleY(1.05) }
```

```css
.scale-y-110 { transform: scaleY(1.1) }
```

```css
.scale-y-125 { transform: scaleY(1.25) }
```

```css
.scale-y-150 { transform: scaleY(1.5) }
```

```css
.skew-x-0 { transform: skewX(0deg) }
```

```css
.skew-x-1 { transform: skewX(1deg) }
```

```css
.skew-x-2 { transform: skewX(2deg) }
```

```css
.skew-x-3 { transform: skewX(3deg) }
```

```css
.skew-x-6 { transform: skewX(6deg) }
```

```css
.skew-x-12 { transform: skewX(12deg) }
```

```css
.skew-y-0 { transform: skewY(0deg) }
```

```css
.skew-y-1 { transform: skewY(1deg) }
```

```css
.skew-y-2 { transform: skewY(2deg) }
```

```css
.skew-y-3 { transform: skewY(3deg) }
```

```css
.skew-y-6 { transform: skewY(6deg) }
```

```css
.skew-y-12 { transform: skewY(12deg) }
```

```css
.translate-x-SUFFIX { transform: translateX(...) }
```

```css
.translate-y-SUFFIX { transform: translateY(...) }
```

### transform-origin

```css
.origin-center { transform-origin: center }
```

```css
.origin-top { transform-origin: top }
```

```css
.origin-top-right { transform-origin: top right }
```

```css
.origin-right { transform-origin: right }
```

```css
.origin-bottom-right { transform-origin: bottom right }
```

```css
.origin-bottom { transform-origin: bottom }
```

```css
.origin-bottom-left { transform-origin: bottom left }
```

```css
.origin-left { transform-origin: left }
```

```css
.origin-top-left { transform-origin: top left }
```

### transform-style

```css
.transform-3d { transform-style: preserve-3d }
```

```css
.transform-flat { transform-style: flat }
```

## Interactivity

### accent-color

```css
.accent-COLOR { accent-color: oklch(...) }
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
.caret-COLOR { caret-color: oklch(...) }
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
.cursor-pointer { cursor: pointer }
```

```css
.cursor-wait { cursor: wait }
```

```css
.cursor-text { cursor: text }
```

```css
.cursor-move { cursor: move }
```

```css
.cursor-not-allowed { cursor: not-allowed }
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
.scroll-m-SUFFIX { scroll-margin: ... }
```

### scroll-padding

```css
.scroll-p-SUFFIX { scroll-padding: ... }
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
.snap-stop-normal { scroll-snap-stop: normal }
```

```css
.snap-stop-always { scroll-snap-stop: always }
```

### scroll-snap-type

```css
.snap-none { scroll-snap-type: none }
```

```css
.snap-x { scroll-snap-type: x mandatory }
```

```css
.snap-y { scroll-snap-type: y proximity }
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
.select-none { user-select: none }
```

```css
.select-text { user-select: text }
```

```css
.select-all { user-select: all }
```

```css
.select-auto { user-select: auto }
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

## SVG

### fill

```css
.fill-COLOR { fill: oklch(...) }
```

### stroke

```css
.stroke-COLOR { stroke: oklch(...) }
```

### stroke-width

```css
.stroke-0 { stroke-width: 0 }
```

```css
.stroke-1 { stroke-width: 1 }
```

```css
.stroke-2 { stroke-width: 2 }
```

## Accessibility

### forced-color-adjust

```css
.forced-color-adjust-auto { forced-color-adjust: auto }
```

```css
.forced-color-adjust-none { forced-color-adjust: none }
```
