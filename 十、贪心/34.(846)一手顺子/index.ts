// 统计所有牌的数量。遍历牌组，当存在牌x时，必须存在x+1、x+2、...x+ groupSize - 1.

function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) return false;
  const counts = _.countBy(hand);
  const countsArr = Object.keys(counts)
    .map((key) => [key, counts[key]])
    .sort((a, b) => a[0] - b[0]);

  let i = 0;
  while (i < countsArr.length) {
    if (countsArr[i][1] === 0) {
      i++;
      continue;
    }
    let j = 1;
    while (j < groupSize) {
      const cur = i + j;
      if (
        cur >= countsArr.length ||
        countsArr[cur][1] === 0 ||
        countsArr[cur][0] - countsArr[cur - 1][0] !== 1
      )
        return false;
      countsArr[cur][1]--;
      j++;
    }
    countsArr[i][1]--;
  }

  return true;
}
