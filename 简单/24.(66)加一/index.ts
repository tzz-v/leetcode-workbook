// 主要需要考虑数组项是数字 9 的情况；此时需要进位

function plusOne(digits: number[]): number[] {
  const len = digits.length;

  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++;
      return digits;
    }
    digits[i] = 0;
  }
  digits.unshift(1);
  return digits;
}
