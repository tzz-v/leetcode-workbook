function isMonotonic(nums: number[]): boolean {
  if (nums.length < 3) return true;
  let flag;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) continue;
    if (flag === undefined) {
      flag = nums[i] - nums[i - 1] > 0;
    } else if (nums[i] - nums[i - 1] > 0 !== flag) {
      return false;
    }
  }
  return true;
}
