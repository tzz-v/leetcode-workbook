function sortString(s: string): string {
  const map = new Map<string, number>();

  for (let str of s) {
    map.set(str, (map.get(str) ?? 0) + 1);
  }
  const arr = Array.from(map.entries()).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  let res = '';
  while (res.length !== s.length) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][1] === 0) continue;
      res += arr[i][0];
      arr[i][1]--;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i][1] === 0) continue;
      res += arr[i][0];
      arr[i][1]--;
    }
  }
  return res;
}
