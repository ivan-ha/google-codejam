fs = require('fs');

// let file = 'B-small-practice.in.txt';
let file = 'B-large-practice.in.txt';

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

function calc(stack) {
    if (!stack.includes('-')) {
        return 0;
    }
    else if (!stack.includes('+')) {
        return 1;
    }
    else {
        let prev = stack[0];
        let count = (stack[stack.length - 1] == '-') ? 1 : 0;
        for (let i = 1; i < stack.length; i++) {
            if (stack[i] !== prev) {
                count++;
            }
            prev = stack[i];
        }
        return count;
    }
}