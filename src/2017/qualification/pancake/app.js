fs = require('fs')

// let file = 'A-small-attempt0.in.txt';
let file = 'A-large.in.txt'

fs.readFile(file, 'utf8', function(err, data) {
  if (err) {
    return console.log(err)
  }

  data = data.split('\n')
  // console.log(data);

  for (let i = 1; i < data[0] + 1 && data[i]; i++) {
    let row = data[i].split(' ')
    let pancakes = row[0]
    let flipper = row[1]
    let result = calc(pancakes, flipper)
    console.log(`Case #${i}: ${result}`)
  }
})

function calc(pancakes, flipper) {
  let flipCount = 0
  for (var i = 0; i < pancakes.length; i++) {
    if (pancakes[i] === '-' && pancakes.length - i >= flipper) {
      for (var j = 0; j < flipper; j++) {
        pancakes = replaceAt(
          pancakes,
          i + j,
          pancakes[i + j] === '-' ? '+' : '-'
        )
      }
      flipCount++
    }
  }
  // console.log(pancakes);
  return pancakes.includes('-') ? 'IMPOSSIBLE' : flipCount
}

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1)
}
