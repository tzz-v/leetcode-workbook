function evenOddBit(n: number): number[] {
  let isEven = true;
  const arr = [0, 0];

  while (n >= 1) {
    const val = n % 2;
    if (val === 1) {
      if (isEven) {
        arr[0]++;
      } else {
        arr[1]++;
      }
    }
    isEven = !isEven;
    if (n === 1) break;
    n = Math.floor(n / 2);
  }
  return arr;
}
