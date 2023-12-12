// 思路：
// 先给饼干和胃口排个序，
// 让小胃口的尽可能吃小饼干。以满足更多的人。

function findContentChildren(g: number[], s: number[]): number {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let index = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] >= g[index]) {
      index++;
    }
  }
  return index;
}
