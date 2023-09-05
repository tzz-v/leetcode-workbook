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

// 归并排序（快排超时了。。）

function sortList(head: ListNode | null): ListNode | null {
  return toSortList(head, null);
}

const toSortList = (head: ListNode | null, tail: ListNode | null) => {
  if (!head) return head;
  if (head.next === tail) {
    head.next = null;
    return head;
  }
  let slow = head,
    fast = head;
  while (fast !== tail && fast.next !== tail) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return merge(toSortList(head, slow), toSortList(slow, tail));
};

const merge = (head1: ListNode | null, head2: ListNode | null) => {
  const node = new ListNode(0);
  let cur = node;
  while (head1 && head2) {
    if (head1.val < head2.val) {
      cur.next = head1;
      head1 = head1.next;
    } else {
      cur.next = head2;
      head2 = head2.next;
    }
    cur = cur.next;
  }
  cur.next = head1 ? head1 : head2;
  return node.next;
};
