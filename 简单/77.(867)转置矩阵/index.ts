function transpose(matrix: number[][]): number[][] {
  const row = matrix.length;
  const col = matrix[0].length;
  const max = Math.max(row, col);

  for (let i = 0; i < max; i++) {
    for (let j = i + 1; j < max; j++) {
      if (!matrix[j]) {
        matrix[j] = [];
      }
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  return matrix
    .map((rows) => {
      return rows.filter((item) => item !== undefined);
    })
    .filter((rows) => rows.length);
}
