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
body { overflow-y: scroll }
svg { display: block }
::placeholder { color: currentColor; opacity: 0.8 }
[tw]:not([class]) { display: none }
```

### States

Supported prefix states are `hover`, `focus`, `focus-visible` and `active`.

### Media queries

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

### Keyframes

```css
/* expand */
from { opacity: 0; transform: translateY(-8px) } to { opacity: 1 }
```

```css
/* toast */
from { opacity: 0; transform: translateY(48px) } to { opacity: 1 }
```

```css
/* fade */
0% { opacity: 0 } 100% { opacity: 1 }
```

### Colors

In addition to the colors below, `black`, `white`, `transparent`, `current` and `inherit` are also supported.

|   | 50|100|200|300|400|500|600|700|800|900|950|
|---|---|---|---|---|---|---|---|---|---|---|---|
**red**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.971 0.013 17.38);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.936 0.032 17.717);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.885 0.062 18.334);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.808 0.114 19.571);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.704 0.191 22.216);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.637 0.237 25.331);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.577 0.245 27.325);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.505 0.213 27.518);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.444 0.177 26.899);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.396 0.141 25.723);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.258 0.092 26.042);"></div>
**orange**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.98 0.016 73.684);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.954 0.038 75.164);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.901 0.076 70.697);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.837 0.128 66.29);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.75 0.183 55.934);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.705 0.213 47.604);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.646 0.222 41.116);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.553 0.195 38.402);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.47 0.157 37.304);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.408 0.123 38.172);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.266 0.079 36.259);"></div>
**amber**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.987 0.022 95.277);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.962 0.059 95.617);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.924 0.12 95.746);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.879 0.169 91.605);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.828 0.189 84.429);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.769 0.188 70.08);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.666 0.179 58.318);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.555 0.163 48.998);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.473 0.137 46.201);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.414 0.112 45.904);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.279 0.077 45.635);"></div>
**yellow**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.987 0.026 102.212);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.973 0.071 103.193);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.945 0.129 101.54);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.905 0.182 98.111);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.852 0.199 91.936);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.795 0.184 86.047);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.681 0.162 75.834);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.554 0.135 66.442);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.476 0.114 61.907);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.421 0.095 57.708);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.286 0.066 53.813);"></div>
**lime**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.986 0.031 120.757);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.967 0.067 122.328);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.938 0.127 124.321);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.897 0.196 126.665);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.841 0.238 128.85);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.768 0.233 130.85);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.648 0.2 131.684);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.532 0.157 131.589);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.453 0.124 130.933);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.405 0.101 131.063);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.274 0.072 132.109);"></div>
**green**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.982 0.018 155.826);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.962 0.044 156.743);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.925 0.084 155.995);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.871 0.15 154.449);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.792 0.209 151.711);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.723 0.219 149.579);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.627 0.194 149.214);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.527 0.154 150.069);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.448 0.119 151.328);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.393 0.095 152.535);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.266 0.065 152.934);"></div>
**emerald**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.979 0.021 166.113);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.95 0.052 163.051);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.905 0.093 164.15);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.845 0.143 164.978);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.765 0.177 163.223);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.696 0.17 162.48);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.596 0.145 163.225);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.508 0.118 165.612);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.432 0.095 166.913);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.378 0.077 168.94);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.262 0.051 172.552);"></div>
**teal**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.984 0.014 180.72);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.953 0.051 180.801);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.91 0.096 180.426);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.855 0.138 181.071);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.777 0.152 181.912);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.704 0.14 182.503);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.6 0.118 184.704);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.511 0.096 186.391);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.437 0.078 188.216);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.386 0.063 188.416);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.277 0.046 192.524);"></div>
**cyan**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.984 0.019 200.873);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.956 0.045 203.388);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.917 0.08 205.041);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.865 0.127 207.078);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.789 0.154 211.53);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.715 0.143 215.221);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.609 0.126 221.723);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.52 0.105 223.128);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.45 0.085 224.283);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.398 0.07 227.392);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.302 0.056 229.695);"></div>
**sky**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.977 0.013 236.62);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.951 0.026 236.824);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.901 0.058 230.902);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.828 0.111 230.318);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.746 0.16 232.661);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.685 0.169 237.323);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.588 0.158 241.966);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.5 0.134 242.749);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.443 0.11 240.79);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.391 0.09 240.876);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.293 0.066 243.157);"></div>
**blue**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.97 0.014 254.604);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.932 0.032 255.585);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.882 0.059 254.128);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.809 0.105 251.813);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.707 0.165 254.624);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.623 0.214 259.815);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.546 0.245 262.881);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.488 0.243 264.376);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.424 0.199 265.638);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.379 0.146 265.522);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.282 0.091 267.935);"></div>
**indigo**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.962 0.018 272.314);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.93 0.034 272.788);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.87 0.065 274.039);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.785 0.115 274.713);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.673 0.182 276.935);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.585 0.233 277.117);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.511 0.262 276.966);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.457 0.24 277.023);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.398 0.195 277.366);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.359 0.144 278.697);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.257 0.09 281.288);"></div>
**violet**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.969 0.016 293.756);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.943 0.029 294.588);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.894 0.057 293.283);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.811 0.111 293.571);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.702 0.183 293.541);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.606 0.25 292.717);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.541 0.281 293.009);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.491 0.27 292.581);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.432 0.232 292.759);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.38 0.189 293.745);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.283 0.141 291.089);"></div>
**purple**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.977 0.014 308.299);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.946 0.033 307.174);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.902 0.063 306.703);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.827 0.119 306.383);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.714 0.203 305.504);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.627 0.265 303.9);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.558 0.288 302.321);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.496 0.265 301.924);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.438 0.218 303.724);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.381 0.176 304.987);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.291 0.149 302.717);"></div>
**fuchsia**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.977 0.017 320.058);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.952 0.037 318.852);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.903 0.076 319.62);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.833 0.145 321.434);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.74 0.238 322.16);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.667 0.295 322.15);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.591 0.293 322.896);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.518 0.253 323.949);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.452 0.211 324.591);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.401 0.17 325.612);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.293 0.136 325.661);"></div>
**pink**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.971 0.014 343.198);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.948 0.028 342.258);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.899 0.061 343.231);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.823 0.12 346.018);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.718 0.202 349.761);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.656 0.241 354.308);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.592 0.249 0.584);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.525 0.223 3.958);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.459 0.187 3.815);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.408 0.153 2.432);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.284 0.109 3.907);"></div>
**rose**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.969 0.015 12.422);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.941 0.03 12.58);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.892 0.058 10.001);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.81 0.117 11.638);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.712 0.194 13.428);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.645 0.246 16.439);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.586 0.253 17.585);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.514 0.222 16.935);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.455 0.188 13.697);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.41 0.159 10.272);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.271 0.105 12.094);"></div>
**slate**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.984 0.003 247.858);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.968 0.007 247.896);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.929 0.013 255.508);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.869 0.022 252.894);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.704 0.04 256.788);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.554 0.046 257.417);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.446 0.043 257.281);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.372 0.044 257.287);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.279 0.041 260.031);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.208 0.042 265.755);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.129 0.042 264.695);"></div>
**gray**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.985 0.002 247.839);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.967 0.003 264.542);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.928 0.006 264.531);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.872 0.01 258.338);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.707 0.022 261.325);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.551 0.027 264.364);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.446 0.03 256.802);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.373 0.034 259.733);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.278 0.033 256.848);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.21 0.034 264.665);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.13 0.028 261.692);"></div>
**zinc**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.985 0 0);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.967 0.001 286.375);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.92 0.004 286.32);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.871 0.006 286.286);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.705 0.015 286.067);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.552 0.016 285.938);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.442 0.017 285.786);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.37 0.013 285.805);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.274 0.006 286.033);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.21 0.006 285.885);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.141 0.005 285.823);"></div>
**neutral**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.985 0 0);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.97 0 0);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.922 0 0);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.87 0 0);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.708 0 0);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.556 0 0);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.439 0 0);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.371 0 0);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.269 0 0);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.205 0 0);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.145 0 0);"></div>
**stone**|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.985 0.001 106.423);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.97 0.001 106.424);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.923 0.003 48.717);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.869 0.005 56.366);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.709 0.01 56.259);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.553 0.013 58.071);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.444 0.011 73.639);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.374 0.01 67.558);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.268 0.007 34.298);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.216 0.006 56.043);"></div>|<div style="width: 32px; height: 32px; border-radius: 2px; background-color: oklch(0.147 0.004 49.25);"></div>
### Sizes

In addition to the sizes below, a custom value can be specified via `-[<value>]` suffix.

|Name|Value|
|----|-----|
|**auto**|auto|
|**full**|100%|
|**min**|min-content|
|**max**|max-content|
|**fit**|fit-content|
|**px**|1px|
|**0.5**|2px|
|**0**|0px|
|**1**|4px|
|**2**|8px|
|**3**|12px|
|**4**|16px|
|**5**|20px|
|**6**|24px|
|**7**|28px|
|**8**|32px|
|**9**|36px|
|**10**|40px|
|**11**|44px|
|**12**|48px|
|**14**|56px|
|**16**|64px|
|**20**|80px|
|**24**|96px|
|**28**|112px|
|**32**|128px|
|**36**|144px|
|**40**|160px|
|**44**|176px|
|**48**|192px|
|**52**|208px|
|**56**|224px|
|**60**|240px|
|**64**|256px|
|**72**|288px|
|**80**|320px|
|**96**|384px|
|**1/2**|50%|
|**1/3**|33.33%|
|**2/3**|66.67%|
|**1/4**|25%|
|**3/4**|75%|
|**1/5**|20%|
|**2/5**|40%|
|**3/5**|60%|
|**4/5**|80%|

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
.break-after-all { break-after: all }
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
.break-before-all { break-after: all }
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
.break-after-all { break-after: all }
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
.break-before-all { break-after: all }
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
.break-after-all { break-after: all }
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
.break-before-all { break-after: all }
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
.top-SIZE { top: SIZE }
```

