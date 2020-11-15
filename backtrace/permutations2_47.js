/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let n = nums.length;
    let res = [];
    // let path = [];
    let visited = new Array(n).fill(0);
    nums.sort();
    let backtrace = function (path, pos) {
        if (pos === n) {
            res.push(Array.from(path));
            return;
        }
        for (let i = 0; i < n; i++) {
            // 保证每次填入的数字都是从左往右第一个没被填过的数字
            if (i > 0 && nums[i] == nums[i - 1] && !visited[i - 1]) {
                continue;
            }
            if (!visited[i]) {
                visited[i] = 1;
                path.push(nums[i]);
                backtrace(path, pos + 1);
                path.pop();
                visited[i] = 0;
            }
        }
    }
    backtrace([], 0);

    return res;
};