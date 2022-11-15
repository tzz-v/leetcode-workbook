// 思路：
// 先拿到每个元素最后一次出现的位置，
// 遍历字符串 s 维护一个左边界left和右边界right，当右边界right === i时说明【left，right】区间内的元素符合题意，
// 重置左边界为当前下标+1，继续遍历。直至结束。

function partitionLabels(s: string): number[] {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }
  let left = 0;
  let right = 0;
  const res: number[] = [];
  for (let i = 0; i < s.length; i++) {
    right = Math.max(right, map.get(s[i]));
    if (right === i) {
      res.push(right - left + 1);
      left = i + 1;
    }
  }
  return res;
}
