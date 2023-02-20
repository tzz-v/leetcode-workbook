// 思路
// 1. 获取二进制1的数量
// 2. 根据1的数量进行排序

function sortByBits(arr: number[]): number[] {
  return arr.sort((a, b) => {
    if (getCount(a) !== getCount(b)) {
      return getCount(a) - getCount(b);
    }
    return a - b;
  });
}

const getCount = (num: number) => {
  let res = 0;
  while (num > 1) {
    res = num % 2 === 1 ? res + 1 : res;
    num = Math.floor(num / 2);
  }
  if (num === 1) res++;
  return res;
};
