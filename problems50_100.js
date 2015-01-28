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
}

module.exports = problems;