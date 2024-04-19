/**
 * @param {number[][]} image
 * @return {number[][]}
 */

// 遍历image每一项，将其进行反转；
// 反转的同时，对其进行取反处理；
// 注意边界，考虑 i === j的情况；
var flipAndInvertImage = function (image) {
  image.forEach((item) => {
    let i = 0;
    let j = item.length - 1;
    while (i < j) {
      const temp = item[i];
      item[i] = item[j] ? 0 : 1;
      item[j] = temp ? 0 : 1;
      i++;
      j--;
    }
    if (i === j) {
      item[i] = item[i] ? 0 : 1;
    }
  });
  return image;
};
