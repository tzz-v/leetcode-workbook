// 建立一个数值-符号的列表。
// 不断寻找不超过num的最大值并减去这个最大值。直至num = 0；
// 过程中将相应的符号拼接到res中。

function intToRoman(num: number): string {
  const valueSymbols: Array<[number, string]> = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];

  let res = '';
  for (let i = 0; i < valueSymbols.length; i++) {
    if (num >= valueSymbols[i][0]) {
      res += valueSymbols[i][1];
      num -= valueSymbols[i][0];
      i--;
    }
  }
  return res;
}
