/**
 * 最小化字符串长度
 * 难度：Easy
 * 标签：哈希表, 字符串
 */

// 在这里实现你的解决方案

// 去重
function minimizedStringLength(s: string): number {
  return Array.from(new Set(s.split('')).values()).length;
}
