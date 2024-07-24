function sumZero(n: number): number[] {
  const res: number[] = [];
  if (n % 2 !== 0) {
    res.push(0);
    n--;
  }
  let val = -1;
  for (let i = 0; i < n; i += 2) {
    res.push(val, Math.abs(val));
    val--;
  }

  return res;
}
