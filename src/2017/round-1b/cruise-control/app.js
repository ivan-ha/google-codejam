fs = require('fs')

let file = 'A-large.in.txt'

fs.readFile(file, 'utf8', function(err, data) {
  if (err) {
    return console.log(err)
  }

  data = data.split('\n')
  // console.log(data);

  let count = 1
  let horses = []
  for (let i = 1; count <= data[0] && data[i]; ) {
    horses.length = 0
    let row = data[i].split(' ')
    let distance = parseInt(row[0])
    let numOfHorse = parseInt(row[1])

    for (let j = i + 1; j < i + 1 + numOfHorse; j++) {
      horses.push(data[j])
    }
    i += numOfHorse + 1

    let result = calc(distance, horses)
    console.log(`Case #${count}: ${result}`)
    count++
  }
})

function calc(distance, horses) {
  let slowestTimeNeeded = 0

  // Find slowest horse
  horses.forEach(function(horse) {
    let [startPoint, maxSpeed] = horse.split(' ')
    let timeNeeded = (distance - startPoint) / maxSpeed

    slowestTimeNeeded =
      timeNeeded > slowestTimeNeeded ? timeNeeded : slowestTimeNeeded
  })

  return distance / slowestTimeNeeded
}
