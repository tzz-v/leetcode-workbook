// 需要对数组进行排序且不能改变原数组。

function findRelativeRanks(score: number[]): string[] {
  const arr: number[] = [];
  for (let i = 0; i < score.length; i++) {
    let j = 0;
    while (score[i] < arr[j]) {
      j++;
    }
    arr.splice(j, 0, score[i]);
  }

  const answer = ['Gold Medal', 'Silver Medal', 'Bronze Medal'];
  return score.map((item) => {
    const index = arr.findIndex((val) => val === item);
    return answer[index] ?? `${index + 1}`;
  });
}
