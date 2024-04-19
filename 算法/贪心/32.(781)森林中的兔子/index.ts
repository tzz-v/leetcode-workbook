// 两只颜色相同的兔子看到的其他同色兔子的数量是相通的，因此，对兔子进行分组，对于每一组，计算出兔子的最少数量，然后累加。
function numRabbits(answers: number[]): number {
  const counts = _.countBy(answers);

  let res = 0;
  Object.keys(counts).forEach((key) => {
    const count = Number(key) + 1;
    const groupNumber = Math.ceil(counts[key] / count);
    res += groupNumber * count;
  });
  return res;
}
