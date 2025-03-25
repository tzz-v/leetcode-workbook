function percentageLetter(s: string, letter: string): number {
  let count = 0;
  for (const _s of s) {
    if (_s === letter) count++;
  }
  return Math.floor((count / s.length) * 100);
}
