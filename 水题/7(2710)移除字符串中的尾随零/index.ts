/**
 * 移除字符串中的尾随零
 * 难度：Easy
 * 标签：字符串
 */

// 在这里实现你的解决方案
function removeTrailingZeros(num: string): string {
  let i = num.length - 1;
  while (num[i] === '0') i--;
  return num.slice(0, i + 1);
}
