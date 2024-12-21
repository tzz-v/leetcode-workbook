function canBeTypedWords(text: string, brokenLetters: string): number {
  let res = 0;

  for (const str of text.split(' ')) {
    let flag = true;
    for (const s of brokenLetters) {
      if (str.includes(s)) {
        flag = false;
        break;
      }
    }
    if (flag) res++;
  }
  return res;
}
