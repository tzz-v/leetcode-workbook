/**
 * 满足目标工作时长的员工数目
 * 难度：Easy
 * 标签：数组
 */

// 在这里实现你的解决方案
function numberOfEmployeesWhoMetTarget(
  hours: number[],
  target: number
): number {
  return hours.filter((item) => item >= target).length;
}
