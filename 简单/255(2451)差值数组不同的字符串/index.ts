function oddString(words: string[]): string {
  const arr = words.map((item) => {
    let str = '';
    for (let i = 1; i < item.length; i++) {
      str += item[i].charCodeAt(0) - item[i - 1].charCodeAt(0);
      str += '-';
    }
    return str;
  });

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] === arr[0] && arr[i] === arr[1]) continue;
    if (arr[i] !== arr[0] && arr[i] !== arr[1]) {
      return words[i];
    }
    if (arr[0] !== arr[i] && arr[0] !== arr[1]) {
      return words[0];
    }
    return words[1];
  }
}
