function findSubarrays(nums: number[]): boolean {
  const set = new Set<number>();

  for (let i = 0; i < nums.length - 1; i++) {
    const val = nums[i] + nums[i + 1];
    if (set.has(val)) return true;
    set.add(val);
  }
  return false;
}
