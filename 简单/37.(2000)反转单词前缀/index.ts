function reversePrefix(word: string, ch: string): string {
  let res = '';
  let flag = true;
  for (let i = 0; i < word.length; i++) {
    res = flag ? word[i] + res : res + word[i];
    if (word[i] === ch) {
      flag = false;
    }
  }
  return flag ? word : res;
}
