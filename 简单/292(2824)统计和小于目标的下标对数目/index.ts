/**
 * 统计和小于目标的下标对数目
 * 难度：Easy
 * 标签：数组, 双指针, 二分查找, 排序
 */

// 在这里实现你的解决方案
function countPairs(nums: number[], target: number): number {
  let res = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) res++;
    }
  }
  return res;
}
