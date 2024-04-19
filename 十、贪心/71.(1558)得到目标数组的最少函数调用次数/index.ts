// 逆向思维。数组内元素全是偶数时优先进行除二操作最优。数组内存在奇数元素时就对其进行减一操作，

function minOperations(nums: number[]): number {
  let res = 0;
  while (true) {
    let flag = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 !== 0) {
        res++;
        nums[i]--;
      }
      if (nums[i] > 0) {
        nums[i] /= 2;
        flag = true;
      }
    }
    if (flag) {
      res++;
    } else {
      break;
    }
  }
  return res;
}
