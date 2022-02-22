/**
 * @param {number} num
 * @return {boolean}
 */

//  这个题和上一题没有什么区别。将最后一步改为 return val * val === num 就能解决。或者：
var isPerfectSquare = function (num) {
  let left = 0;
  let right = num;

  while (left <= right) {
    const middle = parseInt((left + right) / 2);
    if (middle * middle === num) {
      return true;
    }
    if (middle * middle < num) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return false;
};
