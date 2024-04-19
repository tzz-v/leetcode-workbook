// 函数柯里化

// 当调用返回函数的入参个数少于目标函数（fn）的入参个数时，继续返回一个函数并累积入参；
// 直至入参数量满足条件了，在调用目标函数fn，并返回fn的返回值。
// 注：fn的入参的数量： fn.length

function curry(fn: Function): Function {
  return function curried(...arg0) {
    if (arg0.length < fn.length) {
      return function (...arg1) {
        return curried(...[...arg0, ...arg1]);
      };
    } else {
      return fn(...arg0);
    }
  };
}

/**
 * function sum(a, b) { return a + b; }
 * const csum = curry(sum);
 * csum(1)(2) // 3
 */
