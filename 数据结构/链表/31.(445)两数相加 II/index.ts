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

// 先反转链表，再相加，注意进位，得到一个新链表

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1) return l2;
  if (!l2) return l1;

  const newList1 = reverseList(l1);
  const newList2 = reverseList(l2);

  let cur1 = newList1;
  let cur2 = newList2;
  let newCur = null;
  let remainder = 0;
  console.log(newList1);
  console.log(newList2);

  while (cur1 || cur2) {
    const val = (cur1?.val ?? 0) + (cur2?.val ?? 0) + remainder;
    const node = new ListNode(val >= 10 ? val % 10 : val, newCur);
    newCur = node;
    remainder = Math.floor(val / 10);
    cur1 = cur1?.next;
    cur2 = cur2?.next;
  }
  if (remainder) {
    newCur = new ListNode(1,newCur)
  }
  return newCur;
};

const reverseList = (list: ListNode): ListNode => {
  let cur = list;
  let last = null;
  while (cur) {
    const temp = cur.next
    cur.next = last;
    last = cur;
    cur = temp;
  }
  return last;
}