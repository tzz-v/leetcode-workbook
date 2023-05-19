function filter(arr: number[], fn: (n: number, i: number) => any): number[] {
  const res: number[] = [];
  arr.forEach((item, i) => {
    if (fn(item, i)) res.push(item);
  });
  return res;
}
