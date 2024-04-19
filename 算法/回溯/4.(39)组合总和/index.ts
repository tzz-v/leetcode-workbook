// 思路：
// 跟前面的题大同小异，不过对集合的长度没有要求，但是有一个总和的限制。
function combinationSum(candidates: number[], target: number): number[][] {
  const res: number[][] = [];
  const func = (i: number, arr: number[]) => {
    const sum = arr.reduce((prev, cur) => prev + cur, 0);
    if (sum > target) {
      return;
    } else if (sum === target) {
      res.push(arr.slice());
      return;
    }
    for (i; i < candidates.length; i++) {
      arr.push(candidates[i]);
      func(i, arr);
      arr.pop();
    }
  };
  func(0, []);
  return res;
}
