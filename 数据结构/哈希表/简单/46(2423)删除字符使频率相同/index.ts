// 使用一个哈希表map，维护每个字母出现的次数
// 再使用一个哈希表countMap， 维护每个次数出现的次数
function equalFrequency(word) {
  const map = new Map();
  for (const s of word) {
    map.set(s, (map.get(s) ?? 0) + 1);
  }

  const countMap = new Map();
  map.forEach((count) => {
    countMap.set(count, (countMap.get(count) ?? 0) + 1);
  });
  const arr = Array.from(countMap.entries());
  if (arr.length > 2) return false;
  if (arr.length === 1) {
    return arr[0][0] === 1 || arr[0][1] === 1;
  }

  if (countMap.get(1) === 1) return true;
  if (arr[0][0] < arr[1][0]) {
    [arr[0], arr[1]] = [arr[1], arr[0]];
  }
  const count = arr[0][0] - arr[1][0] * arr[0][1];

  return count === 1;
}
equalFrequency('aaaabbbbccc');
