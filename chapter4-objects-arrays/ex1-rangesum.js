const range = (start, end, increment = start < end ? 1 : -1) => {
 let output = []
 if (increment === 0) return output
 if (start > end && increment > 0) increment *= -1
 const stopIteration = start < end ? (i) => i <= end : (i) => i >= end
 for (let i = start; stopIteration(i); i += increment) {
   output.push(i)
 }
 return output
}

const sum = (array) => {
 let total = 0
 for (let val of array) total += val
 return total
}

if (!module.parent) {
  console.log({
    range: range(0, 10),
    range2: range(0, 10, 2),
    range3: range(5, 2, -1),
    range4: range(10, -5, -2),
    range5: range(10, -5, 2),
    range6: range(0, 10, 0),
    range7: range(10, -5),
    sum1: sum(range(0, 10))
  })
}

module.exports = {
  range, sum
}
