// 将strs的每一项，进行排序后add进哈希表中，并通过闭包，设置单独的key；
// 遇到异味词后，按其key进行分组

function groupAnagrams(strs: string[]): string[][] {
  let i = 0;
  const map = new Map();

  const res: string[][] = [];

  strs.forEach((item) => {
    if (map.has(sortStr(item))) {
      const index = map.get(sortStr(item));
      res[index].push(item);
    } else {
      map.set(sortStr(item), i);
      res[i] = [item];
      i++;
    }
  });
  return res;
}

const sortStr = (str: string) => {
  return str.split('').sort().join('');
};
