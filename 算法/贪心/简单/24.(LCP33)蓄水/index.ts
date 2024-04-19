// 找到水桶最大值 max。蓄水次数为1 ~ max;
// 遍历蓄水次数，查看每个蓄水次数所对应的升级水桶次数。取较小值。
// 时间复杂度为O（n * C）n为vat长度，C为vat数组中最大项值。
function storeWater(bucket: number[], vat: number[]): number {
  const max = Math.max(...vat);
  if (max === 0) return 0;

  let res = Infinity;
  for (let storageCount = 1; storageCount <= max; storageCount++) {
    let upgradesCount = 0;
    for (let i = 0; i < bucket.length; i++) {
      upgradesCount += Math.max(
        0,
        Math.ceil(vat[i] / storageCount) - bucket[i]
      );
    }
    res = Math.min(res, storageCount + upgradesCount);
  }

  return res;
}
