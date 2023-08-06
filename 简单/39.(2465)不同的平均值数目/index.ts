function distinctAverages(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const set = new Set<number>();
  let n = nums.length - 1;
  for (let i = 0; i < n - i; i++) {
    set.add((nums[i] + nums[n - i]) / 2);
  }
  return set.size;
}
