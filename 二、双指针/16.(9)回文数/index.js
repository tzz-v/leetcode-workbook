/**
 * @param {number} x
 * @return {boolean}
 */

// 先转字符串，然后判断收尾是否相同
var isPalindrome = function (x) {
  const str = String(x);
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

// 不转字符串：
// 取到中间值，对比是否相等；
// 考虑边界，x小于0和x是整数的情况；
var isPalindrome = function (x) {
  if (x < 0) return false;
  if (x % 10 === 0 && x !== 0) return false;

  let num = 0;
  while (x > num) {
    num = num * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x === num || x === Math.floor(num / 10);
};
