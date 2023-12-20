// 最远的距离是最左端到最右端。
// 从左边记录最大距离，从右边在记录一个最大距离，两个距离取最大
function maxDistance(colors: number[]): number {
  const len = colors.length;
  let i = len - 1;
  let res = 1;
  while (i > 0) {
    if (colors[0] === colors[i]) {
      i--;
      continue;
    }
    res = Math.max(res, i - 0);
    break;
  }
  i = 0;
  while (i < len - 1) {
    if (colors[i] === colors[len - 1]) {
      i++;
      continue;
    }
    res = Math.max(res, len - i - 1);
    break;
  }
  return res;
}
