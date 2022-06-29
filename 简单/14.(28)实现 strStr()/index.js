/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// 暴力解， 让haystack每个字符与needle进行匹配，
var strStr = function (haystack, needle) {
  if (needle === '') return 0;
  for (let i = 0; i < haystack.length; i++) {
    let l = i;
    let r = 0;
    while (haystack[l] === needle[r] && r < needle.length) {
      l++;
      r++;
    }
    if (r === needle.length) return i;
  }
  return -1;
};
