// 因为是上下翻转，所以两个数组反转后的相同值肯定是两个数组第一个元素之一，不是就说明无法做到，返回-1
// 遍历数组，统计需要翻转的次数，取较小值
function minDominoRotations(tops: number[], bottoms: number[]): number {
  let res = check(tops[0], tops, bottoms);
  if (res !== -1) return res;
  return check(bottoms[0], tops, bottoms);
}

const check = (num: number, tops: number[], bottoms: number[]) => {
  let res = [0, 0];
  for (let i = 0; i < tops.length; i++) {
    if (num === tops[i] && num !== bottoms[i]) res[1]++;
    if (num === bottoms[i] && num !== tops[i]) res[0]++;
    if (num !== tops[i] && num !== bottoms[i]) {
      res = [-1, -1];
      break;
    }
  }
  return Math.min(...res);
};
