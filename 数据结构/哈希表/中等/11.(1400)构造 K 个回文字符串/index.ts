function canConstruct(s: string, k: number): boolean {
  if (s.length < k) return false;

  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) ?? 0) + 1);
  }
  let odd = 0;
  map.forEach((count) => {
    if (count % 2 === 1) odd++;
  });
  return odd <= k;
}
