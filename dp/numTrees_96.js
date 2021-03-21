/**
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
    if (n <= 2) {
        return n;
    } 
    let nums = new Array(n + 1).fill(0);
    nums[0] = 1, nums[1] = 1, nums[2] = 2;
    for (let i = 3; i <= n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            nums[i] += nums[j] * nums[i - 1 - j];
        }
    }

    return nums[n];
};

console.log(numTrees(3));