// 递归比较；

function objDiff(obj1: any, obj2: any): any {
  const res = {};
  Object.entries(obj1).forEach(([key, val]) => {
    if (
      (isObj(val) && isObj(obj2[key])) ||
      (Array.isArray(val) && Array.isArray(obj2[key]))
    ) {
      const diffVal = objDiff(val, obj2[key]);
      if (Object.keys(diffVal).length) {
        res[key] = diffVal;
      }
    } else if (
      val !== undefined &&
      obj2[key] !== undefined &&
      val !== obj2[key]
    ) {
      res[key] = [val, obj2[key]];
    }
  });
  return res;
}
const isObj = (val: any) => {
  return typeof val === 'object' && val !== 'null' && !Array.isArray(val);
};
