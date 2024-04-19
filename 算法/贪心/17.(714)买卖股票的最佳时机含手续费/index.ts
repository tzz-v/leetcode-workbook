// 思路：
// 同「4.（122）买卖股票的最佳时机II」，不过多了一个交易手续费。
// 可以维护一个最低的买入价格，然后在有利润的时候卖出。
// 不同的是，我们不能保证卖出的时机能不能活的最大利润，可以以当前价格继续买入，看看后面是否还能有利润。
// 这时就有一个问题，我每次交易都需要交手续费，所以，当是继续买入的时候需要将额外支付的手续费减掉（见第18行）就能得到最大利润

function maxProfit(prices: number[], fee: number): number {
  let profit = 0;
  let buyPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyPrice) {
      buyPrice = prices[i];
      continue;
    }
    const val = prices[i] - buyPrice - fee;
    if (val > 0) {
      profit += val;
      buyPrice = prices[i] - fee;
    }
  }
  return profit;
}
