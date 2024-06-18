// 动态规划，找到所有可操作的值，查看是否存在必败的状态。
function divisorGame(n: number): boolean {
  const arr = new Array(n + 1).fill(false);
  arr[1] = false;
  arr[2] = true;
  arr[3] = false;
  for (let i = 4; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      if (i % j === 0 && arr[i - j] === false) {
        arr[i] = true;
        break;
      }
    }
  }
  return arr[n];
}
