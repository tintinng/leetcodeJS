function meetCake(n, m, a, b, nums) {
    let min, max;
    if (a < b) {
        min = a, max = b;
    } else {
        min = b, max = a;
    }
    // 记录已有的m中，重量为a和重量为b的数量
    let exist = [0, 0];
    // 遍历已有的cake
    for (let i = 0; i < m; i++) {
        if (nums[i] < min || nums[i] > max) {
            return 'NO';
        } else if (nums[i] === min) {
            exist[0] ++;
        } else if (nums[i] === max) {
            exist[1] ++;
        }
    }
    // 已有的m已经满足要求
    if (exist[0] > 0 && exist[1] > 0) {
        return 'YES';
    }
    // 差一个
    if (exist[0] === 0 && exist[1] !== 0 && (n - m) >= 1) {
        return 'YES';
    }
    if (exist[0] !== 0 && exist[1] === 0 && (n - m) >= 1) {
        return 'YES';
    }
    // 差两个
    return (n - m) >= 2 ? 'YES' : 'NO';
}

console.log(meetCake(4, 2, 2, 4, [5, 5]));