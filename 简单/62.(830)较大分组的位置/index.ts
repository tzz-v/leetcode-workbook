// 一次遍历，维护不同字母首次出现的位置

function largeGroupPositions(s: string): number[][] {
  let index = 0;
  const res: number[][] = [];
  for (let i = 1; i < s.length; i++) {
    if (s[i] !== s[index]) {
      if (i - index >= 3) {
        res.push([index, i - 1]);
      }
      index = i;
    }
  }
  if (s.length - index >= 3) {
    res.push([index, s.length - 1]);
  }
  return res;
}
