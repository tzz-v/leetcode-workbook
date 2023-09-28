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

// 把list1的a节点的父节点的后继节点改为list2，并把list1的b节点的后继节点放到list2的末尾
function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  const newHead = new ListNode(0, list1);
  let cur = newHead;
  let lastList: ListNode | null;
  let i = 0;
  while (cur.next) {
    if (i === a) {
      lastList = cur.next;
      cur.next = list2;
      break;
    }
    i++;
    cur = cur.next;
  }
  while (cur.next) {
    cur = cur.next;
  }
  while (lastList) {
    if (i === b) break;
    i++;
    lastList = lastList.next;
  }
  cur.next = lastList.next;
  return newHead.next;
}
