function maxDepth(s: string): number {
  let res = 0;
  let stash = 0;
  for (const str of s) {
    if (str === '(') {
      stash++;
      res = Math.max(res, stash);
    } else if (str === ')') {
      stash--;
    }
  }
  return res;
}
