function countLargestGroup(n: number): number {
  const arr: number[][] = [];

  for (let i = 1; i <= n; i++) {
    const count = `${i}`
      .split('')
      .reduce((prev, cur) => Number(prev) + Number(cur), 0);
    if (!arr[count - 1]) arr[count - 1] = [];
    arr[count - 1].push(i);
  }
  const max = Math.max(...arr.map((item) => item.length));
  return arr.filter((item) => item.length === max).length;
}
