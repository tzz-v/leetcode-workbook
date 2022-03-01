/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 因为是有序数组，所以，当每一项进行平方后，最大的只能是最后一个或者第一个，
// 创建一个新数组，可以比较i、j两个指针对应的值，选择较大的那个放入新数组的最后一位。
 var sortedSquares = function(nums) {
  let i = 0;
  let j = nums.length - 1;
  let index = nums.length - 1;
  const newArray = [];
  while (i <= j) {
      if (nums[i] * nums[i] > nums[j] * nums[j]) {
          newArray[index] = nums[i] * nums[i];
          i++;
      } else {
          newArray[index] = nums[j] * nums[j];
          j--;
      }
      index--;
  }
  return newArray
};

// 一个小优化：
// 比较的表达式可以这样写 if (-nums[i] >nums[j])；
// 表达式为true的情况：
// 当nums[i]为负，nums[j] 为正，平方后左边的大
// 当nums[i]为负，nums[j] 为负，平方后左边的大
var sortedSquares = function(nums) {
  let i = 0;
  let j = nums.length - 1;
  let index = nums.length - 1;
  const newArray = [];
  while (i <= j) {
      if (-nums[i] >nums[j]) {
          newArray[index] = nums[i] * nums[i];
          i++;
      } else {
          newArray[index] = nums[j] * nums[j];
          j--;
      }
      index--;
  }
  return newArray
};