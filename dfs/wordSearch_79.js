/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (!board.length || !word) {
        return false;
    }
    let n = board.length;
    let m = board[0].length;
    // 设置四个方向的移动
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    let dfs = function(x, y, board, word, index) {
        if (board[x][y] !== word[index]) {
            return false;
        }
        if (index == word.length - 1) {
            return true;
        }
        // 当前不可被回溯
        board[x][y] = '.';
        for (let i = 0; i < 4; i++) {
            let ax = dx[i] + x;
            let ay = dy[i] + y;
            // 未出界
            if (ax >= 0 && ax < n && ay >= 0 && ay < m) {
                if (dfs(ax, ay, board, word, index + 1)) {
                    return true;
                }
            }
        }
        // 回溯
        board[x][y] = word[index];
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (dfs(i, j, board, word, 0)) {
                return true;
            }
        }
    }
    return false;
};