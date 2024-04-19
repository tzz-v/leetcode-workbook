/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 使用快慢指针，让快指针先走n次，然后快慢指针同时走。
// 当快指针走到null的时候，慢指针指向的就是倒数第n个节点的上一个节点。
// 特殊情况：当快指针走到null时，慢指针还没走，此时说明第一个元素是待删除元素（n <= 链表的数目）。

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let fast = head;
  let slow = head;
  let i = 0;
  while (fast) {
    fast = fast.next;
    if (i > n) {
      slow = slow.next;
    } else {
      i++;
    }
  }
  if (i === n) {
    return head.next;
  }
  slow.next = slow.next.next;
  return head;
}
