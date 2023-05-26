function cancellable<T>(
  generator: Generator<Promise<any>, T, unknown>
): [() => void, Promise<T>] {
  let cancel = () => {};
  const promise = new Promise<T>((res, rej) => {
    cancel = () => {
      console.log(1);
      run('Cancelled', 'throw');
    };
    const run = (
      val: Promise<any> | T | string | null,
      type: 'next' | 'throw' = 'next'
    ) => {
      try {
        const { value, done } = generator[type](val);
        if (done) {
          console.log(2);
          res(value);
        }
        if (value && typeof value === 'object' && 'then' in value) {
          value
            .then((res) => {
              console.log(3);
              run(res);
            })
            .catch((err) => {
              console.log(4);
              run(err, 'throw');
            });
        }
      } catch (err) {
        rej(err);
      }
    };
    run(null);
  });

  return [cancel, promise];
}

/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */
