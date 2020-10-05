/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let l = 0, r = x
    while(l < r) {
        let mid = Math.floor((l + r + 1) / 2)
        // 相乘会溢出
        if(mid <= x/mid) {
            l = mid
        } else {
            r = mid - 1
        }
    }
    return l
};