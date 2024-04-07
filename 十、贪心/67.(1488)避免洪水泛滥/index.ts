// 记录没有下雨的日子，记录湖泊被雨水填满的日期（下标）。
// 当该湖泊再次下雨时，应选择在上一次下雨之后，这一次下雨之前。尽可能早的把水抽空（贪心，最大程度避免洪水发生）

function avoidFlood(rains: number[]): number[] {
  const map = new Map<number, number>();
  const arr: number[] = [];
  for (let i = 0; i < rains.length; i++) {
    if (rains[i] <= 0) {
      arr.push(i);
      rains[i] = 1;
      continue;
    }
    if (map.has(rains[i])) {
      let index = arr.findIndex((val) => val > (map.get(rains[i]) as number));
      if (index === -1) return [];
      rains[arr[index]] = rains[i];
      arr.splice(index, 1);
    }
    map.set(rains[i], i);
    rains[i] = -1;
  }
  return rains;
}
