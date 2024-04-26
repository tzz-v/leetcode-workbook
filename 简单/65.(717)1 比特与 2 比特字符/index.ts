// 存在一个数组，由以下三个组合组成‘0’、‘10’、 ‘11’。要求数组最后一个组合是‘0’

function isOneBitCharacter(bits: number[]): boolean {
  let i = 0;
  for (i; i < bits.length; i++) {
    if (bits[i] === 1) {
      if (i === bits.length - 2) return false;
      i++;
    }
  }
  return true;
}
