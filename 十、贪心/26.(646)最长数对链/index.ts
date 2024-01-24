// 想要得到最长的数对链，就要确保每个数对数组的right最小。
// 根据对数数组的right进行排序，然后遍历组成对数链

function findLongestChain(pairs: number[][]): number {
  let res = 1;

  pairs.sort((a, b) => a[1] - b[1]);
  let last = pairs[0][1];
  pairs.forEach((item) => {
    if (item[0] > last) {
      res++;
      last = item[1];
    }
  });
  return res;
}
