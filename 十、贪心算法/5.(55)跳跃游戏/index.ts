function canJump(nums: number[]): boolean {
  if (nums.length === 1) return true;
  let flag = 1;
  for (let i = nums.length - 2; i > 0; i--) {
    if (nums[i] < flag) {
      flag++;
    } else {
      flag = 1;
    }
  }
  return nums[0] >= flag;
}

// 贪心，遍历nums数组，维护一个最远范围，范围内的元素肯定是可以跳到的。
// 如果cover大于等于了终点下标，则说明可以跳到，直接return true就可以了。
function canJump1(nums: number[]): boolean {
  if (nums.length === 1) return true;
  let cover = 0;
  for (let i = 0; i <= cover; i++) {
    cover = Math.max(cover, i + nums[i]);
    if (cover >= nums.length - 1) {
      return true;
    }
  }
  return false;
}
