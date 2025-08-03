/**
 * 判别首字母缩略词
 * 难度：Easy
 * 标签：数组, 字符串
 */

// 在这里实现你的解决方案
function isAcronym(words: string[], s: string): boolean {
  return (
    words.length === s.length && words.every((item, idx) => item[0] === s[idx])
  );
}
