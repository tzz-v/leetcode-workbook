/**
 * 删除子串后的字符串最小长度
 * 难度：Easy
 * 标签：栈, 字符串, 模拟
 */

// 在这里实现你的解决方案
function minLength(s: string): number {
  const arr: string[] = [];

  for (const str of s) {
    if (str === 'B') {
      if (arr[arr.length - 1] === 'A') {
        arr.pop();
        continue;
      }
    }
    if (str === 'D') {
      if (arr[arr.length - 1] === 'C') {
        arr.pop();
        continue;
      }
    }
    arr.push(str);
  }

  return arr.length;
}
