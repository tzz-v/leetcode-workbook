/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// nums = [5,7,7,8,8,10]
// 先找出特殊情况
//    - target在数组队列左边 target = 1
//    - target在数组队列右边 target = 12
// 因为nums是有序数组，通过判断target与nums[left]和nums[right]的大小关系，
// 逐步确定target元素在nums中的第一个下标和最后一个下标.
// 或者在没有目标值的情况下，使得left > right而退出while循环 返回[-1,-1].

var searchRange = function (nums, target) {
  if (target < nums[0] || target > nums[nums.length - 1]) {
    return [-1, -1];
  }
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    if (target < nums[right]) {
      right--;
    }
    if (target > nums[left]) {
      left++;
    }
    if (target === nums[left] && target === nums[right]) {
      return [left, right];
    }
  }
  return [-1, -1];
};
