/**
 * 检查数组是否是好的
 * 难度：Easy
 * 标签：数组, 哈希表, 排序
 */

// 在这里实现你的解决方案
function isGood(nums: number[]): boolean {
  const max = Math.max(...nums);
  if (nums.length !== max + 1) return false;
  if (
    nums.findIndex((val) => val === max) ===
    nums.findLastIndex((val) => val === max)
  )
    return false;
  const set = new Set(nums);
  if (set.size !== max) return false;
  return true;
}
