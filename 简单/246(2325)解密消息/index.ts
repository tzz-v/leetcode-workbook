function decodeMessage(key: string, message: string): string {
  const map = new Map<string, string>();
  let val = 'a'.charCodeAt(0);
  for (const str of key) {
    if (str === ' ') continue;
    if (!map.has(str)) {
      map.set(str, String.fromCharCode(val));
      val++;
    }
  }
  let res = '';
  for (const str of message) {
    if (str === ' ') {
      res += ' ';
      continue;
    }
    res += map.get(str);
  }
  return res;
}
