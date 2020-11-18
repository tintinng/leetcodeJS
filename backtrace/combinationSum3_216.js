/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let temp = [];
    let res = [];
    let dfs = function (pos, sum, j) {
        if (sum > n) {
            return;
        }
        if (pos === k) {
            if (sum === n) {
                res.push(Array.from(temp));
            }
            return;
        }
        for (let i = j; i < 10; i++) {
            // pos位置放入i
            sum += i;
            temp.push(i);
            dfs(pos + 1, sum, i + 1);
            temp.pop();
            sum -= i;
        }
    }
    dfs(0, 0, 1);
    return res;
};