```css
.right-SIZE { right: SIZE }
```

```css
.bottom-SIZE { bottom: SIZE }
```

```css
.left-SIZE { left: SIZE }
```

```css
.start-SIZE { inset-inline-start: SIZE }
```

```css
.end-SIZE { inset-inline-end: SIZE }
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
.basis-SIZE { flex-basis: SIZE }
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
.flex-1 { flex: 1 1 0% }
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
.col-start-auto { grid-column-start: auto }
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
.row-start-auto { grid-row-start: auto }
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
.gap-SIZE { gap: SIZE }
```

```css
.gap-x-SIZE { column-gap: SIZE }
```

```css
.gap-y-SIZE { row-gap: SIZE }
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
.justify-baseline { justify-content: baseline }
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
.items-center { align-items: center }
```

```css
.items-baseline { align-items: baseline }
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
.p-SIZE { padding: SIZE }
```

```css
.px-SIZE { padding-inline: SIZE }
```

```css
.py-SIZE { padding-block: SIZE }
```

```css
.pt-SIZE { padding-top: SIZE }
```

```css
.pr-SIZE { padding-right: SIZE }
```

```css
.pb-SIZE { padding-bottom: SIZE }
```

```css
.pl-SIZE { padding-left: SIZE }
```

```css
.ps-SIZE { padding-inline-start: SIZE }
```

