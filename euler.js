var start  = +new Date();
var bigint = require('./BigInteger');
var problems1_50 = require('./problems1_50');

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

        if (problems1_50.hasOwnProperty(func)) {
            result = problems1_50[func]();
        }
        else {
            console.log('There was a problem with the argument...');
        }

        console.log('Solving euler:', val);
        console.log('Result:       ', result);
        console.log('Total Time:   ', new Date() - start, 'ms');
    }
});