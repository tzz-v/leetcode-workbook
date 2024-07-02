function tribonacci(n: number): number {
  const arr = [0, 1, 1];
  if (n < 3) return arr[n];
  for (let i = 3; i <= n; i++) {
    const val = arr[0] + arr[1] + arr[2];
    arr[0] = arr[1];
    arr[1] = arr[2];
    arr[2] = val;
  }
  return arr[2];
}
