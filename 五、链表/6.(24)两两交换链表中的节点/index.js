/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 1.先建立一个虚拟头结点，方便交换前两个节点的值；
// 2.拿到p节点的下一个节点和下下个节点
// 3.交换他俩的位置；
// 4.p节点后移两位；
// 循环2,3,4，直至p.next == null;
// return root.next;
var swapPairs = function (head) {
  const root = new ListNode(0, head);
  let p = root;
  while (p.next !== null && p.next.next !== null) {
    let l = p.next;
    let r = p.next.next;
    l.next = r.next;
    r.next = l;
    p.next = r;
    p = l;
  }
  return root.next;
};
