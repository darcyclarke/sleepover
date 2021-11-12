# sleepover ![Tests](https://github.com/darcyclarke/sleepover/actions/workflows/run_tests.yml/badge.svg)

> Step, loop &amp; sleep methods

![](https://media.giphy.com/media/nGMyNVfRAsgA8/giphy.gif)

## Install

```
$ npm install sleepover
```

## Usage

```js
const { sleep, over, snooze } = require('sleepover')

sleep(500)
//=> delays execution for 500ms using Atomics.wait

over(30, (i) => console.log(i))
//=> loops 30 times, calling the provided method each time

async function something() {
  await snooze(500)
  //=> delays execution for 500ms using async/await + Promise + setTimeout
}
```

## API

### sleep(delay)

#### delay

Type: `number`

The number, in ms, that you'd like to delay execution of your code. (utilizes the [`Atomics`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics) API under the hood)

### over(times, callback)

#### times

Type: `number`

The number of times you would like to loop/iterate.

#### callback

Type: `function`

The callback function you want executed on each iteration (it gets provided a single index argument).

### snooze(delay)

#### delay

Type: `number`

The number, in ms, that you'd like to delay execution of your code. (utilizes a `Promise` + `setTimeout`)

### atomics

Type: `boolean`

Result of the test conditions for defining [`Atomics`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Atomics) support in the current environment. Use this to determine whether ot use `sleep` or `snooze` respectively.

## License

MIT © [Darcy Clarke](http://darcyclarke.me)
