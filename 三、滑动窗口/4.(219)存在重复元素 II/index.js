/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

// 先来个暴力解，从每个下标开始找最近的相同元素，然后判断是否小于k；
var containsNearbyDuplicate = function (nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    let res = k + 1;
    let r = i + 1;
    while (r < nums.length) {
      if (nums[i] !== nums[r]) {
        r++;
      } else {
        res = r - i;
        break;
      }
    }
    if (res <= k) return true;
  }
  return false;
};

// 滑动窗口
// 创建一个固定长度为k的窗口，看看是否有相同的元素，有则返回true
// 没有则窗口向右平移，继续判断；
// 滑动窗口的优点：减少遍历次数；
var containsNearbyDuplicate = function (nums, k) {
  const arr = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (i > k) {
      arr.delete(nums[i - k - 1]);
    }
    if (arr.has(nums[i])) {
      return true;
    }
    arr.add(nums[i]);
  }
  return false;
};
