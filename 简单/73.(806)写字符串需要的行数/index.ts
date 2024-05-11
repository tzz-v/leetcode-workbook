function numberOfLines(widths: number[], s: string): number[] {
  let res = 0;
  let counts = 0;
  for (const str of s) {
    const curCount = widths[str.charCodeAt(0) - 'a'.charCodeAt(0)];
    if (counts + curCount > 100) {
      res++;
      counts = 0;
    }
    counts += curCount;
  }
  return [res + 1, counts];
}
