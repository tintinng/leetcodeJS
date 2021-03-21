/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let dp0 = 0, dp1 = -prices[0];
    let selled = false;
    for (let i = 1; i < prices.length; i++) {
        let temp = dp0;
        if (selled) {
            dp0 = Math.max(dp0, dp1 + prices[i]);
            // 能dp0的来源不能是dp1 + prices[i]
             dp1 = dp1;
             selled = false;
         } else {
             // 更新dp0时如果是卖出，则需要设置selled为true
             if (dp1 + prices[i] > dp0) {
                 dp0 = dp1 + prices[i];
                 selled = true;
             } else {
                 dp0 = dp0;
             }
             // 更新dp1
             dp1 = Math.max(temp - prices[i], dp1);
         }
    }
    return dp0 > dp1 ? dp0 : dp1;
};

console.log(maxProfit([1,2,3,0,2]));