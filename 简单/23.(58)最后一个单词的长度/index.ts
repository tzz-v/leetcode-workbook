// 将字符串按空格分割成数组。
// 找最后一个有效的数组项，返回其长度。
function lengthOfLastWord(s: string): number {
  const arr = s.split(' ');
  let i = arr.length - 1;
  while (!arr[i]) i--;
  return arr[i].length;
}
