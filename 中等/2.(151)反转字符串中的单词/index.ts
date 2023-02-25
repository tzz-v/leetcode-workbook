// 转数组 然后反转
function reverseWords(s: string): string {
  const arr = s.split(' ');
  return arr
    .reverse()
    .filter((item) => !!item)
    .join(' ');
}
