// 要求，1. 破坏回文；2. 字典序最小。
// 将字符串中第一个不等于a的字符替换成a即可（为了保证破坏回文，需要额外注意这个元素不能是最中间的字符。）。
// 如果字符串全是a，则将最后一个字符改成b，（既破坏了回文，又是字典序最小）

function breakPalindrome(palindrome: string): string {
  const len = palindrome.length;
  if (len === 1) return '';
  let i = 0;
  for (i; i < len; i++) {
    if (len % 2 === 1 && i === Math.floor(len / 2)) continue;
    if (palindrome[i] !== 'a') break;
  }
  if (i < len) {
    return palindrome.slice(0, i) + 'a' + palindrome.slice(i + 1);
  }
  return palindrome.slice(0, len - 1) + 'b';
}
