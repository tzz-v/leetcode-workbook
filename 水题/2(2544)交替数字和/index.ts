function alternateDigitSum(n: number): number {
  return `${n}`.split('').reduce((prev, cur, idx) => {
    if (idx % 2 === 0) {
      return prev + Number(cur);
    }
    return prev - Number(cur);
  }, 0);
}
