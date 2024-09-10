// 0~hight区间的奇数个数，减去0~low-1的奇数个数。
function countOdds(low: number, high: number): number {
  const highCount = Math.ceil(high / 2);
  const lowCount = Math.ceil((low - 1) / 2);

  return highCount - lowCount;
}
