/** 
 * 1、如果旋转的个数为0，则是第一个数；否则：用二分法，一边的数大于等于第一个数，一边的小于第一个数
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums[0] <= nums[nums.length - 1]) {
        return nums[0];
    }
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] >= nums[0]) {
            l = mid + 1;
        } else {
            r = mid;
        }
    }
    return nums[l];
};