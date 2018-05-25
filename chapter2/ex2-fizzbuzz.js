const _checkInput = ({input}) => {
  if (!Number.isInteger(Number(input))) throw new Error('Input must be an integer')
  if (input < 0) throw new Error('Input must have be positive')
  return input
}

const fizzBuzz = (n) => {
  n = _checkInput({input: n})
  for (let i = 1; i <= n; i++) {
    let output = ''
    if (i % 3 === 0) output += 'Fizz'
    if (i % 5 === 0) output += 'Buzz'
    console.log(output || i)
  }
  return
}

if (!module.parent) {
  const size = process.argv[2] || 100
  fizzBuzz(size)
}
