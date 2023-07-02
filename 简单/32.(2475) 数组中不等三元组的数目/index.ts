function unequalTriplets(nums: number[]): number {
  let res = 0;
  let map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) ?? 0) + 1);
  }
  let left = 0;
  if (map.size < 3) return 0;
  for (let cur of map.values()) {
    const right = nums.length - cur - left;
    res += left * cur * right;
    left += cur;
  }

  return res;
}
