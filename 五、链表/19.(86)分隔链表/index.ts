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

// 使用快慢指针，快指针检查特定值节点之后小于特定值的节点，移除掉这个节点并插入到慢指针之后。
// 初始化慢指针：第一个大于等于特定值节点的上一个节点。
// 创建一个头节点，方便处理。

function partition(head: ListNode | null, x: number): ListNode | null {
  const newHead = new ListNode(-Infinity, head);
  let fast = newHead;
  let slow;
  while (fast && fast.next) {
    if (fast.next.val >= x && !slow) {
      slow = fast;
    }
    if (fast.next.val < x && slow) {
      const node = fast.next;
      fast.next = fast.next.next;
      node.next = slow.next;
      slow.next = node;
      slow = slow.next;
    } else {
      fast = fast.next;
    }
  }
  return newHead.next;
}
