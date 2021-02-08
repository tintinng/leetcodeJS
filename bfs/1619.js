/**
 * @param {number[][]} land
 * @return {number[]}
 */
var pondSizes = function (land) {
    let m = land.length;
    let n = land[0].length;
    // 搜索记录，0表示未搜索过
    let searched = new Array(m);
    for (let i = 0; i < m; i++) {
        searched[i] = new Array(n).fill(0);
    }
    let count = 0;
    let res = new Set();
    let bfs = function (i, j) {
        if (i < 0 || j < 0 || i >= m || j >= n) {
            return;
        }
        if (searched[i][j] === 1) {
            return;
        }
        searched[i][j] = 1
        if (land[i][j] != 0) {
            return;
        }
        count++;
        bfs(i - 1, j - 1)
        bfs(i - 1, j)
        bfs(i - 1, j + 1)
        bfs(i, j - 1)
        bfs(i, j + 1)
        bfs(i + 1, j - 1)
        bfs(i + 1, j)
        bfs(i + 1, j + 1)
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!searched[i][j]) {
                bfs(i, j);
                if (count != 0) {
                    res.add(count);
                }
                count = 0;
            }
        }
    }

    return Array.from(res).sort();
}

pondSizes([[0, 2, 1, 0], [0, 1, 0, 1], [1, 1, 0, 1], [0, 1, 0, 1]]);