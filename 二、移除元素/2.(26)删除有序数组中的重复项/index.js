/**
 * @param {number[]} nums
 * @return {number}
 */

// 因为nums是有序数组，相等的数据的下标都是挨着的，
// 那么，当 nums[i] !== nums[i-1]时，说明nums[i]和之前的元素都不同，这时候把它push到新数组里就OK了

var removeDuplicates = function (nums) {
  const arr = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]);
    arr.push(nums[i]);
  }
  return arr.length;
};

// 双指针写法，在原数组中进行操作，将不重复的元素移到数组的左侧。
var removeDuplicates = function (nums) {
  let leftIndex = 1;
  for (let rightIndex = 1; rightIndex < nums.length; rightIndex++) {
    if (nums[rightIndex] !== nums[rightIndex - 1]) {
      nums[leftIndex] = nums[rightIndex];
      leftIndex++;
    }
  }
  return leftIndex;
};
