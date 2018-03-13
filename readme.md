# sleepover [![Build Status](https://travis-ci.org/darcyclarke/sleepover.svg?branch=master)](https://travis-ci.org/darcyclarke/sleepover)

> Step/loop &amp; sleep methods

![](https://media.giphy.com/media/nGMyNVfRAsgA8/giphy.gif)

## Install

```
$ npm install sleepover
```

## Usage

```js
const { sleep, over } = require('sleepover')

sleep(500)
//=> delays execution for 500ms

over(30, (i) => console.log(i))
//=> loops 30 times, calling the provided method each time
```

## API

### sleep(delay)

#### delay

Type: `number`

The number, in ms, that you'd like to delay execution of your code.

### over(times, callback)

#### times

Type: `number`

The number of times you would like to loop/iterate.

#### callback

Type: `function`

The callback function you want executed on each iteration (it gets provided a single index argument).

## License

MIT © [Darcy Clarke](http://darcyclarke.me)
