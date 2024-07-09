function maxNumberOfBalloons(text: string): number {
  const arr = new Array(26).fill(0);

  for (const s of text) {
    arr[s.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  let res = Math.min(arr[0], arr[1], arr[13]);
  res = Math.min(res, Math.floor(arr[11] / 2));
  res = Math.min(res, Math.floor(arr[14] / 2));
  return res;
}
