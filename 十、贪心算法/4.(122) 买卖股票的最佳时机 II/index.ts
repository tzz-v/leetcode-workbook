// 思路：
// 假设从第二天开始每天都卖出，有正利润的天和负利润的天，把负利润的排除掉，剩余的正利润和就是当前能得到最大利润

function maxProfit(prices: number[]): number {
  let resProfit: number = 0;
  for (let i = 1, length = prices.length; i < length; i++) {
    resProfit += Math.max(prices[i] - prices[i - 1], 0);
  }
  return resProfit;
}
