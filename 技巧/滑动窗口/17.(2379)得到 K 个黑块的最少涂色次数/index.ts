// 维护一个长度为k的滑动窗口，并统计窗口内‘W’的个数。
// 向右滑动，寻找最小个数的窗口。

function minimumRecolors(blocks: string, k: number): number {
  let count = 0;
  let i = 0;

  for (let j = 0; j < k; j++) {
    if (blocks[j] === 'W') count++;
  }
  let res = count;
  for (let j = k; j < blocks.length; j++) {
    if (blocks[i] === 'W') count--;
    if (blocks[j] === 'W') count++;
    i++;
    res = Math.min(res, count);
  }
  return res;
}
