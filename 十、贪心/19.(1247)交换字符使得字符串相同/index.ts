// 思路：
// 遍历字符串，总结字符串不同字符情况的数量 “xy”（s1[i]为‘x',s2[i]为y）或“yx”的数量(s1[i]为‘y',s2[i]为x)
// 总结规律发现：
// - 只需移动一次，可以抵消两个“xy”。
// - 同理，只需移动一次，可以抵消两个“yx”。
// 需要移动两次，可以抵消一个“xy”和一个“yx“

// 所以，我们应尽可能的采用第一种方式使它们自我抵消。
// 最后有可能各自剩一个，采用第二种方式。

// 注：抵消都是两个两个的消，如果存在变化数量为奇数的情况，说明没有办法使两个字符串相等，应返回-1

function minimumSwap(s1: string, s2: string): number {
  const len = s1.length;

  let xy = 0;
  let yx = 0;
  for (let i = 0; i < len; i++) {
    if (s1[i] === s2[i]) continue;
    if (s1[i] === 'x') {
      xy++;
    } else {
      yx++;
    }
  }
  if ((xy + yx) % 2 === 1) return -1;
  return Math.floor(xy / 2) + Math.floor(yx / 2) + (xy % 2) * 2;
}
