function trimMean(arr: number[]): number {
  const len = arr.length;
  const i = len * 0.05;
  arr.sort((a, b) => a - b);

  return (
    arr.reduce((prev, cur, idx) => {
      if (idx < i || idx >= len - i) return prev;
      return prev + cur;
    }, 0) /
    (len * 0.9)
  );
}
