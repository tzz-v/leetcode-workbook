// 先给数组降序排序，都为负数时，取三个最大值，
// 其余情况，取第二大*第三大 和第一小*第二小。两个值乘积取较大值 乘以第一大元素值

function maximumProduct(nums: number[]): number {
  if (nums.length === 3) {
    return nums[0] * nums[1] * nums[2];
  }
  nums.sort((a, b) => b - a);
  if (nums[0] < 0) {
    return nums[0] * nums[1] * nums[2];
  }
  const leftValue = nums[1] * nums[2];
  const rightValue = nums.pop() * nums.pop();
  return nums[0] * Math.max(leftValue, rightValue);
}
