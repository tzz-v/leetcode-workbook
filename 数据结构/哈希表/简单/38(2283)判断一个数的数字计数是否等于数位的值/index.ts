// 1. 利用哈希表存储 num 中每个数字的数量；
// 2. 检查数量是否对应

function digitCount(num: string): boolean {
  const map = new Map<string, number>();
  for (const s of num) {
    map.set(s, (map.get(s) ?? 0) + 1);
  }
  for (let i = 0; i < num.length; i++) {
    if ((map.get(`${i}`) ?? 0) !== Number(num[i])) {
      return false;
    }
  }
  return true;
}
