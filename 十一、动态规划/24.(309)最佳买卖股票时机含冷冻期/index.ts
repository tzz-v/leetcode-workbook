// 思路：
// 同「21.(122)买卖股票的最佳时机 II」,不过一维数组无法表示前天卖出的金额，因此使用二维数组。
// dp[i][0]: 第i天持有股票时所拥有的最大利润
// dp[i][1]: 第i天不持有股票时所拥有的最大利润

// dp[i][0] = Math.max(dp[i - 1][0], (dp[i - 2]?.[1] ?? 0) - prices[i])
// 「取一个最小买入值，因为多了一个冷冻期，所以不能拿昨天卖出后拥有的钱买今天的股票，需要用前天卖出的钱。」
// 从dp[i-1][1] - prices[i]变成了dp[i-2][1] - prices[i]

function maxProfit(prices: number[]): number {
  const len = prices.length;
  const dp: number[][] = new Array(len).fill(0).map((_) => []);
  dp[0][0] = -prices[0];
  dp[0][1] = 0;
  for (let i = 1; i < len; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], (dp[i - 2]?.[1] ?? 0) - prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]);
  }
  console.log(dp);
  return Math.max(dp[len - 1][1], dp[len - 2]?.[1] ?? 0);
}
