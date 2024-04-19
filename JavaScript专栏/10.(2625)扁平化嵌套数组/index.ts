// 递归
// 递归次数为n

type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (
  arr: MultiDimensionalArray,
  n: number
): MultiDimensionalArray {
  if (n === 0) return arr;
  let res: MultiDimensionalArray = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res.push(...flat(item, n - 1));
    } else {
      res.push(item);
    }
  });
  return res;
};
