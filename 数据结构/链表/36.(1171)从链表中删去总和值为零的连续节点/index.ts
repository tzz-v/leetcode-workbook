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

// 遍历链表，计算链表的前缀和，并将前缀和对应的节点存入哈希表中。
// 找规律：如何存在相同的前缀和，则说明链表中存在一段元素的和等于0，将这一段移除掉
// 再次遍历链表，计算链表的前缀和，哈希表中对应的前缀和节点是最后一次出现相同前缀和的节点，
// 我们将这个节点的下一个节点，赋值给当前节点的后继节点，中间跳过的部分总和为0；

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  const map = new Map<number, ListNode>();
  const newHead = new ListNode(0, head);
  let cur = newHead;
  let prefix = 0;
  while (cur) {
    prefix += cur.val;
    map.set(prefix, cur);
    cur = cur.next;
  }
  cur = newHead;
  prefix = 0;
  while (cur) {
    prefix += cur.val;
    cur.next = map.get(prefix)?.next;
    cur = cur.next;
  }
  return newHead.next;
}
