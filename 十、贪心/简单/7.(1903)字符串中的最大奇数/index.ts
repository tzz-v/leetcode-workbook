function largestOddNumber(num: string): string {
  for (let i = num.length - 1; i >= 0; i--) {
    if (Number(num[i]) % 2 !== 0) return num.slice(0, i + 1);
  }
  return '';
}
