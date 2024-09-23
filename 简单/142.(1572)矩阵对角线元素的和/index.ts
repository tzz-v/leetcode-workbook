function diagonalSum(mat: number[][]): number {
  const n = mat.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += mat[i][i];
    sum += mat[i][n - 1 - i];
  }
  if (n % 2 !== 0) {
    const i = Math.floor(n / 2);
    sum -= mat[i][i];
  }
  return sum;
}
