var problems = require('./problems');

var answers = {
    '1': 233168,
    '2': 4613732,
    '3': 6857,
    '4': 906609,
    '5': 232792560,
    '6': 25164150,
    '7': 104743,
    '8': 23514624000,
    '9': 31875000,
    '10': 142913828922,
    '11': 70600674,
    '12': 76576500,
    '13': 5537376230,
    '14': 837799,
    '15': 137846528820,
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