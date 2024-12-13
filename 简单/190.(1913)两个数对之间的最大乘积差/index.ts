function maxProductDifference(nums: number[]): number {
  nums.sort((a, b) => a - b);
  return nums.pop() * nums.pop() - nums[0] * nums[1];
}
