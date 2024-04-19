/**
 * @param {string} s
 * @return {boolean}
 */

// 先统一大小写；
// 创建前后两个指针，往中间移动的同时进行比较，全部相等则说明字符串是回文串；
// 处理边界问题，加个正则，判断当前指针不是字母或数字则跳到下一项并跳过本次比较；
// 当l >= r 的时候跳出循环
var isPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;
  const reg = /[0-9a-z]/;
  const newStr = s.toLocaleLowerCase();
  while (l < r) {
    if (!reg.test(newStr[l])) {
      l++;
      continue;
    }
    if (!reg.test(newStr[r])) {
      r--;
      continue;
    }
    if (newStr[l] === newStr[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }
  return true;
};
