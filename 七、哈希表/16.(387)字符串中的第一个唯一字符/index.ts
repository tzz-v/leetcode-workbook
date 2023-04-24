// 将数组元素和下标存入哈希表中，存在多次的重置为-1；

// 遍历哈希表，返回第一个下标不是-1的下标。
// 时间复杂度为O(n)

function firstUniqChar(s: string): number {
  const map = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], -1);
    } else {
      map.set(s[i], i);
    }
  }

  for (const val of map) {
    if (val[1] > -1) return val[1];
  }
  return -1;
}
