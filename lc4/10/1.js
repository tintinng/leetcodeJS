/**
 * @param {number[]} bucket
 * @param {number[]} vat
 * @return {number}
 */
 var storeWater = function(bucket, vat) {
    let n = bucket.length; 
    let res = 0, divideCount = 0;
    for (let i = 0; i < n; i++) {
        if (vat[i] === 0) {
            continue;
        }
        // 容量为0，必须 +1
        if (bucket[i] === 0) {
            bucket[i] ++;
            res++;
        }
        // 找出最优divideCount
        divideCount = Math.max(divideNum(vat[i], bucket[i]), divideCount);
    }
    for (let i = 0; i < n; i++) {
        while (divideCount * bucket[i] < vat[i]) {
            bucket[i] ++;
            res ++;
        }
    }

    return res + divideCount;
};

// 从a 到 n，最优的方式的迭代次数
function  divideNum(n, a) {
    let count = n - a;
    let num = -1;
    for (let i = 0; i <= n - a; i++) {
        if (Math.ceil(n / (i + a)) + i < count) {
            count = Math.ceil(n / (i + a)) + i;
            num = i;
        }
    }
    return count - num;
}


// console.log(divideNum(8, 1));
let bucket = [9, 0, 1];
let vat = [0, 2, 2];
// let bucket = [1, 0, 1, 999];
// let vat = [0, 0, 12, 10000];
// let bucket = [1];
// let vat = [0];
console.log(storeWater(bucket, vat));