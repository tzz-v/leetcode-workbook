/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 继上一题，l==r说明有环，把其中一个指针重新至于head；然后两个指针都一步一步的走，最终他们会在入环节点相遇；
var detectCycle = function (head) {
  if (head === null) return null;
  let l = head;
  let r = head;
  while (r.next !== null && r.next.next !== null) {
    l = l.next;
    r = r.next.next;
    if (l == r) {
      l = head;
      while (l !== r) {
        l = l.next;
        r = r.next;
      }
      return l;
    }
  }
  return null;
};
