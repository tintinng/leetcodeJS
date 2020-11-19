/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    if (n <= 1) {
        return n;
    }
    let chess = new Array(n);
    for (let i = 0; i < n; i++) {
        chess[i] = new Array(n).fill(0);
    }
    let total = 0;
    let check = function (i, j) {
        for (let k = 0; k < n; k++) {
            // 检查一列
            if (chess[k][j]) {
                return false;
            }
            // 左上对角线
            if (i - k >= 0 && j - k >= 0 && chess[i - k][j - k]) {
                return false;
            }
            // 右上
            if (i - k >= 0 && j + k < n && chess[i - k][j + k]) {
                return false;
            }
            // 右下
            if (i + k < n && j + k < n && chess[i + k][j + k]) {
                return false;
            }
            // 左下
            if (i + k < n && j - k >= 0 && chess[i + k][j - k]) {
                return false;
            }
        }
        return true;
    }
    let dfs = function (i) {
        if (i === n) {
            total++;
            return;
        }
        // 回溯每一行
        for (let j = 0; j < n; j++) {
            if (check(i, j)) {
                chess[i][j] = 1;
                dfs(i + 1);
                chess[i][j] = 0;
            }
        }
    }
    dfs(0);
    return total;
};
console.log(totalNQueens(8))
