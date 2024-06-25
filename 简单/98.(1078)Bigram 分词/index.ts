function findOcurrences(text: string, first: string, second: string): string[] {
  const arr = text.split(' ');
  const res: string[] = [];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i - 1] === second && arr[i - 2] === first) res.push(arr[i]);
  }
  return res;
}
