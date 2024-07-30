function arrayRankTransform(arr: number[]): number[] {
  const sortArr = Array.from(new Set(arr)).sort((a, b) => a - b);

  const map = new Map<number, number>();
  sortArr.forEach((val, index) => {
    map.set(val, index + 1);
  });

  return arr.map((val) => map.get(val) ?? 0);
}
