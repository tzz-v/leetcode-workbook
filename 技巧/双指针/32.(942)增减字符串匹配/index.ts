// 使用双指针维护最大最小值
// 遇到'I'取剩余数字中的最小值，遇到'D'取剩余数字的最大值

function diStringMatch(s: string): number[] {
  const res = new Array(s.length + 1);
  let l = 0;
  let r = s.length;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I') {
      res[i] = l;
      l++;
    } else {
      res[i] = r;
      r--;
    }
  }
  res[s.length] = l;
  return res;
}
