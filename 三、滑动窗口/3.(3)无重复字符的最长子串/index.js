/**
 * @param {string} s
 * @return {number}
 */

// 创建一个动态长度的数据arr，让arr的数据始终保持连续且不重复；
// 长度变更时，比较存入更长的长度；
var lengthOfLongestSubstring = function (s) {
  if (s.length <= 1) {
    return s.length;
  }
  let res = 0;
  let r = 0;
  const arr = new Set();
  for (let i = 0; i < s.length; i++) {
    while (r < s.length) {
      if (!arr.has(s[r])) {
        arr.add(s[r]);
        r++;
      } else {
        break;
      }
    }
    res = res < arr.size ? arr.size : res;
    arr.delete(s[i]);
  }
  return res;
};
