// 遍历字符串下标，依次拼接，然后将剩余的字符拼接到末尾

function mergeAlternately(word1: string, word2: string): string {
  let res = '';

  let i = 0;

  while (i < word1.length && i < word2.length) {
    res += word1[i] + word2[i];
    i++;
  }
  return res + word1.slice(i) + word2.slice(i);
}
