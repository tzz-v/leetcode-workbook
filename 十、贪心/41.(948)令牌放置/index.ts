// 给数组排序
// 根据规则，可以去掉两张牌，不加积分，得到两张牌能量差的能量值。
// 遍历排序后的数组，利用贪心思想，手中的能量足够换取积分时，则换取积分，不够换取积分时则和最大牌一起换取能量。
// 技巧：双指针
// 时间复杂度：O(nLogn);

function bagOfTokensScore(tokens: number[], power: number): number {
  tokens.sort((a, b) => a - b);
  let res = 0;
  let j = tokens.length - 1;
  if (power < tokens[0]) return 0;
  for (let i = 0; i <= j; i++) {
    if (i === j && power >= tokens[j]) {
      res++;
      break;
    }
    power -= tokens[i];
    if (power < 0) {
      power += tokens[j];
      j--;
    } else {
      res++;
    }
  }
  return res;
}
