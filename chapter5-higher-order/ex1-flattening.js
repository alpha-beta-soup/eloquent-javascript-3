const flatten = (array) => {
  return array.reduce((a, b) => a.concat(b))
}

if (!module.parent) {
  let arrays = [[1, 2, 3], [4, 5], [6]]
  console.log({
    flatten: flatten(arrays)
  })
}
