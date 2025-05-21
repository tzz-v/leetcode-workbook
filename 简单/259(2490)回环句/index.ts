function isCircularSentence(sentence: string): boolean {
  const arr = sentence.split(' ');
  const last = arr[arr.length - 1];
  return arr.every((item, idx) => {
    if (idx === 0) {
      return item[0] === last[last.length - 1];
    }
    return item[0] === arr[idx - 1][arr[idx - 1].length - 1];
  });
}
