/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 先转数组，然后使用双指针；
// 时间复杂度为O(n);

var isPalindrome = function (head) {
  const arr = [];
  let p = head;
  while (p) {
    arr.push(p.val);
    p = p.next;
  }
  console.log(arr);
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    if (arr[l] !== arr[r]) return false;
    l++;
    r--;
  }
  return true;
};
