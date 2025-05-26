function closestTarget(
  words: string[],
  target: string,
  startIndex: number
): number {
  const n = words.length;
  const idx = startIndex + n;
  for (let i = 0; i < n; i++) {
    if (words[(idx - i) % n] === target || words[(idx + i) % n] === target)
      return i;
  }
  return -1;
}
