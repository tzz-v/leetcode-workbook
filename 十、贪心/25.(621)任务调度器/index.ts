//  可以求出两个时间，
//    一个是不需要消耗冷却的最优时间：总执行时间为任务列表的长度。取较大值
//    一个是需要消耗冷却的时间：（n + 1） * （max - 1）+ tot；
//    max表示最大的任务次数；tot表示任务次数为max的任务的个数。
//    例[A,A,A,A,B,B,B,B,C,C,C,C,E,F]，n = 3：max为4，tot为3

//    A B C E
//    A B C F
//    A B C
//    A B C
//    执行时间就等于前三排组成的矩形时间加上最后一排任务的时间（3 + 1） * （4 - 1）+ 3；（其中需要消耗一秒的冷却）
function leastInterval(tasks: string[], n: number): number {
  let cnts = new Array<number>(26).fill(0);
  for (let c of tasks) cnts[c.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  let max = 0,
    tot = 0;
  for (let i = 0; i < 26; i++) max = Math.max(max, cnts[i]);
  for (let i = 0; i < 26; i++) tot += max == cnts[i] ? 1 : 0;
  return Math.max(tasks.length, (n + 1) * (max - 1) + tot);
}
