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

// 找规律，
// 将第二个链表放到第一个链表后面，
// 将第一个链表放到第二个链表后面，
// 按这两个排列遍历，如果有相交，返回相交元素，没有，最后会同时遍历到null；

// 例：相交元素：8
// 4, 1, 8, 4, 5
// 5, 6, 1, 8, 4, 5

// 排列
// 4, 1, 8, 4, 5, 5, 6, 1, 8(相交), 4, 5
// 5, 6, 1, 8, 4, 5, 4, 1, 8(相交), 4, 5

function getIntersectionNode(
  headA: ListNode | null,
  headB: ListNode | null
): ListNode | null {
  let left = headA;
  let right = headB;

  while (left !== right) {
    left = left ? left.next : headB;
    right = right ? right.next : headA;
  }
  return left;
}
