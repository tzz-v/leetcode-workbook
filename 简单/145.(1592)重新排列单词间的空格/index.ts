function reorderSpaces(text: string): string {
  const words = text.trim().split(/\s+/);
  const wordsCount = words.length;
  const spaceTotal = text.length - words.join('').length;

  let spaceStr = '';
  if (wordsCount > 1) {
    const spaceCount = Math.floor(spaceTotal / (wordsCount - 1));
    if (spaceCount !== 0) {
      spaceStr = ' '.repeat(spaceCount);
    }
  }
  const extra = wordsCount === 1 ? spaceTotal : spaceTotal % (wordsCount - 1);
  return words.join(spaceStr) + ' '.repeat(extra);
}
