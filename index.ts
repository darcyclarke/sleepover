/* globals Atomics, SharedArrayBuffer */
'use strict'

/**
 * Check if Atomics, SharedArrayBuffer and related APIs are available
 */
export const atomics: boolean = !!(typeof Atomics !== 'undefined' && typeof Atomics.wait === 'function' && typeof Int32Array !== 'undefined' && typeof SharedArrayBuffer !== 'undefined')

/**
 * Synchronous sleep function using Atomics.wait
 * @param time - Time to sleep in milliseconds (default: 0)
 * @returns The result of Atomics.wait
 */
export const sleep = (time: number = 0): 'ok' | 'not-equal' | 'timed-out' => {
  return Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, time)
}

/**
 * Asynchronous sleep function using Promise and setTimeout
 * @param time - Time to sleep in milliseconds
 * @returns Promise that resolves after the specified time
 */
export const snooze = (time: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, time))
}

/**
 * Execute a callback function a specified number of times
 * @param num - Number of times to execute the callback (default: 0)
 * @param cb - Callback function to execute, receives index as parameter (default: empty function)
 * @returns Array of callback return values
 */
export const over = <T>(num: number = 0, cb: (index: number) => T = (() => {}) as any): T[] => {
  return Array.from(Array(num)).map((v, i) => cb(i))
}
