function promotionNum(n, x, nums) {
    // 从大到小排列
    nums.sort((a, b) => b - a);
    // 第x个数等于0时从x往前遍历
    if (nums[x - 1] === 0) {
        while (x > 0) {
            if (nums[x - 1] !== 0) {
                break;
            }
            x--;
        }
    } else {他
        // 否则往后找直到第一个比当前数小
        while (x < n && nums[x] === nums[x - 1]) {
            x++;
        }
    }
    return x;
}

console.log(promotionNum(5, 4, [0, 0, 2, 3, 4]));