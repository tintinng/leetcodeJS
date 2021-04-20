/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    if (nums.length <= 1) {
        return nums;
    }
    // i为第一个0的下标,j为下一个不为0的下标
    let i = 0, j = 0;
    let n = nums.length;
    while (j < n) {
        // 找i
        while (i < n && nums[i] !== 0) {
            i++;
        }
        // i为最后一个下标或者超出
        if (i >= n - 1) {
            break;
        }
        // 找j
        while (j < n && nums[j] === 0) {
            j++;
        }
        // j超出
        if (j >= n) {
            break;
        }
        if (i > j) {
            j++;
            continue;
        }
        // 交换nums[i]和nums[j]
        nums[i] = nums[j];
        nums[j] = 0;
    }
    return nums;
};

console.log(moveZeroes([0, 0, 2]));