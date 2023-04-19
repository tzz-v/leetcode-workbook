// 使用哈希表,存储数组元素，然后查询元素[0-n]在hash中是否存在。返回不存在的那个元素

function missingNumber(nums: number[]): number {
  const len = nums.length;
  const hash = new Set();

  for (let i = 0; i < len; i++) {
    hash.add(nums[i]);
  }
  for (let i = 0; i < len; i++) {
    if (!hash.has(i)) return i;
  }
  return len;
}
