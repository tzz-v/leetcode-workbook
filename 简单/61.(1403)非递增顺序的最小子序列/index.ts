function minSubsequence(nums: number[]): number[] {
  nums.sort((a, b) => b - a);
  let sum = nums.reduce((prev, cur) => prev + cur);

  let subSum = 0;
  const res: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    subSum += nums[i];
    res.push(nums[i]);
    sum -= nums[i];
    if (subSum > sum) {
      return res;
    }
  }
}
