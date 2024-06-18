function findNumberOfLIS(nums: number[]): number {
  const len = nums.length;
  const dp = new Array(len).fill(1);
  const count = new Array(len).fill(1);
  let maxLen = 1;
  for (let i = 1; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          count[i] = count[j];
        } else if (dp[j] + 1 === dp[i]) {
          count[i] += count[j];
        }
      }
    }
    if (dp[i] > maxLen) {
      maxLen = dp[i];
    }
  }
  return count.reduce((prev, cur, curIndex) => {
    return prev + (dp[curIndex] === maxLen ? cur : 0);
  }, 0);
}
