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

function calc(str) {
    let ret = str[0];
    for (let i = 1; i < str.length; i++) {
        ret = (str[i] >= ret[0]) ? str[i] + ret : ret + str[i];
    }
    return ret;
}