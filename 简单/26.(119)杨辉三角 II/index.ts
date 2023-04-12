function getRow(rowIndex: number): number[] {
  const res = new Array(rowIndex + 1).fill(0);
  res[0] = 1;
  for (let i = 0; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      res[j] += res[j - 1] ?? 0;
    }
  }
  return res;
}
