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

function nextLargerNodes(head: ListNode | null): number[] {
  const res: number[] = [];
  let cur = head;

  while (cur) {
    res.push(cur.val);
    cur = cur.next;
  }

  res.forEach((val, i) => {
    let max = 0;
    for (let j = i + 1; j < res.length; j++) {
      if (res[j] > val) {
        max = res[j];
        break;
      }
    }
    res[i] = max;
  });

  return res;
}
