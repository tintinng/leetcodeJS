/**
 * 1、max(i)表示以i结尾的数组的maxsubArray结果，用dp存储
 * 2、max(i - 1) > 0 ------------- max(i) = max(i - 1) + nums[i]
 *    max(i - 1) <= 0 ------------ nums[i]
 * 3、dp[0] = nums[0]
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let tempMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (tempMax > 0) {
            tempMax += nums[i];
        } else {
            tempMax = nums[i];
        }
    }
    return tempMax;
};