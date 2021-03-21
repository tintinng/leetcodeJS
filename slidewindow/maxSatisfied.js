/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
 var maxSatisfied = function(customers, grumpy, X) {
    // 滑动窗口，判断在哪一个窗口的收益最高（控制比不控制能让多满意的客户的数量）
    let i = 0, j = X - 1;
    let maxProfit = 0;
    let res = 0;
    let oldSatisfied = 0;
    let newSatisfied = 0;
    while (j < customers.length) {
        oldSatisfied = 0;
        newSatisfied = 0;
        for (let k = i; k <= j; k++) {
            if (grumpy[k] === 0) {
                oldSatisfied += customers[k];
            }
            newSatisfied += customers[k];
        }
        maxProfit = Math.max(newSatisfied - oldSatisfied, maxProfit);
        i++, j++;
    }
    for (let k = 0; k < customers.length; k++) {
        if (grumpy[k] === 0) {
            res += customers[k];
        }
    }
    return res + maxProfit;
};
let customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3;
console.log(maxSatisfied(customers, grumpy, X));