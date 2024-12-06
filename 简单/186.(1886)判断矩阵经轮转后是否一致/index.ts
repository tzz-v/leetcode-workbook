// 旋转矩阵进行比较，之多旋转3次
function findRotation(mat: number[][], target: number[][]): boolean {
  let count = 0;
  while (JSON.stringify(mat) !== JSON.stringify(target)) {
    count++;
    if (count === 4) return false;
    spin(mat);
  }
  return true;
}

// 旋转矩阵，先上下水平翻转，再主对角线翻转。最后的结果就是90度旋转。
const spin = (mat: number[][]) => {
  const len = mat.length;
  for (let i = 0; i < len / 2; i++) {
    for (let j = 0; j < len; j++) {
      [mat[i][j], mat[len - i - 1][j]] = [mat[len - i - 1][j], mat[i][j]];
    }
  }

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }
};
