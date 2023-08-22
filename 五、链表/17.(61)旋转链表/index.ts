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

// 通过快慢指针，获取倒数第k个元素（与链表长度取余）。
// 存在k大于链表长度的情况，因此快指针可能会走>1圈，

// 找到倒数第k个元素（与链表长度取余）后，将其当作头节点，遍历剩余节点，并将head节点放到新链表的末尾。
// - 注意考虑边界情况，链表小于2或k等于0时，直接返回head节点。
// - 找到的倒数第k个元素为null时，说明k正好是链表长度的倍数，直接返回head节点；

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k === 0) return head;
  let fast = head;
  let slow = head;
  while (fast) {
    if (!fast.next && k <= 0) break;
    fast = fast.next ?? head;
    if (k <= 0) {
      slow = slow.next;
    }
    k--;
  }
  if (!slow.next) return head;
  const newHead = slow.next;
  slow.next = null;
  let node = newHead;
  while (node && node.next) {
    node = node.next;
  }
  node.next = head;
  return newHead;
}
