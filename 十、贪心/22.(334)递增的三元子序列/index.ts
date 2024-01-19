// 根据题意，维护nums[i]、nums[j]，遍历nums，去找是否存在nums[k]

function increasingTriplet(nums: number[]): boolean {
  let len = nums.length;

  let first = nums[0],
    second = Infinity;
  for (let i = 1; i < len; i++) {
    if (nums[i] > second) return true;
    if (nums[i] <= first) {
      first = nums[i];
    } else {
      second = nums[i];
    }
  }
  return false;
}
