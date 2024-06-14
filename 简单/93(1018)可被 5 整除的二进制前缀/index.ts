// 计算累计的值是否能被5整除。避免数值过大，保存余数即可。
// val << 1 (把val转成二进制后在末尾加0在转回来)

function prefixesDivBy5(nums: number[]): boolean[] {
  const res = new Array(nums.length).fill(false);
  let val = 0;
  nums.forEach((num, i) => {
    val = ((val << 1) + num) % 5;
    if (val === 0) {
      res[i] = true;
    }
  });
  return res;
}
