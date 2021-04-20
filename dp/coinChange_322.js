/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
 var coinChange = function(coins, amount) {
     if (amount === 0) {
         return 0;
     }
     // dp[i]表示凑成 i 需要的最少的金币
     let dp = new Array(amount + 1).fill(Infinity);
     // 每种金额初始化为1
     for (let i = 0; i < coins.length; i++) {
         if (coins[i] > amount) {
             coins.splice(i, 1);
         }
         dp[coins[i]] = 1;
     }
     for (let i = 1; i < dp.length; i++) {
         let minCount = dp[i];
         for (let j = 0; j < coins.length; j++) {
             // i + 1表示要凑成的金额; coins[j]表示当前取的金币
             if (i - coins[j] >= 0) {
                 minCount = Math.min(dp[i - coins[j]] + 1, minCount);
             }
         }
         // 更新回dp[i]
         dp[i] = minCount;
     }
     return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([2147483647], 2));