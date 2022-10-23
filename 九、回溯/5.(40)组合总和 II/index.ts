// 思路：
// 同上一题， 不过要注意不能出现相同集合。
//先给candidates排序。出现相同数字开头的直接跳过。

function combinationSum2(candidates: number[], target: number): number[][] {
  candidates.sort((a, b) => a - b);
  const res: number[][] = [];
  const func = (i: number, arr: number[]) => {
    const sum = arr.reduce((prev, cur) => prev + cur, 0);
    if (sum > target) {
      return;
    } else if (sum === target) {
      res.push(arr.slice());
      return;
    }
    for (let j = i; j < candidates.length; j++) {
      if (j > i && candidates[j] === candidates[j - 1]) {
        continue;
      }
      arr.push(candidates[j]);
      func(j + 1, arr);
      arr.pop();
    }
  };
  func(0, []);
  return res;
}
