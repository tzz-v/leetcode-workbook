/**
 * 判断通过操作能否让字符串相等 I
 * 难度：Easy
 * 标签：字符串
 */

// 在这里实现你的解决方案
function canBeEqual(s1: string, s2: string): boolean {
  const first =
    (s1[0] === s2[0] && s1[2] === s2[2]) ||
    (s1[0] === s2[2] && s1[2] === s2[0]);
  const last =
    (s1[1] === s2[1] && s1[3] === s2[3]) ||
    (s1[1] === s2[3] && s1[3] === s2[1]);
  return first && last;
}
