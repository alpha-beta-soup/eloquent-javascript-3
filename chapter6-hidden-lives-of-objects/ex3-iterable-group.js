const Group = require('./ex2-group.js').Group

class GroupIterator {
  constructor(group) {
    this.index = 0
    this.group = group
  }
  next() {
    if (this.index >= this.group.collection.length) return {done: true}
    return {
      done: false,
      value: this.group.collection[this.index++]
    }
  }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this)
}

if (!module.parent) {
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value)
  }
}
