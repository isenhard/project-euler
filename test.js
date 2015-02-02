var problems1_50   = require('./problems1_50');
var problems50_100 = require('./problems50_100');

var answers = {
    "1": 233168,
    "2": 4613732,
    "3": 6857
};

function test() {
    var passed = true;

    for (var key in answers) {
        if (answers.hasOwnProperty(key)) {
            var answer = answers[key];
            var func = 'euler' + key;
            var result;
            key = parseInt(key);

            if (key >= 1 && key <= 50 && problems1_50.hasOwnProperty(func)) {
                result = problems1_50[func]();
            }
            else if (key >= 51 && key <= 100 && problems50_100.hasOwnProperty(func)) {
                result = problems50_100[func]();
            }

            if (answer !== parseInt(result)) {
                console.log('Euler:', key, 'failed test!', 'Got:', result, 'Expected:', answer);
                passed = false;
            }
        }
    }

    if (passed) {
        console.log('Test passed with:', Object.keys(answers).length, 'solutions!');
    }
}

module.exports = test;