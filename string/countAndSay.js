/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let str = '1';
    for (let i=1; i<n; i++) {
        let newStr = '';
        // 遍历字符串
        let j = 1;
        let count = 1;
        while (j < str.length) {
            if (str[j] == str[j-1]) {
                count ++;
            } else {
                newStr += (count.toString() + str[j-1]);
                count = 1;
            }
            j++;
        }
        newStr += (count.toString() + str[j-1]);
        str = newStr;
    }
    return str;
};