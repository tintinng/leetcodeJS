/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let res = [];
    let i = 0;
    while (i < nums.length) {
        while (nums[i] !== i + 1 && nums[i] !== nums[nums[i] - 1]) {
            let temp = nums[i];
            nums[i] = nums[temp - 1];
            nums[temp - 1] = temp;
        }
        i++;
    }
    i = 0;
    while (i < nums.length) {
        if (nums[i] !== i + 1) {
            res.push(i + 1);
        }
        i++;
    }
    return res;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));