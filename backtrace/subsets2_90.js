/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let res = [];
    let temp = [];
    let used = new Array(nums.length).fill(0);
    nums.sort();
    let dfs = function (pos) {
        if (pos === nums.length) {
            res.push(Array.from(temp));
            return;
        }
        // 避免重复选择
        if (pos > 0 && nums[pos] === nums[pos - 1] && !used[pos - 1]) {
            dfs(pos + 1)
            return;
        }
        // 选择pos上的元素
        temp.push(nums[pos]);
        used[pos] = 1;
        dfs(pos + 1);
        used[pos] = 0;
        temp.pop();
        // 不选择pos上的元素
        dfs(pos + 1)
    }
    dfs(0);
    return res;
};

subsetsWithDup([4, 4, 4, 1, 4])