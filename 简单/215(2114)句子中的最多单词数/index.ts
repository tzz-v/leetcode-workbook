function mostWordsFound(sentences: string[]): number {
  return sentences.reduce((prev, cur) => {
    const curCount = cur.split(' ').length;
    return prev > curCount ? prev : curCount;
  }, 0);
}
