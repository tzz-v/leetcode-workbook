// 根据题意，找到一个分割线，删除分割线左边的“b”元素，删除分割线右边的‘a’元素。求在哪处分割，使其删除元素的数量最小，并返回最小的删除数量。
// 遍历s，在每个下标都分割一次，并获取其要删除的数量。返回最小值。

function minimumDeletions(s: string): number {
  const slen = s.length;
  let minusA = s.split('').filter((key) => key === 'a').length ?? 0;
  let minusB = 0;
  let res = minusA + minusB;
  for (let i = 0; i < slen; i++) {
    if (s[i] === 'a') {
      minusA--;
    } else {
      minusB++;
    }
    res = Math.min(res, minusA + minusB);
  }
  return res;
}
