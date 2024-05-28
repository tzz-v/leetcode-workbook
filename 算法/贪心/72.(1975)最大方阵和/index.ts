// 矩阵中任意两个负数，都可以经过一系列操作，在不影响其他元素的情况，都变成正数；
// 矩阵中任意一个负数一个正数，都可以经过一系列操作，在不影响其他元素的情况，符号互换；
// 结论：矩阵中负数数量为偶数时，矩阵最大值为矩阵所有值的绝对值相加。
// 结论：矩阵中负数数量为奇数时，矩阵最大值为矩阵所有值的绝对值相加， 然后减掉一个（最小绝对值 * 2）。

function maxMatrixSum(matrix: number[][]): number {
  let negativeCounts = 0;
  let min = Infinity;
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const val = matrix[i][j];
      sum += Math.abs(val);
      min = Math.min(min, Math.abs(val));
      if (val < 0) {
        negativeCounts++;
      }
    }
  }
  if (negativeCounts % 2 === 0) {
    return sum;
  }

  return sum - min - min;
}
