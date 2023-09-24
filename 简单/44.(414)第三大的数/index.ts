// 排序+去重之后取数组第三个元素值。
function thirdMax(nums: number[]): number {
  nums.sort((a, b) => b - a);
  const res = Array.from(new Set(nums));
  return res[2] ?? res[0];
}
