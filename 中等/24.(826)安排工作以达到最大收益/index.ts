// 排序 + 单调栈，维护能力满足时，能获得的最大的收益，
function maxProfitAssignment(
  difficulty: number[],
  profit: number[],
  worker: number[]
): number {
  worker.sort((a, b) => a - b);
  let arr = difficulty
    .map((item, i) => [item, profit[i]])
    .sort((a, b) => a[0] - b[0]);

  let res = 0;
  let profitMax = 0;
  let difficultyIndex = 0;

  for (let i = 0; i < worker.length; i++) {
    while (
      difficultyIndex < profit.length &&
      worker[i] >= arr[difficultyIndex][0]
    ) {
      profitMax = Math.max(profitMax, arr[difficultyIndex][1]);
      difficultyIndex++;
    }
    res += profitMax;
  }
  return res;
}
