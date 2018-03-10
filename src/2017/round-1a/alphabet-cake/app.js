fs = require('fs')

let file = 'A-large.in.txt'

fs.readFile(file, 'utf8', function(err, data) {
  if (err) {
    return console.log(err)
  }

  data = data.split('\n')
  // console.log(data);

  let count = 1
  let cake = []
  for (let i = 1; count <= data[0] && data[i]; ) {
    cake.length = 0
    let row = data[i].split(' ')
    let r = parseInt(row[0])
    let c = parseInt(row[1])

    for (let j = i + 1; j < i + 1 + r; j++) {
      cake.push(data[j])
    }
    i += r + 1

    let result = calc(r, c, cake)
    console.log(`Case #${count}:`)
    result.forEach(function(row) {
      console.log(row)
    })

    count++
  }
})

function calc(r, c, cake) {
  let map = {}

  // Count occurrence
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      map[cake[i][j]] = map[cake[i][j]] ? map[cake[i][j]] + 1 : 1
      if (cake[i][j] !== '?' && cake[i][j + 1] === '?') {
        cake[i][j + 1] = cake[i][j]
      }
    }
  }

  // Fill horizontal
  for (let count = 0; count < c - 1 && map['?'] > 0; count++) {
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        // Fill right
        if (j + 1 < c && cake[i][j] !== '?' && cake[i][j + 1] === '?') {
          cake[i] = replaceAt(cake[i], j + 1, cake[i][j])
          map['?'] = map['?'] - 1
        } else if (j - 1 >= 0 && cake[i][j] !== '?' && cake[i][j - 1] === '?') {
          // Fill left
          cake[i] = replaceAt(cake[i], j - 1, cake[i][j])
          map['?'] = map['?'] - 1
        }
      }
    }
  }

  // Fill vertical
  for (let count = 0; count < r - 1 && map['?'] > 0; count++) {
    for (let i = 0; i < r; i++) {
      for (let j = 0; j < c; j++) {
        // Fill below
        if (i + 1 < r && cake[i][j] !== '?' && cake[i + 1][j] === '?') {
          cake[i + 1] = replaceAt(cake[i + 1], j, cake[i][j])
          map['?'] = map['?'] - 1
        } else if (i - 1 >= 0 && cake[i][j] !== '?' && cake[i - 1][j] === '?') {
          // Fill above
          cake[i - 1] = replaceAt(cake[i - 1], j, cake[i][j])
          map['?'] = map['?'] - 1
        }
      }
    }
  }

  return cake
}

function replaceAt(string, index, replace) {
  return string.substring(0, index) + replace + string.substring(index + 1)
}
