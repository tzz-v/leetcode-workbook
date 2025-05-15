function applyOperations(nums: number[]): number[] {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue;
    }
    if (nums[i] === nums[i + 1]) {
      nums[i] = 0;
      nums[j] = nums[i + 1] * 2;
      j++;
      nums[i + 1] = 0;
    } else {
      const temp = nums[i];
      nums[i] = 0;
      nums[j] = temp;
      j++;
    }
  }
  return nums;
}
