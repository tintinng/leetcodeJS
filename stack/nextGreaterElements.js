/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var nextGreaterElements = function(nums) {
     if (nums.length === 0) {
         return nums;
     }
     if (nums.length === 1) {
         return [-1];
     }
     let stack = [];
     let res = new Array(nums.length);
     stack.push([nums[0], 0]);  
     let i = 1;
     while (stack.length) {
        if (stack.length > nums.length) {
            res.fill(-1);
            break;
        }
        while (stack.length && nums[i] > stack[stack.length - 1][0]) {
            let popNum = stack.pop();
            res[popNum[1]] = nums[i];
        }
        // 判断是不是到了最大的数
        if (stack.length && i === stack[stack.length - 1][1]) {
            res[i] = -1;
            break;
        }
        stack.push([nums[i], i]);
        i = (i + 1) % nums.length;
     }

     return res;
};

console.log(nextGreaterElements([1,2,2,2,2,2,2,2,2,2,2,2]));