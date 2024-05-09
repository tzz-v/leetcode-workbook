function rotateString(s: string, goal: string): boolean {
  for (let i = 0; i < s.length; i++) {
    if (s === goal) return true;
    s = s.slice(1) + s[0];
  }
  return false;
}
