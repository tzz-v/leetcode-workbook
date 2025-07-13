/**
 * 既不是最小值也不是最大值
 * 难度：Easy
 * 标签：数组, 排序
 */

// 在这里实现你的解决方案
function findNonMinOrMax(nums: number[]): number {
  if (nums.length < 3) return -1;

  const min = Math.min(...nums.slice(0, 3));
  const max = Math.max(...nums.slice(0, 3));
  return nums.find((num) => num !== min && num !== max);
}
