function leftRightDifference(nums: number[]): number[] {
  const arr = [];
  let left = 0;
  let right = nums.reduce((prev, cur) => prev + cur);

  for (let i = 0; i < nums.length; i++) {
    left = left + (nums[i - 1] ?? 0);
    right = right - nums[i];
    arr[i] = Math.abs(left - right);
  }
  return arr;
}
