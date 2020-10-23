/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    if (!s.length) {
        return '';
    }
    let res = '';
    // 以空格划分，连续空格会产生空字符
    let arr = s.split(' ');
    // 从尾到头遍历
    for(let i=arr.length-1; i>=0; i--) {
        // 跳过中间的空字符
        if (arr[i].length) {
            res += arr[i] + ' '
        }
    }
    return res.slice(0, res.length-1);
}