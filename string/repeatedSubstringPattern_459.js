/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let n = s.length;
    for (let i = 1; i <= n / 2; i++) {
        // 字串长度必须能整除字符串长度
        if (n % i === 0) {
            let match = true;
            for (let j = i, k = 0; j < n; j++, k = (k + 1) % i) {
                if (s[k] === s[j]) {
                    continue;
                } else {
                    match = false;
                    break;
                }
            }
            if (match) {
                return true;
            }
        }
    }

    return false;
};
console.log(repeatedSubstringPattern("aabaab"))
