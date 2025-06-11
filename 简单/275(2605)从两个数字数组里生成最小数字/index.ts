/**
 * 从两个数字数组里生成最小数字
 * 难度：Easy
 * 标签：数组, 哈希表, 枚举
 */

// 在这里实现你的解决方案
function minNumber(nums1: number[], nums2: number[]): number {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const set = new Set(nums2);

  for (const num of nums1) {
    if (set.has(num)) {
      return num;
    }
  }
  if (nums1[0] > nums2[0]) {
    return nums2[0] * 10 + nums1[0];
  }
  return nums1[0] * 10 + nums2[0];
}
