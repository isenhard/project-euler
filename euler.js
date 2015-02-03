var start    = +new Date();
var bigint   = require('./BigInteger');
var test     = require('./test');
var problems = require('./problems');

process.argv.forEach(function (val, index, array) {
    if (array.length > 3) {
        console.log('Too many arguments!');
        console.log('Usage: node euler <problem-number>');
        return process.exit(1);
    }
    if (array.length < 3) {
        console.log('Missing argument!');
        console.log('Usage: node euler <problem-number>');
        return process.exit(0);
    }

    if (index == 2) {
        var func = 'euler' + val;
        var result = null;

        if (val == 'test') {
            test();
        }
        else {
            if (val >= 1 && val <= 50 && problems['1_50'].hasOwnProperty(func)) {
                result = problems['1_50'][func]();
            }
            else if (val >= 51 && val <= 100 && problems['51_100'].hasOwnProperty(func)) {
                result = problems['51_100'][func]();
            }
            else {
                console.log('There was a problem with the argument...');
            }

            if (result) {
                console.log('Solving euler:', val);
                console.log('Result:       ', result);
                console.log('Total Time:   ', new Date() - start, 'ms');
            }
        }
    }
});