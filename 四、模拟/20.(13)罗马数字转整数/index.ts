// 同上一题
// 建立一个符号-数值的列表。
// 不断寻找最大的符号并将其裁剪。直至s裁完；
// 裁剪前将相应的数值累加到res中。
function romanToInt(s: string): number {
  const valueSymbols: Array<[string, number]> = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ];
  let res = 0;
  let i = 0;
  while (i < valueSymbols.length && !!s) {
    if (s.startsWith(valueSymbols[i][0])) {
      res += valueSymbols[i][1];
      s = s.slice(valueSymbols[i][0].length);
    } else {
      i++;
    }
  }
  return res;
}
