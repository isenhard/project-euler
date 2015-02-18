var bigint   = require('../BigInteger');
var helpers  = require('../helpers');
var problems = {};

problems.euler52 = function() {
    var result,
        from = 1;

    while (!result) {
        from *= 10;

        for (var i = from; i < from * 10 / 6; i++) {
            var found = true;

            for (var j = 2; j <= 6; j++) {
                if (!helpers.isPermutation(i, i * j)) {
                    found = false;
                    break;
                }
            }

            if (found) {
                result = i;
                break;
            }
        }
    }

    return result;
};

problems.euler53 = function() {
    var min = 1,
        max = 100,
        result = 0;

    function C(n, r) {
        if (r > n) return 0;

        return helpers.factorial(n) / (helpers.factorial(r) * helpers.factorial(n-r));
    }

    for (var n = min; n <= max; n++) {
        for (var r = 1; r < n; r++) {
            var val = C(n, r);

            if (val > 1000000) {
                result++;
            }
        }
    }

    return result;
};

problems.euler55 = function() {
    var max = 9999,
        nonLychrelNumbers = 0;

    function reverseInt(i) {
        return parseInt(i.toString().split('').reverse().join(''));
    }

    for (var i = 1; i <= max; i++) {
        var sum = i;

        for (var j = 1; j < 50; j++) {
            sum = sum + reverseInt(sum);

            if (sum === reverseInt(sum)) {
                nonLychrelNumbers++;
                break;
            }
        }
    }

    return max - nonLychrelNumbers;
};

problems.euler56 = function() {
    var max = 100,
        result = 0;

    function sumOfDigits(digits) {
        var digitsList = digits.toString().split('');
        var sum = 0;

        for (var i = 0; i < digitsList.length; i++) {
            sum += parseInt(digitsList[i]);
        }

        return sum;
    }

    for (var a = max - 1; a > 0; a--) {
        for (var b = max - 1; b > 0; b--) {
            var num = bigint(a).pow(b).toString();

            var sum = sumOfDigits(num);
            if (sum > result) {
                result = sum;
            }
        }
    }

    return result;
};

problems.euler58 = function() {
    // Nuber of primes in the spiral
    var primes = 3;

    // Last corner in spiral
    var corner = 9;

    // This will be -1 the actual side length,
    // as length between the corners will be lenght-1
    var sideLength = 2;

    // check the ratio of primes
    while (primes / (2 * sideLength + 1) > 0.10) {
        // increase side length
        sideLength += 2;

        // check all corners, except the bottom right (this will never be a prime)
        for (var i = 0; i <= 2; i++) {
            // move the corner
            corner += sideLength;

            // check if it is a prime
            if (helpers.isPrime(corner)) {
                primes++;
            }
        }

        // set corner to bottom right
        corner += sideLength;
    }

    // return side lenght (plus the 1 we removed at the beginning)
    return sideLength + 1;
};

module.exports = problems;