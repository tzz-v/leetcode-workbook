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

// 插入排序：维持链表前段部分有序，并将后段部分节点插入到前端部分中，直至后段部分节点全部插入完成。
// 遍历每个节点，找到它所在的新位置，（从前往后找，找到第一个大于它的节点，将这个节点插入到第一个大于它的节点的前面）；
// 方便操作，给链表加一个虚拟头节点。

function insertionSortList(head: ListNode | null): ListNode | null {
  const newHead = new ListNode(-Infinity, head);
  let cur = newHead.next;
  while (cur && cur.next) {
    let minNode = newHead;
    while (minNode.next.val < cur.next.val) {
      minNode = minNode.next;
    }
    if (minNode.next === cur.next) {
      cur = cur.next;
    } else {
      const temp = cur.next;
      cur.next = cur.next.next;
      temp.next = minNode.next;
      minNode.next = temp;
    }
  }
  return newHead.next;
}