```css
.pe-SIZE { padding-inline-end: SIZE }
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
.m-SIZE { margin: SIZE }
```

```css
.mx-SIZE { margin-inline: SIZE }
```

```css
.my-SIZE { margin-block: SIZE }
```

```css
.mt-SIZE { margin-top: SIZE }
```

```css
.mr-SIZE { margin-right: SIZE }
```

```css
.ml-SIZE { margin-left: SIZE }
```

```css
.mb-SIZE { margin-bottom: SIZE }
```

```css
.ms-SIZE { margin-inline-start: SIZE }
```

```css
.me-SIZE { margin-inline-end: SIZE }
```

```css
.space-x-SIZE > :not(:last-child) { margin-inline-end: SIZE }
```

```css
.space-y-SIZE > :not(:last-child) { margin-bottom: SIZE }
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
.w-SIZE { width: SIZE }
```

### min-width

```css
.min-w-SIZE { min-width: SIZE }
```

### max-width

```css
.max-w-SIZE { max-width: SIZE }
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
.h-SIZE { height: SIZE }
```

### min-height

```css
.min-h-SIZE { min-height: SIZE }
```

### max-height

```css
.max-h-SIZE { max-height: SIZE }
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
.text-COLOR { color: COLOR }
```

### text-decoration-line

Currently unsupported.

### text-decoration-color

```css
.decoration-COLOR { text-decoration-color: COLOR }
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
.indent-SIZE { text-indent: SIZE }
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
.break-normal {
  overflow-wrap: normal;
  word-break: normal 
}
```

