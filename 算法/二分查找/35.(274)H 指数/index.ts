// 使用二分查找
// 时间复杂度为O（nlgn）

function hIndex(citations: number[]): number {
  let l = 0;
  let r = citations.length;
  while (l < r) {
    const mid = Math.floor((l + r + 1) / 2);
    const count = citations.reduce(
      (prev, cur) => prev + (cur >= mid ? 1 : 0),
      0
    );
    if (count >= mid) {
      l = mid;
    } else {
      r = mid - 1;
    }
  }
  return l;
}
