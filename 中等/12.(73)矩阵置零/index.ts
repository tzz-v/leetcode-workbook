/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const colZero: boolean[] = [];

  matrix.forEach((row, rowIndex) => {
    const isRowZero = row.some((val) => Object.is(val, 0));
    row.forEach((val, colIndex) => {
      if (val === 0) return;
      if (colZero[colIndex] === undefined) {
        colZero[colIndex] = matrix.some((row) => Object.is(row[colIndex], 0));
      }
      if (isRowZero || colZero[colIndex]) {
        matrix[rowIndex][colIndex] = -0;
      }
    });
  });
}
