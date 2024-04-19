// 思路
// 同上一题类似，只是集合被固定到了1～9;
function combinationSum3(k: number, n: number): number[][] {
  const res: number[][] = [];

  const func = (i: number, arr: number[]) => {
    const num = arr.reduce((prev, cur) => prev + cur);
    if (num > n) return;
    if (arr.length === k) {
      if (num === n) {
        res.push(arr.slice());
      }
      return;
    }
    for (i; i - arr.length <= 9 - k + 1; i++) {
      arr.push(i);
      func(i + 1, arr);
      arr.pop();
    }
  };
  func(1, []);
  return res;
}
