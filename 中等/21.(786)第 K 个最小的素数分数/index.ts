// 根据数组生成一个新数组，
// 对新数组排序后找第k个。
function kthSmallestPrimeFraction(arr: number[], k: number): number[] {
  const res: [number, number][] = [];

  arr.forEach((val, i) => {
    for (let j = i + 1; j < arr.length; j++) {
      res.push([val, arr[j]]);
    }
  });
  res.sort((a, b) => a[0] / a[1] - b[0] / b[1]);
  return res[k - 1];
}
