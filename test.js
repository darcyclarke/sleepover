const test = require('ava')
const { sleep, snooze, over } = require('./index')

test('sleep', t => {
  let start = new Date()
  sleep(500)
  let diff = Math.floor((new Date() - start) / 100) * 100
  t.is((diff === 500), true, 'Delay execution 500ms')
})

test('snooze', async t => {
  let start = new Date()
  await snooze(500)
  let diff = Math.floor((new Date() - start) / 100) * 100
  t.is((diff === 500), true, 'Delay execution 500ms')
})

test('loop', t => {
  let num = 0
  over(50, () => num++)
  t.is((num === 50), true, 'Loop function 50 times')
})
