// 移出额外的空格
// 判断开头是否是数字符号
// 提取数字；
// 判断是否在[-2^31 ~ 2^31 - 1]范围内

function myAtoi(s: string): number {
  s = s.trim();
  let res = 0;
  let isPlus = s[0] !== '-';
  if (s[0] === '-' || s[0] === '+') {
    s = s.slice(1);
  }
  for (let i = 0; i < s.length; i++) {
    if (isNaN(Number(s[i])) || s[i] === ' ') return res;
    res = isPlus ? res * 10 + Number(s[i]) : res * 10 - Number(s[i]);
    if (res > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1;
    if (res < -Math.pow(2, 31)) return -Math.pow(2, 31);
  }

  return res;
}
