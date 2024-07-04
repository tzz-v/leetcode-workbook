function countCharacters(words: string[], chars: string): number {
  const charsCount = new Array(26).fill(0);
  for (const str of chars) {
    charsCount[str.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  let res = 0;
  words.forEach((item) => {
    let count = new Array(26).fill(0);
    for (const str of item) {
      count[str.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    if (count.every((val, i) => val <= charsCount[i])) {
      res += item.length;
    }
  });
  return res;
}
