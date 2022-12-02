// 思路：

// 看起来没什么头绪， 但转换下思路，本题求的就是将一堆石堆分成两堆，重量尽量相近。这么一看， 和上一题就没什么区别了。

function lastStoneWeightII(stones: number[]): number {
  let num = stones.reduce((prev, cur) => prev + cur);
  const target = Math.floor(num / 2);
  const dp = new Array(target + 1).fill(0);
  for (let i = 0; i < stones.length; i++) {
    for (let j = target; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }
  return num - dp[target] - dp[target];
}
