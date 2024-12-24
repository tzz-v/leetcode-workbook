function isThree(n: number): boolean {
  let count = 2;

  for (let i = 2; i < n; i++) {
    if (n % i !== 0) continue;
    count++;
    if (count > 3) return false;
    if (n / i !== i) return false;
  }

  return count === 3;
}
