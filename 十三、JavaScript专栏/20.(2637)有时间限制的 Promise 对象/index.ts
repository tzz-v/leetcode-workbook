// 使用Promise.race（）；
// Promise.race(iterable)方法返回一个 promise，一旦迭代器中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝。
type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number): Fn {
  return async function (...args) {
    const timeoutPromise = new Promise((res, rej) => {
      const timer = setTimeout(() => {
        rej('Time Limit Exceeded');
        clearTimeout(timer);
      }, t);
    });
    return Promise.race([fn(...args), timeoutPromise]);
  };
}

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
