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

module.exports = helpers;