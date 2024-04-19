// 思路
// 同上一题，只是交易次数从2变成了k。
// dp的长度： k * 2 + 1；
// 奇数下标项：第i次持有股票时，手上已赚取的利润。
// 偶数下标项：第i- 1次不持有股票时，手上已赚取的利润。

function maxProfit(k: number, prices: number[]): number {
  const dp = new Array(k * 2 + 1).fill(0);
  for (let i = 1; i < dp.length; i += 2) {
    dp[i] = -prices[0];
  }
  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j < dp.length; j += 2) {
      dp[j] = Math.max(dp[j], dp[j - 1] - prices[i]);
      dp[j + 1] = Math.max(dp[j + 1], dp[j] + prices[i]);
    }
  }
  return dp[k * 2];
}
