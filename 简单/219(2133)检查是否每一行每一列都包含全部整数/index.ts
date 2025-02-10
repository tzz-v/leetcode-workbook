function checkValid(matrix: number[][]): boolean {
  const n = matrix.length;
  const row = new Array(n + 1).fill(0);
  const col = new Array(n + 1).fill(0);

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
          row[matrix[i][j]]++;
      }
      if (row.some((val, idx) => idx !== 0 && val !== i + 1)) {
          return false;
      }
  }
  for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
          col[matrix[i][j]]++;
      }
      if (col.some((val, idx) => idx !== 0 && val !== j + 1)) {
          return false;
      }
  }
  return true;
}; 