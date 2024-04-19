/**
 * @param {string} s
 * @return {string}
 */
// 使用栈
// 遍历每个字符，如果当前字符与栈的最后一项相等，就移除栈的最后一项；反之则将其add到栈中；
var removeDuplicates = function (s) {
  const arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === arr[arr.length - 1]) {
      arr.pop();
    } else {
      arr.push(s[i]);
    }
  }
  return arr.join('');
};
