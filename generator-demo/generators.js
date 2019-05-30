function* generator() {
  const i = yield 1
  const y = yield i
  console.log('Y=', y, 'I=', i)
  return 5
}

function run() {
  const gen = generator()
  console.log(gen.next()) // Get first number from line 2 (yield 1)
  console.log(gen.next(123)) // Send 123 to i in line 2, and get new value (which is yield i in line 3)
  console.log(gen.next(3)) // Send 3 to y in line 3, and get a new value (which is return 5). In this line done is true
  console.log(gen.next())
  console.log(gen.next())
}

run()
