class NumMatrix {
  public nums: number[][] = [];
  constructor(matrix: number[][]) {
    const xlen = matrix.length;
    const ylen = matrix[0].length;
    this.nums = new Array(xlen).fill(0).map((_) => new Array(ylen).fill(0));
    for (let i = 0; i < xlen; i++) {
      for (let j = 0; j < ylen; j++) {
        const left = this.nums[i - 1]?.[j] ?? 0;
        const top = this.nums[i][j - 1] ?? 0;
        const leftTop = this.nums[i - 1]?.[j - 1] ?? 0;
        this.nums[i][j] = matrix[i][j] + left + top - leftTop;
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    const left = this.nums[row1 - 1]?.[col2] ?? 0;
    const top = this.nums[row2][col1 - 1] ?? 0;
    const leftTop = this.nums[row1 - 1]?.[col1 - 1] ?? 0;
    return this.nums[row2][col2] - left - top + leftTop;
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
