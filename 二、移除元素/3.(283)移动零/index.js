/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 采用双指针法，把等于0的项剔除，并且可以得到剔除0后数组的长度 left（左指针左边均为非0数）；
// 将下标为left之后，nums.length之前的项设置为0；（左指针右边均为0）；
 var moveZeroes = function(nums) {
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
      if (nums[right] !== 0) {
          nums[left] = nums[right]
          left++
      }
  }
  for (left; left < nums.length; left++) {
      nums[left] = 0;
  }
  return nums;
};