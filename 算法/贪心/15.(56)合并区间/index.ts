// 思路：
// 先根据左边界给数组从小到大排个序。
// 维护左边界left和右边界right。
// 遍历intervals，当当前区间的左边界大于我的右边界时，说明有重叠，更新我的右边界为更大值。
// 反之则将【left，right】push进res里。

function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);
  const res: number[][] = [];
  let [left, right] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= right) {
      right = Math.max(right, intervals[i][1]);
    } else {
      res.push([left, right]);
      [left, right] = intervals[i];
    }
  }
  res.push([left, right]);
  return res;
}
