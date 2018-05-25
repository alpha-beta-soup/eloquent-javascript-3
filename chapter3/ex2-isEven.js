// Zero is even.
//
// One is odd.
//
// For any other number N, its evenness is the same as N - 2.

const isEven = (num) => {
  if (num == 0) return true
  if (num == 1) return false
  if (num < 0) return isEven(-num)
  else return isEven(num-2)
}

if (!module.parent) {
  const arg = process.argv[2]
  if (arg == null) throw new Error('No input')
  console.log(isEven(arg))
}
