function totalMoney(n: number): number {
  let res = 0;
  for (let i = 1; i <= n; i++) {
      const weeks = Math.ceil(i / 7);
      const days = (i - 1) % 7;
      res += weeks + days;
  }
  return res;
};