/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// 遍历整个链表，删除等于val的项；
// 移除下一项：cur.next = cur.next.next;
// 方便删除第一个节点，先手动添加一个头结点；
var removeElements = function (head, val) {
  if (head === null) {
    return head;
  }
  const res = new ListNode(0, head);
  let cur = res;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return res.next;
};
