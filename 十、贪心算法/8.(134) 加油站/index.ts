// 思路：
// 暴力解：使用双for循环，模拟每个下标为起点的情况。找到中途没有断油，且最后还有剩余油量的起点。
// 贪心：
// 中途不能断油，则需要保证： 以i为起点，到当前位置j，油剩余量之和 > 0;

// 维护变量num，和起点start，当油量为负数，则说明[start,i]区间内都不能作为起始位置。起始位置从i+1算起，再从0计算curSum。

function canCompleteCircuit(gas: number[], cost: number[]): number {
  let total = 0; //维护一个剩余油量总和，如果不小于零，说明是一定可以跑完一圈的。
  let num = 0;
  let start = 0;
  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    num += gas[i] - cost[i];
    if (num < 0) {
      num = 0;
      start = i + 1;
    }
  }
  return total < 0 ? -1 : start;
}
