function checkDistances(s: string, distance: number[]): boolean {
  const set = new Set<string>();
  for (let i = 0; i < s.length; i++) {
    if (set.has(s[i])) continue;
    const idx = i + distance[s.charCodeAt(i) - 97] + 1;
    if (s[idx] !== s[i]) return false;
    set.add(s[i]);
  }
  return true;
}
