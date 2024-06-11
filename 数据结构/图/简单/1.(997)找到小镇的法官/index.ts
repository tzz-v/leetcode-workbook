// 遍历数组每一项，统计每个节点的入度和出度，法官的入度应该是n-1；出度应该是0；

function findJudge(n: number, trust: number[][]): number {
  const inDegrees = new Array(n + 1).fill(0);
  const outDegrees = new Array(n + 1).fill(0);
  trust.forEach((item) => {
    const [x, y] = item;
    inDegrees[y]++;
    outDegrees[x]++;
  });

  for (let i = 1; i <= n; i++) {
    if (inDegrees[i] === n - 1 && outDegrees[i] === 0) {
      return i;
    }
  }

  return -1;
}
