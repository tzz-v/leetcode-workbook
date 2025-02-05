function isSameAfterReversals(num: number): boolean {
  const str = num.toString();
  return num === 0 || str[str.length - 1] !== '0';
};