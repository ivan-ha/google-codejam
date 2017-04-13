fs = require('fs');

// let file = 'B-small-practice.in.txt';
let file = 'B-large-practice.in.txt';

fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    data = data.split('\n');
    // console.log(data);

    let caseCount = 1;
    for (let i = 1; i < data.length && data[i]; ) {
        let n = data[i];
        let nextBatch = i + (2 * n -1);
        let lists = data.slice(i + 1, nextBatch + 1);
        i = nextBatch + 1;

        let result = calc(lists);
        console.log(`Case #${caseCount}: ${result}`);

        caseCount++;
    }
});

function calc(lists) {
    let map = {};
	let missingList = [];

	// Count existance of each number
    for (let i = 0; i < lists.length; i++) {
        let row = lists[i].split(' ');
        for (let j = 0; j < row.length; j++) {
            map[row[j]] = map[row[j]] ? map[row[j]] + 1 : 1;
        }
    }

	// Those existance is odd number is the answer
	for (let key in map) {
		if (map[key] % 2 !== 0){
			missingList.push(key);
		}
	}

    return missingList.join(' ');
}
