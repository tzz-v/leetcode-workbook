// 每次挑选两个剩余杯子最多的数组项进行装水。直到全都装满
function fillCups(amount: number[]): number {
  let res = 0;
  while (amount[0] > 0 || amount[1] > 0 || amount[2] > 0) {
    if (amount[0] <= amount[1] && amount[0] <= amount[2]) {
      amount[1]--;
      amount[2]--;
    } else if (amount[1] <= amount[0] && amount[1] <= amount[2]) {
      amount[0]--;
      amount[2]--;
    } else if (amount[2] <= amount[0] && amount[2] <= amount[1]) {
      amount[0]--;
      amount[1]--;
    }
    res++;
  }
  return res;
}
