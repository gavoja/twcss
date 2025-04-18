export const COLOR_PROPS = new Map([
  ['bg', 'background-color'],
  ['text', 'color'],
  ['decoration', 'text-decoration-color'],
  ['border', 'border-color'],
  ['outline', 'outline-color'],
  ['accent', 'accent-color'],
  ['caret', 'caret-color'],
  ['fill', 'fill'],
  ['stroke', 'stroke'],
])

export const COLORS = new Map([
  ['red-50', '0.971 0.013 17.38'],
  ['red-100', '0.936 0.032 17.717'],
  ['red-200', '0.885 0.062 18.334'],
  ['red-300', '0.808 0.114 19.571'],
  ['red-400', '0.704 0.191 22.216'],
  ['red-500', '0.637 0.237 25.331'],
  ['red-600', '0.577 0.245 27.325'],
  ['red-700', '0.505 0.213 27.518'],
  ['red-800', '0.444 0.177 26.899'],
  ['red-900', '0.396 0.141 25.723'],
  ['red-950', '0.258 0.092 26.042'],
  ['orange-50', '0.98 0.016 73.684'],
  ['orange-100', '0.954 0.038 75.164'],
  ['orange-200', '0.901 0.076 70.697'],
  ['orange-300', '0.837 0.128 66.29'],
  ['orange-400', '0.75 0.183 55.934'],
  ['orange-500', '0.705 0.213 47.604'],
  ['orange-600', '0.646 0.222 41.116'],
  ['orange-700', '0.553 0.195 38.402'],
  ['orange-800', '0.47 0.157 37.304'],
  ['orange-900', '0.408 0.123 38.172'],
  ['orange-950', '0.266 0.079 36.259'],
  ['amber-50', '0.987 0.022 95.277'],
  ['amber-100', '0.962 0.059 95.617'],
  ['amber-200', '0.924 0.12 95.746'],
  ['amber-300', '0.879 0.169 91.605'],
  ['amber-400', '0.828 0.189 84.429'],
  ['amber-500', '0.769 0.188 70.08'],
  ['amber-600', '0.666 0.179 58.318'],
  ['amber-700', '0.555 0.163 48.998'],
  ['amber-800', '0.473 0.137 46.201'],
  ['amber-900', '0.414 0.112 45.904'],
  ['amber-950', '0.279 0.077 45.635'],
  ['yellow-50', '0.987 0.026 102.212'],
  ['yellow-100', '0.973 0.071 103.193'],
  ['yellow-200', '0.945 0.129 101.54'],
  ['yellow-300', '0.905 0.182 98.111'],
  ['yellow-400', '0.852 0.199 91.936'],
  ['yellow-500', '0.795 0.184 86.047'],
  ['yellow-600', '0.681 0.162 75.834'],
  ['yellow-700', '0.554 0.135 66.442'],
  ['yellow-800', '0.476 0.114 61.907'],
  ['yellow-900', '0.421 0.095 57.708'],
  ['yellow-950', '0.286 0.066 53.813'],
  ['lime-50', '0.986 0.031 120.757'],
  ['lime-100', '0.967 0.067 122.328'],
  ['lime-200', '0.938 0.127 124.321'],
  ['lime-300', '0.897 0.196 126.665'],
  ['lime-400', '0.841 0.238 128.85'],
  ['lime-500', '0.768 0.233 130.85'],
  ['lime-600', '0.648 0.2 131.684'],
  ['lime-700', '0.532 0.157 131.589'],
  ['lime-800', '0.453 0.124 130.933'],
  ['lime-900', '0.405 0.101 131.063'],
  ['lime-950', '0.274 0.072 132.109'],
  ['green-50', '0.982 0.018 155.826'],
  ['green-100', '0.962 0.044 156.743'],
  ['green-200', '0.925 0.084 155.995'],
  ['green-300', '0.871 0.15 154.449'],
  ['green-400', '0.792 0.209 151.711'],
  ['green-500', '0.723 0.219 149.579'],
  ['green-600', '0.627 0.194 149.214'],
  ['green-700', '0.527 0.154 150.069'],
  ['green-800', '0.448 0.119 151.328'],
  ['green-900', '0.393 0.095 152.535'],
  ['green-950', '0.266 0.065 152.934'],
  ['emerald-50', '0.979 0.021 166.113'],
  ['emerald-100', '0.95 0.052 163.051'],
  ['emerald-200', '0.905 0.093 164.15'],
  ['emerald-300', '0.845 0.143 164.978'],
  ['emerald-400', '0.765 0.177 163.223'],
  ['emerald-500', '0.696 0.17 162.48'],
  ['emerald-600', '0.596 0.145 163.225'],
  ['emerald-700', '0.508 0.118 165.612'],
  ['emerald-800', '0.432 0.095 166.913'],
  ['emerald-900', '0.378 0.077 168.94'],
  ['emerald-950', '0.262 0.051 172.552'],
  ['teal-50', '0.984 0.014 180.72'],
  ['teal-100', '0.953 0.051 180.801'],
  ['teal-200', '0.91 0.096 180.426'],
  ['teal-300', '0.855 0.138 181.071'],
  ['teal-400', '0.777 0.152 181.912'],
  ['teal-500', '0.704 0.14 182.503'],
  ['teal-600', '0.6 0.118 184.704'],
  ['teal-700', '0.511 0.096 186.391'],
  ['teal-800', '0.437 0.078 188.216'],
  ['teal-900', '0.386 0.063 188.416'],
  ['teal-950', '0.277 0.046 192.524'],
  ['cyan-50', '0.984 0.019 200.873'],
  ['cyan-100', '0.956 0.045 203.388'],
  ['cyan-200', '0.917 0.08 205.041'],
  ['cyan-300', '0.865 0.127 207.078'],
  ['cyan-400', '0.789 0.154 211.53'],
  ['cyan-500', '0.715 0.143 215.221'],
  ['cyan-600', '0.609 0.126 221.723'],
  ['cyan-700', '0.52 0.105 223.128'],
  ['cyan-800', '0.45 0.085 224.283'],
  ['cyan-900', '0.398 0.07 227.392'],
  ['cyan-950', '0.302 0.056 229.695'],
  ['sky-50', '0.977 0.013 236.62'],
  ['sky-100', '0.951 0.026 236.824'],
  ['sky-200', '0.901 0.058 230.902'],
  ['sky-300', '0.828 0.111 230.318'],
  ['sky-400', '0.746 0.16 232.661'],
  ['sky-500', '0.685 0.169 237.323'],
  ['sky-600', '0.588 0.158 241.966'],
  ['sky-700', '0.5 0.134 242.749'],
  ['sky-800', '0.443 0.11 240.79'],
  ['sky-900', '0.391 0.09 240.876'],
  ['sky-950', '0.293 0.066 243.157'],
  ['blue-50', '0.97 0.014 254.604'],
  ['blue-100', '0.932 0.032 255.585'],
  ['blue-200', '0.882 0.059 254.128'],
  ['blue-300', '0.809 0.105 251.813'],
  ['blue-400', '0.707 0.165 254.624'],
  ['blue-500', '0.623 0.214 259.815'],
  ['blue-600', '0.546 0.245 262.881'],
  ['blue-700', '0.488 0.243 264.376'],
  ['blue-800', '0.424 0.199 265.638'],
  ['blue-900', '0.379 0.146 265.522'],
  ['blue-950', '0.282 0.091 267.935'],
  ['indigo-50', '0.962 0.018 272.314'],
  ['indigo-100', '0.93 0.034 272.788'],
  ['indigo-200', '0.87 0.065 274.039'],
  ['indigo-300', '0.785 0.115 274.713'],
  ['indigo-400', '0.673 0.182 276.935'],
  ['indigo-500', '0.585 0.233 277.117'],
  ['indigo-600', '0.511 0.262 276.966'],
  ['indigo-700', '0.457 0.24 277.023'],
  ['indigo-800', '0.398 0.195 277.366'],
  ['indigo-900', '0.359 0.144 278.697'],
  ['indigo-950', '0.257 0.09 281.288'],
  ['violet-50', '0.969 0.016 293.756'],
  ['violet-100', '0.943 0.029 294.588'],
  ['violet-200', '0.894 0.057 293.283'],
  ['violet-300', '0.811 0.111 293.571'],
  ['violet-400', '0.702 0.183 293.541'],
  ['violet-500', '0.606 0.25 292.717'],
  ['violet-600', '0.541 0.281 293.009'],
  ['violet-700', '0.491 0.27 292.581'],
  ['violet-800', '0.432 0.232 292.759'],
  ['violet-900', '0.38 0.189 293.745'],
  ['violet-950', '0.283 0.141 291.089'],
  ['purple-50', '0.977 0.014 308.299'],
  ['purple-100', '0.946 0.033 307.174'],
  ['purple-200', '0.902 0.063 306.703'],
  ['purple-300', '0.827 0.119 306.383'],
  ['purple-400', '0.714 0.203 305.504'],
  ['purple-500', '0.627 0.265 303.9'],
  ['purple-600', '0.558 0.288 302.321'],
  ['purple-700', '0.496 0.265 301.924'],
  ['purple-800', '0.438 0.218 303.724'],
  ['purple-900', '0.381 0.176 304.987'],
  ['purple-950', '0.291 0.149 302.717'],
  ['fuchsia-50', '0.977 0.017 320.058'],
  ['fuchsia-100', '0.952 0.037 318.852'],
  ['fuchsia-200', '0.903 0.076 319.62'],
  ['fuchsia-300', '0.833 0.145 321.434'],
  ['fuchsia-400', '0.74 0.238 322.16'],
  ['fuchsia-500', '0.667 0.295 322.15'],
  ['fuchsia-600', '0.591 0.293 322.896'],
  ['fuchsia-700', '0.518 0.253 323.949'],
  ['fuchsia-800', '0.452 0.211 324.591'],
  ['fuchsia-900', '0.401 0.17 325.612'],
  ['fuchsia-950', '0.293 0.136 325.661'],
  ['pink-50', '0.971 0.014 343.198'],
  ['pink-100', '0.948 0.028 342.258'],
  ['pink-200', '0.899 0.061 343.231'],
  ['pink-300', '0.823 0.12 346.018'],
  ['pink-400', '0.718 0.202 349.761'],
  ['pink-500', '0.656 0.241 354.308'],
  ['pink-600', '0.592 0.249 0.584'],
  ['pink-700', '0.525 0.223 3.958'],
  ['pink-800', '0.459 0.187 3.815'],
  ['pink-900', '0.408 0.153 2.432'],
  ['pink-950', '0.284 0.109 3.907'],
  ['rose-50', '0.969 0.015 12.422'],
  ['rose-100', '0.941 0.03 12.58'],
  ['rose-200', '0.892 0.058 10.001'],
  ['rose-300', '0.81 0.117 11.638'],
  ['rose-400', '0.712 0.194 13.428'],
  ['rose-500', '0.645 0.246 16.439'],
  ['rose-600', '0.586 0.253 17.585'],
  ['rose-700', '0.514 0.222 16.935'],
  ['rose-800', '0.455 0.188 13.697'],
  ['rose-900', '0.41 0.159 10.272'],
  ['rose-950', '0.271 0.105 12.094'],
  ['slate-50', '0.984 0.003 247.858'],
  ['slate-100', '0.968 0.007 247.896'],
  ['slate-200', '0.929 0.013 255.508'],
  ['slate-300', '0.869 0.022 252.894'],
  ['slate-400', '0.704 0.04 256.788'],
  ['slate-500', '0.554 0.046 257.417'],
  ['slate-600', '0.446 0.043 257.281'],
  ['slate-700', '0.372 0.044 257.287'],
  ['slate-800', '0.279 0.041 260.031'],
  ['slate-900', '0.208 0.042 265.755'],
  ['slate-950', '0.129 0.042 264.695'],
  ['gray-50', '0.985 0.002 247.839'],
  ['gray-100', '0.967 0.003 264.542'],
  ['gray-200', '0.928 0.006 264.531'],
  ['gray-300', '0.872 0.01 258.338'],
  ['gray-400', '0.707 0.022 261.325'],
  ['gray-500', '0.551 0.027 264.364'],
  ['gray-600', '0.446 0.03 256.802'],
  ['gray-700', '0.373 0.034 259.733'],
  ['gray-800', '0.278 0.033 256.848'],
  ['gray-900', '0.21 0.034 264.665'],
  ['gray-950', '0.13 0.028 261.692'],
  ['zinc-50', '0.985 0 0'],
  ['zinc-100', '0.967 0.001 286.375'],
  ['zinc-200', '0.92 0.004 286.32'],
  ['zinc-300', '0.871 0.006 286.286'],
  ['zinc-400', '0.705 0.015 286.067'],
  ['zinc-500', '0.552 0.016 285.938'],
  ['zinc-600', '0.442 0.017 285.786'],
  ['zinc-700', '0.37 0.013 285.805'],
  ['zinc-800', '0.274 0.006 286.033'],
  ['zinc-900', '0.21 0.006 285.885'],
  ['zinc-950', '0.141 0.005 285.823'],
  ['neutral-50', '0.985 0 0'],
  ['neutral-100', '0.97 0 0'],
  ['neutral-200', '0.922 0 0'],
  ['neutral-300', '0.87 0 0'],
  ['neutral-400', '0.708 0 0'],
  ['neutral-500', '0.556 0 0'],
  ['neutral-600', '0.439 0 0'],
  ['neutral-700', '0.371 0 0'],
  ['neutral-800', '0.269 0 0'],
  ['neutral-900', '0.205 0 0'],
  ['neutral-950', '0.145 0 0'],
  ['stone-50', '0.985 0.001 106.423'],
  ['stone-100', '0.97 0.001 106.424'],
  ['stone-200', '0.923 0.003 48.717'],
  ['stone-300', '0.869 0.005 56.366'],
  ['stone-400', '0.709 0.01 56.259'],
  ['stone-500', '0.553 0.013 58.071'],
  ['stone-600', '0.444 0.011 73.639'],
  ['stone-700', '0.374 0.01 67.558'],
  ['stone-800', '0.268 0.007 34.298'],
  ['stone-900', '0.216 0.006 56.043'],
  ['stone-950', '0.147 0.004 49.25'],
  ['black', '0 0 0'],
  ['white', '1 0 0'],
])
