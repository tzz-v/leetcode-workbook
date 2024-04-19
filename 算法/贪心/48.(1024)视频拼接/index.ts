// 维护一个新数组，表示可以从当前下标能移动的时间。
// 遍历新数组，使用三指针，next走的最快，cur其次，i走的最慢。
// 其中，cur表示当前步骤能走的最长时间。next则是下一步走的最长时间

function videoStitching(clips: number[][], time: number): number {
  const nums = new Array(time).fill(0);

  clips.forEach(([start, end]) => {
    if (start < time) {
      nums[start] = Math.max(nums[start], end - start);
    }
  });

  let res = 0;
  let cur = 0;
  let next = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > cur) return -1;
    next = Math.max(next, i + nums[i]);
    if (i === cur) {
      cur = next;
      res++;
    }
  }
  return cur >= time ? res : -1;
}
