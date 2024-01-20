// 枚举出所有情况，取较小值
function integerReplacement(n: number): number {
  if (n === 1) return 0;
  if (n % 2 === 0) {
    return 1 + integerReplacement(n / 2);
  }
  return (
    2 +
    Math.min(integerReplacement((n + 1) / 2), integerReplacement((n - 1) / 2))
  );
}
