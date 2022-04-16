/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */

// 找规律，sumA−x+y=sumB+x−y
// 直接暴力解
var fairCandySwap = function (aliceSizes, bobSizes) {
  const numA = aliceSizes.reduce((prev, item) => prev + item);
  const numB = bobSizes.reduce((prev, item) => prev + item);
  const subtract = (numA - numB) / 2;
  for (let i = 0; i < aliceSizes.length; i++) {
    for (let j = 0; j < bobSizes.length; j++) {
      if (aliceSizes[i] - bobSizes[j] === subtract) {
        return [aliceSizes[i], bobSizes[j]];
      }
    }
  }
};

// 两个小优化点
var fairCandySwap = function (aliceSizes, bobSizes) {
  const numA = aliceSizes.reduce((prev, item) => prev + item);
  const numB = bobSizes.reduce((prev, item) => prev + item);
  // - 去重，减少循环次数
  const rec = new Set(bobSizes);
  const subtract = (numA - numB) / 2;
  for (let i = 0; i < aliceSizes.length; i++) {
    // 先计算在查询，减少计算次数
    const y = aliceSizes[i] - subtract;
    if (rec.has(y)) {
      return [aliceSizes[i], y];
    }
  }
};
