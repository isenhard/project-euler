var helpers = {};

// Sieve of Eratosthenes
helpers.eratosthenes = function(n) {
    var list = [],
        limit = Math.sqrt(n),
        primes = [];

    for (var i = 0; i < n; i++) {
        list.push(true);
    }

    for (var i = 2; i <= limit; i++) {
        if (list[i]) {
            for (var j = i * i; j < n; j += i) {
                list[j] = false;
            }
        }
    }

    for (var i = 2; i < n; i++) {
        if (list[i]) {
            primes.push(i);
        }
    }

    return primes;
}

helpers.isPermutation = function(a, b) {
    var A = a.toString().split(''),
        B = b.toString().split('');

    if (a === b || A.length !== B.length) {
        return false;
    }

    var list = {};
    for (var i = 0; i < A.length; i++) {
        if (list[A[i]]) {
            list[A[i]]++;
        }
        else {
            list[A[i]] = 1;
        }
    }

    for (var i = 0; i < B.length; i++) {
        if (list[B[i]] && list[B[i]] > 0) {
            list[B[i]]--;
        }
        else {
            return false;
        }
    }

    return true;
}

helpers.factorial = function(n) {
    var sum = 1;

    for (var i = 2; i <= n; i++) {
        sum *= i;
    }

    return sum;
}

// is number a prime number
// returns bool
helpers.isPrime = function(n) {
    if (n < 2 || n % 1) return false;

    var sqrt = Math.sqrt(n);

    for (var i = 2; i <= sqrt; i++) {
        if(n % i == 0) {
            return false;
        }
    }

    return true;
}

helpers.numberOfDivisors = function(n) {
    var list = [],
        i = 1,
        max = n; // ?

    if(n == 1) {
        return 1;
    }

    while(i <= max) {
        if(n%i == 0) {
            list.push(i);

            if(i != n/i) {
                list.push(n/i);
            }
            max = n/i;
        }
        i++;
    }

    return list.length;
}

// Check if integer is a pandigital
// Returns a boolean
helpers.isPandigital = function(n) {
    var string = n.toString().split(''),
        digits = [];

    if (string.indexOf('0') !== -1) {
        return false;
    }

    for (var i = 0; i < string.length; i++) {
        var digit = string[i];
        if (digits.indexOf(digit) === -1 && digit <= string.length) {
            digits.push(digit);
        }
    }

    return digits.length === string.length;
}

module.exports = helpers;