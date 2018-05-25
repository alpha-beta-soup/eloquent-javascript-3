const isObject = (obj) => {
  return typeof obj == "object" && obj != null
}

const deepEqual = (a, b) => {
  if (isObject(a) && isObject(b)) {
    // deep comparison
    const aProps = Object.keys(a), bProps = Object.keys(a)
    if (aProps.length != bProps.length) return false
    for (let prop in a) {
      if (!bProps.includes(prop)) return false
      return deepEqual(a[prop], b[prop])
    }
  }
  return a === b
}

if (!module.parent) {
  let obj = {here: {is: "an"}, object: 2}
  console.log({
    deepEqual: deepEqual(obj, obj),
    deepEqual2: deepEqual(obj, {here: 1, object: 2}),
    deepEqual3: deepEqual(obj, {here: {is: "an"}, object: 2})
  })
}
