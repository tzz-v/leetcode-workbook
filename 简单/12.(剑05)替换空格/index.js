/**
 * @param {string} s
 * @return {string}
 */

// 直接暴力解吧，遍历字符串一一push到数组arr里，遇到空格则push（'%20'）
// 最后转回字符串后返回；
var replaceSpace = function (s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') {
      arr.push('%20');
    } else {
      arr.push(s[i]);
    }
  }
  return arr.join('');
};
