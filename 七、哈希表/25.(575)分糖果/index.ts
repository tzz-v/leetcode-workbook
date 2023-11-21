// 利用哈希表的特性对数组进行去重，得到糖果的种类数量
// 取种类数量和可食用数量中的较小值
function distributeCandies(candyType: number[]): number {
  const typeSize = new Set(candyType).size;
  return Math.min(typeSize, Math.floor(candyType.length / 2));
}
