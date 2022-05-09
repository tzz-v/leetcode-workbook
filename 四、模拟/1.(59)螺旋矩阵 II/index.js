/**
 * @param {number} n
 * @return {number[][]}
 */

// 找规律
// - 圈数loop：n / 2；想下取整；
//    - 右 ->下 ->左 ->上
// 每个方向填充个数：n - offset(offset初始为1，每一圈+2)；
// 每圈的x, y: 0,0,每圈加一；
// 最后就剩一个的时候填充最后一个值；
function generateMatrix(n) {
  let x = 0;
  let y = 0;
  const res = new Array(n).fill(1).map((item) => new Array(n).fill(1));
  let loop = Math.floor(n / 2);
  let val = 1;
  let offset = 1;
  while (loop--) {
    let row = x;
    let col = y;
    for (; col < y + n - offset; col++) {
      res[row][col] = val++;
    }
    for (; row < x + n - offset; row++) {
      res[row][col] = val++;
    }
    for (; col > y; col--) {
      res[row][col] = val++;
    }
    for (; row > x; row--) {
      res[row][col] = val++;
    }

    offset += 2;
    x++;
    y++;
    if (n % 2 !== 0) {
      let mid = Math.floor(n / 2);
      res[mid][mid] = val;
    }
  }
  return res;
}
