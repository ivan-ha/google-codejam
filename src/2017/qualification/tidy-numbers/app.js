fs = require('fs')

// let file = 'B-small-attempt0.in.txt';
let file = 'B-large.in.txt'

fs.readFile(file, 'utf8', function(err, data) {
  if (err) {
    return console.log(err)
  }

  data = data.split('\n')
  // console.log(data);

  for (let i = 1; i < data[0] + 1 && data[i]; i++) {
    let result = calc(data[i])
    console.log(`Case #${i}: ${result}`)
  }
})

function calc(num) {
  while (!isTidy(num)) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] > num[i + 1]) {
        num = `${num.slice(0, i)}${num[i] - 1}${num
          .slice(i + 1, num.length + 1)
          .replace(/\d/g, '9')}`
      }
    }
  }
  return num.replace(/^0+/, '')
}

function isTidy(num) {
  let bool = true
  for (let i = 1; i < num.length; i++) {
    if (num[i - 1] > num[i]) {
      bool = false
    }
  }
  return bool
}
