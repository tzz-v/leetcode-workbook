// - 重置字符串（移除字符串中的破折号）
// - 格式化字符串（转大写，破折号分隔）

function licenseKeyFormatting(s: string, k: number): string {
  const arr = s.split('').filter((s) => s !== '-');
  const firstCount = arr.length % k;
  const str = arr.reduce((prev, cur, index) => {
    let res = prev + cur.toUpperCase();
    if ((index + 1) % k === firstCount && index !== arr.length - 1) {
      res += '-';
    }
    return res;
  }, '');
  return str;
}
