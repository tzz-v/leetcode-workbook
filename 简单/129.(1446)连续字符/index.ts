function maxPower(s: string): number {
  let res = 1;

  let cur = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      cur++;
    } else {
      res = Math.max(cur, res);
      cur = 1;
    }
  }
  return Math.max(res, cur);
}
