// 遍历nums，将当前项的累加和存入map中。
// 此时我们有了当前项之前的前缀和。如果存在前缀和为(sum - k)的项，那么就存在和为k的子区间，个数取决于前缀和为(sum - k)的项个数

function subarraySum(nums: number[], k: number): number {
  const map = new Map<number, number>();
  map.set(0, 1);
  let sum = 0;
  let res = 0;

  for (let val of nums) {
    sum += val;
    const cur = map.get(sum - k);
    // 假设当前项的下标是j，
    // 如果存在前缀和为(sum - k)的项下标 i（i < j）;
    // 那么，[0~j]的和为sum，[0~i]的和为sum-k，因此存在[i-j]的和为k。
    // 因为-1000 <= nums[i] <= 1000，所以可能存在多个前缀和为(sum-k)。即存在多个和为k的[i~j]连续子数组。
    if (cur !== undefined) {
      res += cur;
    }
    map.set(sum, (map.get(sum) ?? 0) + 1);
  }
  return res;
}
