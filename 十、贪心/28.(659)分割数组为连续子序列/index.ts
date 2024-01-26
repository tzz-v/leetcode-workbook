// 如果存在一个子序列以x-1结尾，那么将x加入已有的子序列比新建一个子序列更优

function isPossible(nums: number[]): boolean {
  let preArr: number[][] = [];
  preArr[0] = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    let flag = false;
    for (let j = preArr.length - 1; j >= 0; j--) {
      let curArr = preArr[j];
      if (nums[i] - 1 === curArr[curArr.length - 1]) {
        curArr.push(nums[i]);
        flag = true;
        break;
      }
    }
    if (flag === false) {
      preArr.push([nums[i]]);
    }
  }
  return preArr.every((item) => item.length >= 3);
}
