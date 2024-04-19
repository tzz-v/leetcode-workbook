// 思路：
// 每个数字代表的是不同集合，也就是求不同集合之间的组合
// numberIndex：代表当前按键按的数字。
// chart：当前按键表示的字符集。

// 单层逻辑：遍历当前按键的字符集，push进数组里，在递归下一个按键的字符集。。。直至按至最后一个键，此时得到一个集合，存入res数组
// 回溯切除最后一个元素。处理最后一层所有元素，返回上一层。

function letterCombinations(digits: string): string[] {
  if (digits === '') return [];
  const charts = digits
    .split('')
    .map((key) => map[key])
    .filter((item) => item !== '');
  const res: string[] = [];
  const func = (numberIndex: number, arr: string[]) => {
    if (arr.length === charts.length) {
      res.push(arr.join(''));
      return;
    }
    const chart = charts[numberIndex];
    for (let i = 0; i < chart.length; i++) {
      arr.push(chart[i]);
      func(numberIndex + 1, arr);
      arr.pop();
    }
  };
  func(0, []);
  return res;
}
const map = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
