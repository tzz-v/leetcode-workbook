function mostCommonWord(paragraph: string, banned: string[]): string {
  const map = new Map<string, number>();

  paragraph.split(/[^a-zA-Z]/).forEach((str) => {
    if (!str) return;
    const newStr = str.toLocaleLowerCase();
    map.set(newStr, (map.get(newStr) ?? 0) + 1);
  });
  const arr: [string, number][] = Array.from(map.entries()).sort(
    (a, b) => b[1] - a[1]
  );
  return arr.find((str) => !banned.includes(str[0]))?.[0] ?? '';
}
