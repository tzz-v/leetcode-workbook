/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 两次二分查找；
// 先找到最后一个不大于target的行；
// 在当前行寻找target是否存在；
// 时间复杂度为O(logm + logn) => O(logmn)；
var searchMatrix = function (matrix, target) {
  let l = 0;
  let r = matrix.length - 1;
  let indexI;
  while (l <= r) {
    const mid = parseInt((l + r) / 2);
    if (matrix[mid][0] === target) return true;
    if (matrix[mid][0] < target) {
      indexI = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  if (typeof indexI === 'number') {
    let l = 1;
    let r = matrix[0].length - 1;
    while (l <= r) {
      const mid = parseInt((l + r) / 2);
      console.log(matrix[indexI]);
      if (matrix[indexI][mid] === target) return true;
      if (matrix[indexI][mid] < target) {
        l = mid + 1;
      } else {
        r = r - 1;
      }
    }
  }
  return false;
};

// 或者直接一次二分查找，需要将mid转化为数组下标；
// 时间复杂度也是O(logmn)
var searchMatrix = function (matrix, target) {
  let l = 0;
  let r = matrix.length * matrix[0].length;
  while (l <= r) {
    const mid = parseInt((l + r) / 2);
    const { x, y } = generateIndexByNum(mid, matrix[0].length);
    if (matrix[x][y] === target) return true;
    if (matrix[x][y] > target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return false;
};

const generateIndexByNum = (num, col) => {
  if (num === 0) return { x: 0, y: 0 };
  const x = num % col === 0 ? parseInt(num / col) - 1 : parseInt(num / col);
  const y = num % col === 0 ? col - 1 : (num % col) - 1;
  return { x, y };
};
