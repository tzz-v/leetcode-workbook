/**
 * @param {number[]} height
 * @return {number}
 */

// 双指针
// 面积等于长乘宽；宽=下标距离；长=较短的指针；
// 移动短指针；更新面积的最大值；
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let area = 0;
  while (l < r) {
    const currentArea = Math.min(height[l], height[r]) * (r - l);
    area = currentArea > area ? currentArea : area;
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }
  return area;
};
