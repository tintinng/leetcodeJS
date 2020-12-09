/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    let mask = 1;
    let count = 0;
    for (let i = 0; i < 32; i++) {
        if ((mask & n) !== 0) {
            count++;
            if (count > 1) {
                return false;
            }
        }
        mask = mask << 1;
    }
    return count === 1;
};
console.log(isPowerOfTwo(17));