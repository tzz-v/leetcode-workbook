function stringMatching(words: string[]): string[] {
  return words.filter((word) =>
    words.some((str) => str.includes(word) && str !== word)
  );
}
