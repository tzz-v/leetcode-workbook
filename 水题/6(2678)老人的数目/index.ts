/**
 * 老人的数目
 * 难度：Easy
 * 标签：数组, 字符串
 */

// 在这里实现你的解决方案
function countSeniors(details: string[]): number {
  return details.filter((item) => Number(item.slice(11, 13)) > 60).length;
}
