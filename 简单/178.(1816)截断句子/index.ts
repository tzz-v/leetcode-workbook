function truncateSentence(s: string, k: number): string {
  const arr = s.split(' ');
  return arr.slice(0, Math.min(arr.length, k)).join(' ')
};