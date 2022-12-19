// 思路：
// 维护一个数组dp：
// dp[1]: 当前第一次持有股票的最大利润
// dp[2]: 当前第一次不持有股票的最大利润
// dp[3]: 当前第二次持有股票的最大利润
// dp[4]: 当前第二次不持有股票的最大利润

// 初始值： dp=[-prices[0], 0, -prices[0], 0]
// 公式：
//     dp[1] = Math.max(dp[0], -prices[i]); (取一个最小的买入值)
//     dp[2] = Math.max(dp[2], dp[1] + prices[i]); (根据动态变化的最小买入值，取最大的利润)
//     dp[3] = Math.max(dp[3], dp[2] - prices[i]); (取一个最小的买入值)
//     dp[4] = Math.max(dp[4], dp[3] + prices[i]); (根据动态变化的最小买入值，取最大的利润)

function maxProfit(prices: number[]): number {
  const dp = new Array(5).fill(0);
  dp[1] = dp[3] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    dp[1] = Math.max(dp[1], -prices[i]);
    dp[2] = Math.max(dp[2], dp[1] + prices[i]);
    dp[3] = Math.max(dp[3], dp[2] - prices[i]);
    dp[4] = Math.max(dp[4], dp[3] + prices[i]);
  }
  return dp[4];
}
