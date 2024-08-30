function shuffle(nums: number[], n: number): number[] {
  const res = new Array(nums.length).fill(0);
  for (let i = 0; i < n; i++) {
    res[2 * i] = nums[i];
    res[2 * i + 1] = nums[i + n];
  }
  return res;
}
