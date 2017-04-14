fs = require('fs');

// let file = 'A-small-practice.in.txt';
let file = 'A-large-practice.in.txt';

fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    data = data.split('\n');
    // console.log(data);

    for (let i = 1; i < data[0] + 1 && data[i]; i++) {
        let row = data[i].split(' ');
        let maxS = row[0];
        let aList = row[1]

        let result = calc(maxS, aList);
        console.log(`Case #${i}: ${result}`);
    }
});

function calc(maxS, aList) {
    let aAdd = 0;
    let aSum = 0;
    for (let i = maxS; i > 0; i--) {
        aSum = sum(aList.slice(0, i));
        if (aList[i] !== '0' && i > aSum + aAdd) {
            aAdd += i - (aSum + aAdd);
        }
    }
    return aAdd;
}

function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += parseInt(array[i]);
    }
    return sum;
}