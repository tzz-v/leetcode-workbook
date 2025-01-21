function findEvenNumbers(digits: number[]): number[] {
  digits.sort();
  const set = new Set<number>();
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] === 0) continue;
    for (let j = 0; j < digits.length; j++) {
      if (j === i) continue;
      for (let k = 0; k < digits.length; k++) {
        if (k === i || k == j) continue;
        if (digits[k] % 2 !== 0) continue;
        set.add(Number(`${digits[i]}${digits[j]}${digits[k]}`));
      }
    }
  }
  return Array.from(set.values());
}
