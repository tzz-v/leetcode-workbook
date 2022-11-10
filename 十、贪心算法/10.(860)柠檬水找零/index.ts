// 思路：

// 遍历bills数组，模拟整个场景，判断零钱是否足够。
function lemonadeChange(bills: number[]): boolean {
  let fiveNum = 0;
  let tenNum = 0;
  for (let i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5:
        fiveNum++;
        break;
      case 10:
        fiveNum--;
        tenNum++;
        break;
      default:
        if (tenNum > 0) {
          tenNum--;
          fiveNum--;
        } else {
          fiveNum -= 3;
        }
    }
    if (fiveNum < 0 || tenNum < 0) {
      return false;
    }
  }
  return true;
}
