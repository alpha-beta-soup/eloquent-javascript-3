// Write two functions, reverseArray and reverseArrayInPlace. The first,
// reverseArray, takes an array as argument and produces a new array that has
// the same elements in the inverse order. The second, reverseArrayInPlace,
// does what the reverse method does: it modifies the array given as argument
// by reversing its elements. Neither may use the standard reverse method.

const range = require('./ex1-rangesum').range

const reverseArray = (array) => {
  const newArray = []
  array.forEach(val => newArray.unshift(val))
  return newArray
}

const reverseArrayInPlace = (array) => {
  for (let i = 0; i < Math.floor(array.length/2); i++) {
    let a = array[i]
    array[i] = array[array.length - 1 - i]
    array[array.length - 1 -i] = a
  }
  return array
}

if (!module.parent) {
  console.log({
    reverseArray: reverseArray([1,2,3]),
    reverseArray2: reverseArray([1,2,3,4]),
    reverseArrayInPlace: reverseArrayInPlace([1,2,3]),
    reverseArrayInPlace2: reverseArrayInPlace([1,2,3,4])
  })
  console.time('reverseArray')
  reverseArray(range(0,10000))
  console.timeEnd('reverseArray')

  console.time('reverseArrayInPlace')
  reverseArrayInPlace(range(0,10000))
  console.timeEnd('reverseArrayInPlace')
}

module.exports = {
  reverseArray,
  reverseArrayInPlace
}
