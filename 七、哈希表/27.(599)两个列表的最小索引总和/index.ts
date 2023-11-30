// 使用哈希表存储list1；
// 遍历list2， 维护最少索引和对应的餐厅列表

function findRestaurant(list1: string[], list2: string[]): string[] {
  let min = Infinity;
  const res = new Set<string>();
  const newList1: [string, number][] = list1.map((item, i) => [item, i]);
  const map1 = new Map<string, number>(newList1);

  list2.forEach((item, i) => {
    if (!map1.has(item)) return;
    const sum = (map1.get(item) ?? 0) + i;
    if (sum > min) return;
    if (sum < min) {
      min = sum;
      res.clear();
    }
    res.add(item);
  });
  return Array.from(res.values());
}
