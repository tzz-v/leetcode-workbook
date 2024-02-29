// 使用哈希表统计数组元素数量
function isPossibleToSplit(nums: number[]): boolean {
  const map = new Map();
  nums.forEach((val) => {
    map.set(val, (map.get(val) ?? 0) + 1);
  });
  return Array.from(map.values()).every((count) => count <= 2);
}
