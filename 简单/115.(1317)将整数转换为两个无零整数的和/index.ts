function getNoZeroIntegers(n: number): number[] {
  for (let i = 0; i < n; i++) {
    if (!containsZero(i) && !containsZero(n - i)) {
      return [i, n - i];
    }
  }
}

const containsZero = (num: number) => {
  return `${num}`.includes('0');
};
