function findMiddleIndex(nums: number[]): number {
  let left = 0;
  let right = nums.reduce((prev, cur) => prev + cur) - nums[0];
  if (left === right) return 0;

  for (let i = 1; i < nums.length; i++) {
    left += nums[i - 1];
    right -= nums[i];
    if (left === right) return i;
  }
  return -1;
}
