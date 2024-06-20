function allCellsDistOrder(
  rows: number,
  cols: number,
  rCenter: number,
  cCenter: number
): number[][] {
  const arr: number[][] = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      arr.push([i, j]);
    }
  }
  return arr.sort(
    (a, b) =>
      Math.abs(a[0] - rCenter) +
      Math.abs(a[1] - cCenter) -
      Math.abs(b[0] - rCenter) -
      Math.abs(b[1] - cCenter)
  );
}
