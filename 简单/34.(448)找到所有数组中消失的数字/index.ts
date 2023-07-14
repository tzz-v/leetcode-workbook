// 思路：把数组中存在的数字排除，剩余的就是不存在的数字。
// 可以通过通过数组下标来标记已经存在的数字。因为数组中的数字不会超过数组长度n，遍历数组，把数组值当作下标，让其+n，表示下标值存在。

// 第二遍历，数组项值小于n，则说明当前下标值不存在。

function findDisappearedNumbers(nums: number[]): number[] {
  const n = nums.length;
  nums.forEach((num) => {
    // 此时的下标值需要取余数，因为下标项可能经过+n操作。通过取余数，可以拿到初始值
    const i = (num - 1) % n;
    nums[i] += n;
  });
  const res: number[] = [];

  nums.forEach((item, i) => {
    if (item <= n) {
      res.push(i + 1);
    }
  });
  return res;
}
