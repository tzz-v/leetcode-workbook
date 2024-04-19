// 为了保证前面已反转的元素不被影响。需要从前往后翻转。
// 从前往后遍历，对每个元素判断是否需要进行翻转即可
function minFlips(target: string): number {
  let res = target[0] === '0' ? 0 : 1;
  let lastIndex = 0;
  for (let i = 1; i < target.length; i++) {
    if (target[i] !== target[lastIndex]) {
      res++;
      lastIndex = i;
    }
  }
  return res;
}
