var problems = {};

problems.euler52 = function() {
    var result,
        from = 1;

    function isPermutation(a, b) {
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

    while (!result) {
        from *= 10;

        for (var i = from; i < from * 10 / 6; i++) {
            var found = true;

            for (var j = 2; j <= 6; j++) {
                if (!isPermutation(i, i * j)) {
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

    function factorial(n) {
        var sum = 1;

        for (var i = 2; i <= n; i++) {
            sum *= i;
        }

        return sum;
    }

    function C(n, r) {
        if (r > n) return 0;

        return factorial(n) / (factorial(r) * factorial(n-r));
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

module.exports = problems;