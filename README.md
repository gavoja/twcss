# TWCSS

A fast minimalist utility-first CSS runtime inspired by Tailwind and Twind.

## Motivation

Tailwind is awesome, but it requires a build setup. Twind exists, but the project appears to be dead.

## Features

- **Zero setup, zero dependencies.** One import does it all. It just works.
- **Library agnostic.** Works with vanilla JavaScript and any modern framework. Works with Shadow DOM too.
- **Lightweight and fast.** Minified and gzipped, it's less than 12 kB.

## Usage

Node, Deno, Bun:

```js
import 'twcss'
```

Directly in browser:

```html
<script src="https://cdn.jsdelivr.net/npm/twcss/target/twcss.min.js"></script>
```

Then, somewhere in the markup:

```html
<div tw="p-4 bg-indigo-800 text-slate-50 rounded-xl">Hello, world!</div>
```

React example:

```jsx
function Wrapper ({ children, isRounded }) {
  // Supports array syntax for convenient conditional styling.
  return (
    <div tw={['p-4 bg-indigo-800 text-slate-50', isRounded && 'rounded-xl']}>
      {children}
    </div>
  )
}
```

Once imported, TWCSS detects DOM changes with a mutation observer and generates styles on the fly via constructable stylesheets. Simple CSS preflight is included.

> [!NOTE]
> TWCSS uses the `tw` attribute to detect changes. All elements with a `tw` attribute and without a `class` attribute are hidden by default to prevent any unwanted layout shift or repaint. Once a `tw` attribute change is detected, all new styles are generated and the `class` attribute is set accordingly.
> For this feature to work properly, TWCSS needs to be loaded before the page content is added.

## Extensibility

You can define your own utility classes, colors, animations, and media queries with the `extend()` function. Overriding existing defaults is also possible.

```js
import { extend } from 'twcss'

extend({
  // Keys are class names and values are blobs of CSS.
  classes: {
    // The below will yield:
    // .foo { width: 123px; height: 123px }
    'foo': '{ width: 123px; height: 123px }',
    // The below will yield:
    // .hide-last-child > :last-child { display: none }
    'hide-last-child': '> :last-child { display: none }',
    // You can use custom keyframes here.
    'animate-spin': '{ animate: spin 1s linear infinite }'
  },
  // Colors use OKLCH color space.
  colors: {
    // All color properties will be able to use this custom color, e.g. outline-octarine/50
    'octarine': '0.9 0.4 20'
  },
  // Keyframes defined here can be used in the classes object.
  keyframes: {
    'spin': 'to { transform: rotate(360deg) }'
  },
  // Custom media queries.
  queries: {
    'xl': '@media screen and (min-width: 1234px)'
  },
})
```

> [!WARNING]
> Custom queries must not clash with states or pseudo element.

## The `add` function

The `add` function works similarly to Twind's `tw` function by generating styles directly when called and adding them to the selected root (`document` by default). It could be useful when migrating from Twind to TWCSS. Note that the `add` function and `tw` attribute should never be used on the same element, since the latter always replaces the value of `class` attribute.

Signature:

```ts
function add (className: String, root: Document | ShadowRoot = document)
```

Usage:

```jsx
import { add as tw } from 'twcss'

function Button ({ children }) {
  return <button className="{tw('p-4 rounded-xl')}">{children}</button>
}
```

## Compatibility

TWCSS aims at compatibility with Tailwind 4. This is not always possible without compromising on performance. For this reason, certain features are not supported. Please see the [REFERENCE.md](REFERENCE.md) for the complete list.

Currently unsupported Tailwind 4 features:

- [Styling based on parent state](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-the-descendants-of-a-group) via `group-` prefix.
- [Styling based on sibling state](https://tailwindcss.com/docs/hover-focus-and-other-states#styling-based-on-sibling-state) via `peer-` prefix.
- [Composite text size](https://tailwindcss.com/docs/line-height) - `text-<size>/<number>`. Font size and line height must be set separately.
- [Background gradients](https://tailwindcss.com/docs/background-image#adding-a-linear-gradient) - `bg-linear-`, `bg-radial-`, `bg-conic`. Use `bg-[]` instead.
- [Composite border radius](https://tailwindcss.com/docs/border-radius) - `rounded-s-`, `rounded-e-`, `rounded-t-`, `rounded-r-`, `rounded-b-`, `rounded-l-`.
- [Border divisions](https://tailwindcss.com/docs/border-style) - `divide-`.
- [Hidden outline](https://tailwindcss.com/docs/outline-style) - `outline-hidden`. Use `outline-transparent` to hide the outline instead.
- [Shadow colors](https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color); shadows are always black.
- [Custom shadows](https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow) - `inset-`, `ring-`, `inset-ring-`. Use `bg-[]` instead.
- [Mask image gradients](https://tailwindcss.com/docs/mask-image); use `mask-[]` instead.

Changes:

- Default media queries for viewports are `sm`, `md` and `lg`. Feel free to extend them.
- Default animations serve the following use cases:
  - `expand` for showing menus and opening accordions,
  - `toast` for popping a notification up from the bottom,
  - `fade` for adding elements to the page in a visually pleasing manner.
- [:has()](https://tailwindcss.com/docs/hover-focus-and-other-states#has) works only with states via `has-` prefix (e.g. `has-checked`).
- [:not()](https://tailwindcss.com/docs/hover-focus-and-other-states#not) works only with states via `not-` prefix (e.g. `not-focus`).
- **New:** `scrollbar-gutter` support via `scrollbar-stable`, `scrollbar-auto`, `scrollbar-both` classes (currently not supported in Tailwind).
