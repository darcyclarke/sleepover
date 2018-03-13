/* globals Atomics, SharedArrayBuffer */
'use strict'
exports.sleep = (d) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, d)
exports.over = (l, c) => Array.from(Array(l)).forEach((v, i) => c(i))
