const smaller = (a, b) => return a < b ? a : b

const min = (...arguments) => {
  let miniumum_value = arguments[0]
  for (let i = 1; i < arguments.length; i++) {
    miniumum_value = smaller(miniumum_value, arguments[i])
  }
  return miniumum_value
}

if (!module.parent) {
  const args = process.argv.slice(2)
  console.log(min(...args))
}
