function checkString(s: string): boolean {
  const bIdx = s.indexOf('b');
  return bIdx === -1 || bIdx > s.lastIndexOf('a');
};