/**
 *  1、二分条件：右边部分数值大于等于下标
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let l = 0;
    let r = citations.length - 1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (citations[mid] >= mid + 1) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
};