/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    let res = [];
    let used = new Array(nums.length).fill(0);
    let dfs = function(curNums) {
        if (curNums.length === nums.length) {
            res.push(Array.from(curNums));
            return ;
        }
        for (let k = 0; k < nums.length; k++) {
            if (used[k] === 0) {
                curNums.push(nums[k]);
                used[k] = 1;
                dfs(curNums);
                used[k] = 0;
                curNums.pop();
            }
        }
    }
    dfs([]);
    return res;
};

console.log(permute([1,2,3]));