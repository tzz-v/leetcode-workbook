/**
 * @param {number} num
 * @return {number}
 */

// 模拟各个位数相加的过程；
// 使用递归，重复模拟，直到num为单数时return；
var addDigits = function (num) {
  if (num < 10) return num;
  let res = 0;
  while (num !== 0) {
    res += num % 10;
    num = Math.floor(num / 10);
  }
  return addDigits(res);
};
