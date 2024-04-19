// 根据题意，求元素-1到元素1的最大区间。
// 遍历数组，使用双指针，维护当前的元素1下标位置 start 和元素-1下标位置 end;

// 遇到元素1则更新start下标，并查看start下标前面是否存在可达的end下标；
//   存在则获取区间距离；此时，存在的end下标已经没用了，将end元素下标置空

// 遇到元素-1则更新元素end下标，并查看元素end前面是否存在可达的start下标；
//   存在则获取区间距离；此时，存在的start下标已经没用了，将start元素下标置空；

// 遇到元素0跳过。
function captureForts(forts: number[]): number {
  let res = 0;
  let start: number | undefined;
  let end: number | undefined;
  for (const i in forts) {
    if (forts[i] === 1) {
      start = Number(i);
      if (end !== undefined) {
        res = Math.max(res, start - end - 1);
        end = undefined;
      }
    } else if (forts[i] === -1) {
      end = Number(i);
      if (start !== undefined) {
        res = Math.max(res, end - start - 1);
        start = undefined;
      }
    }
  }
  return res;
}
