/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let temp = [];
    let res = [];
    let dfs = function (pos) {
        if (pos === nums.length) {
            res.push(Array.from(temp))
            return;
        }
        // 选择当前数
        temp.push(nums[pos]);
        dfs(pos + 1);
        temp.pop();
        // 不选择当前数
        dfs(pos + 1)
    }
    dfs(0);
    return res;
};