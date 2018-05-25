//  Write a function countBs that takes a string as its only argument and
// returns a number that indicates how many uppercase “B” characters there are
// in the string.

const countChars = (input, character) => {
  count = 0
  for (let i = 0; i < input.length; i++) {
    count += input[i] === character
  }
  return count
}

const countBs = (input) => {
  return countChars(input, 'B')
}

if (!module.parent) {
  const arg = process.argv[2]
  if (arg == null) throw new Error('No input')
  console.log(countBs(String(arg)))
}
