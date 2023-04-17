// 遍历数组，将数组元素一一存到哈希表中，并检查哈希表中是否存在相同元素
function containsDuplicate(nums: number[]): boolean {
  const arr = new Set();

  for (const val of nums) {
    if (arr.has(val)) return true;
    arr.add(val);
  }
  return false;
}
