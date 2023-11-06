// 找到元素的右区间元素
// 右区间元素：右区间元素【0】大于当前元素【1】&& 最接近当前元素【1】
// 给数组进行排序，然后使用二分查找找到对应元素下标；
// 排序复杂度：O（nlogn）；二分查找复杂度：O（nlogn）；总时间复杂度：O（nlogn）
function findRightInterval(intervals: number[][]): number[] {
  const sortArr = intervals
    .map((item, index) => [item[0], index])
    .sort((a, b) => a[0] - b[0]);

  const res: number[] = [];
  intervals.forEach((item) => {
    let l = 0;
    let r = intervals.length - 1;
    let target = -1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (sortArr[mid][0] >= item[1]) {
        target = sortArr[mid][1];
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    res.push(target);
  });
  return res;
}
