/**
 * @param {number} n
 * @return {number}
 */

//先来个暴力解，
var arrangeCoins = function (n) {
  let num = 0;
  let i;
  for (i = 1; i <= n; i++) {
    num += i;
    if (num > n) {
      break;
    }
  }
  return i - 1;
};

// 二分查找，
// 数列等差公式：total = (k * （k+1))/ 2
// 通过二分查找，减少循环次数
var arrangeCoins = function (n) {
  let l = 1;
  let r = n;
  let result = 1;
  while (l <= r) {
    let mid = parseInt((r + l) / 2);
    if (mid * (mid + 1) <= n * 2) {
      result = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return result;
};
