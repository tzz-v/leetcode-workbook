// 动态规划
// 同上一题，考虑两种情况，包含首元素不包含尾元素 和 包含尾元素，不包含首元素。

function rob(nums: number[]): number {
  if (nums.length === 1) return nums[0];
  const len = nums.length;
  const dpStart = new Array(len).fill(0);
  const dpEnd = new Array(len).fill(0);
  dpStart[0] = nums[0];
  dpStart[1] = Math.max(nums[0], nums[1]);
  dpEnd[0] = 0;
  dpEnd[1] = nums[1];
  for (let i = 2; i < len; i++) {
    dpStart[i] = Math.max(dpStart[i - 2] + nums[i], dpStart[i - 1]);
    dpEnd[i] = Math.max(dpEnd[i - 2] + nums[i], dpEnd[i - 1]);
  }
  return Math.max(dpStart[len - 2], dpEnd[len - 1]);
}
