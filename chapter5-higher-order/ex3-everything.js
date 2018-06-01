// Analogous to the some method, arrays also have an every method. This one
// returns true when the given function returns true for every element in the
// array. In a way, some is a version of the || operator that acts on arrays,
// and every is like the && operator.

// Implement every as a function that takes an array and a predicate function
// as parameters. Write two versions, one using a loop and one using the some
// method.

const every1 = (array, predicate) => {
  for (let i of array) {
    if (!predicate(array[i])) return false
  }
  return true
}

const every2 = (array, predicate) => {
  return array.some((x) => !predicate(x)) ? false : true
}

if (!module.parent) {
  console.log({
    every1a: every1([1, 3, 5], n => n < 10),
    every2a: every2([1, 3, 5], n => n < 10),
    every1b: every1([2, 4, 16], n => n < 10),
    every2b: every2([2, 4, 16], n => n < 10),
    every1c: every1([], n => n < 10),
    every2c: every2([], n => n < 10),
  })
}
