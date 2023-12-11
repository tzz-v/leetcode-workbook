// truckSize是卡车能存放的箱子数量。
// boxTypes表示箱子的个数和装载单元。
// 优先放装载单元较大的箱子。
function maximumUnits(boxTypes: number[][], truckSize: number): number {
  boxTypes.sort((a, b) => b[1] - a[1]);

  let res = 0;
  for (let i = 0; i < boxTypes.length; i++) {
    if (boxTypes[i][0] <= truckSize) {
      res += boxTypes[i][0] * boxTypes[i][1];
      truckSize -= boxTypes[i][0];
    } else {
      res += truckSize * boxTypes[i][1];
      break;
    }
  }
  return res;
}
