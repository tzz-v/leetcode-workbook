// 思路
// 创建两个哈希表，第一个统计数组元素出现的次数。
// 随后利用新的哈希表，统计不同次数的数目，然后比较两个哈希表的长度是否一致

function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
  }
  const countMap = new Map();
  map.forEach((val, key) => {
    countMap.set(val, key);
  });
  return map.size === countMap.size;
}
