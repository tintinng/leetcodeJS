// 找出每个数组元素右侧第一个比当前数大的数的下标，时间复杂度O(N)
// 例：输入[1, 3, 2, 5, 4, 6, 7, 10]，输出[1, 3, 3, 5, 5, 6, 7, -1]
let nextBigger = function(nums) {
    if (nums.length === 0) {
        return nums;
    }
    let minStack = [];
    minStack.push([nums[0], 0]);
    for (let i = 1; i < nums.length; i++) {
        // 当前元素比栈顶元素小，则不会修改栈顶元素对应的下标
        if (minStack.length <= 0 || nums[i] <= minStack[minStack.length - 1][0]) {
            minStack.push([nums[i], i]);
        } else {
            while (minStack.length > 0 && minStack[minStack.length - 1][0] < nums[i]) {
                // 修改为对应下标
                nums[minStack.pop()[1]] = i;
            }
            minStack.push([nums[i], i]);
        }
    }
    nums[nums.length - 1] = -1;
    return nums;
}

console.log(nextBigger([1, 3, 2, 5, 4, 6, 7, 10]));