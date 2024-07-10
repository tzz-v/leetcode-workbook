function minimumAbsDifference(arr: number[]): number[][] {
  let res: number[][] = [];
  arr.sort((a, b) => a - b);

  arr.forEach((item, i) => {
    if (i === 0) return;
    if (res.length === 0) {
      res.push([arr[i - 1], item]);
      return;
    }
    const diffValue = res[0][1] - res[0][0];
    const currentDiffValue = item - arr[i - 1];
    if (currentDiffValue > diffValue) return;
    if (currentDiffValue < diffValue) res = [];
    res.push([arr[i - 1], item]);
  });
  return res;
}
