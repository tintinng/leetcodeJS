/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let n = nums.length;
    let res = [];
    let path = [];
    let visited = Array(n).fill(0);

    // 枚举每个位置
    let dfs = function (curPath, pos) {
        if (pos == n) {
            res.push(Array.from(curPath))
            return;
        }
        for (let i = 0; i < n; i++) {
            if (!visited[i]) {
                visited[i] = 1;
                path.push(nums[i]);
                dfs(path, pos + 1);
                path.pop();
                visited[i] = 0;
            }
        }
    }
    dfs([], 0);

    return res;
};