// 从前往后遍历nums数组，当前元素要比之前出现的最大的元素大，否则当前下标元素就有问题。更新区间右侧下标
// 从后往前遍历nums数组，当前元素要比之前出现的最小的元素小，否则当前下标元素就有问题。更新区间左侧下标

// 根据区间左右两侧下标，得到区间长度
function findUnsortedSubarray(nums: number[]): number {
  let len = nums.length;
  let max = -Infinity;
  let min = Infinity;
  let l = -1;
  let r = -1;
  for (let i = 0; i < len; i++) {
    if (nums[i] < max) {
      r = i;
    } else {
      max = nums[i];
    }
    if (nums[len - i - 1] > min) {
      l = len - i - 1;
    } else {
      min = nums[len - i - 1];
    }
  }
  return r === -1 ? 0 : r - l + 1;
}
