/* globals Atomics, SharedArrayBuffer */
'use strict'
exports.atomics = (Atomics && Atomics.wait && Int32Array && SharedArrayBuffer)
exports.sleep = (time = 0) => Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, time)
exports.wait = (time) => new Promise(resolve => setTimeout(resolve, time))
exports.over = (num = 0, cb = () => {}) => Array.from(Array(num)).map((v, i) => cb(i))
