// 奖牌移动偶数位，不算步数，所以将所有偶数位的奖牌移动到奇数位，或将所有奇数位的奖牌移动到偶数位，取较小值。

function minCostToMoveChips(position: number[]): number {
  let even = 0,
    odd = 0;
  position.forEach((count) => {
    if (count % 2 === 0) {
      even++;
    } else {
      odd++;
    }
  });
  return Math.min(even, odd);
}
