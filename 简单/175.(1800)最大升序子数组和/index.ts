function maxAscendingSum(nums: number[]): number {
  let res = 0;
  let sum = nums[0];
  for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i  -1]) {
          sum += nums[i];
      } else {
          res = Math.max(res, sum);
          sum = nums[i];
      };
  }
  return Math.max(res, sum);
};