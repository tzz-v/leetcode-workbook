declare global {
  interface Array<T> {
    snail(rowsCount: number, colsCount: number): number[][];
  }
}

Array.prototype.snail = function (
  rowsCount: number,
  colsCount: number
): number[][] {
  if (rowsCount * colsCount !== this.length) return [];
  let index = 0;
  const res = new Array(rowsCount)
    .fill(0)
    .map((_) => new Array(colsCount).fill(0));
  for (let i = 0; i < colsCount; i++) {
    if (i % 2 === 0) {
      for (let j = 0; j < rowsCount; j++) {
        res[j][i] = this[index];
        index++;
      }
    } else {
      for (let j = rowsCount - 1; j >= 0; j--) {
        res[j][i] = this[index];
        index++;
      }
    }
  }
  return res;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
