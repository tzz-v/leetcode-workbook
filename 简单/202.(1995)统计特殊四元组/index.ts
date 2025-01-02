// 使用map记录nums[d]的值，以减少一层for循环。
// 因为d需要大于c，为了正确保存nums[d]的值，需要使用倒序遍历。

function countQuadruplets(nums: number[]): number {
  const map = new Map<number, number>();

  const len = nums.length;
  let res = 0;
  map.set(nums[len - 1], 1);
  for (let c = len - 2; c > 1; c--) {
    for (let b = c - 1; b > 0; b--) {
      for (let a = b - 1; a > -1; a--) {
        const count = map.get(nums[a] + nums[b] + nums[c]);
        res += count ?? 0;
      }
    }
    map.set(nums[c], (map.get(nums[c]) ?? 0) + 1);
  }
  return res;
}
