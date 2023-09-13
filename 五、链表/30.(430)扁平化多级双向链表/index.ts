/**
 * Definition for node.
 * class Node {
 *     val: number
 *     prev: Node | null
 *     next: Node | null
 *     child: Node | null
 *     constructor(val?: number, prev? : Node, next? : Node, child? : Node) {
 *         this.val = (val===undefined ? 0 : val);
 *         this.prev = (prev===undefined ? null : prev);
 *         this.next = (next===undefined ? null : next);
 *         this.child = (child===undefined ? null : child);
 *     }
 * }
 */

//深度优先遍历 找到当前节点子链表的尾节点，将当前节点和子链表的头节点相连，将子链表的尾节点和当前节点的后继节点相连

function flatten(head: Node | null): Node | null {
  func(head);
  return head;
}

const func = (node: Node | null): Node | null => {
  let cur = node;
  let last = null;

  while (cur) {
    let next = cur.next;
    if (cur.child) {
      const childLast = func(cur.child);
      next = cur.next;
      cur.next = cur.child;
      cur.child.prev = cur;

      if (next) {
        childLast.next = next;
        next.prev = childLast;
      }
      cur.child = null;
      last = childLast;
    } else {
      last = cur;
    }
    cur = next;
  }

  return last;
};
