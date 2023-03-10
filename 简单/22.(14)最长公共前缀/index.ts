// 双for循环，依次比较第i列的字符是否一致。不一致则返回第i列之前的字符

function longestCommonPrefix(strs: string[]): string {
  let res = '';
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[j - 1][i]) {
        return res;
      }
    }
    res += strs[0][i];
  }
  return res;
}
