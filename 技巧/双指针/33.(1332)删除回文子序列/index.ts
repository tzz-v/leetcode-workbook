// 检查是否是回文串；是则返回1，不是则返回2

function removePalindromeSub(s: string): number {
  let r = s.length - 1;
  let l = 0;
  while (l < r) {
    if (s[l] !== s[r]) return 2;
    l++;
    r--;
  }
  return 1;
}
