// 使用哈希表存储宝石类型。以提高时间复杂度

function numJewelsInStones(jewels: string, stones: string): number {
  const set = new Set(jewels.split(''));
  let res = 0;
  for (const str of stones) {
    if (set.has(str)) {
      res++;
    }
  }
  return res;
}
