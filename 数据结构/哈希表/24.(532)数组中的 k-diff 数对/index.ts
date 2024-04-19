// 使用哈希表，对数据进行去重。
// 时间复杂度O（lgn）

function findPairs(nums: number[], k: number): number {
  const map = new Set<number>();
  const res = new Set<number>();

  nums.forEach((num) => {
    if (map.has(num - k)) {
      res.add(num - k);
    }
    if (map.has(num + k)) {
      res.add(num);
    }
    map.add(num);
  });

  return res.size;
}
