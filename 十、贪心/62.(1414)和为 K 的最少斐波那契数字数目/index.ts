// 找到所有不超过 k 的斐波那契数字，然后每次将k减去不超过 k 的最大斐波那契数字。
// 重复该操作直到 k 变为 0

function findMinFibonacciNumbers(k: number): number {
  let sum = [1, 1];
  while (sum[sum.length - 1] < k) {
    let i = sum.length - 1;
    let j = sum.length - 2;
    sum.push(sum[i] + sum[j]);
  }
  let res = 0;
  let cur = sum.length - 1;
  while (k > 0) {
    cur = findIndex(sum, k, cur);
    k -= sum[cur];
    res++;
  }

  return res;
}

const findIndex = (sum: number[], k: number, cur: number) => {
  while (sum[cur] > k) cur--;
  return cur;
};
