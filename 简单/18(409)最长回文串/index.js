/**
 * @param {string} s
 * @return {number}
 */

// 最长回文串 = n对相同字符 + (0 / 1)个单字符;
// 可以遍历字符s，把成对出现的字符移除掉，剩余的字符 - 1 （回文串可以有一个单字符）便是不能组成回文串的字符数量。
var longestPalindrome = function (s) {
  const arr = new Set();
  for (let i = 0; i < s.length; i++) {
    if (arr.has(s[i])) {
      arr.delete(s[i]);
    } else {
      arr.add(s[i]);
    }
  }
  if (arr.size === 0) {
    return s.length;
  }
  return s.length - arr.size + 1;
};
