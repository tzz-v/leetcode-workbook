/**
 * 美丽下标对的数目
 * 难度：Easy
 * 标签：数组, 哈希表, 数学, 计数, 数论
 */

// 在这里实现你的解决方案
function countBeautifulPairs(nums: number[]): number {
  const len = nums.length;
  const firstArr = nums.map((item) => Number(`${item}`[0]));
  const lastArr = nums.map((item) => Number(`${item}`[`${item}`.length - 1]));
  let res = 0;
  firstArr.forEach((val, idx) => {
    for (let j = idx + 1; j < len; j++) {
      const lastVal = lastArr[j];
      let flag = true;
      for (let i = 2; i <= val && i <= lastVal; i++) {
        if (val % i === 0 && lastVal % i === 0) {
          flag = false;
          break;
        }
      }
      if (flag) {
        res++;
      }
    }
  });
  return res;
}
