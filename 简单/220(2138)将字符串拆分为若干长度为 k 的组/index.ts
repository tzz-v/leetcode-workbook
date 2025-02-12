function divideString(s: string, k: number, fill: string): string[] {
  const arr = [];
  for (let i = 0; i < s.length; i += k) {
      arr.push(s.slice(i, i + k));
  };
  const last = arr[arr.length - 1];
  arr[arr.length - 1] = last + fill.repeat(k - last.length)
  return arr;
};