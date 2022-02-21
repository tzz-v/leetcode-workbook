/**
 * @param {number} x
 * @return {number}
 */

// 从0到x依次遍历一个个求平方，总能找到这个mySqrt这个值；
// 因为从0到x是有顺序的，我们可以使用二分法，从中间开始找，将时间复杂度降到log(n)
var mySqrt = function (x) {
  let left = 0;
  let right = x;
  let val = -1;
  while (left <= right) {
    let middle = parseInt((right + left) / 2);
    if (middle * middle < x) {
      val = middle;
      left = middle + 1;
    }
    if (middle * middle > x) {
      right = middle - 1;
    }
    if (middle * middle === x) {
      return middle;
    }
  }
  return val;
};
