// 使用两个哈希表，存储各自元素的数量
// 计算target中每个字符在两个哈希中的个数，得到可以形成的最大副本数
function rearrangeCharacters(s: string, target: string): number {
  const map = new Map<string, number>();

  for (const _s of s) {
    map.set(_s, (map.get(_s) ?? 0) + 1);
  }
  let min = Infinity;

  const mapTarget = new Map<string, number>();
  for (const _s of target) {
    mapTarget.set(_s, (mapTarget.get(_s) ?? 0) + 1);
  }

  mapTarget.forEach((count, key) => {
    const sCount = map.get(key) ?? 0;
    console.log(key, sCount, count, Math.floor(sCount / count));
    min = Math.min(min, Math.floor(sCount / count));
  });

  return min;
}
