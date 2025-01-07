function maximumDifference(nums: number[]): number {
  let min = nums[0];
  let res = -1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= min) {
      min = nums[i];
    } else {
      res = Math.max(res, nums[i] - min);
    }
  }
  return res;
}
