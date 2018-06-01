const _checkInput = ({input}) => {
  if (!Number.isInteger(Number(input))) throw new Error('Input must be an integer')
  if (input < 0) throw new Error('Input must have be positive')
  return input
}

const makeTriangle = (size) => {
  size = _checkInput({input: size})
  let iterations = 0
  while (iterations < size) {
    console.log('#'.repeat(++iterations))
  }
  return
}

if (!module.parent) {
  const size = process.argv[2] || 7
  makeTriangle(size)
}
