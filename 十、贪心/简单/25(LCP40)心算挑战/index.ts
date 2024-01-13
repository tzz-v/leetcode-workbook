// 给数组排序，然后取前cnt项和，判断其奇偶性。并维护最后一个奇数 lastOdd 和偶数 lastEven。
// 偶数直接返回。
// 奇数则继续遍历数组剩余元素：
//   cur为奇数 && 存在最后一个偶数，则（-lastEven + cur）（奇数减掉一个偶数加上一个奇数之后和为偶数）；
//   cur为偶数 && 存在最后一个奇数，则（-lastOdd + cur）（奇数减掉一个奇数加上一个偶数之后和为偶数）；
//   不符合条件返回 0；
function maxmiumScore(cards: number[], cnt: number): number {
  let res = 0;
  cards.sort((a, b) => b - a);
  let lastOdd, lastEven;
  let i = 0;
  for (i; i < cnt; i++) {
    if (cards[i] % 2 === 0) {
      lastEven = cards[i];
    } else {
      lastOdd = cards[i];
    }
    res += cards[i];
  }
  if (res % 2 === 0) return res;

  while (i < cards.length) {
    if (lastOdd && cards[i] % 2 === 0) {
      return res - lastOdd + cards[i];
    }
    if (lastEven && cards[i] % 2 !== 0) {
      return res - lastEven + cards[i];
    }
    i++;
  }

  return 0;
}
