/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    if (!image || newColor === image[sr][sc]) {
        return image;
    }
    let m = image.length;
    let n = image[0].length;
    let dfs = function (image, i, j, newColor, oldColor) {
        if (image[i][j] != oldColor) {
            return;
        }
        // 是同一片区域
        image[i][j] = newColor;
        // 上
        if (i - 1 >= 0) {
            dfs(image, i - 1, j, newColor, oldColor);
        }
        // 右
        if (j + 1 < n) {
            dfs(image, i, j + 1, newColor, oldColor);
        }
        // 下
        if (i + 1 < m) {
            dfs(image, i + 1, j, newColor, oldColor);
        }
        // 左
        if (j - 1 >= 0) {
            dfs(image, i, j - 1, newColor, oldColor);
        }
    }
    dfs(image, sr, sc, newColor, image[sr][sc]);
    return image;
};