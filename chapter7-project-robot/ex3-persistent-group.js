class PGroup {
  constructor(collection = []) {
    // Immutable (persistent) group
    this.collection = collection;
  }

  add(value) {
    if (!this.has(value)) return new PGroup([...this.collection, value]);
    return this;
  }

  delete(value) {
    return new PGroup(this.collection.filter(v => v !== value));
  }

  has(value) {
    return this.collection.includes(value);
  }

  get length() {
    return this.collection.length;
  }

  static from(iterable) {
    let group = new PGroup();
    for (let value of iterable) {
      group = group.add(value);
    }
    return group;
  }
}

PGroup.empty = new PGroup([]);

if (!module.parent) {
  let group = PGroup.from([10, 20]);
  console.log({
    a: group.has(10), // true
    b: group.has(30) // false
  });
  group = group.add(10);
  group = group.delete(10);
  console.log({
    c: group.has(10) // false
  });

  let a = PGroup.empty.add("a");
  let ab = a.add("b");
  let b = ab.delete("a");
  console.log(b.has("b")); // true
  console.log(a.has("b")); // false
  console.log(b.has("a")); // false
}

module.exports = { PGroup };
