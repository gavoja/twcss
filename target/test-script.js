(() => {
  // src/tinywind.js
  var SIZES = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64, 72, 80, 96];
  var TWELVE = SIZES.slice(1, 13);
  var WIDTHS = [0, 1, 2, 4, 8];
  var OPACITIES = [0, 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 95, 100];
  var DURATIONS = [75, 100, 150, 200, 300, 500, 700, 1e3];
  var SCALES = [0, 50, 75, 90, 95, 100, 105, 110, 125, 150];
  var SKEWS = [0, 1, 2, 3, 6, 12];
  var ORIGINS = ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left"];
  var STATES = ["hover", "focus", "focus-visible", "active"];
  var HIGH_PRIORITY_RULES = ["col-start", "row-start", "hidden", "-none"];
  var PIXEL_STEP = 4;
  var ANIM_TIME = "150ms";
  var SIZES_FRAC = [
    ["1/2", 1 / 2],
    ["1/3", 1 / 3],
    ["2/3", 2 / 3],
    ["1/4", 1 / 4],
    ["3/4", 3 / 4],
    ["1/5", 1 / 5],
    ["2/5", 2 / 5],
    ["3/5", 3 / 5],
    ["4/5", 4 / 5]
  ];
  var RADII = [
    ["-xs", "2px"],
    ["-sm", "4px"],
    ["-md", "6px"],
    ["-lg", "8px"],
    ["-xl", "12px"],
    ["-2xl", "16px"],
    ["-3xl", "24px"],
    ["-full", "50%"],
    ["-none", 0]
  ];
  var COLORS = /* @__PURE__ */ new Map([
    ["red-50", "0.971 0.013 17.38"],
    ["red-100", "0.936 0.032 17.717"],
    ["red-200", "0.885 0.062 18.334"],
    ["red-300", "0.808 0.114 19.571"],
    ["red-400", "0.704 0.191 22.216"],
    ["red-500", "0.637 0.237 25.331"],
    ["red-600", "0.577 0.245 27.325"],
    ["red-700", "0.505 0.213 27.518"],
    ["red-800", "0.444 0.177 26.899"],
    ["red-900", "0.396 0.141 25.723"],
    ["red-950", "0.258 0.092 26.042"],
    ["orange-50", "0.98 0.016 73.684"],
    ["orange-100", "0.954 0.038 75.164"],
    ["orange-200", "0.901 0.076 70.697"],
    ["orange-300", "0.837 0.128 66.29"],
    ["orange-400", "0.75 0.183 55.934"],
    ["orange-500", "0.705 0.213 47.604"],
    ["orange-600", "0.646 0.222 41.116"],
    ["orange-700", "0.553 0.195 38.402"],
    ["orange-800", "0.47 0.157 37.304"],
    ["orange-900", "0.408 0.123 38.172"],
    ["orange-950", "0.266 0.079 36.259"],
    ["amber-50", "0.987 0.022 95.277"],
    ["amber-100", "0.962 0.059 95.617"],
    ["amber-200", "0.924 0.12 95.746"],
    ["amber-300", "0.879 0.169 91.605"],
    ["amber-400", "0.828 0.189 84.429"],
    ["amber-500", "0.769 0.188 70.08"],
    ["amber-600", "0.666 0.179 58.318"],
    ["amber-700", "0.555 0.163 48.998"],
    ["amber-800", "0.473 0.137 46.201"],
    ["amber-900", "0.414 0.112 45.904"],
    ["amber-950", "0.279 0.077 45.635"],
    ["yellow-50", "0.987 0.026 102.212"],
    ["yellow-100", "0.973 0.071 103.193"],
    ["yellow-200", "0.945 0.129 101.54"],
    ["yellow-300", "0.905 0.182 98.111"],
    ["yellow-400", "0.852 0.199 91.936"],
    ["yellow-500", "0.795 0.184 86.047"],
    ["yellow-600", "0.681 0.162 75.834"],
    ["yellow-700", "0.554 0.135 66.442"],
    ["yellow-800", "0.476 0.114 61.907"],
    ["yellow-900", "0.421 0.095 57.708"],
    ["yellow-950", "0.286 0.066 53.813"],
    ["lime-50", "0.986 0.031 120.757"],
    ["lime-100", "0.967 0.067 122.328"],
    ["lime-200", "0.938 0.127 124.321"],
    ["lime-300", "0.897 0.196 126.665"],
    ["lime-400", "0.841 0.238 128.85"],
    ["lime-500", "0.768 0.233 130.85"],
    ["lime-600", "0.648 0.2 131.684"],
    ["lime-700", "0.532 0.157 131.589"],
    ["lime-800", "0.453 0.124 130.933"],
    ["lime-900", "0.405 0.101 131.063"],
    ["lime-950", "0.274 0.072 132.109"],
    ["green-50", "0.982 0.018 155.826"],
    ["green-100", "0.962 0.044 156.743"],
    ["green-200", "0.925 0.084 155.995"],
    ["green-300", "0.871 0.15 154.449"],
    ["green-400", "0.792 0.209 151.711"],
    ["green-500", "0.723 0.219 149.579"],
    ["green-600", "0.627 0.194 149.214"],
    ["green-700", "0.527 0.154 150.069"],
    ["green-800", "0.448 0.119 151.328"],
    ["green-900", "0.393 0.095 152.535"],
    ["green-950", "0.266 0.065 152.934"],
    ["emerald-50", "0.979 0.021 166.113"],
    ["emerald-100", "0.95 0.052 163.051"],
    ["emerald-200", "0.905 0.093 164.15"],
    ["emerald-300", "0.845 0.143 164.978"],
    ["emerald-400", "0.765 0.177 163.223"],
    ["emerald-500", "0.696 0.17 162.48"],
    ["emerald-600", "0.596 0.145 163.225"],
    ["emerald-700", "0.508 0.118 165.612"],
    ["emerald-800", "0.432 0.095 166.913"],
    ["emerald-900", "0.378 0.077 168.94"],
    ["emerald-950", "0.262 0.051 172.552"],
    ["teal-50", "0.984 0.014 180.72"],
    ["teal-100", "0.953 0.051 180.801"],
    ["teal-200", "0.91 0.096 180.426"],
    ["teal-300", "0.855 0.138 181.071"],
    ["teal-400", "0.777 0.152 181.912"],
    ["teal-500", "0.704 0.14 182.503"],
    ["teal-600", "0.6 0.118 184.704"],
    ["teal-700", "0.511 0.096 186.391"],
    ["teal-800", "0.437 0.078 188.216"],
    ["teal-900", "0.386 0.063 188.416"],
    ["teal-950", "0.277 0.046 192.524"],
    ["cyan-50", "0.984 0.019 200.873"],
    ["cyan-100", "0.956 0.045 203.388"],
    ["cyan-200", "0.917 0.08 205.041"],
    ["cyan-300", "0.865 0.127 207.078"],
    ["cyan-400", "0.789 0.154 211.53"],
    ["cyan-500", "0.715 0.143 215.221"],
    ["cyan-600", "0.609 0.126 221.723"],
    ["cyan-700", "0.52 0.105 223.128"],
    ["cyan-800", "0.45 0.085 224.283"],
    ["cyan-900", "0.398 0.07 227.392"],
    ["cyan-950", "0.302 0.056 229.695"],
    ["sky-50", "0.977 0.013 236.62"],
    ["sky-100", "0.951 0.026 236.824"],
    ["sky-200", "0.901 0.058 230.902"],
    ["sky-300", "0.828 0.111 230.318"],
    ["sky-400", "0.746 0.16 232.661"],
    ["sky-500", "0.685 0.169 237.323"],
    ["sky-600", "0.588 0.158 241.966"],
    ["sky-700", "0.5 0.134 242.749"],
    ["sky-800", "0.443 0.11 240.79"],
    ["sky-900", "0.391 0.09 240.876"],
    ["sky-950", "0.293 0.066 243.157"],
    ["blue-50", "0.97 0.014 254.604"],
    ["blue-100", "0.932 0.032 255.585"],
    ["blue-200", "0.882 0.059 254.128"],
    ["blue-300", "0.809 0.105 251.813"],
    ["blue-400", "0.707 0.165 254.624"],
    ["blue-500", "0.623 0.214 259.815"],
    ["blue-600", "0.546 0.245 262.881"],
    ["blue-700", "0.488 0.243 264.376"],
    ["blue-800", "0.424 0.199 265.638"],
    ["blue-900", "0.379 0.146 265.522"],
    ["blue-950", "0.282 0.091 267.935"],
    ["indigo-50", "0.962 0.018 272.314"],
    ["indigo-100", "0.93 0.034 272.788"],
    ["indigo-200", "0.87 0.065 274.039"],
    ["indigo-300", "0.785 0.115 274.713"],
    ["indigo-400", "0.673 0.182 276.935"],
    ["indigo-500", "0.585 0.233 277.117"],
    ["indigo-600", "0.511 0.262 276.966"],
    ["indigo-700", "0.457 0.24 277.023"],
    ["indigo-800", "0.398 0.195 277.366"],
    ["indigo-900", "0.359 0.144 278.697"],
    ["indigo-950", "0.257 0.09 281.288"],
    ["violet-50", "0.969 0.016 293.756"],
    ["violet-100", "0.943 0.029 294.588"],
    ["violet-200", "0.894 0.057 293.283"],
    ["violet-300", "0.811 0.111 293.571"],
    ["violet-400", "0.702 0.183 293.541"],
    ["violet-500", "0.606 0.25 292.717"],
    ["violet-600", "0.541 0.281 293.009"],
    ["violet-700", "0.491 0.27 292.581"],
    ["violet-800", "0.432 0.232 292.759"],
    ["violet-900", "0.38 0.189 293.745"],
    ["violet-950", "0.283 0.141 291.089"],
    ["purple-50", "0.977 0.014 308.299"],
    ["purple-100", "0.946 0.033 307.174"],
    ["purple-200", "0.902 0.063 306.703"],
    ["purple-300", "0.827 0.119 306.383"],
    ["purple-400", "0.714 0.203 305.504"],
    ["purple-500", "0.627 0.265 303.9"],
    ["purple-600", "0.558 0.288 302.321"],
    ["purple-700", "0.496 0.265 301.924"],
    ["purple-800", "0.438 0.218 303.724"],
    ["purple-900", "0.381 0.176 304.987"],
    ["purple-950", "0.291 0.149 302.717"],
    ["fuchsia-50", "0.977 0.017 320.058"],
    ["fuchsia-100", "0.952 0.037 318.852"],
    ["fuchsia-200", "0.903 0.076 319.62"],
    ["fuchsia-300", "0.833 0.145 321.434"],
    ["fuchsia-400", "0.74 0.238 322.16"],
    ["fuchsia-500", "0.667 0.295 322.15"],
    ["fuchsia-600", "0.591 0.293 322.896"],
    ["fuchsia-700", "0.518 0.253 323.949"],
    ["fuchsia-800", "0.452 0.211 324.591"],
    ["fuchsia-900", "0.401 0.17 325.612"],
    ["fuchsia-950", "0.293 0.136 325.661"],
    ["pink-50", "0.971 0.014 343.198"],
    ["pink-100", "0.948 0.028 342.258"],
    ["pink-200", "0.899 0.061 343.231"],
    ["pink-300", "0.823 0.12 346.018"],
    ["pink-400", "0.718 0.202 349.761"],
    ["pink-500", "0.656 0.241 354.308"],
    ["pink-600", "0.592 0.249 0.584"],
    ["pink-700", "0.525 0.223 3.958"],
    ["pink-800", "0.459 0.187 3.815"],
    ["pink-900", "0.408 0.153 2.432"],
    ["pink-950", "0.284 0.109 3.907"],
    ["rose-50", "0.969 0.015 12.422"],
    ["rose-100", "0.941 0.03 12.58"],
    ["rose-200", "0.892 0.058 10.001"],
    ["rose-300", "0.81 0.117 11.638"],
    ["rose-400", "0.712 0.194 13.428"],
    ["rose-500", "0.645 0.246 16.439"],
    ["rose-600", "0.586 0.253 17.585"],
    ["rose-700", "0.514 0.222 16.935"],
    ["rose-800", "0.455 0.188 13.697"],
    ["rose-900", "0.41 0.159 10.272"],
    ["rose-950", "0.271 0.105 12.094"],
    ["slate-50", "0.984 0.003 247.858"],
    ["slate-100", "0.968 0.007 247.896"],
    ["slate-200", "0.929 0.013 255.508"],
    ["slate-300", "0.869 0.022 252.894"],
    ["slate-400", "0.704 0.04 256.788"],
    ["slate-500", "0.554 0.046 257.417"],
    ["slate-600", "0.446 0.043 257.281"],
    ["slate-700", "0.372 0.044 257.287"],
    ["slate-800", "0.279 0.041 260.031"],
    ["slate-900", "0.208 0.042 265.755"],
    ["slate-950", "0.129 0.042 264.695"],
    ["gray-50", "0.985 0.002 247.839"],
    ["gray-100", "0.967 0.003 264.542"],
    ["gray-200", "0.928 0.006 264.531"],
    ["gray-300", "0.872 0.01 258.338"],
    ["gray-400", "0.707 0.022 261.325"],
    ["gray-500", "0.551 0.027 264.364"],
    ["gray-600", "0.446 0.03 256.802"],
    ["gray-700", "0.373 0.034 259.733"],
    ["gray-800", "0.278 0.033 256.848"],
    ["gray-900", "0.21 0.034 264.665"],
    ["gray-950", "0.13 0.028 261.692"],
    ["zinc-50", "0.985 0 0"],
    ["zinc-100", "0.967 0.001 286.375"],
    ["zinc-200", "0.92 0.004 286.32"],
    ["zinc-300", "0.871 0.006 286.286"],
    ["zinc-400", "0.705 0.015 286.067"],
    ["zinc-500", "0.552 0.016 285.938"],
    ["zinc-600", "0.442 0.017 285.786"],
    ["zinc-700", "0.37 0.013 285.805"],
    ["zinc-800", "0.274 0.006 286.033"],
    ["zinc-900", "0.21 0.006 285.885"],
    ["zinc-950", "0.141 0.005 285.823"],
    ["neutral-50", "0.985 0 0"],
    ["neutral-100", "0.97 0 0"],
    ["neutral-200", "0.922 0 0"],
    ["neutral-300", "0.87 0 0"],
    ["neutral-400", "0.708 0 0"],
    ["neutral-500", "0.556 0 0"],
    ["neutral-600", "0.439 0 0"],
    ["neutral-700", "0.371 0 0"],
    ["neutral-800", "0.269 0 0"],
    ["neutral-900", "0.205 0 0"],
    ["neutral-950", "0.145 0 0"],
    ["stone-50", "0.985 0.001 106.423"],
    ["stone-100", "0.97 0.001 106.424"],
    ["stone-200", "0.923 0.003 48.717"],
    ["stone-300", "0.869 0.005 56.366"],
    ["stone-400", "0.709 0.01 56.259"],
    ["stone-500", "0.553 0.013 58.071"],
    ["stone-600", "0.444 0.011 73.639"],
    ["stone-700", "0.374 0.01 67.558"],
    ["stone-800", "0.268 0.007 34.298"],
    ["stone-900", "0.216 0.006 56.043"],
    ["stone-950", "0.147 0.004 49.25"],
    ["black", "0 0 0"],
    ["white", "1 0 0"]
  ]);
  var RESET = [
    "*,*::before,*::after { box-sizing: border-box; border-width: 0; border-style: solid; border-color: currentColor; margin: 0; padding: 0 }",
    "ul,ol { list-style: none }",
    "h1,h2,h3,h4,h5,h6 { font-size: inherit; font-weight: inherit }",
    "input,button,textarea,select { font: inherit }",
    "body,html { height: 100% }",
    "img,video { max-width: 100%; height: auto }",
    "cite { font-style: normal }",
    "a { text-decoration: none; color: inherit }",
    "button { text-align: unset; background: transparent; color: inherit }",
    "body { overflow-y: scroll }",
    "svg { display: block }",
    "::placeholder { color: currentColor; opacity: 0.8 }",
    "[tw]:not([class]) { display: none }"
    // Prevent repaint.
  ];
  var COLOR_PROPS = /* @__PURE__ */ new Map([
    ["text", "color"],
    ["decoration", "text-decoration-color"],
    ["bg", "background-color"],
    ["border", "border-color"],
    ["outline", "outline-color"],
    ["accent", "accent-color"],
    ["caret", "caret-color"],
    ["fill", "fill"],
    ["stroke", "stroke"]
  ]);
  var FREE_PROPS = /* @__PURE__ */ new Map([
    ["content", "content"],
    ["top", "top"],
    ["right", "right"],
    ["bottom", "bottom"],
    ["left", "left"],
    ["start", "inset-inline-start"],
    ["end", "inset-inline-end"],
    ["basis", "flex-basis"],
    ["gap", "gap"],
    ["gap-x", "column-gap"],
    ["gap-y", "row-gap"],
    ["p", "padding"],
    ["px", "padding-inline"],
    ["py", "padding-block"],
    ["pt", "padding-top"],
    ["pr", "padding-right"],
    ["pb", "padding-bottom"],
    ["pl", "padding-left"],
    ["ps", "padding-inline-start"],
    ["pe", "padding-inline-end"],
    ["m", "margin"],
    ["mx", "margin-inline"],
    ["my", "margin-block"],
    ["mt", "margin-top"],
    ["mr", "margin-right"],
    ["ml", "margin-left"],
    ["mb", "margin-bottom"],
    ["ms", "margin-inline-start"],
    ["me", "margin-inline-end"],
    ["space-x", "margin-inline-end"],
    ["space-y", "margin-bottom"],
    ["w", "width"],
    ["min-w", "min-width"],
    ["max-w", "max-width"],
    ["h", "height"],
    ["min-h", "min-height"],
    ["max-h", "max-height"],
    ["indent", "text-indent"],
    ["border-spacing", "border-spacing"],
    ["translate-x", "translate-x"],
    ["translate-y", "translate-y"],
    ["translate-z", "translate-z"],
    ["scroll-m", "scroll-margin"],
    ["scroll-mx", "scroll-margin-inline"],
    ["scroll-my", "scroll-margin-block"],
    ["scroll-mt", "scroll-margin-top"],
    ["scroll-mr", "scroll-margin-right"],
    ["scroll-ml", "scroll-margin-left"],
    ["scroll-mb", "scroll-margin-bottom"],
    ["scroll-ms", "scroll-margin-inline-start"],
    ["scroll-me", "scroll-margin-inline-end"],
    ["scroll-p", "scroll-padding"],
    ["scroll-px", "scroll-padding-inline"],
    ["scroll-py", "scroll-padding-block"],
    ["scroll-pt", "scroll-padding-top"],
    ["scroll-pr", "scroll-padding-right"],
    ["scroll-pl", "scroll-padding-left"],
    ["scroll-pb", "scroll-padding-bottom"],
    ["scroll-ps", "scroll-padding-inline-start"],
    ["scroll-pe", "scroll-padding-inline-end"]
  ]);
  var MEDIA_QUERIES = /* @__PURE__ */ new Map([
    ["sm", "@media screen and (max-width: 599px)"],
    ["md", "@media screen and (min-width: 600px) and (max-width: 959px)"],
    ["lg", "@media screen and (min-width: 960px)"],
    ["light", "@media (prefers-color-scheme: light)"],
    ["dark", "@media (prefers-color-scheme: dark)"],
    ["@3xs", "@container (width >= 256px)"],
    ["@2xs", "@container (width >= 288px)"],
    ["@xs", "@container (width >= 320px)"],
    ["@sm", "@container (width >= 384px)"],
    ["@md", "@container (width >= 448px)"],
    ["@lg", "@container (width >= 512px)"],
    ["@xl", "@container (width >= 576px)"],
    ["@2xl", "@container (width >= 672px)"],
    ["@3xl", "@container (width >= 768px)"],
    ["@4xl", "@container (width >= 896px)"],
    ["@5xl", "@container (width >= 1024px)"],
    ["@6xl", "@container (width >= 1152px)"],
    ["@7xl", "@container (width >= 1280px)"]
  ]);
  var KEYFRAMES = /* @__PURE__ */ new Map([
    ["expand", "from { opacity: 0; transform: translateY(-8px) } to { opacity: 1 }"],
    ["toast", "from { opacity: 0; transform: translateY(48px) } to { opacity: 1 }"],
    ["fade", "0% { opacity: 0 } 100% { opacity: 1 }"]
  ]);
  var CLASS_PARSER = new RegExp(`((?<mq>[a-z@]+):)?((?<state>${STATES.join("|")}):)?(?<util>[^\\[]+(\\[(?<value>[^\\]]+)\\])?)`);
  var UTILS = new Map([
    // ---------------------------------------------------------------------------
    // Layout - aspect-ratio
    ["@container", "{ container-type: inline-size }"],
    ["aspect-auto", "{ aspect-ratio: auto }"],
    ["aspect-square", "{ aspect-ratio: 1 / 1 }"],
    ["aspect-video", "{ aspect-ratio: 16 / 9 }"],
    // Layout - columns
    ...gen((ii) => [`columns-${ii}`, `columns: ${ii}`], [...TWELVE, "auto"]),
    // Layout - break-after
    ...gen((ii) => [`break-after-${ii}`, `break-after: ${ii}`], ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]),
    // Layout - break-before
    ...gen((ii) => [`break-before-${ii}`, `break-after: ${ii}`], ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]),
    // Layout - break-inside
    ...gen((ii) => [`break-inside-${ii}`, `break-inside: ${ii}`], ["auto", "avoid", "avoid-page", "avoid-column"]),
    // Layout - box-decoration-break
    ...gen((ii) => [`box-decoration-${ii}`, `box-decoration-break: ${ii}`], ["clone", "slice"]),
    // Layout - box-sizing
    ...gen((ii) => [`box-${ii}`, `box-sizing: ${ii}-box`], ["border", "content"]),
    // Layout - display
    ...gen((ii) => [`${ii}`, `display: ${ii}`], ["inline", "block", "inline-block", "flow-root", "flex", "inline-flex", "grid", "inline-grid", "contents", "table", "inline-table", "list-item"]),
    ["hidden", "{ display: none }"],
    ["sr-only", "{ position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0 }"],
    ["not-sr-only", "{ position: static; width: auto; height: auto; padding: 0; margin: 0; overflow: visible; clip: auto; white-space: normal }"],
    // Layout - float
    ...gen((ii) => [`float-${ii}`, `float: inline-${ii}`], ["start", "end"]),
    ...gen((ii) => [`float-${ii}`, `float: ${ii}`], ["left", "right", "none"]),
    // Layout - clear
    ...gen((ii) => [`clear-${ii}`, `clear: inline-${ii}`], ["start", "end"]),
    ...gen((ii) => [`clear-${ii}`, `clear: ${ii}`], ["left", "right", "both", "none"]),
    // Layout - isolation
    ["isolate", "{ isolation: isolate }"],
    ["isolation-auto", "{ isolation: auto }"],
    // Layout - object-fit
    ...gen((ii) => [`object-${ii}`, `object-fit: ${ii}`], ["contain", "cover", "fill", "none", "scale-down"]),
    // Layout - object-position
    ...gen((ii) => [`object-${ii.replace(/ /g, "-")}`, `object-position: ${ii}`], ["bottom", "center", "left", "left bottom", "left top", "right", "right bottom", "right top", "top"]),
    // Layout - overflow
    ...gen((ii) => [`overflow-${ii}`, `overflow: ${ii}`], ["auto", "hidden", "clip", "visible", "scroll", "visible"]),
    ...gen((ii) => [`overflow-x-${ii}`, `overflow-x: ${ii}`], ["auto", "hidden", "clip", "visible", "scroll", "visible"]),
    ...gen((ii) => [`overflow-y-${ii}`, `overflow-y: ${ii}`], ["auto", "hidden", "clip", "visible", "scroll", "visible"]),
    // Layout - overscroll-behavior
    ...gen((ii) => [`overscroll-${ii}`, `overscroll-behavior: ${ii}`], ["auto", "contain", "none"]),
    ...gen((ii) => [`overscroll-x-${ii}`, `overscroll-behavior-x: ${ii}`], ["auto", "contain", "none"]),
    ...gen((ii) => [`overscroll-y-${ii}`, `overscroll-behavior-y: ${ii}`], ["auto", "contain", "none"]),
    // Layout - position
    ...gen((ii) => [`${ii}`, `position: ${ii}`], ["static", "fixed", "absolute", "relative", "sticky"]),
    // Layout - top / right / bottom / left
    ...gens("top"),
    ...gens("right"),
    ...gens("bottom"),
    ...gens("left"),
    ...gens("start", { prop: "inset-inline-start" }),
    ...gens("end", { prop: "inset-inline-end" }),
    // Layout - visibility
    ["visible", "{ visibility: visible }"],
    ["invisible", "{ visibility: hidden }"],
    ["collapse", "{ visibility: collapse }"],
    // Layout - z-index
    ...gen((ii) => [`z-${ii}`, `z-index: ${ii}`], [0, 10, 20, 30, 40, 50, "auto"]),
    // ---------------------------------------------------------------------------
    // Flexbox & Grid - flex-basis
    ...gens("basis", { prop: "flex-basis" }),
    // Flexbox & Grid - flex-direction
    ["flex-row", "{ flex-direction: row }"],
    ["flex-row-reverse", "{ flex-direction: row-reverse }"],
    ["flex-col", "{ flex-direction: column }"],
    ["flex-col-reverse", "{ flex-direction: column-reverse }"],
    // Flexbox & Grid - flex-wrap
    ...gen((ii) => [`flex-${ii}`, `flex-wrap: ${ii}`], ["nowrap", "wrap", "wrap-reverse"]),
    // Flexbox & Grid - flex
    ["flex-1", "{ flex: 1 1 0% }"],
    ["flex-auto", "{ flex: 1 1 auto }"],
    ["flex-initial", "{ flex: 0 1 auto }"],
    ["flex-none", "{ flex: none }"],
    // Flexbox & Grid - flex-grow
    ["grow", "{ flex-grow: 1 }"],
    ["grow-0", "{ flex-grow: 0 }"],
    // Flexbox & Grid - flex-shrink
    ["shrink", "{ flex-shrink: 1 }"],
    ["shrink-0", "{ flex-shrink: 0 }"],
    // Flexbox & Grid - order
    ...gen((ii) => [`order-${ii}`, `columns: ${ii}`], TWELVE),
    ["order-first", "{ order: -9999 }"],
    ["order-last", "{ order: 9999 }"],
    ["order-none", "{ order: 0 }"],
    // Flexbox & Grid - grid-template-columns
    ...gen((ii) => [`grid-cols-${ii}`, `grid-template-columns: repeat(${ii}, minmax(0, 1fr))`], TWELVE),
    ["grid-cols-none", "{ grid-template-columns: none }"],
    ["grid-cols-subgrid", "{ grid-template-columns: subgrid }"],
    // Flexbox & Grid - grid-column
    ["col-auto", "{ grid-column: auto }"],
    ...gen((ii) => [`col-span-${ii}`, `grid-column: span ${ii} / span ${ii}`], TWELVE),
    ["col-span-full", "{ grid-column: 1 / -1 }"],
    ["col-start-auto", "{ grid-column-start: auto }"],
    ...gen((ii) => [`col-start-${ii}`, `grid-column-start: ${ii}`], [...TWELVE, 13]),
    // Flexbox & Grid - grid-template-rows
    ...gen((ii) => [`grid-rows-${ii}`, `grid-template-rows: repeat(${ii}, auto)`], TWELVE),
    ["grid-rows-none", "{ grid-template-rows: none }"],
    ["grid-rows-subgrid", "{ grid-template-rows: subgrid }"],
    // Flexbox & Grid - grid-row
    ["row-auto", "{ grid-row: auto }"],
    ...gen((ii) => [`row-span-${ii}`, `grid-row: span ${ii} / span ${ii}`], TWELVE),
    ["row-span-full", "{ grid-row: 1 / -1 }"],
    ["row-start-auto", "{ grid-row-start: auto }"],
    ...gen((ii) => [`row-start-${ii}`, `grid-row-start: ${ii}`], [...TWELVE, 13]),
    // Flexbox & Grid - grid-auto-flow
    ["grid-flow-row", "{ grid-auto-flow: row }"],
    ["grid-flow-col", "{ grid-auto-flow: column }"],
    ["grid-flow-dense", "{ grid-auto-flow: dense }"],
    ["grid-flow-row-dense", "{ grid-auto-flow: row dense }"],
    ["grid-flow-col-dense", "{ grid-auto-flow: column dense }"],
    // Flexbox & Grid - grid-auto-columns
    ["auto-cols-auto", "{ grid-auto-columns: auto }"],
    ["auto-cols-min", "{ grid-auto-columns: min-content }"],
    ["auto-cols-max", "{ grid-auto-columns: max-content }"],
    ["auto-cols-fr", "{ grid-auto-columns: minmax(0, 1fr) }"],
    // Flexbox & Grid - grid-auto-rows
    ["auto-rows-auto", "{ grid-auto-rows: auto }"],
    ["auto-rows-min", "{ grid-auto-rows: min-content }"],
    ["auto-rows-max", "{ grid-auto-rows: max-content }"],
    ["auto-rows-fr", "{ grid-auto-rows: minmax(0, 1fr) }"],
    // Flexbox & Grid - gap
    ...gens("gap", { fractions: false }),
    ["gap-px", "{ gap: 1px }"],
    ...gens("gap-x", { prop: "column-gap", fractions: false }),
    ["gap-x-px", "{ column-gap: 1px }"],
    ...gens("gap-y", { prop: "row-gap", fractions: false }),
    ["gap-y-px", "{ row-gap: 1px }"],
    // Flexbox & Grid - justify-content
    ["justify-start", "{ justify-content: flex-start }"],
    ["justify-end", "{ justify-content: flex-end }"],
    ["justify-center", "{ justify-content: center }"],
    ["justify-between", "{ justify-content: space-between }"],
    ["justify-around", "{ justify-content: space-around }"],
    ["justify-evenly", "{ justify-content: space-evenly }"],
    ["justify-stretch", "{ justify-content: stretch }"],
    ["justify-baseline", "{ justify-content: baseline }"],
    ["justify-normal", "{ justify-content: normal }"],
    // Flexbox & Grid - justify-items
    ...gen((ii) => [`justify-items-${ii}`, `justify-items: ${ii}`], ["start", "end", "center", "stretch", "normal"]),
    // Flexbox & Grid - justify-self
    ...gen((ii) => [`justify-self-${ii}`, `justify-self: ${ii}`], ["auto", "start", "end", "center", "stretch"]),
    // Flexbox & Grid - align-content
    ["content-normal", "{ align-content: normal }"],
    ["content-center", "{ align-content: center }"],
    ["content-start", "{ align-content: flex-start }"],
    ["content-end", "{ align-content: flex-end }"],
    ["content-between", "{ align-content: space-between }"],
    ["content-around", "{ align-content: space-around }"],
    ["content-evenly", "{ align-content: space-evenly }"],
    ["content-baseline", "{ align-content: baseline }"],
    ["content-stretch", "{ align-content: stretch }"],
    // Flexbox & Grid - align-items
    ["items-start", "{ align-items: flex-start }"],
    ["items-end", "{ align-items: flex-end }"],
    ["items-center", "{ align-items: center }"],
    ["items-baseline", "{ align-items: baseline }"],
    ["items-stretch", "{ align-items: stretch }"],
    // Flexbox & Grid - align-self
    ["self-auto", "{ align-self: auto }"],
    ["self-start", "{ align-self: flex-start }"],
    ["self-end", "{ align-self: flex-end }"],
    ["self-center", "{ align-self: center }"],
    ["self-stretch", "{ align-self: stretch }"],
    ["self-baseline", "{ align-self: baseline }"],
    // Flexbox & Grid - place-content
    ["place-content-center", "{ place-content: center }"],
    ["place-content-start", "{ place-content: flex-start }"],
    ["place-content-end", "{ place-content: flex-end }"],
    ["place-content-between", "{ place-content: space-between }"],
    ["place-content-around", "{ place-content: space-around }"],
    ["place-content-evenly", "{ place-content: space-evenly }"],
    ["place-content-baseline", "{ place-content: baseline }"],
    ["place-content-stretch", "{ place-content: stretch }"],
    // Flexbox & Grid - place-items
    ...gen((ii) => [`place-items-${ii}`, `place-items: ${ii}`], ["start", "end", "center", "baseline", "stretch"]),
    // Flexbox & Grid - place-self
    ...gen((ii) => [`place-self-${ii}`, `place-self: ${ii}`], ["auto", "start", "end", "center", "stretch"]),
    // ---------------------------------------------------------------------------
    // Spacing - padding
    ...gens("p", { prop: "padding", fractions: true }),
    ...gens("px", { prop: "padding-inline", fractions: true }),
    ...gens("py", { prop: "padding-block", fractions: true }),
    ...gens("pt", { prop: "padding-top", fractions: true }),
    ...gens("pr", { prop: "padding-right", fractions: true }),
    ...gens("pb", { prop: "padding-bottom", fractions: true }),
    ...gens("pl", { prop: "padding-left", fractions: true }),
    ...gens("ps", { prop: "padding-inline-start", fractions: true }),
    ...gens("pe", { prop: "padding-inline-end", fractions: true }),
    // Spacing - margin
    ...gens("m", { prop: "margin", fractions: true }),
    ...gens("mx", { prop: "margin-inline", fractions: true }),
    ...gens("my", { prop: "margin-block", fractions: true }),
    ...gens("mt", { prop: "margin-top", fractions: true }),
    ...gens("mr", { prop: "margin-right", fractions: true }),
    ...gens("ml", { prop: "margin-left", fractions: true }),
    ...gens("mb", { prop: "margin-bottom", fractions: true }),
    ...gens("ms", { prop: "margin-inline-start", fractions: true }),
    ...gens("me", { prop: "margin-inline-end", fractions: true }),
    ...gens("space-x", { prop: "margin-inline-end", fractions: true, next: "> :not(:last-child) " }),
    ...gens("space-y", { prop: "margin-bottom", fractions: true, next: "> :not(:last-child) " }),
    // Sizing - width
    ...gens("w", { prop: "width", fractions: true }),
    // Sizing - min-width
    ...gens("min-w", { prop: "min-width", fractions: true }),
    // Sizing - max-width
    ...gens("max-w", { prop: "max-width", fractions: true }),
    // Sizing - height
    ...gens("h", { prop: "height", fractions: true }),
    // Sizing - min-height
    ...gens("min-h", { prop: "min-height", fractions: true }),
    // Sizing - max-height
    ...gens("max-h", { prop: "max-height", fractions: true }),
    // ---------------------------------------------------------------------------
    // Typography - font-family
    ["font-sans", '{ font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" }'],
    ["font-serif", '{ font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif }'],
    ["font-mono", '{ font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace }'],
    // Typography - font-size
    ["text-xs", "{ font-size: 12px; line-height: 1.333 }"],
    ["text-sm", "{ font-size: 14px; line-height: 1.429 }"],
    ["text-base", "{ font-size: 16px; line-height: 1.5 }"],
    ["text-lg", "{ font-size: 18px; line-height: 1.555 }"],
    ["text-xl", "{ font-size: 20px; line-height: 1.4 }"],
    ["text-2xl", "{ font-size: 24px; line-height: 1.333 }"],
    ["text-3xl", "{ font-size: 30px; line-height: 1.2 }"],
    ["text-4xl", "{ font-size: 36px; line-height: 1.111 }"],
    ["text-5xl", "{ font-size: 48px; line-height: 1 }"],
    ["text-6xl", "{ font-size: 60px; line-height: 1 }"],
    ["text-7xl", "{ font-size: 72px; line-height: 1 }"],
    ["text-8xl", "{ font-size: 96px; line-height: 1 }"],
    ["text-9xl", "{ font-size: 128px; line-height: 1 }"],
    // Typography - font-smoothing
    ["antialiased", "{ -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale }"],
    ["subpixel-antialiased", "{ -webkit-font-smoothing: auto; -moz-osx-font-smoothing: auto }"],
    // Typography - font-style
    ["italic", "{ font-style: italic }"],
    ["not-italic", "{ font-style: normal }"],
    // Typography - font-weight
    ["font-thin", "{ font-weight: 100 }"],
    ["font-extralight", "{ font-weight: 200 }"],
    ["font-light", "{ font-weight: 300 }"],
    ["font-normal", "{ font-weight: 400 }"],
    ["font-medium", "{ font-weight: 500 }"],
    ["font-semibold", "{ font-weight: 600 }"],
    ["font-bold", "{ font-weight: 700 }"],
    ["font-extrabold", "{ font-weight: 800 }"],
    ["font-black", "{ font-weight: 900 }"],
    // Tpyography - font-stretch
    ...gen((ii) => [`font-stretch-${ii}`, `font-stretch: ${ii}`], ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"]),
    // Typography - font-variant-numeric
    ["normal-nums", "{ font-variant-numeric: normal }"],
    ...gen((ii) => [ii, `font-variant-numeric: ${ii}`], ["ordinal", "slashed-zero", "lining-nums", "oldstyle-nums", "proportional-nums", "tabular-nums", "diagonal-fractions", "stacked-fractions"]),
    // Typography - letter-spacing
    ["tracking-tighter", "{ letter-spacing: -0.05em }"],
    ["tracking-tight", "{ letter-spacing: -0.025em }"],
    ["tracking-normal", "{ letter-spacing: 0 }"],
    ["tracking-wide", "{ letter-spacing: 0.025em }"],
    ["tracking-wider", "{ letter-spacing: 0.05em }"],
    ["tracking-widest", "{ letter-spacing: 0.1em }"],
    // Typography - line-clamp
    ...gen((ii) => [`line-clamp-${ii}`, `overflow: hidden; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: ${ii}`], [1, 2, 3, 4, 5, 6, "none"]),
    // Typography - line-height
    ["leading-none", "{ line-height: 1 }"],
    ["leading-tight", "{ line-height: 1.25 }"],
    ["leading-snug", "{ line-height: 1.375 }"],
    ["leading-normal", "{ line-height: 1.5 }"],
    ["leading-relaxed", "{ line-height: 1.625 }"],
    ["leading-loose", "{ line-height: 2 }"],
    // Typography - list-style
    ["list-image-none", "{ list-style-image: none }"],
    ["list-inside", "{ list-style-position: inside }"],
    ["list-outside", "{ list-style-position: outside }"],
    ["list-disc", "{ list-style-type: disc }"],
    ["list-decimal", "{ list-style-type: decimal }"],
    ["list-none", "{ list-style-type: none }"],
    // Typography - text-align
    ...gen((ii) => [`text-${ii}`, `text-align: ${ii}`], ["left", "center", "right", "justify", "start", "end"]),
    // Typography - text-color
    ...genc("text", "color"),
    // Typography - text-decoration
    ...gen((ii) => [ii, `text-decoration: ${ii}`], ["underline", "overline", "line-through"]),
    ["no-underline", "{ text-decoration: none }"],
    // Typography - text-decoration-color
    ...genc("decoration", "text-decoration-color"),
    // Typography = text-decoration-style
    ...gen((ii) => [`decoration-${ii}`, `text-decoration-style: ${ii}`], ["solid", "double", "dotted", "dashed", "wavy"]),
    // Typography - text-decoration-thickness
    ["decoration-auto", "{ text-decoration-thickness: auto }"],
    ["decoration-from-font", "{ text-decoration-thickness: from-font }"],
    ...gen((ii) => [`decoration-${ii}`, `text-decoration-thickness: ${ii}px`], WIDTHS),
    // Typography - text-underline-offset
    ["underline-offset-auto", "{ text-underline-offset: auto }"],
    ...gen((ii) => [`underline-offset-${ii}`, `text-underline-offset: ${ii}px`], WIDTHS),
    // Typography - text-transform
    ...gen((ii) => [`${ii}`, `text-transform: ${ii}`], ["uppercase", "lowercase", "capitalize"]),
    ["normal-case", "{ text-transform: none }"],
    // Typography - text-overflow
    ["truncate", "{ overflow: hidden; text-overflow: ellipsis; white-space: nowrap }"],
    ["overflow-ellipsis", "{ text-overflow: ellipsis }"],
    ["overflow-clip", "{ text-overflow: clip }"],
    // Typography - text-wrap
    ...gen((ii) => [`text-${ii}`, `text-wrap: ${ii}`], ["wrap", "nowrap", "balance", "pretty"]),
    // Typography - text-indent
    ...gens("indent", { prop: "text-indent", fractions: false }),
    // Typography - vertical-align
    ...gen((ii) => [`align-${ii}`, `vertical-align: ${ii}`], ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super"]),
    // Typography - white-space
    ...gen((ii) => [`whitespace-${ii}`, `white-space: ${ii}`], ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]),
    // Typography - word-break
    ["break-normal", "{ overflow-wrap: normal; word-break: normal }"],
    ["break-words", "{ overflow-wrap: break-word }"],
    ["break-all", "{ word-break: break-all }"],
    ["break-keep", "{ word-break: keep-all }"],
    // Typography - hyphens
    ...gen((ii) => [`hyphens-${ii}`, `hyphens: ${ii}`], ["none", "manual", "auto"]),
    // Typography - content
    ["content-none", "{ content: none }"],
    // ---------------------------------------------------------------------------
    // Backgrounds - background-attachment
    ...gen((ii) => [`bg-${ii}`, `background-attachment: ${ii}`], ["fixed", "local", "scroll"]),
    // Backgrounds - background-clip
    ...gen((ii) => [`bg-clip-${ii}`, `background-clip: ${ii}-box`], ["border", "padding", "content"]),
    ["bg-clip-text", "{ background-clip: text }"],
    // Backgrounds - background-color'
    ...genc("bg", "background-color"),
    // // Backgrounds - background-image - currently unsupported
    // Backgrounds - background-origin
    ...gen((ii) => [`bg-${ii}`, `background-origin: ${ii}`], ["border-box", "padding-box", "content-box"]),
    // Backgrounds - background-position
    ...gen((ii) => [`bg-${ii.replace(" ", "-")}`, `background-position: ${ii}`], ["bottom", "center", "left", "left bottom", "left top", "right", "right bottom", "right top", "top"]),
    // Backgrounds - background-repeat
    ...gen((ii) => [`bg-${ii}`, `background-repeat: ${ii}`], ["repeat", "repeat-x", "repeat-y", "space", "round", "no-repeat"]),
    // Backgrounds - background-size
    ...gen((ii) => [`bg-${ii}`, `background-size: ${ii}`], ["auto", "cover", "contain"]),
    // // ---------------------------------------------------------------------------
    // Borders - border-radius
    ...gen(([name, value]) => [`rounded${name}`, `border-radius: ${value}`], RADII),
    ...gen(([name, value]) => [`rounded-tl${name}`, `border-top-left-radius: ${value}`], RADII),
    ...gen(([name, value]) => [`rounded-tr${name}`, `border-top-right-radius: ${value}`], RADII),
    ...gen(([name, value]) => [`rounded-bl${name}`, `border-bottom-left-radius: ${value}`], RADII),
    ...gen(([name, value]) => [`rounded-br${name}`, `border-bottom-right-radius: ${value}`], RADII),
    // Borders - border-width
    ["border", "{ border-width: 1px }"],
    ...gen((ii) => [`border-${ii}`, `border-width: ${ii}px`], WIDTHS),
    ["border-t", "{ border-top-width: 1px }"],
    ...gen((ii) => [`border-t-${ii}`, `border-top-width: ${ii}px`], WIDTHS),
    ["border-b", "{ border-bottom-width: 1px }"],
    ...gen((ii) => [`border-b-${ii}`, `border-bottom-width: ${ii}px`], WIDTHS),
    ["border-l", "{ border-left-width: 1px }"],
    ...gen((ii) => [`border-l-${ii}`, `border-left-width: ${ii}px`], WIDTHS),
    ["border-r", "{ border-right-width: 1px }"],
    ...gen((ii) => [`border-r-${ii}`, `border-right-width: ${ii}px`], WIDTHS),
    ["border-s", "{ border-inline-start-width: 1px }"],
    ...gen((ii) => [`border-s-${ii}`, `border-inline-start-width: ${ii}px`], WIDTHS),
    ["border-e", "{ border-inline-end-width: 1px }"],
    ...gen((ii) => [`border-e-${ii}`, `border-inline-end-width: ${ii}px`], WIDTHS),
    // Borders - border-color
    ...genc("border", "border-color"),
    // Borders - Border-style
    ...gen((ii) => [`border-${ii}`, `border-style: ${ii}`], ["solid", "dashed", "dotted", "double", "hidden", "none"]),
    // Borders - outline-width
    ...gen((ii) => [`outline-${ii}`, `outline-width: ${ii}px`], WIDTHS),
    // Borders - outline-color
    ...genc("outline", "outline-color"),
    // Borders - outline-style
    ["outline", "{ outline-style: solid }"],
    ...gen((ii) => [`outline-${ii}`, `outline-style: ${ii}`], ["none", "dashed", "dotted", "double"]),
    // Borders - outline-offset
    ...gen((ii) => [`outline-offset-${ii}`, `outline-offset: ${ii}px`], WIDTHS),
    // ---------------------------------------------------------------------------
    // Effects - box-shadow
    ["shadow", "{ box-shadow: 0 1px rgb(0 0 0 / 0.05) }"],
    // Customised.
    ["shadow-2xs", "{ box-shadow: 0 1px rgb(0 0 0 / 0.05) }"],
    ["shadow-xs", "{ box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) }"],
    ["shadow-sm", "{ box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1) }"],
    ["shadow-md", "{ box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1) }"],
    ["shadow-lg", "{ box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) }"],
    ["shadow-xl", "{ box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) }"],
    ["shadow-2xl", "{ box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25) }"],
    ["shadow-none", "{ box-shadow: 0 0 #0000 }"],
    // Effects - opacity
    ...gen((ii) => [`opacity-${ii}`, `opacity: ${ii / 100}`], OPACITIES),
    // Effects - mix-blend-mode - currently unsupported
    // Effects - background-blend-mode - currently unsupported
    // ---------------------------------------------------------------------------
    // Filters - blur
    ...backdrop(["blur-xs", "{ filter: blur(4px) }"]),
    ...backdrop(["blur-sm", "{ filter: blur(8px) }"]),
    ...backdrop(["blur-md", "{ filter: blur(12px) }"]),
    ...backdrop(["blur-lg", "{ filter: blur(16px) }"]),
    ...backdrop(["blur-xl", "{ filter: blur(24px) }"]),
    ...backdrop(["blur-2xl", "{ filter: blur(40px) }"]),
    ...backdrop(["blur-3xl", "{ filter: blur(64px) }"]),
    ...backdrop(["blur-none", "{ filter: none }"]),
    // Filters - brightness
    ...backdrop(gen((ii) => [`brightness-${ii}`, `filter: brightness(${ii}%)`], [0, 50, 75, 90, 95, 100, 105, 110, 125, 150, 200])),
    // Filters - contrast - unsupported
    ...backdrop(gen((ii) => [`contrast-${ii}`, `filter: contrast(${ii}%)`], [0, 50, 75, 100, 125, 150, 200])),
    // Filters - drop-shadow
    ...backdrop(["drop-shadow-xs", "{ filter: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05)) }"]),
    ...backdrop(["drop-shadow-sm", "{ filter: drop-shadow(0 1px 2px rgb(0 0 0 / 0.15)) }"]),
    ...backdrop(["drop-shadow-md", "{ filter: drop-shadow(0 3px 3px rgb(0 0 0 / 0.12)) }"]),
    ...backdrop(["drop-shadow-lg", "{ filter: drop-shadow(0 4px 4px rgb(0 0 0 / 0.15)) }"]),
    ...backdrop(["drop-shadow-xl", "{ filter: drop-shadow(0 9px 7px rgb(0 0 0 / 0.1)) }"]),
    ...backdrop(["drop-shadow-2xl", "{ filter: drop-shadow(0 25px 25px rgb(0 0 0 / 0.15)) }"]),
    ...backdrop(["drop-shadow-none", "{ filter: drop-shadow(0 0 #0000) }"]),
    // Filters - grayscale
    ...backdrop(["grayscale", "{ filter: grayscale(100%) }"]),
    ...backdrop(["grayscale-0", "{ filter: grayscale(0) }"]),
    // Filters - hue-rotate
    ...backdrop(gen((ii) => [`hue-rotate-${ii}`, `filter: hue-rotate(${ii}deg)`], [0, 15, 30, 60, 90, 180])),
    ...backdrop(gen((ii) => [`-hue-rotate-${ii}`, `filter: hue-rotate(-${ii}deg)`], [0, 15, 30, 60, 90, 180])),
    // Filters - invert - unsupported
    ...backdrop(["invert", "{ filter: invert(100%) }"]),
    ...backdrop(["invert-0", "{ filter: invert(0) }"]),
    // Filters - saturate
    ...gen((ii) => [`saturate-${ii}`, `filter: saturate(${ii}%)`], [0, 50, 75, 100, 150, 200]),
    // Filters - sepia
    ...backdrop(["invert", "{ filter: sepia(100%) }"]),
    ...backdrop(["invert-0", "{ filter: sepia(0) }"]),
    // Filters
    ...backdrop(["filter-none", "{ filter: none }"]),
    // ---------------------------------------------------------------------------
    // Tables - border-collapse
    ["border-collapse", "{ border-collapse: collapse }"],
    ["border-separate", "{ order-collapse: separate }"],
    // Tables - border-spacing
    ...gens("border-spacing", { prop: "border-spacing", fractions: false }),
    // Tables - table-layout
    ["table-auto", "{ table-layout: auto }"],
    ["table-fixed", "{ table-layout: fixed }"],
    // Tables - caption-side
    ["caption-top", "{ caption-side: top }"],
    ["caption-bottom", "{ caption-side: bottom }"],
    // ---------------------------------------------------------------------------
    // Transitions & Animations - transition-property
    ["transition", `{ transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter; transition-duration: ${ANIM_TIME} }`],
    ["transition-all", `{ transition-property: all; transition-duration: ${ANIM_TIME} }`],
    ["transition-colors", `{ transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-duration: ${ANIM_TIME} }`],
    ["transition-opacity", `{ transition-property: opacity; transition-duration: ${ANIM_TIME} }`],
    ["transition-shadow", `{ transition-property: box-shadow; transition-duration: ${ANIM_TIME} }`],
    ["transition-transform", `{ transition-property: transform; transition-duration: ${ANIM_TIME} }`],
    ["transition-none", "{ transition-property: none }"],
    // Transitions & Animations - transition-behavior
    ["transition-normal", "{ transition-behavior: normal }"],
    ["transition-discrete", "{ transition-behavior: allow-discrete }"],
    // Transitions & Animations - transition-duration
    ["duration-initial", "{ transition-duration: initial }"],
    ...gen((ii) => [`duration-${ii}`, `transition-duration: ${ii}ms`], DURATIONS),
    // Transitions & Animations - transition-timing-function - unsupported
    ["ease-linear", "{ transition-timing-function: linear }"],
    ["ease-in", "{ transition-timing-function: ease-in }"],
    ["ease-out", "{ transition-timing-function: ease-out }"],
    ["ease-in-out", "{ transition-timing-function: ease-in-out }"],
    ["ease-initial", "{ transition-timing-function: initial }"],
    // Transitions & Animations - transition-delay
    ...gen((ii) => [`delay-${ii}`, `transition-delay: ${ii}ms`], DURATIONS),
    // Transitions & Animations - animation
    ["animate-expand", `{ animate: expand ${ANIM_TIME} ease-out }`],
    ["animate-toast", `{ animate: toast ${ANIM_TIME} ease-out }`],
    ["animate-fade", `{ animate: fade ${ANIM_TIME} ease-out }`],
    // ---------------------------------------------------------------------------
    // Transforms - blackface-visibility
    ["blackface-visible", "{ backface-visibility: visible }"],
    ["blackface-hidden", "{ backface-visibility: hidden }"],
    // Transforms - perspective
    ["perspective-dramatic", "{ perspective: 100px }"],
    ["perspective-near", "{ perspective: 300px }"],
    ["perspective-normal", "{ perspective: 500px }"],
    ["perspective-midrange", "{ perspective: 800px }"],
    ["perspective-distant", "{ perspective: 1200px }"],
    ["perspective-none", "{ perspective: none }"],
    // Transforms - perspective-origin
    ...gen((ii) => [`perspective-origin-${ii}`, `perspective-origin: ${ii}`], ORIGINS),
    // Transforms - rotate
    ...gen((ii) => [`rotate-${ii}`, `rotate: ${ii}deg`], [90, 180, 270]),
    // Transforms - scale
    ...gen((ii) => [`scale-${ii}`, `transform: scale(${ii / 100})`], SCALES),
    ...gen((ii) => [`scale-x-${ii}`, `transform: scaleX(${ii / 100})`], SCALES),
    ...gen((ii) => [`scale-y-${ii}`, `transform: scaleY(${ii / 100})`], SCALES),
    // Transforms - skew
    ...gen((ii) => [`skew-x-${ii}`, `transform: skewX(${ii}deg)`], SKEWS),
    ...gen((ii) => [`skew-y-${ii}`, `transform: skewY(${ii}deg)`], SKEWS),
    // Transforms - transform-origin
    ...gen((ii) => [`origin-${ii}`, `transform-origin: ${ii}`], ORIGINS),
    // Transforms - transform-style
    ["transform-3d", "{ transform-style: preserve-3d }"],
    ["transform-flat", "{ transform-style: flat }"],
    // Transforms - translate
    ...gens("translate-x", { prop: "translate-x", fractions: true }),
    ...gens("translate-y", { prop: "translate-y", fractions: true }),
    ...gens("translate-z", { prop: "translate-z", fractions: true }),
    // ---------------------------------------------------------------------------
    // Interactivity - accent-color
    ...genc("accent", "accent-color"),
    // Interactivity - appearance
    ["appearance-none", "{ appearance: none }"],
    ["appearance-auto", "{ appearance: auto }"],
    // Interactivity - caret-color
    ...genc("caret", "caret-color"),
    // Interactivity - color-scheme
    ...gen((ii) => [`scheme-${ii.replace(" ", "-")}`, `color-scheme: ${ii}`], ["normal", "dark", "light", "light dark", "only dark", "only light"]),
    // Interactivity - cursor
    ...gen((ii) => [`cursor-${ii}`, `cursor: ${ii}`], ["auto", "default", "pointer", "wait", "text", "move", "not-allowed"]),
    // Interactivity - field-sizing
    ["field-sizing-fixed", "{ field-sizing: fixed }"],
    ["field-sizing-auto", "{ field-sizing: auto }"],
    // Interactivity - pointer-events
    ["pointer-events-none", "{ pointer-events: none }"],
    ["pointer-events-auto", "{ pointer-events: auto }"],
    // Interactivity - resize
    ["resize-none", "{ resize: none }"],
    ["resize-x", "{ resize: horizontal }"],
    ["resize-y", "{ resize: vertical }"],
    ["resize-both", "{ resize: both }"],
    // Interactivity - scroll-behavior
    ["scroll-auto", "{ scroll-behavior: auto }"],
    ["scroll-smooth", "{ scroll-behavior: smooth }"],
    // Interactivity - scroll-margin
    ...gens("scroll-m", { prop: "scroll-margin", fractions: true }),
    ...gens("scroll-mx", { prop: "scroll-margin-inline", fractions: true }),
    ...gens("scroll-my", { prop: "scroll-margin-block", fractions: true }),
    ...gens("scroll-mt", { prop: "scroll-margin-top", fractions: true }),
    ...gens("scroll-mr", { prop: "scroll-margin-right", fractions: true }),
    ...gens("scroll-ml", { prop: "scroll-margin-left", fractions: true }),
    ...gens("scroll-mb", { prop: "scroll-margin-bottom", fractions: true }),
    ...gens("scroll-ms", { prop: "scroll-margin-inline-start", fractions: true }),
    ...gens("scroll-me", { prop: "scroll-margin-inline-end", fractions: true }),
    // Interactivity - scroll-padding
    ...gens("scroll-p", { prop: "scroll-padding", fractions: true }),
    ...gens("scroll-px", { prop: "scroll-padding-inline", fractions: true }),
    ...gens("scroll-py", { prop: "scroll-padding-block", fractions: true }),
    ...gens("scroll-pt", { prop: "scroll-padding-top", fractions: true }),
    ...gens("scroll-pr", { prop: "scroll-padding-right", fractions: true }),
    ...gens("scroll-pl", { prop: "scroll-padding-left", fractions: true }),
    ...gens("scroll-pb", { prop: "scroll-padding-bottom", fractions: true }),
    ...gens("scroll-ps", { prop: "scroll-padding-inline-start", fractions: true }),
    ...gens("scroll-pe", { prop: "scroll-padding-inline-end", fractions: true }),
    // Interactivity - scroll-snap-align
    ...gen((ii) => [`snap-${ii}`, `scroll-snap-align: ${ii}`], ["start", "end", "center"]),
    ["snap-align-none", "{ scroll-snap-align: none }"],
    // Interactivity - scroll-snap-stop
    ["snap-stop-normal", "{ scroll-snap-stop: normal }"],
    ["snap-stop-always", "{ scroll-snap-stop: always }"],
    // Interactivity - scroll-snap-type
    ["snap-none", "{ scroll-snap-type: none }"],
    ["snap-x", "{ scroll-snap-type: x mandatory }"],
    ["snap-y", "{ scroll-snap-type: y proximity }"],
    ["snap-both", "{ scroll-snap-type: both proximity }"],
    // Interactivity - touch-action
    ...gen((ii) => [`touch-${ii}`, `touch-action: ${ii}`], ["auto", "none", "pan-x", "pan-left", "pan-right", "pan-y", "pan-up", "pan-down", "pinch-zoom", "manipulation"]),
    // Interactivity - user-select
    ["select-none", "{ user-select: none }"],
    ["select-text", "{ user-select: text }"],
    ["select-all", "{ user-select: all }"],
    ["select-auto", "{ user-select: auto }"],
    // Interactivity - will-change
    ["will-change-auto", "{ will-change: auto }"],
    ["will-change-scroll", "{ will-change: scroll-position }"],
    ["will-change-contents", "{ will-change: contents }"],
    ["will-change-transform", "{ will-change: transform }"],
    // ---------------------------------------------------------------------------
    // SVG - fill
    ...genc("fill", "fill"),
    // SVG - stroke - unsupported
    ...genc("stroke", "stroke"),
    // SVG - stroke-width - unsupported
    ...gen((ii) => [`stroke-${ii}`, `stroke-width: ${ii}`], [0, 1, 2]),
    // ---------------------------------------------------------------------------
    // Accessibility - forced-color-adjust
    ["forced-color-adjust-auto", "{ forced-color-adjust: auto }"],
    ["forced-color-adjust-none", "{ forced-color-adjust: none }"]
  ]);
  function* gen(func, list) {
    for (const item of list) {
      const [name, value] = func(item);
      yield [name, `{ ${value} }`];
    }
  }
  function* gens(cls, options = {}) {
    const { prop = cls, fractions = true, next = "" } = options;
    yield [`${cls}-auto`, `${next}{ ${prop}: auto }`];
    yield [`${cls}-full`, `${next}{ ${prop}: 100% }`];
    yield [`${cls}-min`, `${next}{ ${prop}: min-content }`];
    yield [`${cls}-max`, `${next}{ ${prop}: max-content }`];
    yield [`${cls}-fit`, `${next}{ ${prop}: fit-content }`];
    yield [`${cls}-px`, `${next}{ ${prop}: 1px }`];
    yield [`${cls}-0.5`, `${next}{ ${prop}: 2px }`];
    for (const unit of ["svh", "lvh", "dvh", "svw", "lvw", "dvw"]) {
      yield [`${cls}-${unit}`, `${next}{ ${prop}: 100${unit} }`];
    }
    if (fractions) {
      for (const [s, frac] of SIZES_FRAC) {
        yield [`${cls}-${s}`, `${next}{ ${prop}: ${frac * 100}% }`];
      }
    }
    for (const s of SIZES) {
      yield [`${cls}-${s}`, `${next}{ ${prop}: ${s * PIXEL_STEP}px }`];
      yield [`-${cls}-${s}`, `${next}{ ${prop}: -${s * PIXEL_STEP}px }`];
    }
  }
  function* genc(cls, prop, colors = COLORS.entries()) {
    yield [`${cls}-inherit`, `{ ${prop}: inherit }`];
    yield [`${cls}-transparent`, `{ ${prop}: transparent }`];
    yield [`${cls}-current`, `{ ${prop}: currentColor }`];
    for (const [colorName, color] of colors) {
      yield [`${cls}-${colorName}`, `{ ${prop}: oklch(${color}) }`];
      for (const value of OPACITIES) {
        yield [`${cls}-${colorName}/${value}`, `{ ${prop}: oklch(${color} / ${value / 100}) }`];
      }
    }
  }
  function* backdrop(filterRules) {
    const filterRulesArr = filterRules.length === 2 ? [filterRules] : filterRules;
    for (const filterRule of filterRulesArr) {
      yield filterRule;
      const [cls, rule] = filterRule;
      yield [`backdrop-${cls}`, rule.replace("filter:", "backdrop-filter:")];
    }
  }
  var tw = {
    instances: /* @__PURE__ */ new Map(),
    extend
  };
  function createSheet() {
    const sheet = new CSSStyleSheet();
    for (const css of RESET) {
      sheet.insertRule(css, sheet.cssRules.length);
    }
    for (const [name, keyframes] of KEYFRAMES.entries()) {
      sheet.insertRule(`@keyframes ${name} { ${keyframes} }`, sheet.cssRules.length);
    }
    return sheet;
  }
  function addRule(instance, cls) {
    if (!cls || instance.usedRules.has(cls)) {
      return;
    }
    const { mq, state, util, value } = cls.match(CLASS_PARSER).groups;
    let css;
    if (value) {
      const prop = FREE_PROPS.get(util.split(/-\[/)[0]);
      css = prop ? `{ ${prop}: ${value} }` : null;
    } else {
      css = UTILS.get(util);
    }
    if (!css) {
      console.warn(`Unknown utility class: [${cls}]`);
      return;
    }
    const isHighPriority = Boolean(HIGH_PRIORITY_RULES.find((r) => util.includes(r)));
    const escapedUtil = util.replace(/(\/|\[|\]|\.|@)/g, "\\$1");
    const utilWithState = state ? `${state}\\:${escapedUtil}:${state}` : escapedUtil;
    let rule;
    let index;
    if (mq) {
      index = isHighPriority ? instance.sheet.cssRules.length : instance.mqRulesStartIndex;
      rule = `${MEDIA_QUERIES.get(mq)} { .${mq}\\:${utilWithState} ${css} }`;
    } else {
      rule = `.${utilWithState} ${css}`;
      index = isHighPriority ? instance.mqRulesStartIndex : 0;
      instance.mqRulesStartIndex += 1;
    }
    instance.usedRules.add(cls);
    instance.sheet.insertRule(rule, index);
  }
  function processElement(instance, el2) {
    const timestamp = Date.now();
    const className = el2.getAttribute("tw");
    const classes = (className || "").split(/ +/);
    for (const cls of classes) {
      if (cls) {
        addRule(instance, cls);
      }
    }
    el2.className = className;
    instance.lastGenerationTime = Date.now() - timestamp;
  }
  function extend({ classes = {}, colors = {}, keyframes = {}, queries = {} }) {
    Object.entries(queries).forEach(([name, query]) => MEDIA_QUERIES.set(name, query));
    Object.entries(keyframes).forEach(([name, keyframes2]) => {
      tw.instances.values().forEach((instance) => {
        instance.sheet.insertRule(`@keyframes ${name} { ${keyframes2} }`, instance.sheet.cssRules.length);
      });
    });
    COLOR_PROPS.entries.forEach(([colorClass, colorProp]) => {
      for (const [cls, css] of genc(colorClass, colorProp, Object.entries(colors))) {
        classes[cls] = css;
      }
    });
    Object.entries(classes).forEach(([name, css]) => UTILS.set(name, css));
  }
  function init(root) {
    if (!self.tw) {
      self.tw = tw;
    }
    if (tw.instances.has(root)) {
      return;
    }
    const timestamp = Date.now();
    const sheet = createSheet();
    const instance = {
      root,
      usedRules: /* @__PURE__ */ new Set(),
      sheet,
      mqRulesStartIndex: sheet.cssRules.length,
      observer: new MutationObserver(async (mutations) => {
        let clean = false;
        for (const m of mutations) {
          if (m.type === "attributes" && m.attributeName === "tw") {
            processElement(instance, m.target);
            continue;
          }
          for (const node of m.addedNodes) {
            if (node.nodeType === 1) {
              processElement(instance, node);
              if (node.shadowRoot) {
                init(node.shadowRoot);
              }
            }
          }
          clean ||= m.removedNodes.length;
        }
        if (clean) {
          for (const inst of tw.instances.values()) {
            if (!inst.root.isConnected) {
              inst.observer.disconnect();
              tw.instances.delete(inst.root);
            }
          }
        }
      })
    };
    tw.instances.set(root, instance);
    root.adoptedStyleSheets = [instance.sheet];
    for (const el2 of root.querySelectorAll("[tw]")) {
      processElement(instance, el2);
    }
    instance.observer.observe(root, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ["tw"]
    });
    instance.initTime = Date.now() - timestamp;
  }
  if (typeof self !== "undefined") {
    init(document);
  }

  // test/test-script.js
  var STATES2 = ["hover", "focus", "focus-visible", "active"];
  var MQS = ["sm", "md", "lg", "dark"];
  function addTestDiv() {
    const div = document.createElement("div");
    div.setAttribute("tw", "bg-violet-300 p-4 rounded-md w-[100px] h-[100px]");
    div.textContent = "Test DIV";
    document.body.appendChild(div);
    div.setAttribute("tw", `${div.getAttribute("tw")} border-2`);
  }
  function addDivWithAllClasses() {
    const classes = [];
    for (const cls of UTILS.keys()) {
      if (cls !== cls.toUpperCase()) {
        classes.push(cls);
      }
    }
    const div = document.createElement("div");
    div.setAttribute("tw", classes.join(" "));
    div.textContent = "All classes";
    document.body.appendChild(div);
  }
  function addDivWithPrefixedClasses() {
    const cls = "hidden";
    const classes = [cls];
    for (const state of STATES2) {
      classes.push(`${state}:${cls}`);
    }
    for (const mq of MQS) {
      classes.push(`${mq}:${cls}`);
      for (const state of STATES2) {
        classes.push(`${mq}:${state}:${cls}`);
      }
    }
    const div = document.createElement("div");
    div.setAttribute("tw", classes.join(" "));
    div.textContent = "Prefixed classes";
    document.body.appendChild(div);
  }
  function addCustomElement(name) {
    class CustomElement extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = '<div tw="bg-amber-300 p-4 rounded-md border-2">Shadow DOM</div>';
      }
    }
    customElements.define(name, CustomElement);
    const el2 = document.createElement(name);
    el2.setAttribute("tw", "block");
    document.body.appendChild(el2);
    return el2;
  }
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  document.addEventListener("DOMContentLoaded", async () => {
    addTestDiv();
    addCustomElement("custom-element-1");
    el = addCustomElement("custom-element-2");
    await delay(100);
    el.remove();
    addDivWithPrefixedClasses();
    addDivWithAllClasses();
  });
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vc3JjL3Rpbnl3aW5kLmpzIiwgIi4uL3Rlc3QvdGVzdC1zY3JpcHQuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8qKlxuICogQGZpbGUgRmFzdCBtaW5pbWFsaXN0IHV0aWxpdHktZmlyc3QgQ1NTIHJ1bnRpbWUgaW5zcGlyZWQgYnkgVGFpbHdpbmQgYW5kIFR3aW5kLlxuICogQGF1dGhvciBNaWNoYWwgS29jaGVsXG4gKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIENvbmZpZ3VyYXRpb25cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBTSVpFUyA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTEsIDEyLCAxNCwgMTYsIDIwLCAyNCwgMjgsIDMyLCAzNiwgNDAsIDQ0LCA0OCwgNTIsIDU2LCA2MCwgNjQsIDcyLCA4MCwgOTZdXG5jb25zdCBUV0VMVkUgPSBTSVpFUy5zbGljZSgxLCAxMylcbmNvbnN0IFdJRFRIUyA9IFswLCAxLCAyLCA0LCA4XVxuY29uc3QgT1BBQ0lUSUVTID0gWzAsIDUsIDEwLCAyMCwgMjUsIDMwLCA0MCwgNTAsIDYwLCA3MCwgNzUsIDgwLCA5MCwgOTUsIDEwMF1cbmNvbnN0IERVUkFUSU9OUyA9IFs3NSwgMTAwLCAxNTAsIDIwMCwgMzAwLCA1MDAsIDcwMCwgMTAwMF1cbmNvbnN0IFNDQUxFUyA9IFswLCA1MCwgNzUsIDkwLCA5NSwgMTAwLCAxMDUsIDExMCwgMTI1LCAxNTBdXG5jb25zdCBTS0VXUyA9IFswLCAxLCAyLCAzLCA2LCAxMl1cbmNvbnN0IE9SSUdJTlMgPSBbJ2NlbnRlcicsICd0b3AnLCAndG9wLXJpZ2h0JywgJ3JpZ2h0JywgJ2JvdHRvbS1yaWdodCcsICdib3R0b20nLCAnYm90dG9tLWxlZnQnLCAnbGVmdCcsICd0b3AtbGVmdCddXG5jb25zdCBTVEFURVMgPSBbJ2hvdmVyJywgJ2ZvY3VzJywgJ2ZvY3VzLXZpc2libGUnLCAnYWN0aXZlJ11cbmNvbnN0IEhJR0hfUFJJT1JJVFlfUlVMRVMgPSBbJ2NvbC1zdGFydCcsICdyb3ctc3RhcnQnLCAnaGlkZGVuJywgJy1ub25lJ11cbmNvbnN0IFBJWEVMX1NURVAgPSA0XG5jb25zdCBBTklNX1RJTUUgPSAnMTUwbXMnXG5cbmV4cG9ydCBjb25zdCBTSVpFU19GUkFDID0gW1xuXHRbJzEvMicsIDEgLyAyXSxcblx0WycxLzMnLCAxIC8gM10sXG5cdFsnMi8zJywgMiAvIDNdLFxuXHRbJzEvNCcsIDEgLyA0XSxcblx0WyczLzQnLCAzIC8gNF0sXG5cdFsnMS81JywgMSAvIDVdLFxuXHRbJzIvNScsIDIgLyA1XSxcblx0WyczLzUnLCAzIC8gNV0sXG5cdFsnNC81JywgNCAvIDVdLFxuXVxuXG5jb25zdCBSQURJSSA9IFtcblx0WycteHMnLCAnMnB4J10sXG5cdFsnLXNtJywgJzRweCddLFxuXHRbJy1tZCcsICc2cHgnXSxcblx0WyctbGcnLCAnOHB4J10sXG5cdFsnLXhsJywgJzEycHgnXSxcblx0WyctMnhsJywgJzE2cHgnXSxcblx0WyctM3hsJywgJzI0cHgnXSxcblx0WyctZnVsbCcsICc1MCUnXSxcblx0Wyctbm9uZScsIDBdLFxuXVxuXG5leHBvcnQgY29uc3QgQ09MT1JTID0gbmV3IE1hcChbXG5cdFsncmVkLTUwJywgJzAuOTcxIDAuMDEzIDE3LjM4J10sXG5cdFsncmVkLTEwMCcsICcwLjkzNiAwLjAzMiAxNy43MTcnXSxcblx0WydyZWQtMjAwJywgJzAuODg1IDAuMDYyIDE4LjMzNCddLFxuXHRbJ3JlZC0zMDAnLCAnMC44MDggMC4xMTQgMTkuNTcxJ10sXG5cdFsncmVkLTQwMCcsICcwLjcwNCAwLjE5MSAyMi4yMTYnXSxcblx0WydyZWQtNTAwJywgJzAuNjM3IDAuMjM3IDI1LjMzMSddLFxuXHRbJ3JlZC02MDAnLCAnMC41NzcgMC4yNDUgMjcuMzI1J10sXG5cdFsncmVkLTcwMCcsICcwLjUwNSAwLjIxMyAyNy41MTgnXSxcblx0WydyZWQtODAwJywgJzAuNDQ0IDAuMTc3IDI2Ljg5OSddLFxuXHRbJ3JlZC05MDAnLCAnMC4zOTYgMC4xNDEgMjUuNzIzJ10sXG5cdFsncmVkLTk1MCcsICcwLjI1OCAwLjA5MiAyNi4wNDInXSxcblx0WydvcmFuZ2UtNTAnLCAnMC45OCAwLjAxNiA3My42ODQnXSxcblx0WydvcmFuZ2UtMTAwJywgJzAuOTU0IDAuMDM4IDc1LjE2NCddLFxuXHRbJ29yYW5nZS0yMDAnLCAnMC45MDEgMC4wNzYgNzAuNjk3J10sXG5cdFsnb3JhbmdlLTMwMCcsICcwLjgzNyAwLjEyOCA2Ni4yOSddLFxuXHRbJ29yYW5nZS00MDAnLCAnMC43NSAwLjE4MyA1NS45MzQnXSxcblx0WydvcmFuZ2UtNTAwJywgJzAuNzA1IDAuMjEzIDQ3LjYwNCddLFxuXHRbJ29yYW5nZS02MDAnLCAnMC42NDYgMC4yMjIgNDEuMTE2J10sXG5cdFsnb3JhbmdlLTcwMCcsICcwLjU1MyAwLjE5NSAzOC40MDInXSxcblx0WydvcmFuZ2UtODAwJywgJzAuNDcgMC4xNTcgMzcuMzA0J10sXG5cdFsnb3JhbmdlLTkwMCcsICcwLjQwOCAwLjEyMyAzOC4xNzInXSxcblx0WydvcmFuZ2UtOTUwJywgJzAuMjY2IDAuMDc5IDM2LjI1OSddLFxuXHRbJ2FtYmVyLTUwJywgJzAuOTg3IDAuMDIyIDk1LjI3NyddLFxuXHRbJ2FtYmVyLTEwMCcsICcwLjk2MiAwLjA1OSA5NS42MTcnXSxcblx0WydhbWJlci0yMDAnLCAnMC45MjQgMC4xMiA5NS43NDYnXSxcblx0WydhbWJlci0zMDAnLCAnMC44NzkgMC4xNjkgOTEuNjA1J10sXG5cdFsnYW1iZXItNDAwJywgJzAuODI4IDAuMTg5IDg0LjQyOSddLFxuXHRbJ2FtYmVyLTUwMCcsICcwLjc2OSAwLjE4OCA3MC4wOCddLFxuXHRbJ2FtYmVyLTYwMCcsICcwLjY2NiAwLjE3OSA1OC4zMTgnXSxcblx0WydhbWJlci03MDAnLCAnMC41NTUgMC4xNjMgNDguOTk4J10sXG5cdFsnYW1iZXItODAwJywgJzAuNDczIDAuMTM3IDQ2LjIwMSddLFxuXHRbJ2FtYmVyLTkwMCcsICcwLjQxNCAwLjExMiA0NS45MDQnXSxcblx0WydhbWJlci05NTAnLCAnMC4yNzkgMC4wNzcgNDUuNjM1J10sXG5cdFsneWVsbG93LTUwJywgJzAuOTg3IDAuMDI2IDEwMi4yMTInXSxcblx0Wyd5ZWxsb3ctMTAwJywgJzAuOTczIDAuMDcxIDEwMy4xOTMnXSxcblx0Wyd5ZWxsb3ctMjAwJywgJzAuOTQ1IDAuMTI5IDEwMS41NCddLFxuXHRbJ3llbGxvdy0zMDAnLCAnMC45MDUgMC4xODIgOTguMTExJ10sXG5cdFsneWVsbG93LTQwMCcsICcwLjg1MiAwLjE5OSA5MS45MzYnXSxcblx0Wyd5ZWxsb3ctNTAwJywgJzAuNzk1IDAuMTg0IDg2LjA0NyddLFxuXHRbJ3llbGxvdy02MDAnLCAnMC42ODEgMC4xNjIgNzUuODM0J10sXG5cdFsneWVsbG93LTcwMCcsICcwLjU1NCAwLjEzNSA2Ni40NDInXSxcblx0Wyd5ZWxsb3ctODAwJywgJzAuNDc2IDAuMTE0IDYxLjkwNyddLFxuXHRbJ3llbGxvdy05MDAnLCAnMC40MjEgMC4wOTUgNTcuNzA4J10sXG5cdFsneWVsbG93LTk1MCcsICcwLjI4NiAwLjA2NiA1My44MTMnXSxcblx0WydsaW1lLTUwJywgJzAuOTg2IDAuMDMxIDEyMC43NTcnXSxcblx0WydsaW1lLTEwMCcsICcwLjk2NyAwLjA2NyAxMjIuMzI4J10sXG5cdFsnbGltZS0yMDAnLCAnMC45MzggMC4xMjcgMTI0LjMyMSddLFxuXHRbJ2xpbWUtMzAwJywgJzAuODk3IDAuMTk2IDEyNi42NjUnXSxcblx0WydsaW1lLTQwMCcsICcwLjg0MSAwLjIzOCAxMjguODUnXSxcblx0WydsaW1lLTUwMCcsICcwLjc2OCAwLjIzMyAxMzAuODUnXSxcblx0WydsaW1lLTYwMCcsICcwLjY0OCAwLjIgMTMxLjY4NCddLFxuXHRbJ2xpbWUtNzAwJywgJzAuNTMyIDAuMTU3IDEzMS41ODknXSxcblx0WydsaW1lLTgwMCcsICcwLjQ1MyAwLjEyNCAxMzAuOTMzJ10sXG5cdFsnbGltZS05MDAnLCAnMC40MDUgMC4xMDEgMTMxLjA2MyddLFxuXHRbJ2xpbWUtOTUwJywgJzAuMjc0IDAuMDcyIDEzMi4xMDknXSxcblx0WydncmVlbi01MCcsICcwLjk4MiAwLjAxOCAxNTUuODI2J10sXG5cdFsnZ3JlZW4tMTAwJywgJzAuOTYyIDAuMDQ0IDE1Ni43NDMnXSxcblx0WydncmVlbi0yMDAnLCAnMC45MjUgMC4wODQgMTU1Ljk5NSddLFxuXHRbJ2dyZWVuLTMwMCcsICcwLjg3MSAwLjE1IDE1NC40NDknXSxcblx0WydncmVlbi00MDAnLCAnMC43OTIgMC4yMDkgMTUxLjcxMSddLFxuXHRbJ2dyZWVuLTUwMCcsICcwLjcyMyAwLjIxOSAxNDkuNTc5J10sXG5cdFsnZ3JlZW4tNjAwJywgJzAuNjI3IDAuMTk0IDE0OS4yMTQnXSxcblx0WydncmVlbi03MDAnLCAnMC41MjcgMC4xNTQgMTUwLjA2OSddLFxuXHRbJ2dyZWVuLTgwMCcsICcwLjQ0OCAwLjExOSAxNTEuMzI4J10sXG5cdFsnZ3JlZW4tOTAwJywgJzAuMzkzIDAuMDk1IDE1Mi41MzUnXSxcblx0WydncmVlbi05NTAnLCAnMC4yNjYgMC4wNjUgMTUyLjkzNCddLFxuXHRbJ2VtZXJhbGQtNTAnLCAnMC45NzkgMC4wMjEgMTY2LjExMyddLFxuXHRbJ2VtZXJhbGQtMTAwJywgJzAuOTUgMC4wNTIgMTYzLjA1MSddLFxuXHRbJ2VtZXJhbGQtMjAwJywgJzAuOTA1IDAuMDkzIDE2NC4xNSddLFxuXHRbJ2VtZXJhbGQtMzAwJywgJzAuODQ1IDAuMTQzIDE2NC45NzgnXSxcblx0WydlbWVyYWxkLTQwMCcsICcwLjc2NSAwLjE3NyAxNjMuMjIzJ10sXG5cdFsnZW1lcmFsZC01MDAnLCAnMC42OTYgMC4xNyAxNjIuNDgnXSxcblx0WydlbWVyYWxkLTYwMCcsICcwLjU5NiAwLjE0NSAxNjMuMjI1J10sXG5cdFsnZW1lcmFsZC03MDAnLCAnMC41MDggMC4xMTggMTY1LjYxMiddLFxuXHRbJ2VtZXJhbGQtODAwJywgJzAuNDMyIDAuMDk1IDE2Ni45MTMnXSxcblx0WydlbWVyYWxkLTkwMCcsICcwLjM3OCAwLjA3NyAxNjguOTQnXSxcblx0WydlbWVyYWxkLTk1MCcsICcwLjI2MiAwLjA1MSAxNzIuNTUyJ10sXG5cdFsndGVhbC01MCcsICcwLjk4NCAwLjAxNCAxODAuNzInXSxcblx0Wyd0ZWFsLTEwMCcsICcwLjk1MyAwLjA1MSAxODAuODAxJ10sXG5cdFsndGVhbC0yMDAnLCAnMC45MSAwLjA5NiAxODAuNDI2J10sXG5cdFsndGVhbC0zMDAnLCAnMC44NTUgMC4xMzggMTgxLjA3MSddLFxuXHRbJ3RlYWwtNDAwJywgJzAuNzc3IDAuMTUyIDE4MS45MTInXSxcblx0Wyd0ZWFsLTUwMCcsICcwLjcwNCAwLjE0IDE4Mi41MDMnXSxcblx0Wyd0ZWFsLTYwMCcsICcwLjYgMC4xMTggMTg0LjcwNCddLFxuXHRbJ3RlYWwtNzAwJywgJzAuNTExIDAuMDk2IDE4Ni4zOTEnXSxcblx0Wyd0ZWFsLTgwMCcsICcwLjQzNyAwLjA3OCAxODguMjE2J10sXG5cdFsndGVhbC05MDAnLCAnMC4zODYgMC4wNjMgMTg4LjQxNiddLFxuXHRbJ3RlYWwtOTUwJywgJzAuMjc3IDAuMDQ2IDE5Mi41MjQnXSxcblx0WydjeWFuLTUwJywgJzAuOTg0IDAuMDE5IDIwMC44NzMnXSxcblx0WydjeWFuLTEwMCcsICcwLjk1NiAwLjA0NSAyMDMuMzg4J10sXG5cdFsnY3lhbi0yMDAnLCAnMC45MTcgMC4wOCAyMDUuMDQxJ10sXG5cdFsnY3lhbi0zMDAnLCAnMC44NjUgMC4xMjcgMjA3LjA3OCddLFxuXHRbJ2N5YW4tNDAwJywgJzAuNzg5IDAuMTU0IDIxMS41MyddLFxuXHRbJ2N5YW4tNTAwJywgJzAuNzE1IDAuMTQzIDIxNS4yMjEnXSxcblx0WydjeWFuLTYwMCcsICcwLjYwOSAwLjEyNiAyMjEuNzIzJ10sXG5cdFsnY3lhbi03MDAnLCAnMC41MiAwLjEwNSAyMjMuMTI4J10sXG5cdFsnY3lhbi04MDAnLCAnMC40NSAwLjA4NSAyMjQuMjgzJ10sXG5cdFsnY3lhbi05MDAnLCAnMC4zOTggMC4wNyAyMjcuMzkyJ10sXG5cdFsnY3lhbi05NTAnLCAnMC4zMDIgMC4wNTYgMjI5LjY5NSddLFxuXHRbJ3NreS01MCcsICcwLjk3NyAwLjAxMyAyMzYuNjInXSxcblx0Wydza3ktMTAwJywgJzAuOTUxIDAuMDI2IDIzNi44MjQnXSxcblx0Wydza3ktMjAwJywgJzAuOTAxIDAuMDU4IDIzMC45MDInXSxcblx0Wydza3ktMzAwJywgJzAuODI4IDAuMTExIDIzMC4zMTgnXSxcblx0Wydza3ktNDAwJywgJzAuNzQ2IDAuMTYgMjMyLjY2MSddLFxuXHRbJ3NreS01MDAnLCAnMC42ODUgMC4xNjkgMjM3LjMyMyddLFxuXHRbJ3NreS02MDAnLCAnMC41ODggMC4xNTggMjQxLjk2NiddLFxuXHRbJ3NreS03MDAnLCAnMC41IDAuMTM0IDI0Mi43NDknXSxcblx0Wydza3ktODAwJywgJzAuNDQzIDAuMTEgMjQwLjc5J10sXG5cdFsnc2t5LTkwMCcsICcwLjM5MSAwLjA5IDI0MC44NzYnXSxcblx0Wydza3ktOTUwJywgJzAuMjkzIDAuMDY2IDI0My4xNTcnXSxcblx0WydibHVlLTUwJywgJzAuOTcgMC4wMTQgMjU0LjYwNCddLFxuXHRbJ2JsdWUtMTAwJywgJzAuOTMyIDAuMDMyIDI1NS41ODUnXSxcblx0WydibHVlLTIwMCcsICcwLjg4MiAwLjA1OSAyNTQuMTI4J10sXG5cdFsnYmx1ZS0zMDAnLCAnMC44MDkgMC4xMDUgMjUxLjgxMyddLFxuXHRbJ2JsdWUtNDAwJywgJzAuNzA3IDAuMTY1IDI1NC42MjQnXSxcblx0WydibHVlLTUwMCcsICcwLjYyMyAwLjIxNCAyNTkuODE1J10sXG5cdFsnYmx1ZS02MDAnLCAnMC41NDYgMC4yNDUgMjYyLjg4MSddLFxuXHRbJ2JsdWUtNzAwJywgJzAuNDg4IDAuMjQzIDI2NC4zNzYnXSxcblx0WydibHVlLTgwMCcsICcwLjQyNCAwLjE5OSAyNjUuNjM4J10sXG5cdFsnYmx1ZS05MDAnLCAnMC4zNzkgMC4xNDYgMjY1LjUyMiddLFxuXHRbJ2JsdWUtOTUwJywgJzAuMjgyIDAuMDkxIDI2Ny45MzUnXSxcblx0WydpbmRpZ28tNTAnLCAnMC45NjIgMC4wMTggMjcyLjMxNCddLFxuXHRbJ2luZGlnby0xMDAnLCAnMC45MyAwLjAzNCAyNzIuNzg4J10sXG5cdFsnaW5kaWdvLTIwMCcsICcwLjg3IDAuMDY1IDI3NC4wMzknXSxcblx0WydpbmRpZ28tMzAwJywgJzAuNzg1IDAuMTE1IDI3NC43MTMnXSxcblx0WydpbmRpZ28tNDAwJywgJzAuNjczIDAuMTgyIDI3Ni45MzUnXSxcblx0WydpbmRpZ28tNTAwJywgJzAuNTg1IDAuMjMzIDI3Ny4xMTcnXSxcblx0WydpbmRpZ28tNjAwJywgJzAuNTExIDAuMjYyIDI3Ni45NjYnXSxcblx0WydpbmRpZ28tNzAwJywgJzAuNDU3IDAuMjQgMjc3LjAyMyddLFxuXHRbJ2luZGlnby04MDAnLCAnMC4zOTggMC4xOTUgMjc3LjM2NiddLFxuXHRbJ2luZGlnby05MDAnLCAnMC4zNTkgMC4xNDQgMjc4LjY5NyddLFxuXHRbJ2luZGlnby05NTAnLCAnMC4yNTcgMC4wOSAyODEuMjg4J10sXG5cdFsndmlvbGV0LTUwJywgJzAuOTY5IDAuMDE2IDI5My43NTYnXSxcblx0Wyd2aW9sZXQtMTAwJywgJzAuOTQzIDAuMDI5IDI5NC41ODgnXSxcblx0Wyd2aW9sZXQtMjAwJywgJzAuODk0IDAuMDU3IDI5My4yODMnXSxcblx0Wyd2aW9sZXQtMzAwJywgJzAuODExIDAuMTExIDI5My41NzEnXSxcblx0Wyd2aW9sZXQtNDAwJywgJzAuNzAyIDAuMTgzIDI5My41NDEnXSxcblx0Wyd2aW9sZXQtNTAwJywgJzAuNjA2IDAuMjUgMjkyLjcxNyddLFxuXHRbJ3Zpb2xldC02MDAnLCAnMC41NDEgMC4yODEgMjkzLjAwOSddLFxuXHRbJ3Zpb2xldC03MDAnLCAnMC40OTEgMC4yNyAyOTIuNTgxJ10sXG5cdFsndmlvbGV0LTgwMCcsICcwLjQzMiAwLjIzMiAyOTIuNzU5J10sXG5cdFsndmlvbGV0LTkwMCcsICcwLjM4IDAuMTg5IDI5My43NDUnXSxcblx0Wyd2aW9sZXQtOTUwJywgJzAuMjgzIDAuMTQxIDI5MS4wODknXSxcblx0WydwdXJwbGUtNTAnLCAnMC45NzcgMC4wMTQgMzA4LjI5OSddLFxuXHRbJ3B1cnBsZS0xMDAnLCAnMC45NDYgMC4wMzMgMzA3LjE3NCddLFxuXHRbJ3B1cnBsZS0yMDAnLCAnMC45MDIgMC4wNjMgMzA2LjcwMyddLFxuXHRbJ3B1cnBsZS0zMDAnLCAnMC44MjcgMC4xMTkgMzA2LjM4MyddLFxuXHRbJ3B1cnBsZS00MDAnLCAnMC43MTQgMC4yMDMgMzA1LjUwNCddLFxuXHRbJ3B1cnBsZS01MDAnLCAnMC42MjcgMC4yNjUgMzAzLjknXSxcblx0WydwdXJwbGUtNjAwJywgJzAuNTU4IDAuMjg4IDMwMi4zMjEnXSxcblx0WydwdXJwbGUtNzAwJywgJzAuNDk2IDAuMjY1IDMwMS45MjQnXSxcblx0WydwdXJwbGUtODAwJywgJzAuNDM4IDAuMjE4IDMwMy43MjQnXSxcblx0WydwdXJwbGUtOTAwJywgJzAuMzgxIDAuMTc2IDMwNC45ODcnXSxcblx0WydwdXJwbGUtOTUwJywgJzAuMjkxIDAuMTQ5IDMwMi43MTcnXSxcblx0WydmdWNoc2lhLTUwJywgJzAuOTc3IDAuMDE3IDMyMC4wNTgnXSxcblx0WydmdWNoc2lhLTEwMCcsICcwLjk1MiAwLjAzNyAzMTguODUyJ10sXG5cdFsnZnVjaHNpYS0yMDAnLCAnMC45MDMgMC4wNzYgMzE5LjYyJ10sXG5cdFsnZnVjaHNpYS0zMDAnLCAnMC44MzMgMC4xNDUgMzIxLjQzNCddLFxuXHRbJ2Z1Y2hzaWEtNDAwJywgJzAuNzQgMC4yMzggMzIyLjE2J10sXG5cdFsnZnVjaHNpYS01MDAnLCAnMC42NjcgMC4yOTUgMzIyLjE1J10sXG5cdFsnZnVjaHNpYS02MDAnLCAnMC41OTEgMC4yOTMgMzIyLjg5NiddLFxuXHRbJ2Z1Y2hzaWEtNzAwJywgJzAuNTE4IDAuMjUzIDMyMy45NDknXSxcblx0WydmdWNoc2lhLTgwMCcsICcwLjQ1MiAwLjIxMSAzMjQuNTkxJ10sXG5cdFsnZnVjaHNpYS05MDAnLCAnMC40MDEgMC4xNyAzMjUuNjEyJ10sXG5cdFsnZnVjaHNpYS05NTAnLCAnMC4yOTMgMC4xMzYgMzI1LjY2MSddLFxuXHRbJ3BpbmstNTAnLCAnMC45NzEgMC4wMTQgMzQzLjE5OCddLFxuXHRbJ3BpbmstMTAwJywgJzAuOTQ4IDAuMDI4IDM0Mi4yNTgnXSxcblx0WydwaW5rLTIwMCcsICcwLjg5OSAwLjA2MSAzNDMuMjMxJ10sXG5cdFsncGluay0zMDAnLCAnMC44MjMgMC4xMiAzNDYuMDE4J10sXG5cdFsncGluay00MDAnLCAnMC43MTggMC4yMDIgMzQ5Ljc2MSddLFxuXHRbJ3BpbmstNTAwJywgJzAuNjU2IDAuMjQxIDM1NC4zMDgnXSxcblx0WydwaW5rLTYwMCcsICcwLjU5MiAwLjI0OSAwLjU4NCddLFxuXHRbJ3BpbmstNzAwJywgJzAuNTI1IDAuMjIzIDMuOTU4J10sXG5cdFsncGluay04MDAnLCAnMC40NTkgMC4xODcgMy44MTUnXSxcblx0WydwaW5rLTkwMCcsICcwLjQwOCAwLjE1MyAyLjQzMiddLFxuXHRbJ3BpbmstOTUwJywgJzAuMjg0IDAuMTA5IDMuOTA3J10sXG5cdFsncm9zZS01MCcsICcwLjk2OSAwLjAxNSAxMi40MjInXSxcblx0Wydyb3NlLTEwMCcsICcwLjk0MSAwLjAzIDEyLjU4J10sXG5cdFsncm9zZS0yMDAnLCAnMC44OTIgMC4wNTggMTAuMDAxJ10sXG5cdFsncm9zZS0zMDAnLCAnMC44MSAwLjExNyAxMS42MzgnXSxcblx0Wydyb3NlLTQwMCcsICcwLjcxMiAwLjE5NCAxMy40MjgnXSxcblx0Wydyb3NlLTUwMCcsICcwLjY0NSAwLjI0NiAxNi40MzknXSxcblx0Wydyb3NlLTYwMCcsICcwLjU4NiAwLjI1MyAxNy41ODUnXSxcblx0Wydyb3NlLTcwMCcsICcwLjUxNCAwLjIyMiAxNi45MzUnXSxcblx0Wydyb3NlLTgwMCcsICcwLjQ1NSAwLjE4OCAxMy42OTcnXSxcblx0Wydyb3NlLTkwMCcsICcwLjQxIDAuMTU5IDEwLjI3MiddLFxuXHRbJ3Jvc2UtOTUwJywgJzAuMjcxIDAuMTA1IDEyLjA5NCddLFxuXHRbJ3NsYXRlLTUwJywgJzAuOTg0IDAuMDAzIDI0Ny44NTgnXSxcblx0WydzbGF0ZS0xMDAnLCAnMC45NjggMC4wMDcgMjQ3Ljg5NiddLFxuXHRbJ3NsYXRlLTIwMCcsICcwLjkyOSAwLjAxMyAyNTUuNTA4J10sXG5cdFsnc2xhdGUtMzAwJywgJzAuODY5IDAuMDIyIDI1Mi44OTQnXSxcblx0WydzbGF0ZS00MDAnLCAnMC43MDQgMC4wNCAyNTYuNzg4J10sXG5cdFsnc2xhdGUtNTAwJywgJzAuNTU0IDAuMDQ2IDI1Ny40MTcnXSxcblx0WydzbGF0ZS02MDAnLCAnMC40NDYgMC4wNDMgMjU3LjI4MSddLFxuXHRbJ3NsYXRlLTcwMCcsICcwLjM3MiAwLjA0NCAyNTcuMjg3J10sXG5cdFsnc2xhdGUtODAwJywgJzAuMjc5IDAuMDQxIDI2MC4wMzEnXSxcblx0WydzbGF0ZS05MDAnLCAnMC4yMDggMC4wNDIgMjY1Ljc1NSddLFxuXHRbJ3NsYXRlLTk1MCcsICcwLjEyOSAwLjA0MiAyNjQuNjk1J10sXG5cdFsnZ3JheS01MCcsICcwLjk4NSAwLjAwMiAyNDcuODM5J10sXG5cdFsnZ3JheS0xMDAnLCAnMC45NjcgMC4wMDMgMjY0LjU0MiddLFxuXHRbJ2dyYXktMjAwJywgJzAuOTI4IDAuMDA2IDI2NC41MzEnXSxcblx0WydncmF5LTMwMCcsICcwLjg3MiAwLjAxIDI1OC4zMzgnXSxcblx0WydncmF5LTQwMCcsICcwLjcwNyAwLjAyMiAyNjEuMzI1J10sXG5cdFsnZ3JheS01MDAnLCAnMC41NTEgMC4wMjcgMjY0LjM2NCddLFxuXHRbJ2dyYXktNjAwJywgJzAuNDQ2IDAuMDMgMjU2LjgwMiddLFxuXHRbJ2dyYXktNzAwJywgJzAuMzczIDAuMDM0IDI1OS43MzMnXSxcblx0WydncmF5LTgwMCcsICcwLjI3OCAwLjAzMyAyNTYuODQ4J10sXG5cdFsnZ3JheS05MDAnLCAnMC4yMSAwLjAzNCAyNjQuNjY1J10sXG5cdFsnZ3JheS05NTAnLCAnMC4xMyAwLjAyOCAyNjEuNjkyJ10sXG5cdFsnemluYy01MCcsICcwLjk4NSAwIDAnXSxcblx0Wyd6aW5jLTEwMCcsICcwLjk2NyAwLjAwMSAyODYuMzc1J10sXG5cdFsnemluYy0yMDAnLCAnMC45MiAwLjAwNCAyODYuMzInXSxcblx0Wyd6aW5jLTMwMCcsICcwLjg3MSAwLjAwNiAyODYuMjg2J10sXG5cdFsnemluYy00MDAnLCAnMC43MDUgMC4wMTUgMjg2LjA2NyddLFxuXHRbJ3ppbmMtNTAwJywgJzAuNTUyIDAuMDE2IDI4NS45MzgnXSxcblx0Wyd6aW5jLTYwMCcsICcwLjQ0MiAwLjAxNyAyODUuNzg2J10sXG5cdFsnemluYy03MDAnLCAnMC4zNyAwLjAxMyAyODUuODA1J10sXG5cdFsnemluYy04MDAnLCAnMC4yNzQgMC4wMDYgMjg2LjAzMyddLFxuXHRbJ3ppbmMtOTAwJywgJzAuMjEgMC4wMDYgMjg1Ljg4NSddLFxuXHRbJ3ppbmMtOTUwJywgJzAuMTQxIDAuMDA1IDI4NS44MjMnXSxcblx0WyduZXV0cmFsLTUwJywgJzAuOTg1IDAgMCddLFxuXHRbJ25ldXRyYWwtMTAwJywgJzAuOTcgMCAwJ10sXG5cdFsnbmV1dHJhbC0yMDAnLCAnMC45MjIgMCAwJ10sXG5cdFsnbmV1dHJhbC0zMDAnLCAnMC44NyAwIDAnXSxcblx0WyduZXV0cmFsLTQwMCcsICcwLjcwOCAwIDAnXSxcblx0WyduZXV0cmFsLTUwMCcsICcwLjU1NiAwIDAnXSxcblx0WyduZXV0cmFsLTYwMCcsICcwLjQzOSAwIDAnXSxcblx0WyduZXV0cmFsLTcwMCcsICcwLjM3MSAwIDAnXSxcblx0WyduZXV0cmFsLTgwMCcsICcwLjI2OSAwIDAnXSxcblx0WyduZXV0cmFsLTkwMCcsICcwLjIwNSAwIDAnXSxcblx0WyduZXV0cmFsLTk1MCcsICcwLjE0NSAwIDAnXSxcblx0WydzdG9uZS01MCcsICcwLjk4NSAwLjAwMSAxMDYuNDIzJ10sXG5cdFsnc3RvbmUtMTAwJywgJzAuOTcgMC4wMDEgMTA2LjQyNCddLFxuXHRbJ3N0b25lLTIwMCcsICcwLjkyMyAwLjAwMyA0OC43MTcnXSxcblx0WydzdG9uZS0zMDAnLCAnMC44NjkgMC4wMDUgNTYuMzY2J10sXG5cdFsnc3RvbmUtNDAwJywgJzAuNzA5IDAuMDEgNTYuMjU5J10sXG5cdFsnc3RvbmUtNTAwJywgJzAuNTUzIDAuMDEzIDU4LjA3MSddLFxuXHRbJ3N0b25lLTYwMCcsICcwLjQ0NCAwLjAxMSA3My42MzknXSxcblx0WydzdG9uZS03MDAnLCAnMC4zNzQgMC4wMSA2Ny41NTgnXSxcblx0WydzdG9uZS04MDAnLCAnMC4yNjggMC4wMDcgMzQuMjk4J10sXG5cdFsnc3RvbmUtOTAwJywgJzAuMjE2IDAuMDA2IDU2LjA0MyddLFxuXHRbJ3N0b25lLTk1MCcsICcwLjE0NyAwLjAwNCA0OS4yNSddLFxuXHRbJ2JsYWNrJywgJzAgMCAwJ10sXG5cdFsnd2hpdGUnLCAnMSAwIDAnXSxcbl0pXG5cbmV4cG9ydCBjb25zdCBSRVNFVCA9IFtcblx0JyosKjo6YmVmb3JlLCo6OmFmdGVyIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgYm9yZGVyLXdpZHRoOiAwOyBib3JkZXItc3R5bGU6IHNvbGlkOyBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwIH0nLFxuXHQndWwsb2wgeyBsaXN0LXN0eWxlOiBub25lIH0nLFxuXHQnaDEsaDIsaDMsaDQsaDUsaDYgeyBmb250LXNpemU6IGluaGVyaXQ7IGZvbnQtd2VpZ2h0OiBpbmhlcml0IH0nLFxuXHQnaW5wdXQsYnV0dG9uLHRleHRhcmVhLHNlbGVjdCB7IGZvbnQ6IGluaGVyaXQgfScsXG5cdCdib2R5LGh0bWwgeyBoZWlnaHQ6IDEwMCUgfScsXG5cdCdpbWcsdmlkZW8geyBtYXgtd2lkdGg6IDEwMCU7IGhlaWdodDogYXV0byB9Jyxcblx0J2NpdGUgeyBmb250LXN0eWxlOiBub3JtYWwgfScsXG5cdCdhIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBjb2xvcjogaW5oZXJpdCB9Jyxcblx0J2J1dHRvbiB7IHRleHQtYWxpZ246IHVuc2V0OyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgY29sb3I6IGluaGVyaXQgfScsXG5cdCdib2R5IHsgb3ZlcmZsb3cteTogc2Nyb2xsIH0nLFxuXHQnc3ZnIHsgZGlzcGxheTogYmxvY2sgfScsXG5cdCc6OnBsYWNlaG9sZGVyIHsgY29sb3I6IGN1cnJlbnRDb2xvcjsgb3BhY2l0eTogMC44IH0nLFxuXHQnW3R3XTpub3QoW2NsYXNzXSkgeyBkaXNwbGF5OiBub25lIH0nLCAvLyBQcmV2ZW50IHJlcGFpbnQuXG5dXG5cbmV4cG9ydCBjb25zdCBDT0xPUl9QUk9QUyA9IG5ldyBNYXAoW1xuXHRbJ3RleHQnLCAnY29sb3InXSxcblx0WydkZWNvcmF0aW9uJywgJ3RleHQtZGVjb3JhdGlvbi1jb2xvciddLFxuXHRbJ2JnJywgJ2JhY2tncm91bmQtY29sb3InXSxcblx0Wydib3JkZXInLCAnYm9yZGVyLWNvbG9yJ10sXG5cdFsnb3V0bGluZScsICdvdXRsaW5lLWNvbG9yJ10sXG5cdFsnYWNjZW50JywgJ2FjY2VudC1jb2xvciddLFxuXHRbJ2NhcmV0JywgJ2NhcmV0LWNvbG9yJ10sXG5cdFsnZmlsbCcsICdmaWxsJ10sXG5cdFsnc3Ryb2tlJywgJ3N0cm9rZSddLFxuXSlcblxuZXhwb3J0IGNvbnN0IEZSRUVfUFJPUFMgPSBuZXcgTWFwKFtcblx0Wydjb250ZW50JywgJ2NvbnRlbnQnXSxcblx0Wyd0b3AnLCAndG9wJ10sXG5cdFsncmlnaHQnLCAncmlnaHQnXSxcblx0Wydib3R0b20nLCAnYm90dG9tJ10sXG5cdFsnbGVmdCcsICdsZWZ0J10sXG5cdFsnc3RhcnQnLCAnaW5zZXQtaW5saW5lLXN0YXJ0J10sXG5cdFsnZW5kJywgJ2luc2V0LWlubGluZS1lbmQnXSxcblx0WydiYXNpcycsICdmbGV4LWJhc2lzJ10sXG5cdFsnZ2FwJywgJ2dhcCddLFxuXHRbJ2dhcC14JywgJ2NvbHVtbi1nYXAnXSxcblx0WydnYXAteScsICdyb3ctZ2FwJ10sXG5cdFsncCcsICdwYWRkaW5nJ10sXG5cdFsncHgnLCAncGFkZGluZy1pbmxpbmUnXSxcblx0WydweScsICdwYWRkaW5nLWJsb2NrJ10sXG5cdFsncHQnLCAncGFkZGluZy10b3AnXSxcblx0WydwcicsICdwYWRkaW5nLXJpZ2h0J10sXG5cdFsncGInLCAncGFkZGluZy1ib3R0b20nXSxcblx0WydwbCcsICdwYWRkaW5nLWxlZnQnXSxcblx0WydwcycsICdwYWRkaW5nLWlubGluZS1zdGFydCddLFxuXHRbJ3BlJywgJ3BhZGRpbmctaW5saW5lLWVuZCddLFxuXHRbJ20nLCAnbWFyZ2luJ10sXG5cdFsnbXgnLCAnbWFyZ2luLWlubGluZSddLFxuXHRbJ215JywgJ21hcmdpbi1ibG9jayddLFxuXHRbJ210JywgJ21hcmdpbi10b3AnXSxcblx0WydtcicsICdtYXJnaW4tcmlnaHQnXSxcblx0WydtbCcsICdtYXJnaW4tbGVmdCddLFxuXHRbJ21iJywgJ21hcmdpbi1ib3R0b20nXSxcblx0WydtcycsICdtYXJnaW4taW5saW5lLXN0YXJ0J10sXG5cdFsnbWUnLCAnbWFyZ2luLWlubGluZS1lbmQnXSxcblx0WydzcGFjZS14JywgJ21hcmdpbi1pbmxpbmUtZW5kJ10sXG5cdFsnc3BhY2UteScsICdtYXJnaW4tYm90dG9tJ10sXG5cdFsndycsICd3aWR0aCddLFxuXHRbJ21pbi13JywgJ21pbi13aWR0aCddLFxuXHRbJ21heC13JywgJ21heC13aWR0aCddLFxuXHRbJ2gnLCAnaGVpZ2h0J10sXG5cdFsnbWluLWgnLCAnbWluLWhlaWdodCddLFxuXHRbJ21heC1oJywgJ21heC1oZWlnaHQnXSxcblx0WydpbmRlbnQnLCAndGV4dC1pbmRlbnQnXSxcblx0Wydib3JkZXItc3BhY2luZycsICdib3JkZXItc3BhY2luZyddLFxuXHRbJ3RyYW5zbGF0ZS14JywgJ3RyYW5zbGF0ZS14J10sXG5cdFsndHJhbnNsYXRlLXknLCAndHJhbnNsYXRlLXknXSxcblx0Wyd0cmFuc2xhdGUteicsICd0cmFuc2xhdGUteiddLFxuXHRbJ3Njcm9sbC1tJywgJ3Njcm9sbC1tYXJnaW4nXSxcblx0WydzY3JvbGwtbXgnLCAnc2Nyb2xsLW1hcmdpbi1pbmxpbmUnXSxcblx0WydzY3JvbGwtbXknLCAnc2Nyb2xsLW1hcmdpbi1ibG9jayddLFxuXHRbJ3Njcm9sbC1tdCcsICdzY3JvbGwtbWFyZ2luLXRvcCddLFxuXHRbJ3Njcm9sbC1tcicsICdzY3JvbGwtbWFyZ2luLXJpZ2h0J10sXG5cdFsnc2Nyb2xsLW1sJywgJ3Njcm9sbC1tYXJnaW4tbGVmdCddLFxuXHRbJ3Njcm9sbC1tYicsICdzY3JvbGwtbWFyZ2luLWJvdHRvbSddLFxuXHRbJ3Njcm9sbC1tcycsICdzY3JvbGwtbWFyZ2luLWlubGluZS1zdGFydCddLFxuXHRbJ3Njcm9sbC1tZScsICdzY3JvbGwtbWFyZ2luLWlubGluZS1lbmQnXSxcblx0WydzY3JvbGwtcCcsICdzY3JvbGwtcGFkZGluZyddLFxuXHRbJ3Njcm9sbC1weCcsICdzY3JvbGwtcGFkZGluZy1pbmxpbmUnXSxcblx0WydzY3JvbGwtcHknLCAnc2Nyb2xsLXBhZGRpbmctYmxvY2snXSxcblx0WydzY3JvbGwtcHQnLCAnc2Nyb2xsLXBhZGRpbmctdG9wJ10sXG5cdFsnc2Nyb2xsLXByJywgJ3Njcm9sbC1wYWRkaW5nLXJpZ2h0J10sXG5cdFsnc2Nyb2xsLXBsJywgJ3Njcm9sbC1wYWRkaW5nLWxlZnQnXSxcblx0WydzY3JvbGwtcGInLCAnc2Nyb2xsLXBhZGRpbmctYm90dG9tJ10sXG5cdFsnc2Nyb2xsLXBzJywgJ3Njcm9sbC1wYWRkaW5nLWlubGluZS1zdGFydCddLFxuXHRbJ3Njcm9sbC1wZScsICdzY3JvbGwtcGFkZGluZy1pbmxpbmUtZW5kJ11cbl0pXG5cbmV4cG9ydCBjb25zdCBNRURJQV9RVUVSSUVTID0gbmV3IE1hcChbXG5cdFsnc20nLCAnQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpJ10sXG5cdFsnbWQnLCAnQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5NTlweCknXSxcblx0WydsZycsICdAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5NjBweCknXSxcblx0WydsaWdodCcsICdAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBsaWdodCknXSxcblx0WydkYXJrJywgJ0BtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspJ10sXG5cdFsnQDN4cycsICdAY29udGFpbmVyICh3aWR0aCA+PSAyNTZweCknXSxcblx0WydAMnhzJywgJ0Bjb250YWluZXIgKHdpZHRoID49IDI4OHB4KSddLFxuXHRbJ0B4cycsICdAY29udGFpbmVyICh3aWR0aCA+PSAzMjBweCknXSxcblx0WydAc20nLCAnQGNvbnRhaW5lciAod2lkdGggPj0gMzg0cHgpJ10sXG5cdFsnQG1kJywgJ0Bjb250YWluZXIgKHdpZHRoID49IDQ0OHB4KSddLFxuXHRbJ0BsZycsICdAY29udGFpbmVyICh3aWR0aCA+PSA1MTJweCknXSxcblx0WydAeGwnLCAnQGNvbnRhaW5lciAod2lkdGggPj0gNTc2cHgpJ10sXG5cdFsnQDJ4bCcsICdAY29udGFpbmVyICh3aWR0aCA+PSA2NzJweCknXSxcblx0WydAM3hsJywgJ0Bjb250YWluZXIgKHdpZHRoID49IDc2OHB4KSddLFxuXHRbJ0A0eGwnLCAnQGNvbnRhaW5lciAod2lkdGggPj0gODk2cHgpJ10sXG5cdFsnQDV4bCcsICdAY29udGFpbmVyICh3aWR0aCA+PSAxMDI0cHgpJ10sXG5cdFsnQDZ4bCcsICdAY29udGFpbmVyICh3aWR0aCA+PSAxMTUycHgpJ10sXG5cdFsnQDd4bCcsICdAY29udGFpbmVyICh3aWR0aCA+PSAxMjgwcHgpJ11cbl0pXG5cbmV4cG9ydCBjb25zdCBLRVlGUkFNRVMgPSBuZXcgTWFwKFtcblx0WydleHBhbmQnLCAnZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KSB9IHRvIHsgb3BhY2l0eTogMSB9J10sXG5cdFsndG9hc3QnLCAnZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0OHB4KSB9IHRvIHsgb3BhY2l0eTogMSB9J10sXG5cdFsnZmFkZScsICcwJSB7IG9wYWNpdHk6IDAgfSAxMDAlIHsgb3BhY2l0eTogMSB9J10sXG5dKVxuXG5jb25zdCBDTEFTU19QQVJTRVIgPSBuZXcgUmVnRXhwKGAoKD88bXE+W2EtekBdKyk6KT8oKD88c3RhdGU+JHtTVEFURVMuam9pbignfCcpfSk6KT8oPzx1dGlsPlteXFxcXFtdKyhcXFxcWyg/PHZhbHVlPlteXFxcXF1dKylcXFxcXSk/KWApXG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBVdGlsaXR5IGNsYXNzZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmV4cG9ydCBjb25zdCBVVElMUyA9IG5ldyBNYXAoW1xuXHQvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblx0Ly8gTGF5b3V0IC0gYXNwZWN0LXJhdGlvXG5cdFsnQGNvbnRhaW5lcicsICd7IGNvbnRhaW5lci10eXBlOiBpbmxpbmUtc2l6ZSB9J10sXG5cdFsnYXNwZWN0LWF1dG8nLCAneyBhc3BlY3QtcmF0aW86IGF1dG8gfSddLFxuXHRbJ2FzcGVjdC1zcXVhcmUnLCAneyBhc3BlY3QtcmF0aW86IDEgLyAxIH0nXSxcblx0Wydhc3BlY3QtdmlkZW8nLCAneyBhc3BlY3QtcmF0aW86IDE2IC8gOSB9J10sXG5cdC8vIExheW91dCAtIGNvbHVtbnNcblx0Li4uZ2VuKGlpID0+IFtgY29sdW1ucy0ke2lpfWAsIGBjb2x1bW5zOiAke2lpfWBdLCBbLi4uVFdFTFZFLCAnYXV0byddKSxcblx0Ly8gTGF5b3V0IC0gYnJlYWstYWZ0ZXJcblx0Li4uZ2VuKGlpID0+IFtgYnJlYWstYWZ0ZXItJHtpaX1gLCBgYnJlYWstYWZ0ZXI6ICR7aWl9YF0sIFsnYXV0bycsICdhdm9pZCcsICdhbGwnLCAnYXZvaWQtcGFnZScsICdwYWdlJywgJ2xlZnQnLCAncmlnaHQnLCAnY29sdW1uJ10pLFxuXHQvLyBMYXlvdXQgLSBicmVhay1iZWZvcmVcblx0Li4uZ2VuKGlpID0+IFtgYnJlYWstYmVmb3JlLSR7aWl9YCwgYGJyZWFrLWFmdGVyOiAke2lpfWBdLCBbJ2F1dG8nLCAnYXZvaWQnLCAnYWxsJywgJ2F2b2lkLXBhZ2UnLCAncGFnZScsICdsZWZ0JywgJ3JpZ2h0JywgJ2NvbHVtbiddKSxcblx0Ly8gTGF5b3V0IC0gYnJlYWstaW5zaWRlXG5cdC4uLmdlbihpaSA9PiBbYGJyZWFrLWluc2lkZS0ke2lpfWAsIGBicmVhay1pbnNpZGU6ICR7aWl9YF0sIFsnYXV0bycsICdhdm9pZCcsICdhdm9pZC1wYWdlJywgJ2F2b2lkLWNvbHVtbiddKSxcblx0Ly8gTGF5b3V0IC0gYm94LWRlY29yYXRpb24tYnJlYWtcblx0Li4uZ2VuKGlpID0+IFtgYm94LWRlY29yYXRpb24tJHtpaX1gLCBgYm94LWRlY29yYXRpb24tYnJlYWs6ICR7aWl9YF0sIFsnY2xvbmUnLCAnc2xpY2UnXSksXG5cdC8vIExheW91dCAtIGJveC1zaXppbmdcblx0Li4uZ2VuKGlpID0+IFtgYm94LSR7aWl9YCwgYGJveC1zaXppbmc6ICR7aWl9LWJveGBdLCBbJ2JvcmRlcicsICdjb250ZW50J10pLFxuXHQvLyBMYXlvdXQgLSBkaXNwbGF5XG5cdC4uLmdlbihpaSA9PiBbYCR7aWl9YCwgYGRpc3BsYXk6ICR7aWl9YF0sIFsnaW5saW5lJywgJ2Jsb2NrJywgJ2lubGluZS1ibG9jaycsICdmbG93LXJvb3QnLCAnZmxleCcsICdpbmxpbmUtZmxleCcsICdncmlkJywgJ2lubGluZS1ncmlkJywgJ2NvbnRlbnRzJywgJ3RhYmxlJywgJ2lubGluZS10YWJsZScsICdsaXN0LWl0ZW0nXSksXG5cdFsnaGlkZGVuJywgJ3sgZGlzcGxheTogbm9uZSB9J10sXG5cdFsnc3Itb25seScsICd7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmc6IDA7IG1hcmdpbjogLTFweDsgb3ZlcmZsb3c6IGhpZGRlbjsgY2xpcDogcmVjdCgwLCAwLCAwLCAwKTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgYm9yZGVyLXdpZHRoOiAwIH0nXSxcblx0Wydub3Qtc3Itb25seScsICd7IHBvc2l0aW9uOiBzdGF0aWM7IHdpZHRoOiBhdXRvOyBoZWlnaHQ6IGF1dG87IHBhZGRpbmc6IDA7IG1hcmdpbjogMDsgb3ZlcmZsb3c6IHZpc2libGU7IGNsaXA6IGF1dG87IHdoaXRlLXNwYWNlOiBub3JtYWwgfSddLFxuXHQvLyBMYXlvdXQgLSBmbG9hdFxuXHQuLi5nZW4oaWkgPT4gW2BmbG9hdC0ke2lpfWAsIGBmbG9hdDogaW5saW5lLSR7aWl9YF0sIFsnc3RhcnQnLCAnZW5kJ10pLFxuXHQuLi5nZW4oaWkgPT4gW2BmbG9hdC0ke2lpfWAsIGBmbG9hdDogJHtpaX1gXSwgWydsZWZ0JywgJ3JpZ2h0JywgJ25vbmUnXSksXG5cdC8vIExheW91dCAtIGNsZWFyXG5cdC4uLmdlbihpaSA9PiBbYGNsZWFyLSR7aWl9YCwgYGNsZWFyOiBpbmxpbmUtJHtpaX1gXSwgWydzdGFydCcsICdlbmQnXSksXG5cdC4uLmdlbihpaSA9PiBbYGNsZWFyLSR7aWl9YCwgYGNsZWFyOiAke2lpfWBdLCBbJ2xlZnQnLCAncmlnaHQnLCAnYm90aCcsICdub25lJ10pLFxuXHQvLyBMYXlvdXQgLSBpc29sYXRpb25cblx0Wydpc29sYXRlJywgJ3sgaXNvbGF0aW9uOiBpc29sYXRlIH0nXSxcblx0Wydpc29sYXRpb24tYXV0bycsICd7IGlzb2xhdGlvbjogYXV0byB9J10sXG5cdC8vIExheW91dCAtIG9iamVjdC1maXRcblx0Li4uZ2VuKGlpID0+IFtgb2JqZWN0LSR7aWl9YCwgYG9iamVjdC1maXQ6ICR7aWl9YF0sIFsnY29udGFpbicsICdjb3ZlcicsICdmaWxsJywgJ25vbmUnLCAnc2NhbGUtZG93biddKSxcblx0Ly8gTGF5b3V0IC0gb2JqZWN0LXBvc2l0aW9uXG5cdC4uLmdlbihpaSA9PiBbYG9iamVjdC0ke2lpLnJlcGxhY2UoLyAvZywgJy0nKX1gLCBgb2JqZWN0LXBvc2l0aW9uOiAke2lpfWBdLCBbJ2JvdHRvbScsICdjZW50ZXInLCAnbGVmdCcsICdsZWZ0IGJvdHRvbScsICdsZWZ0IHRvcCcsICdyaWdodCcsICdyaWdodCBib3R0b20nLCAncmlnaHQgdG9wJywgJ3RvcCddKSxcblx0Ly8gTGF5b3V0IC0gb3ZlcmZsb3dcblx0Li4uZ2VuKGlpID0+IFtgb3ZlcmZsb3ctJHtpaX1gLCBgb3ZlcmZsb3c6ICR7aWl9YF0sIFsnYXV0bycsICdoaWRkZW4nLCAnY2xpcCcsICd2aXNpYmxlJywgJ3Njcm9sbCcsICd2aXNpYmxlJ10pLFxuXHQuLi5nZW4oaWkgPT4gW2BvdmVyZmxvdy14LSR7aWl9YCwgYG92ZXJmbG93LXg6ICR7aWl9YF0sIFsnYXV0bycsICdoaWRkZW4nLCAnY2xpcCcsICd2aXNpYmxlJywgJ3Njcm9sbCcsICd2aXNpYmxlJ10pLFxuXHQuLi5nZW4oaWkgPT4gW2BvdmVyZmxvdy15LSR7aWl9YCwgYG92ZXJmbG93LXk6ICR7aWl9YF0sIFsnYXV0bycsICdoaWRkZW4nLCAnY2xpcCcsICd2aXNpYmxlJywgJ3Njcm9sbCcsICd2aXNpYmxlJ10pLFxuXHQvLyBMYXlvdXQgLSBvdmVyc2Nyb2xsLWJlaGF2aW9yXG5cdC4uLmdlbihpaSA9PiBbYG92ZXJzY3JvbGwtJHtpaX1gLCBgb3ZlcnNjcm9sbC1iZWhhdmlvcjogJHtpaX1gXSwgWydhdXRvJywgJ2NvbnRhaW4nLCAnbm9uZSddKSxcblx0Li4uZ2VuKGlpID0+IFtgb3ZlcnNjcm9sbC14LSR7aWl9YCwgYG92ZXJzY3JvbGwtYmVoYXZpb3IteDogJHtpaX1gXSwgWydhdXRvJywgJ2NvbnRhaW4nLCAnbm9uZSddKSxcblx0Li4uZ2VuKGlpID0+IFtgb3ZlcnNjcm9sbC15LSR7aWl9YCwgYG92ZXJzY3JvbGwtYmVoYXZpb3IteTogJHtpaX1gXSwgWydhdXRvJywgJ2NvbnRhaW4nLCAnbm9uZSddKSxcblx0Ly8gTGF5b3V0IC0gcG9zaXRpb25cblx0Li4uZ2VuKGlpID0+IFtgJHtpaX1gLCBgcG9zaXRpb246ICR7aWl9YF0sIFsnc3RhdGljJywgJ2ZpeGVkJywgJ2Fic29sdXRlJywgJ3JlbGF0aXZlJywgJ3N0aWNreSddKSxcblx0Ly8gTGF5b3V0IC0gdG9wIC8gcmlnaHQgLyBib3R0b20gLyBsZWZ0XG5cdC4uLmdlbnMoJ3RvcCcpLFxuXHQuLi5nZW5zKCdyaWdodCcpLFxuXHQuLi5nZW5zKCdib3R0b20nKSxcblx0Li4uZ2VucygnbGVmdCcpLFxuXHQuLi5nZW5zKCdzdGFydCcsIHsgcHJvcDogJ2luc2V0LWlubGluZS1zdGFydCcgfSksXG5cdC4uLmdlbnMoJ2VuZCcsIHsgcHJvcDogJ2luc2V0LWlubGluZS1lbmQnIH0pLFxuXHQvLyBMYXlvdXQgLSB2aXNpYmlsaXR5XG5cdFsndmlzaWJsZScsICd7IHZpc2liaWxpdHk6IHZpc2libGUgfSddLFxuXHRbJ2ludmlzaWJsZScsICd7IHZpc2liaWxpdHk6IGhpZGRlbiB9J10sXG5cdFsnY29sbGFwc2UnLCAneyB2aXNpYmlsaXR5OiBjb2xsYXBzZSB9J10sXG5cdC8vIExheW91dCAtIHotaW5kZXhcblx0Li4uZ2VuKGlpID0+IFtgei0ke2lpfWAsIGB6LWluZGV4OiAke2lpfWBdLCBbMCwgMTAsIDIwLCAzMCwgNDAsIDUwLCAnYXV0byddKSxcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIEZsZXhib3ggJiBHcmlkIC0gZmxleC1iYXNpc1xuXHQuLi5nZW5zKCdiYXNpcycsIHsgcHJvcDogJ2ZsZXgtYmFzaXMnIH0pLFxuXHQvLyBGbGV4Ym94ICYgR3JpZCAtIGZsZXgtZGlyZWN0aW9uXG5cdFsnZmxleC1yb3cnLCAneyBmbGV4LWRpcmVjdGlvbjogcm93IH0nXSxcblx0WydmbGV4LXJvdy1yZXZlcnNlJywgJ3sgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlIH0nXSxcblx0WydmbGV4LWNvbCcsICd7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gfSddLFxuXHRbJ2ZsZXgtY29sLXJldmVyc2UnLCAneyBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UgfSddLFxuXHQvLyBGbGV4Ym94ICYgR3JpZCAtIGZsZXgtd3JhcFxuXHQuLi5nZW4oaWkgPT4gW2BmbGV4LSR7aWl9YCwgYGZsZXgtd3JhcDogJHtpaX1gXSwgWydub3dyYXAnLCAnd3JhcCcsICd3cmFwLXJldmVyc2UnXSksXG5cdC8vIEZsZXhib3ggJiBHcmlkIC0gZmxleFxuXHRbJ2ZsZXgtMScsICd7IGZsZXg6IDEgMSAwJSB9J10sXG5cdFsnZmxleC1hdXRvJywgJ3sgZmxleDogMSAxIGF1dG8gfSddLFxuXHRbJ2ZsZXgtaW5pdGlhbCcsICd7IGZsZXg6IDAgMSBhdXRvIH0nXSxcblx0WydmbGV4LW5vbmUnLCAneyBmbGV4OiBub25lIH0nXSxcblx0Ly8gRmxleGJveCAmIEdyaWQgLSBmbGV4LWdyb3dcblx0Wydncm93JywgJ3sgZmxleC1ncm93OiAxIH0nXSxcblx0Wydncm93LTAnLCAneyBmbGV4LWdyb3c6IDAgfSddLFxuXHQvLyBGbGV4Ym94ICYgR3JpZCAtIGZsZXgtc2hyaW5rXG5cdFsnc2hyaW5rJywgJ3sgZmxleC1zaHJpbms6IDEgfSddLFxuXHRbJ3Nocmluay0wJywgJ3sgZmxleC1zaHJpbms6IDAgfSddLFxuXHQvLyBGbGV4Ym94ICYgR3JpZCAtIG9yZGVyXG5cdC4uLmdlbihpaSA9PiBbYG9yZGVyLSR7aWl9YCwgYGNvbHVtbnM6ICR7aWl9YF0sIFRXRUxWRSksXG5cdFsnb3JkZXItZmlyc3QnLCAneyBvcmRlcjogLTk5OTkgfSddLFxuXHRbJ29yZGVyLWxhc3QnLCAneyBvcmRlcjogOTk5OSB9J10sXG5cdFsnb3JkZXItbm9uZScsICd7IG9yZGVyOiAwIH0nXSxcblx0Ly8gRmxleGJveCAmIEdyaWQgLSBncmlkLXRlbXBsYXRlLWNvbHVtbnNcblx0Li4uZ2VuKGlpID0+IFtgZ3JpZC1jb2xzLSR7aWl9YCwgYGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCR7aWl9LCBtaW5tYXgoMCwgMWZyKSlgXSwgVFdFTFZFKSxcblx0WydncmlkLWNvbHMtbm9uZScsICd7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogbm9uZSB9J10sXG5cdFsnZ3JpZC1jb2xzLXN1YmdyaWQnLCAneyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHN1YmdyaWQgfSddLFxuXHQvLyBGbGV4Ym94ICYgR3JpZCAtIGdyaWQtY29sdW1uXG5cdFsnY29sLWF1dG8nLCAneyBncmlkLWNvbHVtbjogYXV0byB9J10sXG5cdC4uLmdlbihpaSA9PiBbYGNvbC1zcGFuLSR7aWl9YCwgYGdyaWQtY29sdW1uOiBzcGFuICR7aWl9IC8gc3BhbiAke2lpfWBdLCBUV0VMVkUpLFxuXHRbJ2NvbC1zcGFuLWZ1bGwnLCAneyBncmlkLWNvbHVtbjogMSAvIC0xIH0nXSxcblx0Wydjb2wtc3RhcnQtYXV0bycsICd7IGdyaWQtY29sdW1uLXN0YXJ0OiBhdXRvIH0nXSxcblx0Li4uZ2VuKGlpID0+IFtgY29sLXN0YXJ0LSR7aWl9YCwgYGdyaWQtY29sdW1uLXN0YXJ0OiAke2lpfWBdLCBbLi4uVFdFTFZFLCAxM10pLFxuXHQvLyBGbGV4Ym94ICYgR3JpZCAtIGdyaWQtdGVtcGxhdGUtcm93c1xuXHQuLi5nZW4oaWkgPT4gW2BncmlkLXJvd3MtJHtpaX1gLCBgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoJHtpaX0sIGF1dG8pYF0sIFRXRUxWRSksXG5cdFsnZ3JpZC1yb3dzLW5vbmUnLCAneyBncmlkLXRlbXBsYXRlLXJvd3M6IG5vbmUgfSddLFxuXHRbJ2dyaWQtcm93cy1zdWJncmlkJywgJ3sgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBzdWJncmlkIH0nXSxcblx0Ly8gRmxleGJveCAmIEdyaWQgLSBncmlkLXJvd1xuXHRbJ3Jvdy1hdXRvJywgJ3sgZ3JpZC1yb3c6IGF1dG8gfSddLFxuXHQuLi5nZW4oaWkgPT4gW2Byb3ctc3Bhbi0ke2lpfWAsIGBncmlkLXJvdzogc3BhbiAke2lpfSAvIHNwYW4gJHtpaX1gXSwgVFdFTFZFKSxcblx0Wydyb3ctc3Bhbi1mdWxsJywgJ3sgZ3JpZC1yb3c6IDEgLyAtMSB9J10sXG5cdFsncm93LXN0YXJ0LWF1dG8nLCAneyBncmlkLXJvdy1zdGFydDogYXV0byB9J10sXG5cdC4uLmdlbihpaSA9PiBbYHJvdy1zdGFydC0ke2lpfWAsIGBncmlkLXJvdy1zdGFydDogJHtpaX1gXSwgWy4uLlRXRUxWRSwgMTNdKSxcblx0Ly8gRmxleGJveCAmIEdyaWQgLSBncmlkLWF1dG8tZmxvd1xuXHRbJ2dyaWQtZmxvdy1yb3cnLCAneyBncmlkLWF1dG8tZmxvdzogcm93IH0nXSxcblx0WydncmlkLWZsb3ctY29sJywgJ3sgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbiB9J10sXG5cdFsnZ3JpZC1mbG93LWRlbnNlJywgJ3sgZ3JpZC1hdXRvLWZsb3c6IGRlbnNlIH0nXSxcblx0WydncmlkLWZsb3ctcm93LWRlbnNlJywgJ3sgZ3JpZC1hdXRvLWZsb3c6IHJvdyBkZW5zZSB9J10sXG5cdFsnZ3JpZC1mbG93LWNvbC1kZW5zZScsICd7IGdyaWQtYXV0by1mbG93OiBjb2x1bW4gZGVuc2UgfSddLFxuXHQvLyBGbGV4Ym94ICYgR3JpZCAtIGdyaWQtYXV0by1jb2x1bW5zXG5cdFsnYXV0by1jb2xzLWF1dG8nLCAneyBncmlkLWF1dG8tY29sdW1uczogYXV0byB9J10sXG5cdFsnYXV0by1jb2xzLW1pbicsICd7IGdyaWQtYXV0by1jb2x1bW5zOiBtaW4tY29udGVudCB9J10sXG5cdFsnYXV0by1jb2xzLW1heCcsICd7IGdyaWQtYXV0by1jb2x1bW5zOiBtYXgtY29udGVudCB9J10sXG5cdFsnYXV0by1jb2xzLWZyJywgJ3sgZ3JpZC1hdXRvLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIH0nXSxcblx0Ly8gRmxleGJveCAmIEdyaWQgLSBncmlkLWF1dG8tcm93c1xuXHRbJ2F1dG8tcm93cy1hdXRvJywgJ3sgZ3JpZC1hdXRvLXJvd3M6IGF1dG8gfSddLFxuXHRbJ2F1dG8tcm93cy1taW4nLCAneyBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQgfSddLFxuXHRbJ2F1dG8tcm93cy1tYXgnLCAneyBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQgfSddLFxuXHRbJ2F1dG8tcm93cy1mcicsICd7IGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMCwgMWZyKSB9J10sXG5cdC8vIEZsZXhib3ggJiBHcmlkIC0gZ2FwXG5cdC4uLmdlbnMoJ2dhcCcsIHsgZnJhY3Rpb25zOiBmYWxzZSB9KSxcblx0WydnYXAtcHgnLCAneyBnYXA6IDFweCB9J10sXG5cdC4uLmdlbnMoJ2dhcC14JywgeyBwcm9wOiAnY29sdW1uLWdhcCcsIGZyYWN0aW9uczogZmFsc2UgfSksXG5cdFsnZ2FwLXgtcHgnLCAneyBjb2x1bW4tZ2FwOiAxcHggfSddLFxuXHQuLi5nZW5zKCdnYXAteScsIHsgcHJvcDogJ3Jvdy1nYXAnLCBmcmFjdGlvbnM6IGZhbHNlIH0pLFxuXHRbJ2dhcC15LXB4JywgJ3sgcm93LWdhcDogMXB4IH0nXSxcblx0Ly8gRmxleGJveCAmIEdyaWQgLSBqdXN0aWZ5LWNvbnRlbnRcblx0WydqdXN0aWZ5LXN0YXJ0JywgJ3sganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0IH0nXSxcblx0WydqdXN0aWZ5LWVuZCcsICd7IGp1c3RpZnktY29udGVudDogZmxleC1lbmQgfSddLFxuXHRbJ2p1c3RpZnktY2VudGVyJywgJ3sganVzdGlmeS1jb250ZW50OiBjZW50ZXIgfSddLFxuXHRbJ2p1c3RpZnktYmV0d2VlbicsICd7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbiB9J10sXG5cdFsnanVzdGlmeS1hcm91bmQnLCAneyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCB9J10sXG5cdFsnanVzdGlmeS1ldmVubHknLCAneyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSB9J10sXG5cdFsnanVzdGlmeS1zdHJldGNoJywgJ3sganVzdGlmeS1jb250ZW50OiBzdHJldGNoIH0nXSxcblx0WydqdXN0aWZ5LWJhc2VsaW5lJywgJ3sganVzdGlmeS1jb250ZW50OiBiYXNlbGluZSB9J10sXG5cdFsnanVzdGlmeS1ub3JtYWwnLCAneyBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbCB9J10sXG5cdC8vIEZsZXhib3ggJiBHcmlkIC0ganVzdGlmeS1pdGVtc1xuXHQuLi5nZW4oaWkgPT4gW2BqdXN0aWZ5LWl0ZW1zLSR7aWl9YCwgYGp1c3RpZnktaXRlbXM6ICR7aWl9YF0sIFsnc3RhcnQnLCAnZW5kJywgJ2NlbnRlcicsICdzdHJldGNoJywgJ25vcm1hbCddKSxcblx0Ly8gRmxleGJveCAmIEdyaWQgLSBqdXN0aWZ5LXNlbGZcblx0Li4uZ2VuKGlpID0+IFtganVzdGlmeS1zZWxmLSR7aWl9YCwgYGp1c3RpZnktc2VsZjogJHtpaX1gXSwgWydhdXRvJywgJ3N0YXJ0JywgJ2VuZCcsICdjZW50ZXInLCAnc3RyZXRjaCddKSxcblx0Ly8gRmxleGJveCAmIEdyaWQgLSBhbGlnbi1jb250ZW50XG5cdFsnY29udGVudC1ub3JtYWwnLCAneyBhbGlnbi1jb250ZW50OiBub3JtYWwgfSddLFxuXHRbJ2NvbnRlbnQtY2VudGVyJywgJ3sgYWxpZ24tY29udGVudDogY2VudGVyIH0nXSxcblx0Wydjb250ZW50LXN0YXJ0JywgJ3sgYWxpZ24tY29udGVudDogZmxleC1zdGFydCB9J10sXG5cdFsnY29udGVudC1lbmQnLCAneyBhbGlnbi1jb250ZW50OiBmbGV4LWVuZCB9J10sXG5cdFsnY29udGVudC1iZXR3ZWVuJywgJ3sgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbiB9J10sXG5cdFsnY29udGVudC1hcm91bmQnLCAneyBhbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQgfSddLFxuXHRbJ2NvbnRlbnQtZXZlbmx5JywgJ3sgYWxpZ24tY29udGVudDogc3BhY2UtZXZlbmx5IH0nXSxcblx0Wydjb250ZW50LWJhc2VsaW5lJywgJ3sgYWxpZ24tY29udGVudDogYmFzZWxpbmUgfSddLFxuXHRbJ2NvbnRlbnQtc3RyZXRjaCcsICd7IGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2ggfSddLFxuXHQvLyBGbGV4Ym94ICYgR3JpZCAtIGFsaWduLWl0ZW1zXG5cdFsnaXRlbXMtc3RhcnQnLCAneyBhbGlnbi1pdGVtczogZmxleC1zdGFydCB9J10sXG5cdFsnaXRlbXMtZW5kJywgJ3sgYWxpZ24taXRlbXM6IGZsZXgtZW5kIH0nXSxcblx0WydpdGVtcy1jZW50ZXInLCAneyBhbGlnbi1pdGVtczogY2VudGVyIH0nXSxcblx0WydpdGVtcy1iYXNlbGluZScsICd7IGFsaWduLWl0ZW1zOiBiYXNlbGluZSB9J10sXG5cdFsnaXRlbXMtc3RyZXRjaCcsICd7IGFsaWduLWl0ZW1zOiBzdHJldGNoIH0nXSxcblx0Ly8gRmxleGJveCAmIEdyaWQgLSBhbGlnbi1zZWxmXG5cdFsnc2VsZi1hdXRvJywgJ3sgYWxpZ24tc2VsZjogYXV0byB9J10sXG5cdFsnc2VsZi1zdGFydCcsICd7IGFsaWduLXNlbGY6IGZsZXgtc3RhcnQgfSddLFxuXHRbJ3NlbGYtZW5kJywgJ3sgYWxpZ24tc2VsZjogZmxleC1lbmQgfSddLFxuXHRbJ3NlbGYtY2VudGVyJywgJ3sgYWxpZ24tc2VsZjogY2VudGVyIH0nXSxcblx0WydzZWxmLXN0cmV0Y2gnLCAneyBhbGlnbi1zZWxmOiBzdHJldGNoIH0nXSxcblx0WydzZWxmLWJhc2VsaW5lJywgJ3sgYWxpZ24tc2VsZjogYmFzZWxpbmUgfSddLFxuXHQvLyBGbGV4Ym94ICYgR3JpZCAtIHBsYWNlLWNvbnRlbnRcblx0WydwbGFjZS1jb250ZW50LWNlbnRlcicsICd7IHBsYWNlLWNvbnRlbnQ6IGNlbnRlciB9J10sXG5cdFsncGxhY2UtY29udGVudC1zdGFydCcsICd7IHBsYWNlLWNvbnRlbnQ6IGZsZXgtc3RhcnQgfSddLFxuXHRbJ3BsYWNlLWNvbnRlbnQtZW5kJywgJ3sgcGxhY2UtY29udGVudDogZmxleC1lbmQgfSddLFxuXHRbJ3BsYWNlLWNvbnRlbnQtYmV0d2VlbicsICd7IHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gfSddLFxuXHRbJ3BsYWNlLWNvbnRlbnQtYXJvdW5kJywgJ3sgcGxhY2UtY29udGVudDogc3BhY2UtYXJvdW5kIH0nXSxcblx0WydwbGFjZS1jb250ZW50LWV2ZW5seScsICd7IHBsYWNlLWNvbnRlbnQ6IHNwYWNlLWV2ZW5seSB9J10sXG5cdFsncGxhY2UtY29udGVudC1iYXNlbGluZScsICd7IHBsYWNlLWNvbnRlbnQ6IGJhc2VsaW5lIH0nXSxcblx0WydwbGFjZS1jb250ZW50LXN0cmV0Y2gnLCAneyBwbGFjZS1jb250ZW50OiBzdHJldGNoIH0nXSxcblx0Ly8gRmxleGJveCAmIEdyaWQgLSBwbGFjZS1pdGVtc1xuXHQuLi5nZW4oaWkgPT4gW2BwbGFjZS1pdGVtcy0ke2lpfWAsIGBwbGFjZS1pdGVtczogJHtpaX1gXSwgWydzdGFydCcsICdlbmQnLCAnY2VudGVyJywgJ2Jhc2VsaW5lJywgJ3N0cmV0Y2gnXSksXG5cdC8vIEZsZXhib3ggJiBHcmlkIC0gcGxhY2Utc2VsZlxuXHQuLi5nZW4oaWkgPT4gW2BwbGFjZS1zZWxmLSR7aWl9YCwgYHBsYWNlLXNlbGY6ICR7aWl9YF0sIFsnYXV0bycsICdzdGFydCcsICdlbmQnLCAnY2VudGVyJywgJ3N0cmV0Y2gnXSksXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBTcGFjaW5nIC0gcGFkZGluZ1xuXHQuLi5nZW5zKCdwJywgeyBwcm9wOiAncGFkZGluZycsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Li4uZ2VucygncHgnLCB7IHByb3A6ICdwYWRkaW5nLWlubGluZScsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Li4uZ2VucygncHknLCB7IHByb3A6ICdwYWRkaW5nLWJsb2NrJywgZnJhY3Rpb25zOiB0cnVlIH0pLFxuXHQuLi5nZW5zKCdwdCcsIHsgcHJvcDogJ3BhZGRpbmctdG9wJywgZnJhY3Rpb25zOiB0cnVlIH0pLFxuXHQuLi5nZW5zKCdwcicsIHsgcHJvcDogJ3BhZGRpbmctcmlnaHQnLCBmcmFjdGlvbnM6IHRydWUgfSksXG5cdC4uLmdlbnMoJ3BiJywgeyBwcm9wOiAncGFkZGluZy1ib3R0b20nLCBmcmFjdGlvbnM6IHRydWUgfSksXG5cdC4uLmdlbnMoJ3BsJywgeyBwcm9wOiAncGFkZGluZy1sZWZ0JywgZnJhY3Rpb25zOiB0cnVlIH0pLFxuXHQuLi5nZW5zKCdwcycsIHsgcHJvcDogJ3BhZGRpbmctaW5saW5lLXN0YXJ0JywgZnJhY3Rpb25zOiB0cnVlIH0pLFxuXHQuLi5nZW5zKCdwZScsIHsgcHJvcDogJ3BhZGRpbmctaW5saW5lLWVuZCcsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Ly8gU3BhY2luZyAtIG1hcmdpblxuXHQuLi5nZW5zKCdtJywgeyBwcm9wOiAnbWFyZ2luJywgZnJhY3Rpb25zOiB0cnVlIH0pLFxuXHQuLi5nZW5zKCdteCcsIHsgcHJvcDogJ21hcmdpbi1pbmxpbmUnLCBmcmFjdGlvbnM6IHRydWUgfSksXG5cdC4uLmdlbnMoJ215JywgeyBwcm9wOiAnbWFyZ2luLWJsb2NrJywgZnJhY3Rpb25zOiB0cnVlIH0pLFxuXHQuLi5nZW5zKCdtdCcsIHsgcHJvcDogJ21hcmdpbi10b3AnLCBmcmFjdGlvbnM6IHRydWUgfSksXG5cdC4uLmdlbnMoJ21yJywgeyBwcm9wOiAnbWFyZ2luLXJpZ2h0JywgZnJhY3Rpb25zOiB0cnVlIH0pLFxuXHQuLi5nZW5zKCdtbCcsIHsgcHJvcDogJ21hcmdpbi1sZWZ0JywgZnJhY3Rpb25zOiB0cnVlIH0pLFxuXHQuLi5nZW5zKCdtYicsIHsgcHJvcDogJ21hcmdpbi1ib3R0b20nLCBmcmFjdGlvbnM6IHRydWUgfSksXG5cdC4uLmdlbnMoJ21zJywgeyBwcm9wOiAnbWFyZ2luLWlubGluZS1zdGFydCcsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Li4uZ2VucygnbWUnLCB7IHByb3A6ICdtYXJnaW4taW5saW5lLWVuZCcsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Li4uZ2Vucygnc3BhY2UteCcsIHsgcHJvcDogJ21hcmdpbi1pbmxpbmUtZW5kJywgZnJhY3Rpb25zOiB0cnVlLCBuZXh0OiAnPiA6bm90KDpsYXN0LWNoaWxkKSAnIH0pLFxuXHQuLi5nZW5zKCdzcGFjZS15JywgeyBwcm9wOiAnbWFyZ2luLWJvdHRvbScsIGZyYWN0aW9uczogdHJ1ZSwgbmV4dDogJz4gOm5vdCg6bGFzdC1jaGlsZCkgJyB9KSxcblx0Ly8gU2l6aW5nIC0gd2lkdGhcblx0Li4uZ2VucygndycsIHsgcHJvcDogJ3dpZHRoJywgZnJhY3Rpb25zOiB0cnVlIH0pLFxuXHQvLyBTaXppbmcgLSBtaW4td2lkdGhcblx0Li4uZ2VucygnbWluLXcnLCB7IHByb3A6ICdtaW4td2lkdGgnLCBmcmFjdGlvbnM6IHRydWUgfSksXG5cdC8vIFNpemluZyAtIG1heC13aWR0aFxuXHQuLi5nZW5zKCdtYXgtdycsIHsgcHJvcDogJ21heC13aWR0aCcsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Ly8gU2l6aW5nIC0gaGVpZ2h0XG5cdC4uLmdlbnMoJ2gnLCB7IHByb3A6ICdoZWlnaHQnLCBmcmFjdGlvbnM6IHRydWUgfSksXG5cdC8vIFNpemluZyAtIG1pbi1oZWlnaHRcblx0Li4uZ2VucygnbWluLWgnLCB7IHByb3A6ICdtaW4taGVpZ2h0JywgZnJhY3Rpb25zOiB0cnVlIH0pLFxuXHQvLyBTaXppbmcgLSBtYXgtaGVpZ2h0XG5cdC4uLmdlbnMoJ21heC1oJywgeyBwcm9wOiAnbWF4LWhlaWdodCcsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIFR5cG9ncmFwaHkgLSBmb250LWZhbWlseVxuXHRbJ2ZvbnQtc2FucycsICd7IGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiLCBcIk5vdG8gQ29sb3IgRW1vamlcIiB9J10sXG5cdFsnZm9udC1zZXJpZicsICd7IGZvbnQtZmFtaWx5OiB1aS1zZXJpZiwgR2VvcmdpYSwgQ2FtYnJpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmIH0nXSxcblx0Wydmb250LW1vbm8nLCAneyBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFwiTGliZXJhdGlvbiBNb25vXCIsIFwiQ291cmllciBOZXdcIiwgbW9ub3NwYWNlIH0nXSxcblx0Ly8gVHlwb2dyYXBoeSAtIGZvbnQtc2l6ZVxuXHRbJ3RleHQteHMnLCAneyBmb250LXNpemU6IDEycHg7IGxpbmUtaGVpZ2h0OiAxLjMzMyB9J10sXG5cdFsndGV4dC1zbScsICd7IGZvbnQtc2l6ZTogMTRweDsgbGluZS1oZWlnaHQ6IDEuNDI5IH0nXSxcblx0Wyd0ZXh0LWJhc2UnLCAneyBmb250LXNpemU6IDE2cHg7IGxpbmUtaGVpZ2h0OiAxLjUgfSddLFxuXHRbJ3RleHQtbGcnLCAneyBmb250LXNpemU6IDE4cHg7IGxpbmUtaGVpZ2h0OiAxLjU1NSB9J10sXG5cdFsndGV4dC14bCcsICd7IGZvbnQtc2l6ZTogMjBweDsgbGluZS1oZWlnaHQ6IDEuNCB9J10sXG5cdFsndGV4dC0yeGwnLCAneyBmb250LXNpemU6IDI0cHg7IGxpbmUtaGVpZ2h0OiAxLjMzMyB9J10sXG5cdFsndGV4dC0zeGwnLCAneyBmb250LXNpemU6IDMwcHg7IGxpbmUtaGVpZ2h0OiAxLjIgfSddLFxuXHRbJ3RleHQtNHhsJywgJ3sgZm9udC1zaXplOiAzNnB4OyBsaW5lLWhlaWdodDogMS4xMTEgfSddLFxuXHRbJ3RleHQtNXhsJywgJ3sgZm9udC1zaXplOiA0OHB4OyBsaW5lLWhlaWdodDogMSB9J10sXG5cdFsndGV4dC02eGwnLCAneyBmb250LXNpemU6IDYwcHg7IGxpbmUtaGVpZ2h0OiAxIH0nXSxcblx0Wyd0ZXh0LTd4bCcsICd7IGZvbnQtc2l6ZTogNzJweDsgbGluZS1oZWlnaHQ6IDEgfSddLFxuXHRbJ3RleHQtOHhsJywgJ3sgZm9udC1zaXplOiA5NnB4OyBsaW5lLWhlaWdodDogMSB9J10sXG5cdFsndGV4dC05eGwnLCAneyBmb250LXNpemU6IDEyOHB4OyBsaW5lLWhlaWdodDogMSB9J10sXG5cdC8vIFR5cG9ncmFwaHkgLSBmb250LXNtb290aGluZ1xuXHRbJ2FudGlhbGlhc2VkJywgJ3sgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7IC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGUgfSddLFxuXHRbJ3N1YnBpeGVsLWFudGlhbGlhc2VkJywgJ3sgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bzsgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGF1dG8gfSddLFxuXHQvLyBUeXBvZ3JhcGh5IC0gZm9udC1zdHlsZVxuXHRbJ2l0YWxpYycsICd7IGZvbnQtc3R5bGU6IGl0YWxpYyB9J10sXG5cdFsnbm90LWl0YWxpYycsICd7IGZvbnQtc3R5bGU6IG5vcm1hbCB9J10sXG5cdC8vIFR5cG9ncmFwaHkgLSBmb250LXdlaWdodFxuXHRbJ2ZvbnQtdGhpbicsICd7IGZvbnQtd2VpZ2h0OiAxMDAgfSddLFxuXHRbJ2ZvbnQtZXh0cmFsaWdodCcsICd7IGZvbnQtd2VpZ2h0OiAyMDAgfSddLFxuXHRbJ2ZvbnQtbGlnaHQnLCAneyBmb250LXdlaWdodDogMzAwIH0nXSxcblx0Wydmb250LW5vcm1hbCcsICd7IGZvbnQtd2VpZ2h0OiA0MDAgfSddLFxuXHRbJ2ZvbnQtbWVkaXVtJywgJ3sgZm9udC13ZWlnaHQ6IDUwMCB9J10sXG5cdFsnZm9udC1zZW1pYm9sZCcsICd7IGZvbnQtd2VpZ2h0OiA2MDAgfSddLFxuXHRbJ2ZvbnQtYm9sZCcsICd7IGZvbnQtd2VpZ2h0OiA3MDAgfSddLFxuXHRbJ2ZvbnQtZXh0cmFib2xkJywgJ3sgZm9udC13ZWlnaHQ6IDgwMCB9J10sXG5cdFsnZm9udC1ibGFjaycsICd7IGZvbnQtd2VpZ2h0OiA5MDAgfSddLFxuXHQvLyBUcHlvZ3JhcGh5IC0gZm9udC1zdHJldGNoXG5cdC4uLmdlbihpaSA9PiBbYGZvbnQtc3RyZXRjaC0ke2lpfWAsIGBmb250LXN0cmV0Y2g6ICR7aWl9YF0sIFsndWx0cmEtY29uZGVuc2VkJywgJ2V4dHJhLWNvbmRlbnNlZCcsICdjb25kZW5zZWQnLCAnc2VtaS1jb25kZW5zZWQnLCAnbm9ybWFsJywgJ3NlbWktZXhwYW5kZWQnLCAnZXhwYW5kZWQnLCAnZXh0cmEtZXhwYW5kZWQnLCAndWx0cmEtZXhwYW5kZWQnXSksXG5cdC8vIFR5cG9ncmFwaHkgLSBmb250LXZhcmlhbnQtbnVtZXJpY1xuXHRbJ25vcm1hbC1udW1zJywgJ3sgZm9udC12YXJpYW50LW51bWVyaWM6IG5vcm1hbCB9J10sXG5cdC4uLmdlbihpaSA9PiBbaWksIGBmb250LXZhcmlhbnQtbnVtZXJpYzogJHtpaX1gXSwgWydvcmRpbmFsJywgJ3NsYXNoZWQtemVybycsICdsaW5pbmctbnVtcycsICdvbGRzdHlsZS1udW1zJywgJ3Byb3BvcnRpb25hbC1udW1zJywgJ3RhYnVsYXItbnVtcycsICdkaWFnb25hbC1mcmFjdGlvbnMnLCAnc3RhY2tlZC1mcmFjdGlvbnMnXSksXG5cdC8vIFR5cG9ncmFwaHkgLSBsZXR0ZXItc3BhY2luZ1xuXHRbJ3RyYWNraW5nLXRpZ2h0ZXInLCAneyBsZXR0ZXItc3BhY2luZzogLTAuMDVlbSB9J10sXG5cdFsndHJhY2tpbmctdGlnaHQnLCAneyBsZXR0ZXItc3BhY2luZzogLTAuMDI1ZW0gfSddLFxuXHRbJ3RyYWNraW5nLW5vcm1hbCcsICd7IGxldHRlci1zcGFjaW5nOiAwIH0nXSxcblx0Wyd0cmFja2luZy13aWRlJywgJ3sgbGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW0gfSddLFxuXHRbJ3RyYWNraW5nLXdpZGVyJywgJ3sgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbSB9J10sXG5cdFsndHJhY2tpbmctd2lkZXN0JywgJ3sgbGV0dGVyLXNwYWNpbmc6IDAuMWVtIH0nXSxcblx0Ly8gVHlwb2dyYXBoeSAtIGxpbmUtY2xhbXBcblx0Li4uZ2VuKGlpID0+IFtgbGluZS1jbGFtcC0ke2lpfWAsIGBvdmVyZmxvdzogaGlkZGVuOyBkaXNwbGF5OiAtd2Via2l0LWJveDsgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDsgLXdlYmtpdC1saW5lLWNsYW1wOiAke2lpfWBdLCBbMSwgMiwgMywgNCwgNSwgNiwgJ25vbmUnXSksXG5cdC8vIFR5cG9ncmFwaHkgLSBsaW5lLWhlaWdodFxuXHRbJ2xlYWRpbmctbm9uZScsICd7IGxpbmUtaGVpZ2h0OiAxIH0nXSxcblx0WydsZWFkaW5nLXRpZ2h0JywgJ3sgbGluZS1oZWlnaHQ6IDEuMjUgfSddLFxuXHRbJ2xlYWRpbmctc251ZycsICd7IGxpbmUtaGVpZ2h0OiAxLjM3NSB9J10sXG5cdFsnbGVhZGluZy1ub3JtYWwnLCAneyBsaW5lLWhlaWdodDogMS41IH0nXSxcblx0WydsZWFkaW5nLXJlbGF4ZWQnLCAneyBsaW5lLWhlaWdodDogMS42MjUgfSddLFxuXHRbJ2xlYWRpbmctbG9vc2UnLCAneyBsaW5lLWhlaWdodDogMiB9J10sXG5cdC8vIFR5cG9ncmFwaHkgLSBsaXN0LXN0eWxlXG5cdFsnbGlzdC1pbWFnZS1ub25lJywgJ3sgbGlzdC1zdHlsZS1pbWFnZTogbm9uZSB9J10sXG5cdFsnbGlzdC1pbnNpZGUnLCAneyBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGUgfSddLFxuXHRbJ2xpc3Qtb3V0c2lkZScsICd7IGxpc3Qtc3R5bGUtcG9zaXRpb246IG91dHNpZGUgfSddLFxuXHRbJ2xpc3QtZGlzYycsICd7IGxpc3Qtc3R5bGUtdHlwZTogZGlzYyB9J10sXG5cdFsnbGlzdC1kZWNpbWFsJywgJ3sgbGlzdC1zdHlsZS10eXBlOiBkZWNpbWFsIH0nXSxcblx0WydsaXN0LW5vbmUnLCAneyBsaXN0LXN0eWxlLXR5cGU6IG5vbmUgfSddLFxuXHQvLyBUeXBvZ3JhcGh5IC0gdGV4dC1hbGlnblxuXHQuLi5nZW4oaWkgPT4gW2B0ZXh0LSR7aWl9YCwgYHRleHQtYWxpZ246ICR7aWl9YF0sIFsnbGVmdCcsICdjZW50ZXInLCAncmlnaHQnLCAnanVzdGlmeScsICdzdGFydCcsICdlbmQnXSksXG5cdC8vIFR5cG9ncmFwaHkgLSB0ZXh0LWNvbG9yXG5cdC4uLmdlbmMoJ3RleHQnLCAnY29sb3InKSxcblx0Ly8gVHlwb2dyYXBoeSAtIHRleHQtZGVjb3JhdGlvblxuXHQuLi5nZW4oaWkgPT4gW2lpLCBgdGV4dC1kZWNvcmF0aW9uOiAke2lpfWBdLCBbJ3VuZGVybGluZScsICdvdmVybGluZScsICdsaW5lLXRocm91Z2gnXSksXG5cdFsnbm8tdW5kZXJsaW5lJywgJ3sgdGV4dC1kZWNvcmF0aW9uOiBub25lIH0nXSxcblx0Ly8gVHlwb2dyYXBoeSAtIHRleHQtZGVjb3JhdGlvbi1jb2xvclxuXHQuLi5nZW5jKCdkZWNvcmF0aW9uJywgJ3RleHQtZGVjb3JhdGlvbi1jb2xvcicpLFxuXHQvLyBUeXBvZ3JhcGh5ID0gdGV4dC1kZWNvcmF0aW9uLXN0eWxlXG5cdC4uLmdlbihpaSA9PiBbYGRlY29yYXRpb24tJHtpaX1gLCBgdGV4dC1kZWNvcmF0aW9uLXN0eWxlOiAke2lpfWBdLCBbJ3NvbGlkJywgJ2RvdWJsZScsICdkb3R0ZWQnLCAnZGFzaGVkJywgJ3dhdnknXSksXG5cdC8vIFR5cG9ncmFwaHkgLSB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzXG5cdFsnZGVjb3JhdGlvbi1hdXRvJywgJ3sgdGV4dC1kZWNvcmF0aW9uLXRoaWNrbmVzczogYXV0byB9J10sXG5cdFsnZGVjb3JhdGlvbi1mcm9tLWZvbnQnLCAneyB0ZXh0LWRlY29yYXRpb24tdGhpY2tuZXNzOiBmcm9tLWZvbnQgfSddLFxuXHQuLi5nZW4oaWkgPT4gW2BkZWNvcmF0aW9uLSR7aWl9YCwgYHRleHQtZGVjb3JhdGlvbi10aGlja25lc3M6ICR7aWl9cHhgXSwgV0lEVEhTKSxcblx0Ly8gVHlwb2dyYXBoeSAtIHRleHQtdW5kZXJsaW5lLW9mZnNldFxuXHRbJ3VuZGVybGluZS1vZmZzZXQtYXV0bycsICd7IHRleHQtdW5kZXJsaW5lLW9mZnNldDogYXV0byB9J10sXG5cdC4uLmdlbihpaSA9PiBbYHVuZGVybGluZS1vZmZzZXQtJHtpaX1gLCBgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAke2lpfXB4YF0sIFdJRFRIUyksXG5cdC8vIFR5cG9ncmFwaHkgLSB0ZXh0LXRyYW5zZm9ybVxuXHQuLi5nZW4oaWkgPT4gW2Ake2lpfWAsIGB0ZXh0LXRyYW5zZm9ybTogJHtpaX1gXSwgWyd1cHBlcmNhc2UnLCAnbG93ZXJjYXNlJywgJ2NhcGl0YWxpemUnXSksXG5cdFsnbm9ybWFsLWNhc2UnLCAneyB0ZXh0LXRyYW5zZm9ybTogbm9uZSB9J10sXG5cdC8vIFR5cG9ncmFwaHkgLSB0ZXh0LW92ZXJmbG93XG5cdFsndHJ1bmNhdGUnLCAneyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgd2hpdGUtc3BhY2U6IG5vd3JhcCB9J10sXG5cdFsnb3ZlcmZsb3ctZWxsaXBzaXMnLCAneyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyB9J10sXG5cdFsnb3ZlcmZsb3ctY2xpcCcsICd7IHRleHQtb3ZlcmZsb3c6IGNsaXAgfSddLFxuXHQvLyBUeXBvZ3JhcGh5IC0gdGV4dC13cmFwXG5cdC4uLmdlbihpaSA9PiBbYHRleHQtJHtpaX1gLCBgdGV4dC13cmFwOiAke2lpfWBdLCBbJ3dyYXAnLCAnbm93cmFwJywgJ2JhbGFuY2UnLCAncHJldHR5J10pLFxuXHQvLyBUeXBvZ3JhcGh5IC0gdGV4dC1pbmRlbnRcblx0Li4uZ2VucygnaW5kZW50JywgeyBwcm9wOiAndGV4dC1pbmRlbnQnLCBmcmFjdGlvbnM6IGZhbHNlIH0pLFxuXHQvLyBUeXBvZ3JhcGh5IC0gdmVydGljYWwtYWxpZ25cblx0Li4uZ2VuKGlpID0+IFtgYWxpZ24tJHtpaX1gLCBgdmVydGljYWwtYWxpZ246ICR7aWl9YF0sIFsnYmFzZWxpbmUnLCAndG9wJywgJ21pZGRsZScsICdib3R0b20nLCAndGV4dC10b3AnLCAndGV4dC1ib3R0b20nLCAnc3ViJywgJ3N1cGVyJ10pLFxuXHQvLyBUeXBvZ3JhcGh5IC0gd2hpdGUtc3BhY2Vcblx0Li4uZ2VuKGlpID0+IFtgd2hpdGVzcGFjZS0ke2lpfWAsIGB3aGl0ZS1zcGFjZTogJHtpaX1gXSwgWydub3JtYWwnLCAnbm93cmFwJywgJ3ByZScsICdwcmUtbGluZScsICdwcmUtd3JhcCcsICdicmVhay1zcGFjZXMnXSksXG5cdC8vIFR5cG9ncmFwaHkgLSB3b3JkLWJyZWFrXG5cdFsnYnJlYWstbm9ybWFsJywgJ3sgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyB3b3JkLWJyZWFrOiBub3JtYWwgfSddLFxuXHRbJ2JyZWFrLXdvcmRzJywgJ3sgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZCB9J10sXG5cdFsnYnJlYWstYWxsJywgJ3sgd29yZC1icmVhazogYnJlYWstYWxsIH0nXSxcblx0WydicmVhay1rZWVwJywgJ3sgd29yZC1icmVhazoga2VlcC1hbGwgfSddLFxuXHQvLyBUeXBvZ3JhcGh5IC0gaHlwaGVuc1xuXHQuLi5nZW4oaWkgPT4gW2BoeXBoZW5zLSR7aWl9YCwgYGh5cGhlbnM6ICR7aWl9YF0sIFsnbm9uZScsICdtYW51YWwnLCAnYXV0byddKSxcblx0Ly8gVHlwb2dyYXBoeSAtIGNvbnRlbnRcblx0Wydjb250ZW50LW5vbmUnLCAneyBjb250ZW50OiBub25lIH0nXSxcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIEJhY2tncm91bmRzIC0gYmFja2dyb3VuZC1hdHRhY2htZW50XG5cdC4uLmdlbihpaSA9PiBbYGJnLSR7aWl9YCwgYGJhY2tncm91bmQtYXR0YWNobWVudDogJHtpaX1gXSwgWydmaXhlZCcsICdsb2NhbCcsICdzY3JvbGwnXSksXG5cdC8vIEJhY2tncm91bmRzIC0gYmFja2dyb3VuZC1jbGlwXG5cdC4uLmdlbihpaSA9PiBbYGJnLWNsaXAtJHtpaX1gLCBgYmFja2dyb3VuZC1jbGlwOiAke2lpfS1ib3hgXSwgWydib3JkZXInLCAncGFkZGluZycsICdjb250ZW50J10pLFxuXHRbJ2JnLWNsaXAtdGV4dCcsICd7IGJhY2tncm91bmQtY2xpcDogdGV4dCB9J10sXG5cdC8vIEJhY2tncm91bmRzIC0gYmFja2dyb3VuZC1jb2xvcidcblx0Li4uZ2VuYygnYmcnLCAnYmFja2dyb3VuZC1jb2xvcicpLFxuXHQvLyAvLyBCYWNrZ3JvdW5kcyAtIGJhY2tncm91bmQtaW1hZ2UgLSBjdXJyZW50bHkgdW5zdXBwb3J0ZWRcblx0Ly8gQmFja2dyb3VuZHMgLSBiYWNrZ3JvdW5kLW9yaWdpblxuXHQuLi5nZW4oaWkgPT4gW2BiZy0ke2lpfWAsIGBiYWNrZ3JvdW5kLW9yaWdpbjogJHtpaX1gXSwgWydib3JkZXItYm94JywgJ3BhZGRpbmctYm94JywgJ2NvbnRlbnQtYm94J10pLFxuXHQvLyBCYWNrZ3JvdW5kcyAtIGJhY2tncm91bmQtcG9zaXRpb25cblx0Li4uZ2VuKGlpID0+IFtgYmctJHtpaS5yZXBsYWNlKCcgJywgJy0nKX1gLCBgYmFja2dyb3VuZC1wb3NpdGlvbjogJHtpaX1gXSwgWydib3R0b20nLCAnY2VudGVyJywgJ2xlZnQnLCAnbGVmdCBib3R0b20nLCAnbGVmdCB0b3AnLCAncmlnaHQnLCAncmlnaHQgYm90dG9tJywgJ3JpZ2h0IHRvcCcsICd0b3AnXSksXG5cdC8vIEJhY2tncm91bmRzIC0gYmFja2dyb3VuZC1yZXBlYXRcblx0Li4uZ2VuKGlpID0+IFtgYmctJHtpaX1gLCBgYmFja2dyb3VuZC1yZXBlYXQ6ICR7aWl9YF0sIFsncmVwZWF0JywgJ3JlcGVhdC14JywgJ3JlcGVhdC15JywgJ3NwYWNlJywgJ3JvdW5kJywgJ25vLXJlcGVhdCddKSxcblx0Ly8gQmFja2dyb3VuZHMgLSBiYWNrZ3JvdW5kLXNpemVcblx0Li4uZ2VuKGlpID0+IFtgYmctJHtpaX1gLCBgYmFja2dyb3VuZC1zaXplOiAke2lpfWBdLCBbJ2F1dG8nLCAnY292ZXInLCAnY29udGFpbiddKSxcblx0Ly8gLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIEJvcmRlcnMgLSBib3JkZXItcmFkaXVzXG5cdC4uLmdlbigoW25hbWUsIHZhbHVlXSkgPT4gW2Byb3VuZGVkJHtuYW1lfWAsIGBib3JkZXItcmFkaXVzOiAke3ZhbHVlfWBdLCBSQURJSSksXG5cdC4uLmdlbigoW25hbWUsIHZhbHVlXSkgPT4gW2Byb3VuZGVkLXRsJHtuYW1lfWAsIGBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAke3ZhbHVlfWBdLCBSQURJSSksXG5cdC4uLmdlbigoW25hbWUsIHZhbHVlXSkgPT4gW2Byb3VuZGVkLXRyJHtuYW1lfWAsIGBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHt2YWx1ZX1gXSwgUkFESUkpLFxuXHQuLi5nZW4oKFtuYW1lLCB2YWx1ZV0pID0+IFtgcm91bmRlZC1ibCR7bmFtZX1gLCBgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHt2YWx1ZX1gXSwgUkFESUkpLFxuXHQuLi5nZW4oKFtuYW1lLCB2YWx1ZV0pID0+IFtgcm91bmRlZC1iciR7bmFtZX1gLCBgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICR7dmFsdWV9YF0sIFJBRElJKSxcblx0Ly8gQm9yZGVycyAtIGJvcmRlci13aWR0aFxuXHRbJ2JvcmRlcicsICd7IGJvcmRlci13aWR0aDogMXB4IH0nXSxcblx0Li4uZ2VuKGlpID0+IFtgYm9yZGVyLSR7aWl9YCwgYGJvcmRlci13aWR0aDogJHtpaX1weGBdLCBXSURUSFMpLFxuXHRbJ2JvcmRlci10JywgJ3sgYm9yZGVyLXRvcC13aWR0aDogMXB4IH0nXSxcblx0Li4uZ2VuKGlpID0+IFtgYm9yZGVyLXQtJHtpaX1gLCBgYm9yZGVyLXRvcC13aWR0aDogJHtpaX1weGBdLCBXSURUSFMpLFxuXHRbJ2JvcmRlci1iJywgJ3sgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4IH0nXSxcblx0Li4uZ2VuKGlpID0+IFtgYm9yZGVyLWItJHtpaX1gLCBgYm9yZGVyLWJvdHRvbS13aWR0aDogJHtpaX1weGBdLCBXSURUSFMpLFxuXHRbJ2JvcmRlci1sJywgJ3sgYm9yZGVyLWxlZnQtd2lkdGg6IDFweCB9J10sXG5cdC4uLmdlbihpaSA9PiBbYGJvcmRlci1sLSR7aWl9YCwgYGJvcmRlci1sZWZ0LXdpZHRoOiAke2lpfXB4YF0sIFdJRFRIUyksXG5cdFsnYm9yZGVyLXInLCAneyBib3JkZXItcmlnaHQtd2lkdGg6IDFweCB9J10sXG5cdC4uLmdlbihpaSA9PiBbYGJvcmRlci1yLSR7aWl9YCwgYGJvcmRlci1yaWdodC13aWR0aDogJHtpaX1weGBdLCBXSURUSFMpLFxuXHRbJ2JvcmRlci1zJywgJ3sgYm9yZGVyLWlubGluZS1zdGFydC13aWR0aDogMXB4IH0nXSxcblx0Li4uZ2VuKGlpID0+IFtgYm9yZGVyLXMtJHtpaX1gLCBgYm9yZGVyLWlubGluZS1zdGFydC13aWR0aDogJHtpaX1weGBdLCBXSURUSFMpLFxuXHRbJ2JvcmRlci1lJywgJ3sgYm9yZGVyLWlubGluZS1lbmQtd2lkdGg6IDFweCB9J10sXG5cdC4uLmdlbihpaSA9PiBbYGJvcmRlci1lLSR7aWl9YCwgYGJvcmRlci1pbmxpbmUtZW5kLXdpZHRoOiAke2lpfXB4YF0sIFdJRFRIUyksXG5cdC8vIEJvcmRlcnMgLSBib3JkZXItY29sb3Jcblx0Li4uZ2VuYygnYm9yZGVyJywgJ2JvcmRlci1jb2xvcicpLFxuXHQvLyBCb3JkZXJzIC0gQm9yZGVyLXN0eWxlXG5cdC4uLmdlbihpaSA9PiBbYGJvcmRlci0ke2lpfWAsIGBib3JkZXItc3R5bGU6ICR7aWl9YF0sIFsnc29saWQnLCAnZGFzaGVkJywgJ2RvdHRlZCcsICdkb3VibGUnLCAnaGlkZGVuJywgJ25vbmUnXSksXG5cdC8vIEJvcmRlcnMgLSBvdXRsaW5lLXdpZHRoXG5cdC4uLmdlbihpaSA9PiBbYG91dGxpbmUtJHtpaX1gLCBgb3V0bGluZS13aWR0aDogJHtpaX1weGBdLCBXSURUSFMpLFxuXHQvLyBCb3JkZXJzIC0gb3V0bGluZS1jb2xvclxuXHQuLi5nZW5jKCdvdXRsaW5lJywgJ291dGxpbmUtY29sb3InKSxcblx0Ly8gQm9yZGVycyAtIG91dGxpbmUtc3R5bGVcblx0WydvdXRsaW5lJywgJ3sgb3V0bGluZS1zdHlsZTogc29saWQgfSddLFxuXHQuLi5nZW4oaWkgPT4gW2BvdXRsaW5lLSR7aWl9YCwgYG91dGxpbmUtc3R5bGU6ICR7aWl9YF0sIFsnbm9uZScsICdkYXNoZWQnLCAnZG90dGVkJywgJ2RvdWJsZSddKSxcblx0Ly8gQm9yZGVycyAtIG91dGxpbmUtb2Zmc2V0XG5cdC4uLmdlbihpaSA9PiBbYG91dGxpbmUtb2Zmc2V0LSR7aWl9YCwgYG91dGxpbmUtb2Zmc2V0OiAke2lpfXB4YF0sIFdJRFRIUyksXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBFZmZlY3RzIC0gYm94LXNoYWRvd1xuXHRbJ3NoYWRvdycsICd7IGJveC1zaGFkb3c6IDAgMXB4IHJnYigwIDAgMCAvIDAuMDUpIH0nXSwgLy8gQ3VzdG9taXNlZC5cblx0WydzaGFkb3ctMnhzJywgJ3sgYm94LXNoYWRvdzogMCAxcHggcmdiKDAgMCAwIC8gMC4wNSkgfSddLFxuXHRbJ3NoYWRvdy14cycsICd7IGJveC1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYigwIDAgMCAvIDAuMDUpIH0nXSxcblx0WydzaGFkb3ctc20nLCAneyBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2IoMCAwIDAgLyAwLjEpLCAwIDFweCAycHggLTFweCByZ2IoMCAwIDAgLyAwLjEpIH0nXSxcblx0WydzaGFkb3ctbWQnLCAneyBib3gtc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2IoMCAwIDAgLyAwLjEpLCAwIDJweCA0cHggLTJweCByZ2IoMCAwIDAgLyAwLjEpIH0nXSxcblx0WydzaGFkb3ctbGcnLCAneyBib3gtc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSkgfSddLFxuXHRbJ3NoYWRvdy14bCcsICd7IGJveC1zaGFkb3c6IDAgMjBweCAyNXB4IC01cHggcmdiKDAgMCAwIC8gMC4xKSwgMCA4cHggMTBweCAtNnB4IHJnYigwIDAgMCAvIDAuMSkgfSddLFxuXHRbJ3NoYWRvdy0yeGwnLCAneyBib3gtc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2IoMCAwIDAgLyAwLjI1KSB9J10sXG5cdFsnc2hhZG93LW5vbmUnLCAneyBib3gtc2hhZG93OiAwIDAgIzAwMDAgfSddLFxuXHQvLyBFZmZlY3RzIC0gb3BhY2l0eVxuXHQuLi5nZW4oaWkgPT4gW2BvcGFjaXR5LSR7aWl9YCwgYG9wYWNpdHk6ICR7aWkgLyAxMDB9YF0sIE9QQUNJVElFUyksXG5cdC8vIEVmZmVjdHMgLSBtaXgtYmxlbmQtbW9kZSAtIGN1cnJlbnRseSB1bnN1cHBvcnRlZFxuXHQvLyBFZmZlY3RzIC0gYmFja2dyb3VuZC1ibGVuZC1tb2RlIC0gY3VycmVudGx5IHVuc3VwcG9ydGVkXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBGaWx0ZXJzIC0gYmx1clxuXHQuLi5iYWNrZHJvcChbJ2JsdXIteHMnLCAneyBmaWx0ZXI6IGJsdXIoNHB4KSB9J10pLFxuXHQuLi5iYWNrZHJvcChbJ2JsdXItc20nLCAneyBmaWx0ZXI6IGJsdXIoOHB4KSB9J10pLFxuXHQuLi5iYWNrZHJvcChbJ2JsdXItbWQnLCAneyBmaWx0ZXI6IGJsdXIoMTJweCkgfSddKSxcblx0Li4uYmFja2Ryb3AoWydibHVyLWxnJywgJ3sgZmlsdGVyOiBibHVyKDE2cHgpIH0nXSksXG5cdC4uLmJhY2tkcm9wKFsnYmx1ci14bCcsICd7IGZpbHRlcjogYmx1cigyNHB4KSB9J10pLFxuXHQuLi5iYWNrZHJvcChbJ2JsdXItMnhsJywgJ3sgZmlsdGVyOiBibHVyKDQwcHgpIH0nXSksXG5cdC4uLmJhY2tkcm9wKFsnYmx1ci0zeGwnLCAneyBmaWx0ZXI6IGJsdXIoNjRweCkgfSddKSxcblx0Li4uYmFja2Ryb3AoWydibHVyLW5vbmUnLCAneyBmaWx0ZXI6IG5vbmUgfSddKSxcblx0Ly8gRmlsdGVycyAtIGJyaWdodG5lc3Ncblx0Li4uYmFja2Ryb3AoZ2VuKGlpID0+IFtgYnJpZ2h0bmVzcy0ke2lpfWAsIGBmaWx0ZXI6IGJyaWdodG5lc3MoJHtpaX0lKWBdLCBbMCwgNTAsIDc1LCA5MCwgOTUsIDEwMCwgMTA1LCAxMTAsIDEyNSwgMTUwLCAyMDBdKSksXG5cdC8vIEZpbHRlcnMgLSBjb250cmFzdCAtIHVuc3VwcG9ydGVkXG5cdC4uLmJhY2tkcm9wKGdlbihpaSA9PiBbYGNvbnRyYXN0LSR7aWl9YCwgYGZpbHRlcjogY29udHJhc3QoJHtpaX0lKWBdLCBbMCwgNTAsIDc1LCAxMDAsIDEyNSwgMTUwLCAyMDBdKSksXG5cdC8vIEZpbHRlcnMgLSBkcm9wLXNoYWRvd1xuXHQuLi5iYWNrZHJvcChbJ2Ryb3Atc2hhZG93LXhzJywgJ3sgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDFweCAxcHggcmdiKDAgMCAwIC8gMC4wNSkpIH0nXSksXG5cdC4uLmJhY2tkcm9wKFsnZHJvcC1zaGFkb3ctc20nLCAneyBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgMXB4IDJweCByZ2IoMCAwIDAgLyAwLjE1KSkgfSddKSxcblx0Li4uYmFja2Ryb3AoWydkcm9wLXNoYWRvdy1tZCcsICd7IGZpbHRlcjogZHJvcC1zaGFkb3coMCAzcHggM3B4IHJnYigwIDAgMCAvIDAuMTIpKSB9J10pLFxuXHQuLi5iYWNrZHJvcChbJ2Ryb3Atc2hhZG93LWxnJywgJ3sgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDRweCA0cHggcmdiKDAgMCAwIC8gMC4xNSkpIH0nXSksXG5cdC4uLmJhY2tkcm9wKFsnZHJvcC1zaGFkb3cteGwnLCAneyBmaWx0ZXI6IGRyb3Atc2hhZG93KDAgOXB4IDdweCByZ2IoMCAwIDAgLyAwLjEpKSB9J10pLFxuXHQuLi5iYWNrZHJvcChbJ2Ryb3Atc2hhZG93LTJ4bCcsICd7IGZpbHRlcjogZHJvcC1zaGFkb3coMCAyNXB4IDI1cHggcmdiKDAgMCAwIC8gMC4xNSkpIH0nXSksXG5cdC4uLmJhY2tkcm9wKFsnZHJvcC1zaGFkb3ctbm9uZScsICd7IGZpbHRlcjogZHJvcC1zaGFkb3coMCAwICMwMDAwKSB9J10pLFxuXHQvLyBGaWx0ZXJzIC0gZ3JheXNjYWxlXG5cdC4uLmJhY2tkcm9wKFsnZ3JheXNjYWxlJywgJ3sgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSkgfSddKSxcblx0Li4uYmFja2Ryb3AoWydncmF5c2NhbGUtMCcsICd7IGZpbHRlcjogZ3JheXNjYWxlKDApIH0nXSksXG5cdC8vIEZpbHRlcnMgLSBodWUtcm90YXRlXG5cdC4uLmJhY2tkcm9wKGdlbihpaSA9PiBbYGh1ZS1yb3RhdGUtJHtpaX1gLCBgZmlsdGVyOiBodWUtcm90YXRlKCR7aWl9ZGVnKWBdLCBbMCwgMTUsIDMwLCA2MCwgOTAsIDE4MF0pKSxcblx0Li4uYmFja2Ryb3AoZ2VuKGlpID0+IFtgLWh1ZS1yb3RhdGUtJHtpaX1gLCBgZmlsdGVyOiBodWUtcm90YXRlKC0ke2lpfWRlZylgXSwgWzAsIDE1LCAzMCwgNjAsIDkwLCAxODBdKSksXG5cdC8vIEZpbHRlcnMgLSBpbnZlcnQgLSB1bnN1cHBvcnRlZFxuXHQuLi5iYWNrZHJvcChbJ2ludmVydCcsICd7IGZpbHRlcjogaW52ZXJ0KDEwMCUpIH0nXSksXG5cdC4uLmJhY2tkcm9wKFsnaW52ZXJ0LTAnLCAneyBmaWx0ZXI6IGludmVydCgwKSB9J10pLFxuXHQvLyBGaWx0ZXJzIC0gc2F0dXJhdGVcblx0Li4uZ2VuKGlpID0+IFtgc2F0dXJhdGUtJHtpaX1gLCBgZmlsdGVyOiBzYXR1cmF0ZSgke2lpfSUpYF0sIFswLCA1MCwgNzUsIDEwMCwgMTUwLCAyMDBdKSxcblx0Ly8gRmlsdGVycyAtIHNlcGlhXG5cdC4uLmJhY2tkcm9wKFsnaW52ZXJ0JywgJ3sgZmlsdGVyOiBzZXBpYSgxMDAlKSB9J10pLFxuXHQuLi5iYWNrZHJvcChbJ2ludmVydC0wJywgJ3sgZmlsdGVyOiBzZXBpYSgwKSB9J10pLFxuXHQvLyBGaWx0ZXJzXG5cdC4uLmJhY2tkcm9wKFsnZmlsdGVyLW5vbmUnLCAneyBmaWx0ZXI6IG5vbmUgfSddKSxcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIFRhYmxlcyAtIGJvcmRlci1jb2xsYXBzZVxuXHRbJ2JvcmRlci1jb2xsYXBzZScsICd7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2UgfSddLFxuXHRbJ2JvcmRlci1zZXBhcmF0ZScsICd7IG9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZSB9J10sXG5cdC8vIFRhYmxlcyAtIGJvcmRlci1zcGFjaW5nXG5cdC4uLmdlbnMoJ2JvcmRlci1zcGFjaW5nJywgeyBwcm9wOiAnYm9yZGVyLXNwYWNpbmcnLCBmcmFjdGlvbnM6IGZhbHNlIH0pLFxuXHQvLyBUYWJsZXMgLSB0YWJsZS1sYXlvdXRcblx0Wyd0YWJsZS1hdXRvJywgJ3sgdGFibGUtbGF5b3V0OiBhdXRvIH0nXSxcblx0Wyd0YWJsZS1maXhlZCcsICd7IHRhYmxlLWxheW91dDogZml4ZWQgfSddLFxuXHQvLyBUYWJsZXMgLSBjYXB0aW9uLXNpZGVcblx0WydjYXB0aW9uLXRvcCcsICd7IGNhcHRpb24tc2lkZTogdG9wIH0nXSxcblx0WydjYXB0aW9uLWJvdHRvbScsICd7IGNhcHRpb24tc2lkZTogYm90dG9tIH0nXSxcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIFRyYW5zaXRpb25zICYgQW5pbWF0aW9ucyAtIHRyYW5zaXRpb24tcHJvcGVydHlcblx0Wyd0cmFuc2l0aW9uJywgYHsgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXI7IHRyYW5zaXRpb24tZHVyYXRpb246ICR7QU5JTV9USU1FfSB9YF0sXG5cdFsndHJhbnNpdGlvbi1hbGwnLCBgeyB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7IHRyYW5zaXRpb24tZHVyYXRpb246ICR7QU5JTV9USU1FfSB9YF0sXG5cdFsndHJhbnNpdGlvbi1jb2xvcnMnLCBgeyB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZTsgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHtBTklNX1RJTUV9IH1gXSxcblx0Wyd0cmFuc2l0aW9uLW9wYWNpdHknLCBgeyB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5OyB0cmFuc2l0aW9uLWR1cmF0aW9uOiAke0FOSU1fVElNRX0gfWBdLFxuXHRbJ3RyYW5zaXRpb24tc2hhZG93JywgYHsgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdzsgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHtBTklNX1RJTUV9IH1gXSxcblx0Wyd0cmFuc2l0aW9uLXRyYW5zZm9ybScsIGB7IHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTsgdHJhbnNpdGlvbi1kdXJhdGlvbjogJHtBTklNX1RJTUV9IH1gXSxcblx0Wyd0cmFuc2l0aW9uLW5vbmUnLCAneyB0cmFuc2l0aW9uLXByb3BlcnR5OiBub25lIH0nXSxcblx0Ly8gVHJhbnNpdGlvbnMgJiBBbmltYXRpb25zIC0gdHJhbnNpdGlvbi1iZWhhdmlvclxuXHRbJ3RyYW5zaXRpb24tbm9ybWFsJywgJ3sgdHJhbnNpdGlvbi1iZWhhdmlvcjogbm9ybWFsIH0nXSxcblx0Wyd0cmFuc2l0aW9uLWRpc2NyZXRlJywgJ3sgdHJhbnNpdGlvbi1iZWhhdmlvcjogYWxsb3ctZGlzY3JldGUgfSddLFxuXHQvLyBUcmFuc2l0aW9ucyAmIEFuaW1hdGlvbnMgLSB0cmFuc2l0aW9uLWR1cmF0aW9uXG5cdFsnZHVyYXRpb24taW5pdGlhbCcsICd7IHRyYW5zaXRpb24tZHVyYXRpb246IGluaXRpYWwgfSddLFxuXHQuLi5nZW4oaWkgPT4gW2BkdXJhdGlvbi0ke2lpfWAsIGB0cmFuc2l0aW9uLWR1cmF0aW9uOiAke2lpfW1zYF0sIERVUkFUSU9OUyksXG5cdC8vIFRyYW5zaXRpb25zICYgQW5pbWF0aW9ucyAtIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uIC0gdW5zdXBwb3J0ZWRcblx0WydlYXNlLWxpbmVhcicsICd7IHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIgfSddLFxuXHRbJ2Vhc2UtaW4nLCAneyB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbiB9J10sXG5cdFsnZWFzZS1vdXQnLCAneyB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQgfSddLFxuXHRbJ2Vhc2UtaW4tb3V0JywgJ3sgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0IH0nXSxcblx0WydlYXNlLWluaXRpYWwnLCAneyB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogaW5pdGlhbCB9J10sXG5cdC8vIFRyYW5zaXRpb25zICYgQW5pbWF0aW9ucyAtIHRyYW5zaXRpb24tZGVsYXlcblx0Li4uZ2VuKGlpID0+IFtgZGVsYXktJHtpaX1gLCBgdHJhbnNpdGlvbi1kZWxheTogJHtpaX1tc2BdLCBEVVJBVElPTlMpLFxuXHQvLyBUcmFuc2l0aW9ucyAmIEFuaW1hdGlvbnMgLSBhbmltYXRpb25cblx0WydhbmltYXRlLWV4cGFuZCcsIGB7IGFuaW1hdGU6IGV4cGFuZCAke0FOSU1fVElNRX0gZWFzZS1vdXQgfWBdLFxuXHRbJ2FuaW1hdGUtdG9hc3QnLCBgeyBhbmltYXRlOiB0b2FzdCAke0FOSU1fVElNRX0gZWFzZS1vdXQgfWBdLFxuXHRbJ2FuaW1hdGUtZmFkZScsIGB7IGFuaW1hdGU6IGZhZGUgJHtBTklNX1RJTUV9IGVhc2Utb3V0IH1gXSxcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIFRyYW5zZm9ybXMgLSBibGFja2ZhY2UtdmlzaWJpbGl0eVxuXHRbJ2JsYWNrZmFjZS12aXNpYmxlJywgJ3sgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSB9J10sXG5cdFsnYmxhY2tmYWNlLWhpZGRlbicsICd7IGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbiB9J10sXG5cdC8vIFRyYW5zZm9ybXMgLSBwZXJzcGVjdGl2ZVxuXHRbJ3BlcnNwZWN0aXZlLWRyYW1hdGljJywgJ3sgcGVyc3BlY3RpdmU6IDEwMHB4IH0nXSxcblx0WydwZXJzcGVjdGl2ZS1uZWFyJywgJ3sgcGVyc3BlY3RpdmU6IDMwMHB4IH0nXSxcblx0WydwZXJzcGVjdGl2ZS1ub3JtYWwnLCAneyBwZXJzcGVjdGl2ZTogNTAwcHggfSddLFxuXHRbJ3BlcnNwZWN0aXZlLW1pZHJhbmdlJywgJ3sgcGVyc3BlY3RpdmU6IDgwMHB4IH0nXSxcblx0WydwZXJzcGVjdGl2ZS1kaXN0YW50JywgJ3sgcGVyc3BlY3RpdmU6IDEyMDBweCB9J10sXG5cdFsncGVyc3BlY3RpdmUtbm9uZScsICd7IHBlcnNwZWN0aXZlOiBub25lIH0nXSxcblx0Ly8gVHJhbnNmb3JtcyAtIHBlcnNwZWN0aXZlLW9yaWdpblxuXHQuLi5nZW4oaWkgPT4gW2BwZXJzcGVjdGl2ZS1vcmlnaW4tJHtpaX1gLCBgcGVyc3BlY3RpdmUtb3JpZ2luOiAke2lpfWBdLCBPUklHSU5TKSxcblx0Ly8gVHJhbnNmb3JtcyAtIHJvdGF0ZVxuXHQuLi5nZW4oaWkgPT4gW2Byb3RhdGUtJHtpaX1gLCBgcm90YXRlOiAke2lpfWRlZ2BdLCBbOTAsIDE4MCwgMjcwXSksXG5cdC8vIFRyYW5zZm9ybXMgLSBzY2FsZVxuXHQuLi5nZW4oaWkgPT4gW2BzY2FsZS0ke2lpfWAsIGB0cmFuc2Zvcm06IHNjYWxlKCR7aWkgLyAxMDB9KWBdLCBTQ0FMRVMpLFxuXHQuLi5nZW4oaWkgPT4gW2BzY2FsZS14LSR7aWl9YCwgYHRyYW5zZm9ybTogc2NhbGVYKCR7aWkgLyAxMDB9KWBdLCBTQ0FMRVMpLFxuXHQuLi5nZW4oaWkgPT4gW2BzY2FsZS15LSR7aWl9YCwgYHRyYW5zZm9ybTogc2NhbGVZKCR7aWkgLyAxMDB9KWBdLCBTQ0FMRVMpLFxuXHQvLyBUcmFuc2Zvcm1zIC0gc2tld1xuXHQuLi5nZW4oaWkgPT4gW2Bza2V3LXgtJHtpaX1gLCBgdHJhbnNmb3JtOiBza2V3WCgke2lpfWRlZylgXSwgU0tFV1MpLFxuXHQuLi5nZW4oaWkgPT4gW2Bza2V3LXktJHtpaX1gLCBgdHJhbnNmb3JtOiBza2V3WSgke2lpfWRlZylgXSwgU0tFV1MpLFxuXHQvLyBUcmFuc2Zvcm1zIC0gdHJhbnNmb3JtLW9yaWdpblxuXHQuLi5nZW4oaWkgPT4gW2BvcmlnaW4tJHtpaX1gLCBgdHJhbnNmb3JtLW9yaWdpbjogJHtpaX1gXSwgT1JJR0lOUyksXG5cdC8vIFRyYW5zZm9ybXMgLSB0cmFuc2Zvcm0tc3R5bGVcblx0Wyd0cmFuc2Zvcm0tM2QnLCAneyB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkIH0nXSxcblx0Wyd0cmFuc2Zvcm0tZmxhdCcsICd7IHRyYW5zZm9ybS1zdHlsZTogZmxhdCB9J10sXG5cdC8vIFRyYW5zZm9ybXMgLSB0cmFuc2xhdGVcblx0Li4uZ2VucygndHJhbnNsYXRlLXgnLCB7IHByb3A6ICd0cmFuc2xhdGUteCcsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Li4uZ2VucygndHJhbnNsYXRlLXknLCB7IHByb3A6ICd0cmFuc2xhdGUteScsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Li4uZ2VucygndHJhbnNsYXRlLXonLCB7IHByb3A6ICd0cmFuc2xhdGUteicsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Ly8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cdC8vIEludGVyYWN0aXZpdHkgLSBhY2NlbnQtY29sb3Jcblx0Li4uZ2VuYygnYWNjZW50JywgJ2FjY2VudC1jb2xvcicpLFxuXHQvLyBJbnRlcmFjdGl2aXR5IC0gYXBwZWFyYW5jZVxuXHRbJ2FwcGVhcmFuY2Utbm9uZScsICd7IGFwcGVhcmFuY2U6IG5vbmUgfSddLFxuXHRbJ2FwcGVhcmFuY2UtYXV0bycsICd7IGFwcGVhcmFuY2U6IGF1dG8gfSddLFxuXHQvLyBJbnRlcmFjdGl2aXR5IC0gY2FyZXQtY29sb3Jcblx0Li4uZ2VuYygnY2FyZXQnLCAnY2FyZXQtY29sb3InKSxcblx0Ly8gSW50ZXJhY3Rpdml0eSAtIGNvbG9yLXNjaGVtZVxuXHQuLi5nZW4oaWkgPT4gW2BzY2hlbWUtJHtpaS5yZXBsYWNlKCcgJywgJy0nKX1gLCBgY29sb3Itc2NoZW1lOiAke2lpfWBdLCBbJ25vcm1hbCcsICdkYXJrJywgJ2xpZ2h0JywgJ2xpZ2h0IGRhcmsnLCAnb25seSBkYXJrJywgJ29ubHkgbGlnaHQnXSksXG5cdC8vIEludGVyYWN0aXZpdHkgLSBjdXJzb3Jcblx0Li4uZ2VuKGlpID0+IFtgY3Vyc29yLSR7aWl9YCwgYGN1cnNvcjogJHtpaX1gXSwgWydhdXRvJywgJ2RlZmF1bHQnLCAncG9pbnRlcicsICd3YWl0JywgJ3RleHQnLCAnbW92ZScsICdub3QtYWxsb3dlZCddKSxcblx0Ly8gSW50ZXJhY3Rpdml0eSAtIGZpZWxkLXNpemluZ1xuXHRbJ2ZpZWxkLXNpemluZy1maXhlZCcsICd7IGZpZWxkLXNpemluZzogZml4ZWQgfSddLFxuXHRbJ2ZpZWxkLXNpemluZy1hdXRvJywgJ3sgZmllbGQtc2l6aW5nOiBhdXRvIH0nXSxcblx0Ly8gSW50ZXJhY3Rpdml0eSAtIHBvaW50ZXItZXZlbnRzXG5cdFsncG9pbnRlci1ldmVudHMtbm9uZScsICd7IHBvaW50ZXItZXZlbnRzOiBub25lIH0nXSxcblx0Wydwb2ludGVyLWV2ZW50cy1hdXRvJywgJ3sgcG9pbnRlci1ldmVudHM6IGF1dG8gfSddLFxuXHQvLyBJbnRlcmFjdGl2aXR5IC0gcmVzaXplXG5cdFsncmVzaXplLW5vbmUnLCAneyByZXNpemU6IG5vbmUgfSddLFxuXHRbJ3Jlc2l6ZS14JywgJ3sgcmVzaXplOiBob3Jpem9udGFsIH0nXSxcblx0WydyZXNpemUteScsICd7IHJlc2l6ZTogdmVydGljYWwgfSddLFxuXHRbJ3Jlc2l6ZS1ib3RoJywgJ3sgcmVzaXplOiBib3RoIH0nXSxcblx0Ly8gSW50ZXJhY3Rpdml0eSAtIHNjcm9sbC1iZWhhdmlvclxuXHRbJ3Njcm9sbC1hdXRvJywgJ3sgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvIH0nXSxcblx0WydzY3JvbGwtc21vb3RoJywgJ3sgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGggfSddLFxuXHQvLyBJbnRlcmFjdGl2aXR5IC0gc2Nyb2xsLW1hcmdpblxuXHQuLi5nZW5zKCdzY3JvbGwtbScsIHsgcHJvcDogJ3Njcm9sbC1tYXJnaW4nLCBmcmFjdGlvbnM6IHRydWUgfSksXG5cdC4uLmdlbnMoJ3Njcm9sbC1teCcsIHsgcHJvcDogJ3Njcm9sbC1tYXJnaW4taW5saW5lJywgZnJhY3Rpb25zOiB0cnVlIH0pLFxuXHQuLi5nZW5zKCdzY3JvbGwtbXknLCB7IHByb3A6ICdzY3JvbGwtbWFyZ2luLWJsb2NrJywgZnJhY3Rpb25zOiB0cnVlIH0pLFxuXHQuLi5nZW5zKCdzY3JvbGwtbXQnLCB7IHByb3A6ICdzY3JvbGwtbWFyZ2luLXRvcCcsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Li4uZ2Vucygnc2Nyb2xsLW1yJywgeyBwcm9wOiAnc2Nyb2xsLW1hcmdpbi1yaWdodCcsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Li4uZ2Vucygnc2Nyb2xsLW1sJywgeyBwcm9wOiAnc2Nyb2xsLW1hcmdpbi1sZWZ0JywgZnJhY3Rpb25zOiB0cnVlIH0pLFxuXHQuLi5nZW5zKCdzY3JvbGwtbWInLCB7IHByb3A6ICdzY3JvbGwtbWFyZ2luLWJvdHRvbScsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Li4uZ2Vucygnc2Nyb2xsLW1zJywgeyBwcm9wOiAnc2Nyb2xsLW1hcmdpbi1pbmxpbmUtc3RhcnQnLCBmcmFjdGlvbnM6IHRydWUgfSksXG5cdC4uLmdlbnMoJ3Njcm9sbC1tZScsIHsgcHJvcDogJ3Njcm9sbC1tYXJnaW4taW5saW5lLWVuZCcsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Ly8gSW50ZXJhY3Rpdml0eSAtIHNjcm9sbC1wYWRkaW5nXG5cdC4uLmdlbnMoJ3Njcm9sbC1wJywgeyBwcm9wOiAnc2Nyb2xsLXBhZGRpbmcnLCBmcmFjdGlvbnM6IHRydWUgfSksXG5cdC4uLmdlbnMoJ3Njcm9sbC1weCcsIHsgcHJvcDogJ3Njcm9sbC1wYWRkaW5nLWlubGluZScsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Li4uZ2Vucygnc2Nyb2xsLXB5JywgeyBwcm9wOiAnc2Nyb2xsLXBhZGRpbmctYmxvY2snLCBmcmFjdGlvbnM6IHRydWUgfSksXG5cdC4uLmdlbnMoJ3Njcm9sbC1wdCcsIHsgcHJvcDogJ3Njcm9sbC1wYWRkaW5nLXRvcCcsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Li4uZ2Vucygnc2Nyb2xsLXByJywgeyBwcm9wOiAnc2Nyb2xsLXBhZGRpbmctcmlnaHQnLCBmcmFjdGlvbnM6IHRydWUgfSksXG5cdC4uLmdlbnMoJ3Njcm9sbC1wbCcsIHsgcHJvcDogJ3Njcm9sbC1wYWRkaW5nLWxlZnQnLCBmcmFjdGlvbnM6IHRydWUgfSksXG5cdC4uLmdlbnMoJ3Njcm9sbC1wYicsIHsgcHJvcDogJ3Njcm9sbC1wYWRkaW5nLWJvdHRvbScsIGZyYWN0aW9uczogdHJ1ZSB9KSxcblx0Li4uZ2Vucygnc2Nyb2xsLXBzJywgeyBwcm9wOiAnc2Nyb2xsLXBhZGRpbmctaW5saW5lLXN0YXJ0JywgZnJhY3Rpb25zOiB0cnVlIH0pLFxuXHQuLi5nZW5zKCdzY3JvbGwtcGUnLCB7IHByb3A6ICdzY3JvbGwtcGFkZGluZy1pbmxpbmUtZW5kJywgZnJhY3Rpb25zOiB0cnVlIH0pLFxuXHQvLyBJbnRlcmFjdGl2aXR5IC0gc2Nyb2xsLXNuYXAtYWxpZ25cblx0Li4uZ2VuKGlpID0+IFtgc25hcC0ke2lpfWAsIGBzY3JvbGwtc25hcC1hbGlnbjogJHtpaX1gXSwgWydzdGFydCcsICdlbmQnLCAnY2VudGVyJ10pLFxuXHRbJ3NuYXAtYWxpZ24tbm9uZScsICd7IHNjcm9sbC1zbmFwLWFsaWduOiBub25lIH0nXSxcblx0Ly8gSW50ZXJhY3Rpdml0eSAtIHNjcm9sbC1zbmFwLXN0b3Bcblx0WydzbmFwLXN0b3Atbm9ybWFsJywgJ3sgc2Nyb2xsLXNuYXAtc3RvcDogbm9ybWFsIH0nXSxcblx0WydzbmFwLXN0b3AtYWx3YXlzJywgJ3sgc2Nyb2xsLXNuYXAtc3RvcDogYWx3YXlzIH0nXSxcblx0Ly8gSW50ZXJhY3Rpdml0eSAtIHNjcm9sbC1zbmFwLXR5cGVcblx0WydzbmFwLW5vbmUnLCAneyBzY3JvbGwtc25hcC10eXBlOiBub25lIH0nXSxcblx0WydzbmFwLXgnLCAneyBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeSB9J10sXG5cdFsnc25hcC15JywgJ3sgc2Nyb2xsLXNuYXAtdHlwZTogeSBwcm94aW1pdHkgfSddLFxuXHRbJ3NuYXAtYm90aCcsICd7IHNjcm9sbC1zbmFwLXR5cGU6IGJvdGggcHJveGltaXR5IH0nXSxcblx0Ly8gSW50ZXJhY3Rpdml0eSAtIHRvdWNoLWFjdGlvblxuXHQuLi5nZW4oaWkgPT4gW2B0b3VjaC0ke2lpfWAsIGB0b3VjaC1hY3Rpb246ICR7aWl9YF0sIFsnYXV0bycsICdub25lJywgJ3Bhbi14JywgJ3Bhbi1sZWZ0JywgJ3Bhbi1yaWdodCcsICdwYW4teScsICdwYW4tdXAnLCAncGFuLWRvd24nLCAncGluY2gtem9vbScsICdtYW5pcHVsYXRpb24nXSksXG5cdC8vIEludGVyYWN0aXZpdHkgLSB1c2VyLXNlbGVjdFxuXHRbJ3NlbGVjdC1ub25lJywgJ3sgdXNlci1zZWxlY3Q6IG5vbmUgfSddLFxuXHRbJ3NlbGVjdC10ZXh0JywgJ3sgdXNlci1zZWxlY3Q6IHRleHQgfSddLFxuXHRbJ3NlbGVjdC1hbGwnLCAneyB1c2VyLXNlbGVjdDogYWxsIH0nXSxcblx0WydzZWxlY3QtYXV0bycsICd7IHVzZXItc2VsZWN0OiBhdXRvIH0nXSxcblx0Ly8gSW50ZXJhY3Rpdml0eSAtIHdpbGwtY2hhbmdlXG5cdFsnd2lsbC1jaGFuZ2UtYXV0bycsICd7IHdpbGwtY2hhbmdlOiBhdXRvIH0nXSxcblx0Wyd3aWxsLWNoYW5nZS1zY3JvbGwnLCAneyB3aWxsLWNoYW5nZTogc2Nyb2xsLXBvc2l0aW9uIH0nXSxcblx0Wyd3aWxsLWNoYW5nZS1jb250ZW50cycsICd7IHdpbGwtY2hhbmdlOiBjb250ZW50cyB9J10sXG5cdFsnd2lsbC1jaGFuZ2UtdHJhbnNmb3JtJywgJ3sgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybSB9J10sXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBTVkcgLSBmaWxsXG5cdC4uLmdlbmMoJ2ZpbGwnLCAnZmlsbCcpLFxuXHQvLyBTVkcgLSBzdHJva2UgLSB1bnN1cHBvcnRlZFxuXHQuLi5nZW5jKCdzdHJva2UnLCAnc3Ryb2tlJyksXG5cdC8vIFNWRyAtIHN0cm9rZS13aWR0aCAtIHVuc3VwcG9ydGVkXG5cdC4uLmdlbihpaSA9PiBbYHN0cm9rZS0ke2lpfWAsIGBzdHJva2Utd2lkdGg6ICR7aWl9YF0sIFswLCAxLCAyXSksXG5cdC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXHQvLyBBY2Nlc3NpYmlsaXR5IC0gZm9yY2VkLWNvbG9yLWFkanVzdFxuXHRbJ2ZvcmNlZC1jb2xvci1hZGp1c3QtYXV0bycsICd7IGZvcmNlZC1jb2xvci1hZGp1c3Q6IGF1dG8gfSddLFxuXHRbJ2ZvcmNlZC1jb2xvci1hZGp1c3Qtbm9uZScsICd7IGZvcmNlZC1jb2xvci1hZGp1c3Q6IG5vbmUgfSddLFxuXSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJ1bGUgZ2VuZXJhdG9yc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gR2VuZXJhdGUgd2l0aCBhIGxpc3QuXG5mdW5jdGlvbiogZ2VuKGZ1bmMsIGxpc3QpIHtcblx0Zm9yIChjb25zdCBpdGVtIG9mIGxpc3QpIHtcblx0XHRjb25zdCBbbmFtZSwgdmFsdWVdID0gZnVuYyhpdGVtKVxuXHRcdHlpZWxkIFtuYW1lLCBgeyAke3ZhbHVlfSB9YF1cblx0fVxufVxuXG4vLyBHZW5lcmF0ZSBzaXplcy5cbmZ1bmN0aW9uKiBnZW5zKGNscywgb3B0aW9ucyA9IHt9KSB7XG5cdGNvbnN0IHsgcHJvcCA9IGNscywgZnJhY3Rpb25zID0gdHJ1ZSwgbmV4dCA9ICcnIH0gPSBvcHRpb25zXG5cblx0eWllbGQgW2Ake2Nsc30tYXV0b2AsIGAke25leHR9eyAke3Byb3B9OiBhdXRvIH1gXVxuXHR5aWVsZCBbYCR7Y2xzfS1mdWxsYCwgYCR7bmV4dH17ICR7cHJvcH06IDEwMCUgfWBdXG5cdHlpZWxkIFtgJHtjbHN9LW1pbmAsIGAke25leHR9eyAke3Byb3B9OiBtaW4tY29udGVudCB9YF1cblx0eWllbGQgW2Ake2Nsc30tbWF4YCwgYCR7bmV4dH17ICR7cHJvcH06IG1heC1jb250ZW50IH1gXVxuXHR5aWVsZCBbYCR7Y2xzfS1maXRgLCBgJHtuZXh0fXsgJHtwcm9wfTogZml0LWNvbnRlbnQgfWBdXG5cdHlpZWxkIFtgJHtjbHN9LXB4YCwgYCR7bmV4dH17ICR7cHJvcH06IDFweCB9YF1cblx0eWllbGQgW2Ake2Nsc30tMC41YCwgYCR7bmV4dH17ICR7cHJvcH06IDJweCB9YF1cblxuXHRmb3IgKGNvbnN0IHVuaXQgb2YgWydzdmgnLCAnbHZoJywgJ2R2aCcsICdzdncnLCAnbHZ3JywgJ2R2dyddKSB7XG5cdFx0eWllbGQgW2Ake2Nsc30tJHt1bml0fWAsIGAke25leHR9eyAke3Byb3B9OiAxMDAke3VuaXR9IH1gXVxuXHR9XG5cblx0aWYgKGZyYWN0aW9ucykge1xuXHRcdGZvciAoY29uc3QgW3MsIGZyYWNdIG9mIFNJWkVTX0ZSQUMpIHtcblx0XHRcdHlpZWxkIFtgJHtjbHN9LSR7c31gLCBgJHtuZXh0fXsgJHtwcm9wfTogJHtmcmFjICogMTAwfSUgfWBdXG5cdFx0fVxuXHR9XG5cblx0Zm9yIChjb25zdCBzIG9mIFNJWkVTKSB7XG5cdFx0eWllbGQgW2Ake2Nsc30tJHtzfWAsIGAke25leHR9eyAke3Byb3B9OiAke3MgKiBQSVhFTF9TVEVQfXB4IH1gXVxuXHRcdHlpZWxkIFtgLSR7Y2xzfS0ke3N9YCwgYCR7bmV4dH17ICR7cHJvcH06IC0ke3MgKiBQSVhFTF9TVEVQfXB4IH1gXVxuXHR9XG59XG5cbi8vIEdlbmVyYXRlIGNvbG9ycy5cbmZ1bmN0aW9uKiBnZW5jKGNscywgcHJvcCwgY29sb3JzID0gQ09MT1JTLmVudHJpZXMoKSkge1xuXHR5aWVsZCBbYCR7Y2xzfS1pbmhlcml0YCwgYHsgJHtwcm9wfTogaW5oZXJpdCB9YF1cblx0eWllbGQgW2Ake2Nsc30tdHJhbnNwYXJlbnRgLCBgeyAke3Byb3B9OiB0cmFuc3BhcmVudCB9YF1cblx0eWllbGQgW2Ake2Nsc30tY3VycmVudGAsIGB7ICR7cHJvcH06IGN1cnJlbnRDb2xvciB9YF1cblxuXHRmb3IgKGNvbnN0IFtjb2xvck5hbWUsIGNvbG9yXSBvZiBjb2xvcnMpIHtcblx0XHR5aWVsZCBbYCR7Y2xzfS0ke2NvbG9yTmFtZX1gLCBgeyAke3Byb3B9OiBva2xjaCgke2NvbG9yfSkgfWBdXG5cblx0XHRmb3IgKGNvbnN0IHZhbHVlIG9mIE9QQUNJVElFUykge1xuXHRcdFx0eWllbGQgW2Ake2Nsc30tJHtjb2xvck5hbWV9LyR7dmFsdWV9YCwgYHsgJHtwcm9wfTogb2tsY2goJHtjb2xvcn0gLyAke3ZhbHVlIC8gMTAwfSkgfWBdXG5cdFx0fVxuXHR9XG59XG5cbi8vIEdlbmVyYXRlIGJhY2tkcm9wIGZpbHRlcnMgZnJvbSBmaWx0ZXJzLlxuZnVuY3Rpb24qIGJhY2tkcm9wKGZpbHRlclJ1bGVzKSB7XG5cdC8vIEhhbmRsZSBnZW4oKSBvdXRwdXQuIE5hdWdodHkgYXNzdW1wdGlvbiB0aGF0IGdlbigpIHdpbGwgbm90IGJlIHVzZWQgZm9yIGxlc3MgdGhhbiAzIHJ1bGVzLlxuXHRjb25zdCBmaWx0ZXJSdWxlc0FyciA9IGZpbHRlclJ1bGVzLmxlbmd0aCA9PT0gMiA/IFtmaWx0ZXJSdWxlc10gOiBmaWx0ZXJSdWxlc1xuXG5cdGZvciAoY29uc3QgZmlsdGVyUnVsZSBvZiBmaWx0ZXJSdWxlc0Fycikge1xuXHRcdHlpZWxkIGZpbHRlclJ1bGVcblx0XHRjb25zdCBbY2xzLCBydWxlXSA9IGZpbHRlclJ1bGVcblx0XHR5aWVsZCBbYGJhY2tkcm9wLSR7Y2xzfWAsIHJ1bGUucmVwbGFjZSgnZmlsdGVyOicsICdiYWNrZHJvcC1maWx0ZXI6JyldXG5cdH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFJ1bnRpbWUgYnVpbGRlclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuLy8gR2xvYmFsIG9iamVjdC5cbmNvbnN0IHR3ID0ge1xuXHRpbnN0YW5jZXM6IG5ldyBNYXAoKSxcblx0ZXh0ZW5kLFxufVxuXG5mdW5jdGlvbiBjcmVhdGVTaGVldCgpIHtcblx0Y29uc3Qgc2hlZXQgPSBuZXcgQ1NTU3R5bGVTaGVldCgpXG5cblx0Zm9yIChjb25zdCBjc3Mgb2YgUkVTRVQpIHtcblx0XHRzaGVldC5pbnNlcnRSdWxlKGNzcywgc2hlZXQuY3NzUnVsZXMubGVuZ3RoKVxuXHR9XG5cblx0Zm9yIChjb25zdCBbbmFtZSwga2V5ZnJhbWVzXSBvZiBLRVlGUkFNRVMuZW50cmllcygpKSB7XG5cdFx0c2hlZXQuaW5zZXJ0UnVsZShgQGtleWZyYW1lcyAke25hbWV9IHsgJHtrZXlmcmFtZXN9IH1gLCBzaGVldC5jc3NSdWxlcy5sZW5ndGgpXG5cdH1cblxuXHRyZXR1cm4gc2hlZXRcbn1cblxuLy8gUnVsZXMgYXJlIGFkZGVkIGluIHRoZSBmb2xsb3dpbmcgb3JkZXIuXG4vLyAxLiBTdGFuZGFyZCBydWxlcy5cbi8vIDIuIEhpZ2ggcHJpb3JpdHkgc3RhbmRhcmQgcnVsZXMuXG4vLyAzLiBNZWRpYSBxdWVyeSBydWxlcy5cbi8vIDQuIEhpZ2ggcHJpb3JpdHkgbWVkaWEgcXVlcnkgcnVsZXMuXG5mdW5jdGlvbiBhZGRSdWxlKGluc3RhbmNlLCBjbHMpIHtcblx0Ly8gU2tpcCBpZiBlbXB0eSBvciBhbHJlYWR5IHByZXNlbnQuXG5cdGlmICghY2xzIHx8IGluc3RhbmNlLnVzZWRSdWxlcy5oYXMoY2xzKSkge1xuXHRcdHJldHVyblxuXHR9XG5cblx0Y29uc3QgeyBtcSwgc3RhdGUsIHV0aWwsIHZhbHVlIH0gPSBjbHMubWF0Y2goQ0xBU1NfUEFSU0VSKS5ncm91cHNcblxuXHQvLyBHZXQgdGhlIENTUy5cblx0bGV0IGNzc1xuXHRpZiAodmFsdWUpIHtcblx0XHRjb25zdCBwcm9wID0gRlJFRV9QUk9QUy5nZXQodXRpbC5zcGxpdCgvLVxcWy8pWzBdKVxuXHRcdGNzcyA9IHByb3AgPyBgeyAke3Byb3B9OiAke3ZhbHVlfSB9YCA6IG51bGxcblx0fSBlbHNlIHtcblx0XHRjc3MgPSBVVElMUy5nZXQodXRpbClcblx0fVxuXG5cdGlmICghY3NzKSB7XG5cdFx0Y29uc29sZS53YXJuKGBVbmtub3duIHV0aWxpdHkgY2xhc3M6IFske2Nsc31dYClcblx0XHRyZXR1cm5cblx0fVxuXG5cdGNvbnN0IGlzSGlnaFByaW9yaXR5ID0gQm9vbGVhbihISUdIX1BSSU9SSVRZX1JVTEVTLmZpbmQociA9PiB1dGlsLmluY2x1ZGVzKHIpKSlcblxuXHQvLyBSZXNvbHZlIHJ1bGUgYW5kIGluZGV4LlxuXHRjb25zdCBlc2NhcGVkVXRpbCA9IHV0aWwucmVwbGFjZSgvKFxcL3xcXFt8XFxdfFxcLnxAKS9nLCAnXFxcXCQxJylcblx0Y29uc3QgdXRpbFdpdGhTdGF0ZSA9IHN0YXRlID8gYCR7c3RhdGV9XFxcXDoke2VzY2FwZWRVdGlsfToke3N0YXRlfWAgOiBlc2NhcGVkVXRpbFxuXHRsZXQgcnVsZVxuXHRsZXQgaW5kZXhcblx0aWYgKG1xKSB7XG5cdFx0aW5kZXggPSBpc0hpZ2hQcmlvcml0eSA/IGluc3RhbmNlLnNoZWV0LmNzc1J1bGVzLmxlbmd0aCA6IGluc3RhbmNlLm1xUnVsZXNTdGFydEluZGV4XG5cdFx0cnVsZSA9IGAke01FRElBX1FVRVJJRVMuZ2V0KG1xKX0geyAuJHttcX1cXFxcOiR7dXRpbFdpdGhTdGF0ZX0gJHtjc3N9IH1gXG5cdH0gZWxzZSB7XG5cdFx0cnVsZSA9IGAuJHt1dGlsV2l0aFN0YXRlfSAke2Nzc31gXG5cdFx0aW5kZXggPSBpc0hpZ2hQcmlvcml0eSA/IGluc3RhbmNlLm1xUnVsZXNTdGFydEluZGV4IDogMFxuXHRcdGluc3RhbmNlLm1xUnVsZXNTdGFydEluZGV4ICs9IDFcblx0fVxuXG5cdGluc3RhbmNlLnVzZWRSdWxlcy5hZGQoY2xzKVxuXHRpbnN0YW5jZS5zaGVldC5pbnNlcnRSdWxlKHJ1bGUsIGluZGV4KVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzRWxlbWVudChpbnN0YW5jZSwgZWwpIHtcblx0Y29uc3QgdGltZXN0YW1wID0gRGF0ZS5ub3coKVxuXHRjb25zdCBjbGFzc05hbWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3R3Jylcblx0Y29uc3QgY2xhc3NlcyA9IChjbGFzc05hbWUgfHwgJycpLnNwbGl0KC8gKy8pXG5cblx0Zm9yIChjb25zdCBjbHMgb2YgY2xhc3Nlcykge1xuXHRcdGlmIChjbHMpIHtcblx0XHRcdGFkZFJ1bGUoaW5zdGFuY2UsIGNscylcblx0XHR9XG5cdH1cblxuXHRlbC5jbGFzc05hbWUgPSBjbGFzc05hbWVcblx0aW5zdGFuY2UubGFzdEdlbmVyYXRpb25UaW1lID0gRGF0ZS5ub3coKSAtIHRpbWVzdGFtcFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKHsgY2xhc3NlcyA9IHt9LCBjb2xvcnMgPSB7fSwga2V5ZnJhbWVzID0ge30sIHF1ZXJpZXMgPSB7fSB9KSB7XG5cdC8vIEFkZCBtZWRpYSBxdWVyaWVzLlxuXHRPYmplY3QuZW50cmllcyhxdWVyaWVzKS5mb3JFYWNoKChbbmFtZSwgcXVlcnldKSA9PiBNRURJQV9RVUVSSUVTLnNldChuYW1lLCBxdWVyeSkpXG5cblx0Ly8gSW5qZWN0IGtleWZyYW1lcy5cbiAgT2JqZWN0LmVudHJpZXMoa2V5ZnJhbWVzKS5mb3JFYWNoKChbbmFtZSwga2V5ZnJhbWVzXSkgPT4ge1xuICAgIHR3Lmluc3RhbmNlcy52YWx1ZXMoKS5mb3JFYWNoKGluc3RhbmNlID0+IHtcbiAgICAgIGluc3RhbmNlLnNoZWV0Lmluc2VydFJ1bGUoYEBrZXlmcmFtZXMgJHtuYW1lfSB7ICR7a2V5ZnJhbWVzfSB9YCwgaW5zdGFuY2Uuc2hlZXQuY3NzUnVsZXMubGVuZ3RoKVxuICAgIH0pXG4gIH0pXG5cbiAgLy8gQWRkIGNsYXNzZXMgZm9yIG5ldyBjb2xvcnMuXG4gIENPTE9SX1BST1BTLmVudHJpZXMuZm9yRWFjaCgoW2NvbG9yQ2xhc3MsIGNvbG9yUHJvcF0pID0+IHtcbiAgICBmb3IgKGNvbnN0IFtjbHMsIGNzc10gb2YgZ2VuYyhjb2xvckNsYXNzLCBjb2xvclByb3AsIE9iamVjdC5lbnRyaWVzKGNvbG9ycykpKSB7XG4gICAgICBjbGFzc2VzW2Nsc10gPSBjc3NcbiAgICB9XG4gIH0pXG5cblx0Ly8gVXBkYXRlIHV0aWxzIHdpdGggbmV3IGNsYXNzZXMuXG5cdE9iamVjdC5lbnRyaWVzKGNsYXNzZXMpLmZvckVhY2goKFtuYW1lLCBjc3NdKSA9PiBVVElMUy5zZXQobmFtZSwgY3NzKSlcbn1cblxuZnVuY3Rpb24gaW5pdChyb290KSB7XG5cdGlmICghc2VsZi50dykge1xuXHRcdHNlbGYudHcgPSB0d1xuXHR9XG5cblx0aWYgKHR3Lmluc3RhbmNlcy5oYXMocm9vdCkpIHtcblx0XHRyZXR1cm5cblx0fVxuXG5cdGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KClcblx0Y29uc3Qgc2hlZXQgPSBjcmVhdGVTaGVldCgpXG5cdGNvbnN0IGluc3RhbmNlID0ge1xuXHRcdHJvb3QsXG5cdFx0dXNlZFJ1bGVzOiBuZXcgU2V0KCksXG5cdFx0c2hlZXQsXG5cdFx0bXFSdWxlc1N0YXJ0SW5kZXg6IHNoZWV0LmNzc1J1bGVzLmxlbmd0aCxcblx0XHRvYnNlcnZlcjogbmV3IE11dGF0aW9uT2JzZXJ2ZXIoYXN5bmMgbXV0YXRpb25zID0+IHtcblx0XHRcdGxldCBjbGVhbiA9IGZhbHNlXG5cdFx0XHRmb3IgKGNvbnN0IG0gb2YgbXV0YXRpb25zKSB7XG5cdFx0XHRcdC8vIEF0dHJpYnV0ZSBjaGFuZ2UuXG5cdFx0XHRcdGlmIChtLnR5cGUgPT09ICdhdHRyaWJ1dGVzJyAmJiBtLmF0dHJpYnV0ZU5hbWUgPT09ICd0dycpIHtcblx0XHRcdFx0XHRwcm9jZXNzRWxlbWVudChpbnN0YW5jZSwgbS50YXJnZXQpXG5cdFx0XHRcdFx0Y29udGludWVcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGZvciAoY29uc3Qgbm9kZSBvZiBtLmFkZGVkTm9kZXMpIHtcblx0XHRcdFx0XHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gMSkge1xuXHRcdFx0XHRcdFx0cHJvY2Vzc0VsZW1lbnQoaW5zdGFuY2UsIG5vZGUpXG5cblx0XHRcdFx0XHRcdC8vIEluaXRpYWxpemUgbmV3IHNoYWRvdyByb290LlxuXHRcdFx0XHRcdFx0aWYgKG5vZGUuc2hhZG93Um9vdCkge1xuXHRcdFx0XHRcdFx0XHRpbml0KG5vZGUuc2hhZG93Um9vdClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRjbGVhbiB8fD0gbS5yZW1vdmVkTm9kZXMubGVuZ3RoXG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGFueSBub2RlcyB3ZXJlIHJlbW92ZWQsIGNoZWNrIGlmIGFueSBzaGFkb3cgcm9vdHMgd2VyZSBkaXNjb25uZWN0ZWQuXG5cdFx0XHRpZiAoY2xlYW4pIHtcblx0XHRcdFx0Zm9yIChjb25zdCBpbnN0IG9mIHR3Lmluc3RhbmNlcy52YWx1ZXMoKSkge1xuXHRcdFx0XHRcdGlmICghaW5zdC5yb290LmlzQ29ubmVjdGVkKSB7XG5cdFx0XHRcdFx0XHRpbnN0Lm9ic2VydmVyLmRpc2Nvbm5lY3QoKVxuXHRcdFx0XHRcdFx0dHcuaW5zdGFuY2VzLmRlbGV0ZShpbnN0LnJvb3QpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSksXG5cdH1cblxuXHQvLyBBZGQgaW5zdGFuY2UgdG8gdGhlIG1hcC5cblx0dHcuaW5zdGFuY2VzLnNldChyb290LCBpbnN0YW5jZSlcblxuXHQvLyBJbmplY3Qgc3R5bGUgc2hlZXQgdG8gdGhlIHJvb3QuXG5cdHJvb3QuYWRvcHRlZFN0eWxlU2hlZXRzID0gW2luc3RhbmNlLnNoZWV0XVxuXG5cdC8vIFVwZGF0ZSBleGlzdGluZyBjbGFzc2VzLlxuXHRmb3IgKGNvbnN0IGVsIG9mIHJvb3QucXVlcnlTZWxlY3RvckFsbCgnW3R3XScpKSB7XG5cdFx0cHJvY2Vzc0VsZW1lbnQoaW5zdGFuY2UsIGVsKVxuXHR9XG5cblx0Ly8gU3RhcnQgb2JzZXJ2aW5nIHRoZSByb290LlxuXHRpbnN0YW5jZS5vYnNlcnZlci5vYnNlcnZlKHJvb3QsIHtcblx0XHRhdHRyaWJ1dGVzOiB0cnVlLFxuXHRcdGNoaWxkTGlzdDogdHJ1ZSxcblx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdGF0dHJpYnV0ZUZpbHRlcjogWyd0dyddLFxuXHR9KVxuXG5cdC8vIFBlcmZvcm1hbmNlIG1ldHJpY3MuXG5cdGluc3RhbmNlLmluaXRUaW1lID0gRGF0ZS5ub3coKSAtIHRpbWVzdGFtcFxufVxuXG4vLyBJbml0aWFsaXplIGZvciB0aGUgZG9jdW1lbnQuXG5pZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG5cdGluaXQoZG9jdW1lbnQpXG59XG4iLCAiaW1wb3J0IHsgVVRJTFMgfSBmcm9tICcuLi9zcmMvdGlueXdpbmQuanMnXG5cbmNvbnN0IFNUQVRFUyA9IFsnaG92ZXInLCAnZm9jdXMnLCAnZm9jdXMtdmlzaWJsZScsICdhY3RpdmUnXVxuY29uc3QgTVFTID0gWydzbScsICdtZCcsICdsZycsICdkYXJrJ11cblxuZnVuY3Rpb24gYWRkVGVzdERpdiAoKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGRpdi5zZXRBdHRyaWJ1dGUoJ3R3JywgJ2JnLXZpb2xldC0zMDAgcC00IHJvdW5kZWQtbWQgdy1bMTAwcHhdIGgtWzEwMHB4XScpXG4gIGRpdi50ZXh0Q29udGVudCA9ICdUZXN0IERJVidcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpXG4gIGRpdi5zZXRBdHRyaWJ1dGUoJ3R3JywgYCR7ZGl2LmdldEF0dHJpYnV0ZSgndHcnKX0gYm9yZGVyLTJgKVxufVxuXG5mdW5jdGlvbiBhZGREaXZXaXRoQWxsQ2xhc3NlcyAoKSB7XG4gIGNvbnN0IGNsYXNzZXMgPSBbXVxuXG4gIGZvciAoY29uc3QgY2xzIG9mIFVUSUxTLmtleXMoKSkge1xuICAgIC8vIElnbm9yZSBzZWN0aW9uIHRpdGxlcy5cbiAgICBpZiAoY2xzICE9PSBjbHMudG9VcHBlckNhc2UoKSkge1xuICAgICAgY2xhc3Nlcy5wdXNoKGNscylcbiAgICB9XG4gIH1cblxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBkaXYuc2V0QXR0cmlidXRlKCd0dycsIGNsYXNzZXMuam9pbignICcpKVxuICBkaXYudGV4dENvbnRlbnQgPSAnQWxsIGNsYXNzZXMnXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KVxufVxuXG5mdW5jdGlvbiBhZGREaXZXaXRoUHJlZml4ZWRDbGFzc2VzICgpIHtcbiAgY29uc3QgY2xzID0gJ2hpZGRlbidcbiAgY29uc3QgY2xhc3NlcyA9IFtjbHNdXG5cbiAgZm9yIChjb25zdCBzdGF0ZSBvZiBTVEFURVMpIHtcbiAgICBjbGFzc2VzLnB1c2goYCR7c3RhdGV9OiR7Y2xzfWApXG4gIH1cblxuICBmb3IgKGNvbnN0IG1xIG9mIE1RUykge1xuICAgIGNsYXNzZXMucHVzaChgJHttcX06JHtjbHN9YClcbiAgICBmb3IgKGNvbnN0IHN0YXRlIG9mIFNUQVRFUykge1xuICAgICAgY2xhc3Nlcy5wdXNoKGAke21xfToke3N0YXRlfToke2Nsc31gKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGRpdi5zZXRBdHRyaWJ1dGUoJ3R3JywgY2xhc3Nlcy5qb2luKCcgJykpXG4gIGRpdi50ZXh0Q29udGVudCA9ICdQcmVmaXhlZCBjbGFzc2VzJ1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdilcbn1cblxuZnVuY3Rpb24gYWRkQ3VzdG9tRWxlbWVudCAobmFtZSkge1xuICBjbGFzcyBDdXN0b21FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgIHN1cGVyKClcbiAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pXG4gICAgICB0aGlzLnNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gJzxkaXYgdHc9XCJiZy1hbWJlci0zMDAgcC00IHJvdW5kZWQtbWQgYm9yZGVyLTJcIj5TaGFkb3cgRE9NPC9kaXY+J1xuICAgIH1cbiAgfVxuXG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZShuYW1lLCBDdXN0b21FbGVtZW50KVxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSlcbiAgZWwuc2V0QXR0cmlidXRlKCd0dycsICdibG9jaycpXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpXG5cbiAgcmV0dXJuIGVsXG59XG5cbmZ1bmN0aW9uIGRlbGF5IChtcykge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSlcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcbiAgYWRkVGVzdERpdigpXG4gIGFkZEN1c3RvbUVsZW1lbnQoJ2N1c3RvbS1lbGVtZW50LTEnKVxuICBlbCA9IGFkZEN1c3RvbUVsZW1lbnQoJ2N1c3RvbS1lbGVtZW50LTInKVxuICBhd2FpdCBkZWxheSgxMDApXG4gIGVsLnJlbW92ZSgpXG5cbiAgYWRkRGl2V2l0aFByZWZpeGVkQ2xhc3NlcygpXG4gIGFkZERpdldpdGhBbGxDbGFzc2VzKClcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiOztBQVNPLE1BQU0sUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFB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QUFLO0FBQ3hDLFFBQUksYUFBYSxNQUFNLFFBQVEsS0FBSyxHQUFHLENBQUM7QUFDeEMsUUFBSSxjQUFjO0FBQ2xCLGFBQVMsS0FBSyxZQUFZLEdBQUc7QUFBQSxFQUMvQjtBQUVBLFdBQVMsNEJBQTZCO0FBQ3BDLFVBQU0sTUFBTTtBQUNaLFVBQU0sVUFBVSxDQUFDLEdBQUc7QUFFcEIsZUFBVyxTQUFTQSxTQUFRO0FBQzFCLGNBQVEsS0FBSyxHQUFHLEtBQUssSUFBSSxHQUFHLEVBQUU7QUFBQSxJQUNoQztBQUVBLGVBQVcsTUFBTSxLQUFLO0FBQ3BCLGNBQVEsS0FBSyxHQUFHLEVBQUUsSUFBSSxHQUFHLEVBQUU7QUFDM0IsaUJBQVcsU0FBU0EsU0FBUTtBQUMxQixnQkFBUSxLQUFLLEdBQUcsRUFBRSxJQUFJLEtBQUssSUFBSSxHQUFHLEVBQUU7QUFBQSxNQUN0QztBQUFBLElBQ0Y7QUFFQSxVQUFNLE1BQU0sU0FBUyxjQUFjLEtBQUs7QUFDeEMsUUFBSSxhQUFhLE1BQU0sUUFBUSxLQUFLLEdBQUcsQ0FBQztBQUN4QyxRQUFJLGNBQWM7QUFDbEIsYUFBUyxLQUFLLFlBQVksR0FBRztBQUFBLEVBQy9CO0FBRUEsV0FBUyxpQkFBa0IsTUFBTTtBQUFBLElBQy9CLE1BQU0sc0JBQXNCLFlBQVk7QUFBQSxNQUN0QyxjQUFlO0FBQ2IsY0FBTTtBQUNOLGFBQUssYUFBYSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ2xDLGFBQUssV0FBVyxZQUFZO0FBQUEsTUFDOUI7QUFBQSxJQUNGO0FBRUEsbUJBQWUsT0FBTyxNQUFNLGFBQWE7QUFDekMsVUFBTUMsTUFBSyxTQUFTLGNBQWMsSUFBSTtBQUN0QyxJQUFBQSxJQUFHLGFBQWEsTUFBTSxPQUFPO0FBQzdCLGFBQVMsS0FBSyxZQUFZQSxHQUFFO0FBRTVCLFdBQU9BO0FBQUEsRUFDVDtBQUVBLFdBQVMsTUFBTyxJQUFJO0FBQ2xCLFdBQU8sSUFBSSxRQUFRLGFBQVcsV0FBVyxTQUFTLEVBQUUsQ0FBQztBQUFBLEVBQ3ZEO0FBRUEsV0FBUyxpQkFBaUIsb0JBQW9CLFlBQVk7QUFDeEQsZUFBVztBQUNYLHFCQUFpQixrQkFBa0I7QUFDbkMsU0FBSyxpQkFBaUIsa0JBQWtCO0FBQ3hDLFVBQU0sTUFBTSxHQUFHO0FBQ2YsT0FBRyxPQUFPO0FBRVYsOEJBQTBCO0FBQzFCLHlCQUFxQjtBQUFBLEVBQ3ZCLENBQUM7IiwKICAibmFtZXMiOiBbImVsIiwgImtleWZyYW1lcyIsICJTVEFURVMiLCAiZWwiXQp9Cg==
