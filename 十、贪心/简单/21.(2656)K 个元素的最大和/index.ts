function maximizeSum(nums: number[], k: number): number {
  const max = Math.max(...nums);
  return ((max + max + k - 1) / 2) * k;
}
