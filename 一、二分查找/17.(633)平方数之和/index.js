/**
 * @param {number} c
 * @return {boolean}
 */

// for循环+二分查找；
// 先使用for循环固定一个数，再找另一个数；
// 时间复杂度为O(n^1/2logn)
var judgeSquareSum = function (c) {
  if (c === 1) return true;
  for (let i = 0; i * i <= c; i++) {
    let l = i;
    let r = c / 2;
    while (l <= r) {
      const mid = parseInt((l + r) / 2);
      const num = i * i + mid * mid;
      if (num === c) return true;
      if (num > c) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
  }
  return false;
};

// 双指针
// 平方和大于c时r--;
// 平方和小于c时l++;
// 时间复杂度为O(n*1/2)
var judgeSquareSum = function (c) {
  let l = 0;
  let r = Math.floor(Math.sqrt(c));
  while (l <= r) {
    const num = l * l + r * r;
    if (num === c) return true;
    if (num < c) {
      l++;
    } else {
      r--;
    }
  }
  return false;
};
