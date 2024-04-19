// 将数量存入哈希中之后转成数组，根据元素数量对数组进行排序。
// 截取最后k个元素

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }
  const arr = Array.from(map);
  arr.sort((a, b) => a[1] - b[1]);
  return arr.slice(arr.length - k).map((item) => item[0]);
}
