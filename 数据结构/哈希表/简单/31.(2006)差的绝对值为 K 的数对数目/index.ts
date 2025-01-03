// 利用哈希表存储每个数出现的次数，同时遍历数组，对于每个数 x，计算 x - k 和 x + k 的出现次数，然后累加到结果中。

function countKDifference(nums: number[], k: number): number {
  const map = new Map<number, number>();
  if (nums.length < 2) return 0;

  let res = 0;

  for (let i = nums.length - 1; i >= 0; i--) {
    const count = (map.get(nums[i] - k) ?? 0) + (map.get(nums[i] + k) ?? 0);
    res += count;
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }
  return res;
}
