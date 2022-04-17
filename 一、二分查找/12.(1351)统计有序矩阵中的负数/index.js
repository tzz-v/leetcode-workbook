/**
 * @param {number[][]} grid
 * @return {number}
 */

// 和上一题思路一致，遍历每一项，使用二分查找得到每一行负数的个数；
var countNegatives = function (grid) {
  let result = 0;
  grid.forEach((arr) => {
    let l = 0;
    let r = arr.length;
    let num = 0;
    while (l <= r) {
      const mid = parseInt((l + r) / 2);
      if (arr[mid] >= 0) {
        l = mid + 1;
      } else {
        num = arr.length - mid;
        r = mid - 1;
      }
    }
    result += num;
  });
  return result;
};
