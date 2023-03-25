// 创建一个长度为pLen的滑动窗口
// 维护两个字符串中字母的长度，转成字符串后进行比较。

function findAnagrams(s: string, p: string): number[] {
  const pLen = p.length;
  const arr1 = new Array(26).fill(0);
  const arr2 = new Array(26).fill(0);
  const res: number[] = [];
  for (let i = 0; i < pLen; i++) {
    arr1[p.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    arr2[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }
  if (arr1.toString() === arr2.toString()) {
    res.push(0);
  }
  for (let i = 0; i < s.length; i++) {
    arr2[s.charCodeAt(i) - 'a'.charCodeAt(0)]--;
    arr2[s.charCodeAt(i + pLen) - 'a'.charCodeAt(0)]++;
    if (arr1.toString() === arr2.toString()) {
      res.push(i + 1);
    }
  }
  return res;
}
