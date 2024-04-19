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
// 需要先遍历一次链表，获取链表的长度。
// 在遍历一次链表，把链表平均分成k份

function splitListToParts(
  head: ListNode | null,
  k: number
): Array<ListNode | null> {
  const size = getListSize(head);
  const arr = dispense(size, k);

  let newHead = head;
  return arr.map((count) => {
    if (!newHead) return null;
    let cur = newHead;
    let i = 1;
    while (cur) {
      if (i === count) {
        const res = newHead;
        newHead = cur.next;
        cur.next = null;
        return res;
      } else {
        cur = cur.next;
        i++;
      }
    }
  });
}

const getListSize = (head: ListNode | null) => {
  let size = 0;
  let cur = head;
  while (cur) {
    cur = cur.next;
    size++;
  }
  return size;
};
const dispense = (size: number, k: number): number[] => {
  const aPart = Math.floor(size / k);
  const arr = new Array(k).fill(aPart);
  const rest = size % k;
  for (let i = 0; i < rest; i++) {
    arr[i]++;
  }
  return arr;
};
