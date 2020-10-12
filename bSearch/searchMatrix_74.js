/**
 *  1、二分法
 *      先二分法找行，再二分法找列
 *  2、一次性二分
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (!matrix.length) {
        return false;
    }
    // 找到第一列小于等于target的最后一个数所在的行
    let l = 0;
    let r = matrix.length - 1;
    while (l < r) {
        let mid  = Math.floor((l + r + 1) / 2);
        if (matrix[mid][0] <= target) {
            l = mid;
        } else {
            r = mid - 1;
        }
    }
    let row = l;
    // 在对应行中最后一个小于等于target的数
    l = 0;
    r = matrix[0].length - 1;
    while (l < r) {
        let mid = Math.floor((l + r + 1) / 2);
        if (matrix[row][mid] <= target) {
            l = mid;
        } else {
            r = mid - 1;
        }
    }
    let line = l;
    
    // 找到矩阵中第一个小于等于target的数，如果这个数等于target则target存在
    return matrix[row][line] === target
};