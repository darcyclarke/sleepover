declare module 'sleepover' {
  export function atomics(): boolean;
  export function sleep(time: number): 'ok' | 'timed-out' | 'not-equal';
  export function snooze(time: number): Promise<void>;
  export function over(num: number, cb: () => void): void;
}
