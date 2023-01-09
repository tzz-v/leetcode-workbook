// 思路
// 创建一个二维数组，记录两个字符串的所有比较情况。找到数组中记录的最大长度
// dp[i][j]: 以下标i-1为结尾的数组A和以下标j-1为结尾的数组B，最长重复子数组的长度。

function findLength(nums1: number[], nums2: number[]): number {
  const dp = new Array(nums1.length + 1)
    .fill(0)
    .map((_) => new Array(nums2.length + 1).fill(0));
  let res = 0;
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      res = Math.max(res, dp[i][j]);
    }
  }
  return res;
}
