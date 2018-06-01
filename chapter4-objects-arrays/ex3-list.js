const reverseArray = require('./ex2-reverse').reverseArray

const arrayToList = (array) => {
  let list = null
  reverseArray(array).forEach(value => list = {value, rest: list})
  return list
}

const listToArray = (list) => {
  array = []
  for (let node = list; node; node = node.rest) array.push(node.value)
  return array
}

const prepend = (value, list) => {
  return {value, rest: list}
}

const nth = (list, n) => {
  if (!list) return undefined
  return n === 0 ? list.value : nth(list.rest, --n)
}

if (!module.parent) {
  console.log({
    arrayToList: arrayToList([10, 20]),
    listToArray: listToArray(arrayToList([10,20,30])),
    prepend: prepend(10, prepend(20, null)),
    nth: nth(arrayToList([10, 20, 30]), 1)
  })
}
