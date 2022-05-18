/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 双指针，r先右移n次，然后一起后移直到r==null；
// 此时l.next就是要删除的元素；
// 先创建一个虚拟头结点，方便删除第一个元素；
var removeNthFromEnd = function (head, n) {
  const p = new ListNode(0, head);
  let l = p;
  let r = head;
  for (let i = 0; i < n; i++) {
    r = r.next;
  }
  while (r !== null) {
    l = l.next;
    r = r.next;
  }
  l.next = l.next.next;
  return p.next;
};
