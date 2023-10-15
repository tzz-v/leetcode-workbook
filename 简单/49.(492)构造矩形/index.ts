// 根据题意，矩形最大值不能超过area的平方根。
// 从area的平方根向下开始找能整除的值，就是最大宽度w形成的矩形。
function constructRectangle(area: number): number[] {
  let w = Math.floor(Math.sqrt(area));

  while (area % w !== 0) {
    w--;
  }
  return [Math.floor(area / w), w];
}
