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
// 判断链表长度为0或1则返回原链表；
// 头指针.next指向null；
// 双指针while循环；
// 借助临时变量临时存储r.next，防止链表断裂，（有点类似使用临时变量交换两个元素：const temp = a;a=b;b=temp）;
// 更改r的next为上一个元素l；
// 指针后移；
var reverseList = function (head) {
  if (head === null || head.next === null) return head;

  let l = head;
  let r = head.next;
  l.next = null;
  while (r !== null) {
    const t = r.next;
    r.next = l;
    l = r;
    r = t;
  }
  return l;
};
