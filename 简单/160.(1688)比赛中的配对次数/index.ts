function numberOfMatches(n: number): number {
  let res = 0;
  while (n > 1) {
      const flag = n / 2;
      res += Math.floor(flag);
      n = Math.ceil(flag)
  }
  return res;
};