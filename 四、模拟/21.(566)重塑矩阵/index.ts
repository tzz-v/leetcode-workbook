function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  if (mat.length * mat[0].length !== r * c) {
    return mat;
  }

  let row = 0;
  let col = 0;
  const res = new Array(r).fill('').map(() => new Array(c));
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      res[i][j] = mat[row][col++];
      if (col === mat[0].length) {
        row++;
        col = 0;
      }
    }
  }
  return res;
}
