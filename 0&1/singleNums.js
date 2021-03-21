/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var singleNumbers = function(nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        x = x ^ nums[i];
    }
    let str = x.toString(2);
    // 不同的两个数 a b的第i位不同
    let i = str.length - 1;
    while (i >= 0) {
        if (str[i] === '1') {
            break;
        }
        i--;
    }
    // 从右往左第 i 位
    i = str.length - 1 - i;
    // 分组
    let nums0 = [];
    let nums1 = [];
    for (let j = 0; j < nums.length; j++) {
        let s = nums[j].toString(2);
        if (!s[s.length - 1 - i] || s[s.length - 1 - i] === '0') {
            nums0.push(nums[j]);
        } else {
            nums1.push(nums[j]);
        }
    }
    // 遍历两个数组
    let res = [];
    x = 0;
    for (let j = 0; j < nums0.length; j++) {
        x = x ^ nums0[j];
    }
    res.push(x);
    x = 0;
    for (let j = 0; j < nums1.length; j++) {
        x = x ^ nums1[j];
    }
    res.push(x);

    return res;
};

console.log(singleNumbers([111, 111, 222, 333, 111, 111]))