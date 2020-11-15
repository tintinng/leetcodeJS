/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    if (num.length === k) {
        return "0";
    }
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < num.length; j++) {
            if (num[j - 1] && +num[j - 1] > +num[j]) {
                num = num.slice(0, j - 1) + num.slice(j, num.length);
                break;
            }
            if (j === num.length - 1) {
                num = num.slice(0, num.length - 1);
            }
        }
    }
    while (num[0] === '0' && num.length > 1) {
        num = num.slice(1, num.length)
    }
    return num;
};