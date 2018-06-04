class Group {
  constructor() {
    this.collection = []
  }

  add(value) {
    if (!this.has(value)) this.collection.push(value)
  }

  delete(value) {
    this.collection = this.collection.filter(v => v !== value)
  }

  has(value) {
    return this.collection.includes(value)
  }

  get length() {
    return this.collection.length
  }

  static from(iterable) {
    const group = new Group()
    for (let value of iterable) {
      group.add(value)
    }
    return group
  }
}


if (!module.parent) {
  let group = Group.from([10, 20])
  console.log({
    a: group.has(10), // true
    b: group.has(30) // false
  })
  group.add(10)
  group.delete(10)
  console.log({
    c: group.has(10) // false
  })
}

module.exports = { Group }
