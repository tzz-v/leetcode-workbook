/**
 * @param {number[]} nums
 * @return {number}
 */

// 二分查找；
// 和上一题一样，二分法，然后排除掉有序的区间，继续二分，直至区间内只剩下一个元素，就是最小值；

var findMin = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    const mid = parseInt((l + r) / 2);
    if (nums[mid] < nums[r]) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return nums[l];
};
