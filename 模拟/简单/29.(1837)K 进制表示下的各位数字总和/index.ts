function sumBase(n: number, k: number): number {
  let res = 0;

  while (n >= k) {
      res += n % k;
      n = Math.floor(n / k);
  }
  res += n;
  return res;
};