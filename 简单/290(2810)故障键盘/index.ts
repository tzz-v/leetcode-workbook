/**
 * 故障键盘
 * 难度：Easy
 * 标签：字符串, 模拟
 */

// 在这里实现你的解决方案
function finalString(s: string): string {
  let arr = s.split('i');
  const len = arr.length;
  let left = '';
  let right = '';
  for (let i = len - 1; i >= 0; i -= 2) {
    right = arr[i] + right;
    if (i > 0) {
      left += arr[i - 1].split('').reverse().join('');
    }
  }
  return left + right;
}
