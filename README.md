# TWCSS

Fast minimalist utility-first CSS runtime inspired by Tailwind and Twind.

## Motivation

Tailwind is awesome, but it requires a build setup. Twind exists, but the project appears to be dead.

## Features

- **Zero setup, zero dependencies.** One import does it all. It just works.
- **Library agnostic.** Works with vanilla, works with any modern framework. Works with Shadow DOM too.
- **Lightweight and fast.** Minified and gzipped is only ~11 kB.

## Usage

In Node, Deno or Bun do:
```js
import 'twcss'
```

Then, somewhere in the markup:
```html
<div tw="p-4 bg-indigo-800 text-slate-50 rounded-xl">Hello, world!</div>
```

Once imported, TWCSS detects DOM changes with a mutation observer and generates styles on the fly via constructable stylesheets. CSS reset is included.

> [!NOTE]
> TWCSS uses `tw` attribute to detect changes. All elements with `tw` attribute and without `class` attribute are hidden by default in order to prevent any unwanted layout shift / repaint. Once `tw` attribute change is detected, all new styles are generated and the `class` attribute is set accordingly.
> For this feature to work properly, TWCSS needs to be loaded before the page content is added.

## Extensibility

You can define your own utility classes, colors, animations and media queries with `extend()` function. Overriding existing defaults is also possible.

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
  // Keyframes defined here can be used in classes object.
  keyframes: {
    'spin': 'to { transform: rotate(360deg) }'
  },
  // Custom media queries.
  queries: {
    'xl': '@media screen and (min-width: 1234px)'
  },
})
```

## Compatibility

TWCSS aims at compatibility with Tailwind 4. This is not always possible without compromising on performance. For this reason, certain features are not supported. Please see the [REFERENCE.md](REFERENCE.md) for the complete list.

### Changes

- Default media queries are `sm`, `md` and `lg`. Feel free to extend them.
- Default animations serve the following use cases:
  - `expand` for showing menus and opening accordions,
  - `toast` for popping a notification up from the bottom,
  - `fade` for adding elements to the page in a visually pleasing manner.
- Most transforms use predefined values just like in Tailwind 3.
- Custom shadow classes are currently not supported, i.e. `inset-shadow-*`, `ring-*` and `inset-ring-*`.
- Shadow color is currently not supported; shadows are always black.
- Background gradient classes (`bg-linear-*`, `bg-conic-*`, `from-`, `via-` and `to-`) are currently not supported. Use `bg-[]` instead.
