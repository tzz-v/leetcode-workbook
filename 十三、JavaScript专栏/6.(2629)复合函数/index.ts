type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    let val = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      val = functions[i](val);
    }

    return val;
  };
}

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
