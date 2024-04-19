/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 二分查找；

// 找规律，每次从中间分两份，总有一份数据是有序的；
// 判断左右两边的有序情况（nums[l] < nums[mid] 则说明左边有序；反之则说明右边有序；）
// 分类讨论，当mid左边有序时：判断target是否在左边区间里，在则将区间缩小到[l, mid]；不在则将区间缩小到[mid，r]；
// 分类讨论，当mid右边有序时：判断target是否在右边区间里，在则将区间缩小到[mid，r]；不在则将区间缩小到[l, mid]；

// 时间复杂度为O(logn)

var search = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l <= r) {
    const mid = parseInt((l + r) / 2);
    if (nums[mid] === target) return mid;
    if (nums[l] <= nums[mid]) {
      if (nums[l] <= target && target <= nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[r]) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return -1;
};
