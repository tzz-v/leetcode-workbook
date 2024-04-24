// 遍历数组并使用哈希表存储数组中元素的数量。找到数量大于 3/n 的元素。
// 时间复杂度O(n);空间复杂度O(n);
function majorityElement(nums: number[]): number[] {
  const map = new Map();
  const res: number[] = [];
  for (const val of nums) {
    const count = map.get(val) ?? 0;
    if (count + 1 > nums.length / 3) {
      res.push(val);
      map.set(val, -Infinity);
    } else {
      map.set(val, count + 1);
    }
  }
  return res;
}
