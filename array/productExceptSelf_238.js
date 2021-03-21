/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
     if (nums.length <= 1) {
         return nums;
     }
    // front[i] 表示 nums[0]*nums[1]...*nums[i-1]
    // n = nums.length
    // back[i] 表示 nums[n-1]*nums[n-2]...*nums[i+1]
    let n = nums.length;
    let front = new Array(n).fill(1);
    front[0] = nums[0];
    let back = new Array(n).fill(1);
    back[n - 1] = nums[n - 1];
    let output = [];
    for (let i = 1; i < n; i++) {
        front[i] = nums[i] * front[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        back[i] = nums[i] * back[i + 1];
    }
    // 第一个和最后一个的结果已经求出来
    // 第一个结果
    if (back.length >= 2) {
        output.push(back[1]);
    }
    // 中间的结果：output[i] = front[i - 1]*back[i + 1]
    for (let i = 1; i < n - 1; i++) {
        output[i] = front[i - 1] * back[i + 1];
    }
    // 最后的结果
    if (front.length >= 2) {
        output.push(front[n - 2]);
    }

    return output;
};

console.log(productExceptSelf([1,2,1,2,1]));