fs = require('fs');

let file = 'in.txt';

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
    let [n, r, o, y, g, b, v] = str.replace(/\s+/g, '');

    if (r > y + b || y > r + b || b > r + y) {
        return 'IMPOSSIBLE'
    }

    for (let i = 0; i < n; i++) {
        array[i]
    }
}
