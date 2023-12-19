// 按照题意排序，

function largestNumber(nums: number[]): string {
  nums.sort((a, b) => {
    const strA = `${a}${b}`;
    const strB = `${b}${a}`;

    return Number(strB) - Number(strA);
  });
  while (nums[0] === 0 && nums.length > 1) {
    nums.shift();
  }
  return nums.join('');
}
