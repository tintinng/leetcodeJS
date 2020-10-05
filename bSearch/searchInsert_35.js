/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let l = 0, r = nums.length-1
    while(l < r) {
        let mid = Math.floor((l + r)/2)
        if(nums[mid] < target) {
            l = mid + 1
        } else {
            r = mid
        }
    }
    return l
};

let arr = [1, 3, 5, 6]
searchInsert(arr, 2)