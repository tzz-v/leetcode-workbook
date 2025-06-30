/**
 * 找出不同元素数目差数组
 * 难度：Easy
 * 标签：数组, 哈希表
 */

// 在这里实现你的解决方案
function distinctDifferenceArray(nums: number[]): number[] {
  const set = new Set<number>([]);
  const arr = [];

  nums.forEach((item, i) => {
    set.add(item);
    arr[i] = set.size;
  });
  set.clear();
  for (let i = nums.length - 1; i >= 0; i--) {
    arr[i] -= set.size;
    set.add(nums[i]);
  }
  return arr;
}
