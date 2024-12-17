function countTriples(n: number): number {
  let res = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = i + 1; j <= n; j++) {
      const c = Math.sqrt(i * i + j * j);
      if (c > n) break;
      if (!Number.isInteger(c)) continue;
      if (c <= n) res += 2;
    }
  }

  return res;
}
