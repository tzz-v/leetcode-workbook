/**
 * 与车相交的点
 * 难度：Easy
 * 标签：数组, 哈希表, 前缀和
 */

// 在这里实现你的解决方案
function numberOfPoints(nums: number[][]): number {
  const set = new Set([]);
  nums.forEach(([s, e]) => {
    for (let i = s; i <= e; i++) {
      set.add(i);
    }
  });

  return set.size;
}
