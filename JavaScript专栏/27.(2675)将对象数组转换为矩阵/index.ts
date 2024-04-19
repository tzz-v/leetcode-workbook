// 先把header生成出来。
// 然后根据header重组数据

function jsonToMatrix(arr: any[]): (string | number | boolean | null)[][] {
  const res: (string | number | boolean | null)[][] = [];
  const keys = new Set<string>();

  const generateHeader = (item: Object | Array<any>, prefix?: string) => {
    for (const key in item) {
      const newPrefix = `${prefix ? prefix + '.' : ''}${key}`;
      if (!!item[key] && typeof item[key] === 'object' && item[key] !== null) {
        generateHeader(item[key], newPrefix);
      } else {
        keys.add(newPrefix);
      }
    }
  };
  for (const val of arr) {
    generateHeader(val);
  }
  const header = Array.from(keys).sort();
  res.push(header);

  arr.forEach((item) => {
    const vals: (string | number | boolean | null)[] = [];
    for (const key of header) {
      const path = key.split('.');
      let val = item;
      while (path.length && typeof val === 'object') {
        val = val?.[path.shift() ?? ''];
      }
      if (
        !!path.length ||
        (typeof val === 'object' && val !== null) ||
        val === undefined
      ) {
        vals.push('');
      } else {
        vals.push(val);
      }
    }
    res.push(vals);
  });
  return res;
}
