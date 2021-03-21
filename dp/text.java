class Solution {
    public int maxProfit(int[] prices) {
        int length=prices.length;
        int[][] dp=new int[length+1][2];
        dp[0][1]=Integer.MIN_VALUE;
        for(int i=1;i<=length;i++){
            // 当前不持有股票，1、昨天不持有 2、昨天持有，今天卖出，
            dp[i][0]=Math.max(dp[i-1][0],dp[i-1][1]+prices[i-1]);
            // 当前持有股票，1、昨天持有 2、昨天不持有，今天买入，且昨天不能是卖出（也就是前天不持有状态）
            dp[i][1]=Math.max(dp[i-1][1],(i-2<0?0:dp[i-2][0])-prices[i-1]);
        }
        return Math.max(dp[length][1],dp[length][0]);
    }
}