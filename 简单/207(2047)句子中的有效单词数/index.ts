function countValidWords(sentence: string): number {
  const arr = sentence.split(/\s+/);
  return arr.reduce((prev, str) => {
    if (!str) return prev;
    if (
      /\d/.test(str) ||
      str.match(/[!.,]/g)?.length > 1 ||
      str.match(/-/g)?.length > 1
    )
      return prev;
    if (/[!.,]/.test(str) && !/[!.,]/.test(str[str.length - 1])) return prev;
    str = str.replace(/[!.,]/g, '');
    if (str[0] === '-' || str[str.length - 1] === '-') return prev;
    return prev + 1;
  }, 0);
};