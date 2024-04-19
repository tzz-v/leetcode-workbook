function makeSmallestPalindrome(s: string): string {
  let i = 0;
  let j = s.length - 1;
  let prefix = '';
  let suffix = '';
  while (i < j) {
    if (s[i] <= s[j]) {
      prefix += s[i];
      suffix = s[i] + suffix;
    } else if (s[i] > s[j]) {
      prefix += s[j];
      suffix = s[j] + suffix;
    }
    i++;
    j--;
  }
  if (i === j) {
    prefix += s[i];
  }
  return prefix + suffix;
}
