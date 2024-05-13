function shortestToChar(s: string, c: string): number[] {
  let rightI: undefined | number = s.indexOf(c);
  let leftI: undefined | number;
  const arr = new Array(s.length).fill(0);
  for (let i = 0; i < s.length; i++) {
    if (i === rightI) {
      leftI = rightI;
      rightI = s.indexOf(c, i + 1) !== -1 ? s.indexOf(c, i + 1) : undefined;
      continue;
    }
    let interval = Infinity;
    if (rightI !== undefined) {
      interval = rightI - i;
    }
    if (leftI !== undefined) {
      interval = Math.min(interval, i - leftI);
    }
    arr[i] = interval;
  }
  return arr;
}
