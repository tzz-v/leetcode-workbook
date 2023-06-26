// 和上一题相反，通过字母求数字；
// 从后向前遍历，基数为26的n - 1次方（n表示当前位数）

function titleToNumber(columnTitle: string): number {
  let res = 0;
  const initCode = 'A'.charCodeAt(0) - 1;
  let baseNumber = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    res += (columnTitle.charCodeAt(i) - initCode) * Math.pow(26, baseNumber);
    baseNumber++;
  }
  return res;
}
