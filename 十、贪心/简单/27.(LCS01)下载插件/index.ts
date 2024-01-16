// 一次升级 + 一次下载 和 两次下载 所消耗的时间和下载插件的数量是相等的。
// 但升级操作会影响之后的下载。

// 因此可以一直升级直到一次就能下载所有插件，所消耗的操作次数最少。
function leastMinutes(n: number): number {
  let p = 1;
  let res = 0;
  while (p < n) {
    p *= 2;
    res++;
  }
  return res + 1;
}
