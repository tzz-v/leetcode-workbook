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
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
  const arr = [];
  let cur = head;
  while (cur && cur.next) {
    cur = cur.next;
    arr.push(cur);
  }

  cur = head;
  while (arr.length) {
    cur.next = arr.pop();
    cur = cur.next;
    if (arr.length) {
      cur.next = arr.shift();
      cur = cur.next;
    }
  }
  if (cur) {
    cur.next = null;
  }
}
