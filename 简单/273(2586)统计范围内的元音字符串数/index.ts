/**
 * 统计范围内的元音字符串数
 * 难度：Easy
 * 标签：数组, 字符串, 计数
 */

function vowelStrings(words: string[], left: number, right: number): number {
  let res = 0;
  const arr = ['a', 'e', 'i', 'o', 'u'];

  for (let i = left; i <= right; i++) {
    if (
      arr.includes(words[i][0]) &&
      arr.includes(words[i][words[i].length - 1])
    ) {
      res++;
    }
  }
  return res;
}
