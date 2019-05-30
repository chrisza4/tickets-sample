function* generator() {
  const i = yield 1
  const y = yield i
  console.log('Y=', y, 'I=', i)
  return 5
}

function run() {
  const gen = generator()
  console.log(gen.next())
  console.log(gen.next(123))
  console.log(gen.next(3))
}

run()
