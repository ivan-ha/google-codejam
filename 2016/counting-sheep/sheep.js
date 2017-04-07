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
        let result = calc(data[i]);
        console.log(`Case #${i}: ${result}`);
    }
});

function calc(num) {
    if (num == 0) {
        return "INSOMNIA";
    }

    let a = [];
    let counter = 0;
    let value = num;

    while (a.length !== 10) {
        value = num * ++counter;
        let numDigit = value.toString().split('');

        for (let i = 0; i < numDigit.length; i++) {
            if (a.indexOf(numDigit[i]) === -1) {
                a.push(numDigit[i]);
            }
        }

        // console.log(value, a);
    }

    return value;
}