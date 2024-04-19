// 遍历promise函数组，依次执行，当正在执行的promise函数个数等于n时，使用 await + Promise.race进行阻塞。
// 注：await + Promise.race 阻塞的是for循环的执行。
// 例：当n等于2时，for循环到第二个promise函数，此时有2个正在执行的promise，阻塞for循环，promise1或promise2执行完毕，状态为fulfilled.
// for循环继续循环到第三个promise函数，此时有2个正在执行的promise（[promise1 | promise2], promise3），阻塞for循环。...直至for循环完毕。
type F = () => Promise<any>;

async function promisePool(functions: F[], n: number): Promise<any> {
  const queue = new Set();
  const res: any[] = [];

  for (const fn of functions) {
    const execPromise = fn().then((result) => {
      res.push(result);
      queue.delete(execPromise);
    });
    queue.add(execPromise);
    if (queue.size === n) {
      await Promise.race(queue);
    }
  }
  await Promise.allSettled(queue);
  return res;
}

/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */
