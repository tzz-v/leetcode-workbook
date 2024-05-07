function isToeplitzMatrix(matrix: number[][]): boolean {
  const rowLen = matrix.length;
  for (let i = 1; i < rowLen; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false;
      }
    }
  }
  return true;
}
