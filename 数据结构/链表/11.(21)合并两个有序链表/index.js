/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// 创建一个新链表，遍历两个链表，依次放入相对小值；
// 结束循环后把相对长的链表接上；
var mergeTwoLists = function (list1, list2) {
  const node = new ListNode(-1);
  let root = node;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      root.next = list1;
      list1 = list1.next;
    } else {
      root.next = list2;
      list2 = list2.next;
    }
    root = root.next;
  }
  root.next = !!list1 ? list1 : list2;
  return node.next;
};
