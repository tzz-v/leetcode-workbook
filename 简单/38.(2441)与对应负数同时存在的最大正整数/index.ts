function findMaxK(nums: number[]): number {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) return -1;
    const res = nums.find((num) => num === Math.abs(nums[i]));
    if (res) return res;
  }
  return -1;
}
