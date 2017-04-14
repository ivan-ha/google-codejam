fs = require('fs');

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
    let map = {};
    let digit = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
    let mask = ['ZERO', 'TWO', 'FOUR', 'SIX', 'EIGHT', 'ONE', 'THREE', 'FIVE', 'SEVEN', 'NINE'];
    let maskFeature = ['Z', 'W', 'U', 'X', 'G', 'O', 'T', 'F', 'S', 'I'];
    let phone = [];

    // Count existence of each character
    for (let i = 0; i < str.length; i++) {
        map[str[i]] = map[str[i]] ? map[str[i]] + 1 : 1;
    }

    // For each maskFeature, if it exists, minus the mask from character existence count
    // and push this number to phone
    for (let i = 0; i < maskFeature.length; i++) {
        while (map[maskFeature[i]] && map[maskFeature[i]] > 0) {
            for (let j = 0; j < mask[i].length; j++) {
                map[mask[i][j]]--;
            }
            phone.push(digit[i]);
        }
    }

    // Sort the phone number and return
    return phone.sort().join('');
}
