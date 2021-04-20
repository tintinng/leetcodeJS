/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    // map存放包含nums[i-1]的连续数组的和为 k - nums[i]的个数
    // sum[i]存放 subarraySum(nums去掉最后一个, k)
    // ==> sum[i] = sum[i - 1] + map.get(k - nums[i])
    let map = new Map();
    // 处理第一个
    map.set(nums[0], 1);
    let sum = new Array(nums.length).fill(0);
    if (nums[0] === k) {
        sum[0] = 1;
    }
    for (let i = 1; i < nums.length; i++) {
        let countI = nums[i] === k ? 1 : 0;
        if (map.has(k - nums[i])) {
            countI += map.get(k - nums[i]);
        }
        // 处理map
        let newMap = new Map();
        map.forEach((value, key) => {
            if (newMap.has(key + nums[i])) {
                newMap.set(key + nums[i], value + 1);
            } else {
                newMap.set(key + nums[i], value);
            }
        })
        if (newMap.has(nums[i])) {
                newMap.set(nums[i], newMap.get(nums[i]) + 1);
            } else {
                newMap.set(nums[i], 1);
            }
        map = newMap;
        // 更新sum
        sum[i] += sum[i - 1] + countI;
    }
    return sum[nums.length - 1];
};

console.log(subarraySum([0,0,0,0,0,0,0,0,0,0], 0));