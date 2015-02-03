var problems = require('./problems');

var answers = {
    '1': 233168,
    '2': 4613732,
    '3': 6857,
    '4': 906609,
    '5': 232792560,
    '52': 142857,
    '53': 4075,
    '55': 249
};

function test() {
    var total = Object.keys(answers).length;
    var fails = 0;

    for (var key in answers) {
        process.stdout.write('Testing problem: ' + key + '\r');

        if (answers.hasOwnProperty(key)) {
            var answer = answers[key];
            var func = 'euler' + key;
            var result;
            key = parseInt(key);

            if (key >= 1 && key <= 50 && problems['1_50'].hasOwnProperty(func)) {
                result = problems['1_50'][func]();
            }
            else if (key >= 51 && key <= 100 && problems['51_100'].hasOwnProperty(func)) {
                result = problems['51_100'][func]();
            }

            if (answer !== parseInt(result)) {
                console.log('\x1b[33mEuler:', key, 'failed test!', 'Got:', result, 'Expected:', answer + '\x1b[0m');
                fails++;
            }
        }

    }

    if (!fails) {
        console.log('\x1b[32mTest passed with:', total, 'solutions!\x1b[0m');
    }
    else {
        console.log('\x1b[31mTest failed with in:', fails, 'solutions!\x1b[0m');
    }
}

module.exports = test;