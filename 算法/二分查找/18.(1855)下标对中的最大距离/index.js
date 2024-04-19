/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// 二分查找；
// 遍历nums1，找其所有的下标对；并记录最大的；
// 时间复杂度为O(nlogm);
var maxDistance = function (nums1, nums2) {
  let res = 0;
  for (let i = 0; i < nums1.length; i++) {
    let l = i;
    let r = nums2.length - 1;
    while (l <= r) {
      const mid = parseInt((l + r) / 2);
      if (nums2[mid] >= nums1[i]) {
        res = res > mid - i ? res : mid - i;
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }
  }
  return res;
};
