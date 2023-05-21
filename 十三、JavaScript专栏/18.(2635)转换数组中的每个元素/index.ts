function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  const res: number[] = [];
  arr.forEach((item, i) => {
    res.push(fn(item, i));
  });
  return res;
}
