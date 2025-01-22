function maxSubsequence(nums: number[], k: number): number[] {
  const arr = nums.map((item, i) => [item, i]).sort((a, b) => b[0] - a[0]);
  return arr
    .slice(0, k)
    .sort((a, b) => a[1] - b[1])
    .map((item) => item[0]);
}
