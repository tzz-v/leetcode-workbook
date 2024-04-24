// 使用map存储数组内各个元素的数量。并在便利的时候同步更新数量最多的项。

function majorityElement(nums: number[]): number {
  const res = [1, nums[0]];
  const map = new Map();
  for (const val of nums) {
    const count = (map.get(val) ?? 0) + 1;
    map.set(val, count);
    if (count > res[0]) {
      res[0] = count;
      res[1] = val;
    }
  }
  return res[1];
}
