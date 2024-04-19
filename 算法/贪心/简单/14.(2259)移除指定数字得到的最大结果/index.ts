//  找到第一个 下一位值大于digit的digit值的位置
function removeDigit(number: string, digit: string): string {
  let lastIndex;
  for (let i = 0; i < number.length; i++) {
    if (number[i] === digit) {
      lastIndex = i;
      if (digit < number[i + 1]) {
        break;
      }
    }
  }
  return number.slice(0, lastIndex) + number.slice(lastIndex + 1);
}
