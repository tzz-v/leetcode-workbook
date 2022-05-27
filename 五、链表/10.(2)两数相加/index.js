/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 新建一个链表，使它每个节点的val=两个链表项相加；
// 注意节点可能为null的情况；

var addTwoNumbers = function (l1, l2) {
  const root = new ListNode(0, null);
  let p = root;
  let p1 = l1;
  let p2 = l2;
  while (p1 !== null || p2 !== null) {
    const num = (p.val ?? 0) + (p1?.val ?? 0) + (p2?.val ?? 0);
    p.val = num > 9 ? num % 10 : num;

    if (num > 9) {
      p.next = new ListNode(1, null);
    } else if (
      (p1?.next && p1.next !== null) ||
      (p2?.next && p2.next !== null)
    ) {
      p.next = new ListNode(0, null);
    }

    p = p.next;
    p1 = p1?.next ?? null;
    p2 = p2?.next ?? null;
  }
  return root;
};
