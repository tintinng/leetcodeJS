/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (!nums.length) {
        return -1;
    }
    let l = 0;
    let r = nums.length - 1;
    // target左边的数满足：nums[0] <= x <= target
    if (target >= nums[0]) {
        while (l < r) {
            let mid = Math.floor((l + r + 1)/2);
            if (nums[mid] >= nums[0] && nums[mid] <= target) {
                l = mid;
            } else {
                r = mid - 1;
            }
        }
    } else { // target右边的数满足：target <= x < nums[0]
        while (l < r) {
            let mid = Math.floor((l + r)/2);
            if (nums[mid] >= target && nums[mid] < nums[0]) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
    }
    return nums[l] == target ? l : -1;
};