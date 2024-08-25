function isPrefixOfWord(sentence: string, searchWord: string): number {
  const i = sentence
    .split(' ')
    .findIndex((item) => item.startsWith(searchWord));
  return i === -1 ? i : i + 1;
}
