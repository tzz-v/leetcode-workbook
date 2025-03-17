function intersection(nums: number[][]): number[] {
  const arr = nums.map((item) => new Set(item));
  const res = nums[0].filter((val) => arr.every((item) => item.has(val)));
  return res.sort((a, b) => a - b);
}
