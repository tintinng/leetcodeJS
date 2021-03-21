/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
     // dp0表示当前没有股票的收益,dp1表示当前有股票的收益
    let dp0 = 0, dp1 = -prices[0];
    for (let i = 0; i < prices.length; i++) {
        let temp = dp0;
        dp0 = Math.max(dp1 + prices[i], dp0);
        dp1 = Math.max(temp - prices[i], dp1);
    }
    return dp0;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));