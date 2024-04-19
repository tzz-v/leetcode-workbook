// 将函数的如入参和返回值以键值对的形式存入map中，每次调用fn函数前先检查是否调用过

type Fn = (...params: any) => any;

function memoize(fn: Fn): Fn {
  const map = new Map<string, string>();
  return function (...args) {
    const key = JSON.stringify(args);
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
