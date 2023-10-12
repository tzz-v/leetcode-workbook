// 如果字符串 s 由一个子串 s‘ 重复多次构成，那么将一个 s’ 挪到字符串 s 后面，与原字符串相等。
// 字符串 s‘ 的最大长度为 n / 2；

function repeatedSubstringPattern(s: string): boolean {
  const count = Math.floor(s.length / 2);
  for (let i = 1; i <= count; i++) {
    if (s === s.slice(i) + s.slice(0, i)) return true;
  }
  return false;
}
