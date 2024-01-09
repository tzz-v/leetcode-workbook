function maximumOddBinaryNumber(s: string): string {
  const arr = s.split('');
  arr.sort((a, b) => Number(b) - Number(a));
  arr.push(arr.shift());
  return arr.join('');
}
