/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let res = new Array(T.length).fill(0);
    let stack = [];
    for (let i = 0; i < T.length; i++) {
        while (stack.length && T[stack[stack.length - 1]] < T[i]) {
            let index = stack.pop();
            res[index] = i - index;
        }
        stack.push(i);
    }
    return res;
};
let arr = [89, 62, 70, 58, 47, 47, 46, 76, 100, 70];
console.log(dailyTemperatures(arr))