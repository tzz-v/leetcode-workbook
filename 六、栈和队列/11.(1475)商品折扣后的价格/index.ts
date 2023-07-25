// 使用单调栈来存储当前元素的下一个较小元素

function finalPrices(prices: number[]): number[] {
  const n = prices.length;
  let res = new Array(n).fill(0);
  const stack: number[] = [];
  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && prices[i] < stack[stack.length - 1]) {
      stack.pop();
    }
    res[i] = stack.length ? prices[i] - stack[stack.length - 1] : prices[i];
    stack.push(prices[i]);
  }
  return res;
}
