// 连续的最小值



// 以下思路不对
function maxDelicious(nums) {
    // 不存在环时：
    // dp[i] = Max{ dp[i - 1] + nums[i] , nums[i] }
    let dp = new Array(nums.length);
    for (let i = 0; i < nums.length; i++) {
        dp[i] = new Array(nums.length).fill(0);
    }
    dp[0][0] = nums[0];
    let max = dp[0][0];
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (dp[j][i - j - 1] >= 0) {
                dp[j][i - j] = dp[j][i - j - 1] + nums[i];
            } else {
                dp[j][i - j] = nums[i];
            }
            max = Math.max(dp[j][i], max);
        }
    }

    return max;
}

console.log(maxDelicious([3, -2, 4, -1]));