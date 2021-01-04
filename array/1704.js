/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    // 遍历第一遍，和值对应下标的数交换。
    // 遍历第二遍，判断哪个位置上的值和对应下标不相等
    let n = nums.length;
    let res = -1;
    for (let i = 0; i < n; i++) {
        let num = nums[i];
        while (num != n && nums[i] != i) {
            nums[i] = nums[num];
            nums[num] = num;
            num = nums[i];
        }
    }
    for (let i = 0; i < n; i++) {
        if (nums[i] != i) {
            res = i;
            break;
        }
        if (i === n - 1) {
            res = n;
        }
    }
    return res;
};

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));