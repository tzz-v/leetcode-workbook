/**
 * 最长交替子数组
 * 难度：Easy
 * 标签：数组, 枚举
 */

// 在这里实现你的解决方案
function alternatingSubarray(nums: number[]): number {
  let res = -1;

  let start = 0;
  for (let i = 1; i < nums.length; i++) {
    const len = i - start + 1;
    if (nums[i] - nums[start] === (i - start) % 2) {
      res = Math.max(res, len);
      continue;
    }
    if (nums[i] - nums[i - 1] === 1) {
      start = i - 1;
    } else {
      start = i;
    }
  }
  return res;
}
