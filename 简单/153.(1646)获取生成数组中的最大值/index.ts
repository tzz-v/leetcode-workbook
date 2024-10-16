function getMaximumGenerated(n: number): number {
  if (n === 0) return 0;
  const arr = new Array(n + 1);
  let res = 1;

  arr[0] = 0;
  arr[1] = 1;

  for (let i = 1; i < n / 2; i++) {
    arr[i * 2] = arr[i];
    arr[i * 2 + 1] = arr[i] + arr[i + 1];
    res = Math.max(res, arr[i * 2 + 1]);
  }

  return res;
}
