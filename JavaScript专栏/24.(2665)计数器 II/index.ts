type ReturnObj = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): ReturnObj {
  let val = init;
  return {
    reset: () => {
      val = init;
      return val;
    },
    increment: () => ++val,
    decrement: () => --val,
  };
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
