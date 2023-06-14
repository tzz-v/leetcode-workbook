async function promiseAll<T>(functions: (() => Promise<T>)[]): Promise<T[]> {
  return new Promise((res, rej) => {
    let count = 0;
    const resArr = new Array(functions.length);
    functions.forEach((fn, i) => {
      fn()
        .then((result) => {
          resArr[i] = result;
          count++;
          if (count === functions.length) {
            res(resArr);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
}

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */
