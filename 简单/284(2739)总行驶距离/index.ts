/**
 * 总行驶距离
 * 难度：Easy
 * 标签：数学, 模拟
 */

// 在这里实现你的解决方案
function distanceTraveled(mainTank: number, additionalTank: number): number {
  let res = 0;

  while (mainTank >= 5) {
    res += 50;
    if (additionalTank) {
      mainTank -= 4;
      additionalTank--;
    } else {
      mainTank -= 5;
    }
  }
  res += mainTank * 10;
  return res;
}
