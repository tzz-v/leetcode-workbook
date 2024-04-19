/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 双指针，一个一次走两步，一个一次走一步，如果是环形链表，那么他俩一定会碰到。（floyd判圈算法）
// 反证一下，如果链表没有环，慢指针永远也追不上快指针；

var hasCycle = function (head) {
  let l = head;
  let r = head;
  while (r !== null && r.next !== null) {
    l = l.next;
    r = r.next.next;
    if (l === r) {
      return true;
    }
  }
  return false;
};
