// 在符合题意的情况下，尽可能的往数组左侧靠。
// 使用二分查找，符合要求则记录更大值，并继续查找。

function hIndex(citations: number[]): number {
  let l = 0;
  let r = citations.length - 1;
  let res = 0;
  while (l <= r) {
    const mid = Math.floor((l + r) / 2);
    const count = citations.length - mid;
    if (citations[mid] >= count) {
      res = Math.max(count, res);
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return res;
}
