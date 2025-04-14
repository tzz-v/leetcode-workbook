function repeatedCharacter(s: string): string {
  const set = new Set();
  for (const str of s) {
    if (set.has(str)) return str;
    set.add(str);
  }
}
