/**
 * 半有序排列
 * 难度：Easy
 * 标签：数组, 模拟
 */

// 在这里实现你的解决方案
function semiOrderedPermutation(nums: number[]): number {
  const start = nums.findIndex((num) => num === 1);
  const end = nums.findIndex((num) => num === nums.length);

  const res = start + nums.length - 1 - end;
  if (start > end) {
    return res - 1;
  }
  return res;
}
