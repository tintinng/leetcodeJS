/**
 * 1、建立一个数组表示从 0~n 的需要完全平方数和的结果
 * 2、转移方程：j从0~1测试哪种方案最小，测试过程依赖之前的res res[i] = min{ res[i - j*j] + 1 , res[i] }
 * 3、边界条件：最坏情况，全部都由 1 + 1 + ... + 1组成
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    let res = []
    res[0] = 0
    for(let i=1; i<=n; i++) {
        res[i] = i
        for(let j=1; j*j<=i; j++) {
            res[i] = Math.min(res[i-j*j]+1, res[i])
        }
    }
    return res[n]
};

numSquares(12)