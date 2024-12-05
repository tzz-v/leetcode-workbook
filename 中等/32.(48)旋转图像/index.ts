/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  const len = matrix.length;
  const n = Math.floor(len / 2);
  for (let i = 0; i < n; i++) {
    const last = len - 1 - i;
    for (let j = i; j < last; j++) {
      const temp = matrix[i][j];
      const [x1, y1] = getCoordinate(len, i, j);
      matrix[i][j] = matrix[x1][y1];
      const [x2, y2] = getCoordinate(len, x1, y1);
      matrix[x1][y1] = matrix[x2][y2];
      const [x3, y3] = getCoordinate(len, x2, y2);
      matrix[x2][y2] = matrix[x3][y3];
      matrix[x3][y3] = temp;
    }
  }
}

const getCoordinate = (width: number, x: number, y: number) => {
  const interval = width - y;
  let newX = width - 1 - y;
  let newY = x;
  return [newX, newY];
};
