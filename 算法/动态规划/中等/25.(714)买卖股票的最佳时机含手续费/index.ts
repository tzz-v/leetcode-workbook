// 动态规划

// 参照「21.(122)买卖股票的最佳时机 II」，不同的只是买入的时候把手续费扣掉

function maxProfit(prices: number[], fee: number): number {
  const dp = [-Infinity, 0];
  for (let i = 0; i < prices.length; i++) {
    dp[0] = Math.max(dp[0], dp[1] - prices[i] - fee);
    dp[1] = Math.max(dp[1], dp[0] + prices[i]);
  }
  return dp[1];
}
