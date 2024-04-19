/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 把父字符串循环一遍，判断是否顺序包含子字符串
// 最后i=子字符串长度则返回true
var isSubsequence = function (s, t) {
  let i = 0;
  for (let j = 0; j < t.length; j++) {
    if (t[j] === s[i]) {
      i++;
    }
  }
  return i === s.length;
};
