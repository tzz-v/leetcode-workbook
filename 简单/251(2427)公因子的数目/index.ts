function commonFactors(a: number, b: number): number {
  const n = Math.min(a, b);
  let res = 0;
  for (let i = 1; i <= n; i++) {
    if (a % i === 0 && b % i === 0) res++;
  }
  return res;
}
