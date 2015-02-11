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

module.exports = helpers;