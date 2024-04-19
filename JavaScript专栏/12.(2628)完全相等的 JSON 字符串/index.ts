// 实现_.isEqual();
// 递归遍历对比元素的每一项。

function areDeeplyEqual(o1: any, o2: any): boolean {
  if (!isQuote(o1) || !isQuote(o2)) return o1 === o2;

  const keys1 = Object.keys(o1);
  const keys2 = Object.keys(o2);
  if (Array.isArray(o1) !== Array.isArray(o2)) return false;
  if (keys1.length !== keys2.length) return false;

  const res = keys1.every((key) => {
    return areDeeplyEqual(o1[key], o2[key]);
  });
  return res;
}

const isQuote = (val: any) => {
  return val instanceof Object;
};
