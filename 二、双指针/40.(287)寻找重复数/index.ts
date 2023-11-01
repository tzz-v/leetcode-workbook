// 寻找题目的有效信息，数组长度为n+1，包含1～n所有数字，且存在一个重复数字。
// 如果将数组转成链表，能构成一个环形链表：
// [1，3，4，2，2]
// 1->3->2->4
//       ^--|

// 使用快慢指针，找到环形链表的环入口
function findDuplicate(nums: number[]): number {
  let x = nums[0];
  let y = nums[nums[0]];

  while (x !== y) {
    x = nums[x];
    y = nums[nums[y]];
  }
  x = 0;
  while (x !== y) {
    x = nums[x];
    y = nums[y];
  }
  return x;
}
