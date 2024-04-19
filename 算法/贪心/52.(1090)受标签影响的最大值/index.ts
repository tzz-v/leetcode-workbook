function largestValsFromLabels(
  values: number[],
  labels: number[],
  numWanted: number,
  useLimit: number
): number {
  const countMap = new Map<number, number>();
  const idx = new Array(values.length).fill(0).map((_, i) => i);
  idx.sort((a, b) => values[b] - values[a]);

  let res = 0;
  for (let i = 0; i < idx.length && numWanted > 0; i++) {
    const count = countMap.get(labels[idx[i]]) ?? 0;
    if (count < useLimit) {
      res += values[idx[i]];
      countMap.set(labels[idx[i]], count + 1);
      numWanted--;
    }
  }
  return res;
}
