class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 将链表分成三段，反转第二段，然后将第一段链表的尾节点的next指向第二段链表的头节点，将第二段链表的尾节点的next指向第三段链表的头节点，组成新的链表；
// 要点 ：
// - 找到第一段链表的尾节点。
// - 反转第二段链表。
// - 找到第二段链表的尾节点。
// - 找到第二段链表的头节点。
// - 找到第三段链表的头节点。
// 创建一个头节点，方便操作。

function reverseBetween(
  head: ListNode | null,
  left: number,
  right: number
): ListNode | null {
  if (!head?.next) return head;
  if (left === right) return head;

  const newHead = new ListNode(0, head);
  let leftNode;
  let rightNode;
  let reverseNode;
  let cur: ListNode | null = newHead;
  let i = 0;
  while (cur) {
    i++;
    if (leftNode) {
      if (i === left + 1) {
        rightNode = cur;
      }
      const temp = cur.next;
      cur.next = reverseNode;
      reverseNode = cur;
      cur = temp;
      if (i > right) {
        rightNode.next = cur;
        break;
      }
      continue;
    }
    if (i === left) {
      leftNode = cur;
    }
    cur = cur.next;
  }
  leftNode.next = reverseNode;
  return newHead.next;
}
