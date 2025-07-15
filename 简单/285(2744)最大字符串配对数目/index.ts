/**
 * 最大字符串配对数目
 * 难度：Easy
 * 标签：数组, 哈希表, 字符串, 模拟
 */

// 在这里实现你的解决方案
function maximumNumberOfStringPairs(words: string[]): number {
  const map = new Map<string, number>();
  words.forEach((item) => {
    const val = item.split('').sort().join('');
    map.set(val, (map.get(val) ?? 0) + 1);
  });

  let res = 0;
  map.forEach((val) => {
    if (val > 1) {
      res += Math.floor(val / 2);
    }
  });

  return res;
}
