// 思路：

// 可以按照右边界从小到大进行排序，然后对intervals进行筛选，先找出不重叠区间的最大个数。
// 最后相减得到要裁剪的长度。
// 右边界从小到大进行排序：优先选择右边界较小的，这样留给下一个区间的空间就会越大。
// 亦可以按照左边界从小到大排列，然后倒序遍历。同理这么做的目的是为了可以优先选择左边界较大的。

function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);
  let num = 1;
  console.log(intervals);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= intervals[i - 1][1]) {
      num++;
    } else {
      intervals[i][1] = Math.min(intervals[i][1], intervals[i - 1][1]);
    }
  }
  return intervals.length - num;
}
