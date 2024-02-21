// 存在一个下标i，下标i及之前的元素都+k，下标i之后的元素都-i。此时最大值为max(nums[i] + k, nums[len - 1] - k);最小值为min(nums[0] + k, nums[i + 1] - k);
// 遍历数组nums，找到最大值和最小值差值最小的下标i，以及最小差值

function smallestRangeII(nums: number[], k: number): number {
  if (nums.length === 1) return 0;
  nums.sort((a, b) => a - b);
  const last = nums[nums.length - 1];
  let res = last - nums[0];
  for (let i = 0; i < nums.length - 1; i++) {
    const max = Math.max(nums[i] + k, last - k);
    const min = Math.min(nums[i + 1] - k, nums[0] + k);
    res = Math.min(res, max - min);
  }

  return res;
}
