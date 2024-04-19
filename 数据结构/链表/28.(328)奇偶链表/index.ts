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

// 遍历链表，将偶数索引的节点从链表移除，并组成新链表；
// 将偶数链表放到单数链表的末尾

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  const even = head.next;

  let oddCur = head;
  let evenCur = even;

  while (oddCur && oddCur.next) {
    oddCur.next = oddCur.next.next;
    if (oddCur.next) {
      oddCur = oddCur.next;
      evenCur.next = oddCur.next;
      evenCur = evenCur.next;
    }
  }
  oddCur.next = even;
  return head;
}
