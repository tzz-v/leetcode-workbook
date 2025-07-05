/**
 * 购买两块巧克力
 * 难度：Easy
 * 标签：贪心, 数组, 排序
 */

// 在这里实现你的解决方案
function buyChoco(prices: number[], money: number): number {
  prices.sort((a, b) => a - b);
  const remain = money - (prices[0] + prices[1]);
  if (remain >= 0) return remain;
  return money;
}
