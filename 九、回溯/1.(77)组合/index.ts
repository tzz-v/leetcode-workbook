// 思路：
// 循环1～n，让每一个数当作起始位置，向后遍历剩余的集合。直至数组长度为k，将其push到resArr中，并返回上一层继续递归。

// 优化：
// 保证起始位置(i - arr.length)小于(n - k + 1);
// 举例，n=5, k=3； 5-3+1 = 4；则起始位置不能大于4。大于4之后得到的数组长度不够，是无效的。
function combine(n: number, k: number): number[][] {
  const resArr: number[][] = [];
  const backTrace = (arr, m) => {
    if (arr.length === k) {
      resArr.push(arr.slice());
      return;
    }
    for (let i = m; i - arr.length <= n - k + 1; i++) {
      arr.push(i);
      backTrace(arr, i + 1);
      arr.pop();
    }
  };
  backTrace([], 1);
  return resArr;
}
