/**
 * 取整购买后的账户余额
 * 难度：Easy
 * 标签：数学
 */

// 在这里实现你的解决方案
function accountBalanceAfterPurchase(purchaseAmount: number): number {
  return 100 - Math.round(purchaseAmount / 10) * 10;
}
