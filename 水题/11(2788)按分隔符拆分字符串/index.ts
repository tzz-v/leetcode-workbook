/**
 * 按分隔符拆分字符串
 * 难度：Easy
 * 标签：数组, 字符串
 */

// 在这里实现你的解决方案
function splitWordsBySeparator(words: string[], separator: string): string[] {
  return words.map((item) => item.split(separator).filter((v) => !!v)).flat();
}
