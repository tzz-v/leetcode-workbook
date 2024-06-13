function bitwiseComplement(n: number): number {
  const val = n.toString(2);
  const newVal = val
    .split('')
    .map((str) => (str === '0' ? '1' : '0'))
    .join('');
  return parseInt(newVal, 2);
}
