// 主要考虑column【i】为1的情况即可，优先选择剩余值大的行即可。
// 最后判断 upper+lower是否等于colsum数组累加和
function reconstructMatrix(
  upper: number,
  lower: number,
  colsum: number[]
): number[][] {
  const arr: [number[], number[]] = [[], []];
  for (let i = 0; i < colsum.length; i++) {
    if (colsum[i] === 2) {
      arr[0][i] = 1;
      arr[1][i] = 1;
      upper--;
      lower--;
    } else if (colsum[i] === 0) {
      arr[0][i] = 0;
      arr[1][i] = 0;
    } else {
      if (upper > lower) {
        upper--;
        arr[0][i] = 1;
        arr[1][i] = 0;
      } else {
        lower--;
        arr[0][i] = 0;
        arr[1][i] = 1;
      }
    }
  }
  if (lower !== 0 || upper !== 0) return [];
  return arr;
}
