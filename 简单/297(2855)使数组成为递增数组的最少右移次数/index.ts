/**
 * 使数组成为递增数组的最少右移次数
 * 难度：Easy
 * 标签：数组
 */

// 在这里实现你的解决方案
function minimumRightShifts(nums: number[]): number {
  let res = 0;
  let flag = true;
  for (let i = 1; i < nums.length; i++) {
    if (!flag) {
      if (nums[i] > nums[0]) return -1;
      if (nums[i] < nums[i - 1]) return -1;
      continue;
    }
    if (nums[i] < nums[0]) {
      flag = false;
      res = nums.length - i;
    } else if (nums[i] < nums[i - 1]) {
      return -1;
    }
  }

  return res;
}
