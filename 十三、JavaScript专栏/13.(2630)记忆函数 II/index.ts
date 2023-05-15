// 类似「8.(2623)记忆函数」，不同点是当入参绝对相等时（===）才能返回缓存。
// 所以不能简单将入参转换成json字符串当key。维护一个idList存储入参和id的键值对，给每一个入参一个唯一id，然后将id拼接成key值。
// 此时，当key相等时，说明当前函数存在相同的输入（每个入参都绝对相等），应返回缓存。

type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  let id = 0;
  const idMap = new Map();
  const map = new Map();

  return function (...args) {
    const idList = args.map((item) => {
      if (idMap.has(item)) return idMap.get(item);
      idMap.set(item, ++id);
      return id;
    });
    const key = JSON.stringify(idList);
    if (map.has(key)) {
      return map.get(key);
    }
    const val = fn(...args);
    map.set(key, val);
    return val;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
