function sumOddLengthSubarrays(arr: number[]): number {
  const n = arr.length;
  let sum = arr.reduce((pre, cur) => pre + cur);
  let res = sum;
  let count = 3;

  while (count <= n) {
    res += sum * count;
    for (let i = 0; i < count - 1; i++) {
      if (i + count <= n) {
        res -= arr[i] * (count - i - 1);
      } else {
        res -= arr[i] * (count - 1 - (n - count));
      }
    }
    for (let i = 0; i < count - 1; i++) {
      const idx = n - 1 - i;
      if (idx < count - 1) break;
      res -= arr[idx] * (count - i - 1);
    }
    count += 2;
  }
  return res;
}
