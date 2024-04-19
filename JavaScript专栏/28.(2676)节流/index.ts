type F = (...args: any[]) => void;

function throttle(fn: F, t: number): F {
  let nextArgs: any[] | null = null;
  let flag = true;
  const throttleFn = function (...args) {
    if (flag) {
      flag = false;
      setTimeout(() => {
        flag = true;
        if (nextArgs) {
          throttleFn(...nextArgs);
          nextArgs = null;
        }
      }, t);
      return fn(...args);
    } else {
      nextArgs = args;
    }
  };
  return throttleFn;
}

/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */
