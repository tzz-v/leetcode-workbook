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

// 找组件的起始位置，有几个起始位置，就有几个组件
// 起始位置：当前元素在 nums 中，且前一个元素不在 nums 中
function numComponents(head: ListNode | null, nums: number[]): number {
  let res = 0;
  let cur = head;
  let isFirst = false;

  while (cur) {
    if (nums.includes(cur.val)) {
      if (!isFirst) {
        res++;
        isFirst = true;
      }
    } else {
      isFirst = false;
    }
    cur = cur.next;
  }
  return res;
}
