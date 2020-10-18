/**
 *  空间要求：O(1)
 *  时间要求：O(n*n)以内
 *  不能改变原数组：因此无法排序
 * 1、抽屉原理
 *  时间：O(n*logn)
 *  空间：O(1)
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let l = 1;
    let r = nums.length - 1;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        // 统计区间在 l~mid 的数的数量
        let count = 0;
        for (const num of nums) {
            if (num >=l && num <= mid ) {
                count ++;
            }
        }
        // 如果数量超过区间大小，则说明重复的数在这段区间内
        if (count > mid - l + 1) {
            r = mid;
        } else { // 否则在另一个区间
            l = mid + 1;
        }
    }
    return l;
};