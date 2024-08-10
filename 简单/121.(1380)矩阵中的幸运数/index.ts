function luckyNumbers(matrix: number[][]): number[] {
  const rowMins = matrix.map((row) => Math.min(...row));
  const colMaxs: number[] = [];
  for (let i = 0; i < matrix[0].length; i++) {
    colMaxs.push(Math.max(...matrix.map((row) => row[i])));
  }

  return rowMins.filter((val) => colMaxs.includes(val));
}
