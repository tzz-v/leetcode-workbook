class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// 给链表加个头节点，方便移除头部节点
// 遍历每个节点，观察当前节点的后续节点是否是重复节点。进行相应处理
// 最后返回新的头节点的next节点

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const newHead = new ListNode(0, head);
  let slow = newHead;
  let fast = slow.next;

  while (slow && slow.next) {
    if (fast.val === fast?.next?.val) {
      while (fast.val === fast.next?.val) {
        fast = fast.next;
      }
      slow.next = fast.next;
    } else {
      slow = slow.next;
    }
    fast = slow.next;
  }
  return newHead.next;
}
