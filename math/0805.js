/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
var multiply = function (A, B) {
    if (A === 0 || B === 0) {
        return 0;
    }
    if (A === 1) {
        return B;
    }
    if (B === 1) {
        return A;
    }
    if (A > B) {
        return A + multiply(A, B - 1)
    } else {
        return B + multiply(A - 1, B)
    }
};

multiply(797231563, 2)