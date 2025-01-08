function construct2DArray(
  original: number[],
  m: number,
  n: number
): number[][] {
  if (m * n !== original.length) return [];

  const res = new Array(m).fill(0).map((_) => new Array(n).fill(0));

  for (let i = 0; i < original.length; i++) {
    const x = Math.floor(i / n);
    const y = i % n;

    res[x][y] = original[i];
  }
  return res;
}
