// 取矩阵最小值 matrix[0][0]和最大值[len - 1][len - 1];
// 根据这两个值进行二分查找，统计<=中间值的数量。

// 怎么确保找到的中间值在矩阵中：找到符合题意的中间值后，会继续二分，将这个中间值进行更小化至矩阵中存在。

// 时间复杂度O(nlog(r-l))
function kthSmallest(matrix: number[][], k: number): number {
  const len = matrix.length;
  let l = matrix[0][0];
  let r = matrix[len - 1][len - 1];

  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const count = check(matrix, mid);
    if (count < k) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return l;
}

const check = (matrix: number[][], k: number) => {
  let len = matrix.length;
  let res = 0;
  let x = len - 1;
  let y = 0;
  while (x >= 0 && y < len) {
    if (matrix[x][y] <= k) {
      res += x + 1;
      y++;
    } else {
      x--;
    }
  }
  return res;
};
