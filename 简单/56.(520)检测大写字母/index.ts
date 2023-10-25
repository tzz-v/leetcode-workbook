// 总结规律、区分情况
// 当首字母为大写时，后续字母应统一为大写或小写
// 当首字母为小写时，后续字母应统一小写

function detectCapitalUse(word: string): boolean {
  const reg = /[A-Z]/;
  if (reg.test(word[0])) {
    for (let i = 1; i < word.length - 1; i++) {
      if (reg.test(word[i]) !== reg.test(word[i + 1])) return false;
    }
    return true;
  }
  for (const val of word) {
    if (reg.test(val)) return false;
  }
  return true;
}
