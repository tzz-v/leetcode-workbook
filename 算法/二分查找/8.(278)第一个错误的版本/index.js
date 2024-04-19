/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

// 在有序数组中寻找元素，用二分查找，时间复杂度o(logn)；
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let result = n;
    let l = 0;
    let r = n - 1;
    while (l <= r) {
      const mid = parseInt((l + r) / 2);
      if (isBadVersion(mid)) {
        result = mid;
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return result;
  };
};
