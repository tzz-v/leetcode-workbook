// dp数组为二维数组，
// 在当前位置的上、左、左上位置都有值的时候，取最小值加一。
// 维护最大的正方形边长，最后返回其乘积

function maximalSquare(matrix: string[][]): number {
  let res = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === '0') continue;
      const left = matrix[i - 1]?.[j];
      const top = matrix[i]?.[j - 1];
      const leftTop = matrix[i - 1]?.[j - 1];
      if (
        left &&
        left !== '0' &&
        top &&
        top !== '0' &&
        leftTop &&
        leftTop !== '0'
      ) {
        matrix[i][j] =
          `${Math.min(Number(left), Number(top), Number(leftTop)) + 1}`;
      }
      res = Math.max(res, Number(matrix[i][j]));
    }
  }
  return res * res;
}
