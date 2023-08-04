// 遍历数组，将数据存入哈希表中，同时判断哈希表中是否存在 「当前元素 - diff」和「当前元素 -  2 * diff」

function arithmeticTriplets(nums: number[], diff: number): number {
  const set = new Set<number>();
  let res = 0;
  nums.forEach((val) => {
    if (set.has(val - diff) && set.has(val - 2 * diff)) {
      res++;
    }
    set.add(val);
  });
  return res;
}
