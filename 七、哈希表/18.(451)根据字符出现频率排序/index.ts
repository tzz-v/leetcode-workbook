// 将数组元素及数量存入哈希，
// 重新转回数组，并排序。
// 根据有序的数组，生成一个新的字符串
function frequencySort(s: string): string {
  const map = new Map<string, number>();

  for (const val of s) {
    map.set(val, (map.get(val) ?? 0) + 1);
  }
  const arr = Array.from(map);
  arr.sort((a, b) => b[1] - a[1]);
  let res = '';

  for (const val of arr) {
    for (let i = 0; i < val[1]; i++) {
      res += val[0];
    }
  }
  return res;
}
