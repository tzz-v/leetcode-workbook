// 遍历字符串，根据它们的位置(1-numRows)生成拼接成新的字符串；

function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  const arr = new Array(numRows).fill('');
  let cur = 1;
  let isPlus = true;
  for (let i = 0; i < s.length; i++) {
    arr[cur - 1] += s[i];
    if (cur === 1) isPlus = true;
    if (cur === numRows) isPlus = false;
    isPlus ? cur++ : cur--;
  }
  return arr.join('');
}
