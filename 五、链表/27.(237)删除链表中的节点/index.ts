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

/**
 Do not return anything, modify it in-place instead.
 */

// 将删除节点的后续节点的值依次往前挪，最后删除链表尾节点；
function deleteNode(node: ListNode | null): void {
  let cur = node;
  while (cur && cur.next) {
    cur.val = cur.next.val;
    if (cur.next.next) {
      cur = cur.next;
    } else {
      cur.next = null;
    }
  }
}
