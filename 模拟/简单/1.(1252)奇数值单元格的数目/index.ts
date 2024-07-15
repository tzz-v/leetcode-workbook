function oddCells(m: number, n: number, indices: number[][]): number {
  const mArr = new Array(m).fill(0);
  const nArr = new Array(n).fill(0);
  indices.forEach(([x, y]) => {
    mArr[x]++;
    nArr[y]++;
  });

  let res = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const val = mArr[i] + nArr[j];
      if (val % 2 !== 0) res++;
    }
  }
  return res;
}