```css
.break-all { word-break: break-all }
```

```css
.break-keep { word-break: keep-all }
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

Currently unsupported.

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
.bg-COLOR { background-color: COLOR }
```

### background-image

Currently unsupported.

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
.border { border-width: 1px }
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
.border-t { border-top-width: 1px }
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
.border-b { border-bottom-width: 1px }
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
.border-l { border-left-width: 1px }
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
.border-r { border-right-width: 1px }
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
.border-s { border-inline-start-width: 1px }
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
.border-e { border-inline-end-width: 1px }
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

### border-color

```css
.border-COLOR { border-color: COLOR }
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
.outline-COLOR { outline-color: COLOR }
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
.shadow-none { box-shadow: 0 0 #0000 }
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

Currently unsupported.

### background-blend-mode

Currently unsupported.

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
.drop-shadow-none { filter: drop-shadow(0 0 #0000) }
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
.backdrop-drop-shadow-xs { backdrop-filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05)) }
```

```css
.backdrop-drop-shadow-sm { backdrop-filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.15)) }
```

```css
.backdrop-drop-shadow-md { backdrop-filter: drop-shadow(0 3px 3px rgb(0 0 0 / 0.12)) }
```

```css
.backdrop-drop-shadow-lg { backdrop-filter: drop-shadow(0 4px 4px rgb(0 0 0 / 0.15)) }
```

```css
.backdrop-drop-shadow-xl { backdrop-filter: drop-shadow(0 9px 7px rgb(0 0 0 / 0.1)) }
```

```css
.backdrop-drop-shadow-2xl { backdrop-filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15)) }
```

```css
.backdrop-drop-shadow-none { backdrop-filter: drop-shadow(0 0 #0000) }
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
.backdrop-filter-none { backdrop-filter: none }
```

## Tables

### border-collapse

```css
.border-collapse { border-collapse: collapse }
```

### border-spacing

```css
.border-spacing-SIZE { border-spacing: SIZE }
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
  transition-duration: 150ms 
}
```

```css
.transition-all {
  transition-property: all;
  transition-duration: 150ms 
}
```

```css
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-duration: 150ms 
}
```

```css
.transition-opacity {
  transition-property: opacity;
  transition-duration: 150ms 
}
```

```css
.transition-shadow {
  transition-property: box-shadow;
  transition-duration: 150ms 
}
```

```css
.transition-transform {
  transition-property: transform;
  transition-duration: 150ms 
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
  transition-duration: 150ms 
}
```

```css
.transition-all {
  transition-property: all;
  transition-duration: 150ms 
}
```

```css
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-duration: 150ms 
}
```

```css
.transition-opacity {
  transition-property: opacity;
  transition-duration: 150ms 
}
```

```css
.transition-shadow {
  transition-property: box-shadow;
  transition-duration: 150ms 
}
```

```css
.transition-transform {
  transition-property: transform;
  transition-duration: 150ms 
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

Currently unsupported.

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

### rotate

```css
.rotate-90 { rotate: 90deg }
```

```css
.rotate-180 { rotate: 180deg }
```

```css
.rotate-270 { rotate: 270deg }
```

### scale

Currently unsupported.

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

### transform-origin

```css
.origin-center { transform-origin: center }
```

```css
.origin-top { transform-origin: top }
```

```css
.origin-top-right { transform-origin: top-right }
```

```css
.origin-right { transform-origin: right }
```

```css
.origin-bottom-right { transform-origin: bottom-right }
```

```css
.origin-bottom { transform-origin: bottom }
```

```css
.origin-bottom-left { transform-origin: bottom-left }
```

```css
.origin-left { transform-origin: left }
```

```css
.origin-top-left { transform-origin: top-left }
```

### transform-style

```css
.transform-3d { transform-style: preserve-3d }
```

```css
.transform-flat { transform-style: flat }
```

### translate

Currently unsupported.

## Interactivity

### accent-color

```css
.accent-COLOR { accent-color: COLOR }
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
.caret-COLOR { caret-color: COLOR }
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
.field-sizing-auto { field-sizing: auto }
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
.scroll-m-SIZE { scroll-margin: SIZE }
```

### scroll-padding

```css
.scroll-p-SIZE { scroll-padding: SIZE }
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
.fill-COLOR { fill: COLOR }
```

### stroke

```css
.stroke-COLOR { stroke: COLOR }
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
