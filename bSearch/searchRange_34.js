/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (!nums.length) {
        return [-1, -1];
    }
    let res = [];
    // 找出开始位置
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    // 找到第一个位置
    if (nums[l] == target) {
        res.push(l);
    } else { // 若不存在则返回 [-1, -1]
        return [-1, -1];
    }
    // 找第二个位置
    l = 0;
    r = nums.length - 1;
    while (l < r) {
        let mid = Math.floor((l + r + 1) / 2);
        if (nums[mid] <= target) {
            l = mid;
        } else {
            r = mid - 1;
        }
    }
    // 找到第二个位置
    res.push(l);

    return res;
};