/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @pBaram {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 先拿到两个链表的长度；
// 遍历长链表，使它的剩余长度和短链表保持一致；
// 两个链表同时遍历，判断是否有相等的节点；
var getIntersectionNode = function (headA, headB) {
  let lenA = 0;
  let pA = headA;
  while (pA !== null) {
    pA = pA.next;
    lenA++;
  }
  let lenB = 0;
  let pB = headB;
  while (pB !== null) {
    pB = pB.next;
    lenB++;
  }
  pA = headA;
  pB = headB;
  if (lenA > lenB) {
    const num = lenA - lenB;
    for (let i = 0; i < num; i++) {
      pA = pA.next;
    }
  } else {
    const num = lenB - lenA;
    for (let i = 0; i < num; i++) {
      pB = pB.next;
    }
  }
  while (pA !== pB) {
    pA = pA.next;
    pB = pB.next;
  }
  return pA;
};

// 创建两个指针，同时遍历，当pA遍历完A链表后指向B链表的头结点，继续遍历；
// 当pB遍历完B链表后指向A链表的头结点，继续遍历；
// 当指针A和B指向同一个节点或都指向null时，返回他们指向的节点或null；
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;
  let pA = headA;
  let pB = headB;
  while (pA !== pB) {
    if (pA === null) {
      pA = headB;
    } else {
      pA = pA.next;
    }
    if (pB === null) {
      pB = headA;
    } else {
      pB = pB.next;
    }
  }
  return pA;
};
