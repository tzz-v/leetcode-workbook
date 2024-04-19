// 遍历数组，每个元素调用回调函数，
// 用回调函数的返回值当作key，将元素push进res[key]中。

// res：Record<string, Array[T]>

declare global {
  interface Array<T> {
    groupBy(fn: (item: T) => string): Record<string, T[]>;
  }
}

Array.prototype.groupBy = function (fn) {
  const res = {};
  this.forEach((item) => {
    const key = fn(item);
    if (!res[key]) {
      res[key] = [];
    }
    res[key].push(item);
  });
  return res;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
export {};
