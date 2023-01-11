// 思路：
// 虽然换了一种说法，但是解法和上一题相同。

function maxUncrossedLines(nums1: number[], nums2: number[]): number {
  const dp = new Array(nums1.length + 1)
    .fill(0)
    .map((_) => new Array(nums2.length + 1).fill(0));

  for (let i = 1; i < nums1.length + 1; i++) {
    for (let j = 1; j < nums2.length + 1; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }
  return dp[nums1.length][nums2.length];
}
