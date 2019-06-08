export function keyBy(array, keyResolver) {
  return array.reduce((acc, row) => {
    acc[keyResolver(row)] = row
    return acc
  }, {})
}
