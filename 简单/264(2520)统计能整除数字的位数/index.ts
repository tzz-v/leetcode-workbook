function countDigits(num: number): number {
  const str = `${num}`;

  let count = 0;
  for (const s of str) {
    if (num % Number(s) === 0) count++;
  }
  return count;
}
