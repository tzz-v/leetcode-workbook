// 递归，由于数组和对象的删除api不一致，分开处理比较方便

type Obj = Record<any, any>;

function compactObject(obj: Obj): Obj {
  if (Array.isArray(obj)) {
    obj = obj.filter((item) => Boolean(item)).map(compactObject);
  } else {
    for (const key in obj) {
      if (!Boolean(obj[key])) {
        delete obj[key];
      }
      if (typeof obj[key] === 'object') {
        obj[key] = compactObject(obj[key]);
      }
    }
  }

  return obj;
}
