const SCRIPTS = require('./data.js')

const characterScript = (code) => {
  // Find the corresponding script of a character code
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to
    })) {
      return script
    }
  }
  return null
}

const countBy = (items, groupName) => {
  let counts = []
  for (let item of items) {
    let name = groupName(item)
    let known = counts.findIndex(c => c.name == name)
    if (known == -1) counts.push({name, count: 1})
    else counts[known].count++
  }
  return counts
}

const textScripts = (text) => {
  return countBy(text, (char) => {
    const script = characterScript(char.codePointAt(0))
    return script ? script.name : null
  }).filter(({name}) => !!name)
}

const findDominantScript = (text) => {
  const dominantScript = textScripts(text).reduce((a, b) => a.count > b.count ? a : b)
  return dominantScript ? dominantScript : null
}

const dominant = (property) => {
  return text => {
    const dominantScript = findDominantScript(text)
    return dominantScript ? SCRIPTS.find(script => script.name == dominantScript.name)[property] : undefined
  }
}

const dominantDirection = (text) => {
  return dominant('direction')(text)
}

if (!module.parent) {
  console.log({
    a: dominantDirection("Hello!"),
    b: dominantDirection("Hey, مساء الخير")
  })
}
