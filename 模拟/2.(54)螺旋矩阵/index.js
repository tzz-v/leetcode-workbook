/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

// 和上一题思路类似；
// 需要注意m 或n等于1的情况；
// 需要注意loop等于0时，中心行或列需单独push
var spiralOrder = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let loop = Math.floor(Math.min(m, n) / 2);
  let x = 0;
  let y = 0;
  let offset = 1;
  const res = [];
  if (m === 1 || n === 1) {
    return matrix.flat();
  }
  while (loop--) {
    let row = x;
    let col = y;
    for (; col < x + n - offset; col++) {
      res.push(matrix[row][col]);
    }
    for (; row < y + m - offset; row++) {
      res.push(matrix[row][col]);
    }
    for (; col > y; col--) {
      res.push(matrix[row][col]);
    }
    for (; row > x; row--) {
      res.push(matrix[row][col]);
    }
    x++;
    y++;
    if (loop === 0 && (m % 2 !== 0 || n % 2 !== 0)) {
      if (m < n) {
        while (res.length < m * n) {
          res.push(matrix[x][y]);
          y++;
        }
      } else {
        while (res.length < m * n) {
          res.push(matrix[x][y]);
          x++;
        }
      }
    }
    offset += 2;
  }
  return res;
};
