function shortestCompletingWord(licensePlate: string, words: string[]): string {
  let res = '';
  const licensePlateCount = new Array(26).fill(0);
  for (const str of licensePlate) {
    const newStr = str.toLocaleLowerCase();
    if (/[a-z]/.test(newStr)) {
      licensePlateCount[newStr.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
  }

  words.forEach((word) => {
    const wordCount = new Array(26).fill(0);
    for (const str of word) {
      wordCount[str.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    if (wordCount.every((val, i) => val >= licensePlateCount[i])) {
      res = res.length !== 0 && res.length <= word.length ? res : word;
    }
  });
  return res;
}
