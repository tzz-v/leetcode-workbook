// 如题，找到两个字符串中，最长的特殊序列（唯一性，子序列）；
// 最长的子序列是字符串本身，因此，判断两个字符串是否相等，相等则返回-1，不想等则返回较长字符串的长度
function findLUSlength(a: string, b: string): number {
  return a !== b ? Math.max(a.length, b.length) : -1;
}
