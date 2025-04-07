// 遍历字符串，维护‘｜’的开闭，统计*在一对｜之外的数量
function countAsterisks(s: string): number {
  let end = true;
  let res = 0;
  for (const str of s) {
    if (str === '|') {
      end = !end;
      continue;
    }
    if (end === true && str === '*') {
      res++;
    }
  }
  return res;
}
