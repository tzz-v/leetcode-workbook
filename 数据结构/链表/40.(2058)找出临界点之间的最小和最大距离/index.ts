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

function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
  let cur = head;
  let i = 1;
  let first: number;
  let prev: number;
  let minInterval;
  while (cur.next.next) {
    if (
      (cur.val > cur.next.val && cur.next.next.val > cur.next.val) ||
      (cur.val < cur.next.val && cur.next.next.val < cur.next.val)
    ) {
      if (!first) first = i;
      if (prev) {
        minInterval = Math.min(minInterval ?? Infinity, i - prev);
      }
      prev = i;
    }
    i++;
    cur = cur.next;
  }
  const maxInterval = !!prev && prev !== first ? prev - first : -1;
  return [minInterval ?? -1, maxInterval];
}
