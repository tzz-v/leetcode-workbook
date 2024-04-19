class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
1. 找到两个节点
    a. 使用滑动窗口，找到第k个节点和倒数第k个节点的前继节点。
2. 交换两个节点，分两种情况
    a. 要交换的两个节点挨着。
    b. 要交换的两个节点不挨着。
*/

function swapNodes(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next) return head;
  const newHead = new ListNode(0, head);
  let left = newHead;
  let right = newHead;

  let cur = newHead;
  let i = 0;
  while (cur) {
    if (i === k - 1) {
      left = cur;
      right = newHead;
    } else if (i > k) {
      right = right.next;
    }
    cur = cur.next;
    i++;
  }
  if (right.next === left) {
    const temp = right;
    right = left;
    left = temp;
  }
  if (left.next === right) {
    const temp = right.next;
    right.next = right.next.next;
    temp.next = right;
    left.next = temp;
  } else {
    const rightNext = right.next.next;
    const leftNext = left.next.next;
    const temp = left.next;
    left.next = right.next;
    left.next.next = leftNext;
    right.next = temp;
    right.next.next = rightNext;
  }
  return newHead.next;
}
