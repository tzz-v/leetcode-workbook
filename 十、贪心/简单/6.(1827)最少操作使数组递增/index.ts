// 贪心思想
// 在满足题意的情况下，使每个数增至对应的下限即可

function minOperations(nums: number[]): number {
  let count = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) continue;
    count += nums[i - 1] - nums[i] + 1;
    nums[i] = nums[i - 1] + 1;
  }

  return count;
}
