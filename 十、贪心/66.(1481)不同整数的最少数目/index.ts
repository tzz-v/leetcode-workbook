// 统计数字出现的次数并排序。
// 优先剪掉出现次数较少的
function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  const map = new Map();
  arr.forEach((val) => {
    map.set(val, (map.get(val) ?? 0) + 1);
  });
  let res = map.size;
  const countArr = Array.from(map.values()).sort((a, b) => a - b);
  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i] <= k) {
      k -= countArr[i];
      res--;
    } else {
      break;
    }
  }
  return res;
}
