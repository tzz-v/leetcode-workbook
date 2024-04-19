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

// 使用快慢指针，快指针一次走两步，慢指针一次走一步，当快指针走到头时，慢指针正好走向中间节点

function middleNode(head: ListNode | null): ListNode | null {
  let left = head;
  let right = head;
  while (left && left.next && right && right.next) {
    left = left.next;
    right = right.next.next;
  }
  return left;
}
