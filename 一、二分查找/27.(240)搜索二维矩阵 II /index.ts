// z字形查找；
// 同二分查找，从矩阵右上角开始查找：
//  matrix[x,y] === target: 说明找到元素
//  matrix[x,y] > target: 由于每一列元素都是升序排列，说明当前列元素都大于target，把当前列的值过滤掉，y--；
//  matrix[x,y] < target: 由于每一行元素都是升序排列，说明当前行元素都小于target，把当前行的值过滤掉，x++；

function searchMatrix(matrix: number[][], target: number): boolean {
  let x = 0,
    y = matrix[0].length - 1;

  while (x < matrix.length && y >= 0) {
    if (matrix[x][y] === target) {
      return true;
    }
    if (matrix[x][y] > target) {
      y--;
    } else {
      x++;
    }
  }
  return false;
}
