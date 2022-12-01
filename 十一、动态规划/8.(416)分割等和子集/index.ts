function canPartition(nums: number[]): boolean {
  let target = 0;
  for (let val of nums) {
    target += val;
  }
  if (target % 2 !== 0) return false;
  target = target / 2;

  const dp = new Array(target + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > target) return false;
    for (let j = target; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
    }
  }
  return dp[target] === target;
}
