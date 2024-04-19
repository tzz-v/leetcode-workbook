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

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 两次递归，第一次递归遍历二叉树，找到与链表头节点值相等的元素，第二次递归比较链表值和树值

function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
  if (!root) return false;
  return (
    func(head, root) ||
    isSubPath(head, root.left) ||
    isSubPath(head, root.right)
  );
}
const func = (head: ListNode | null, root: TreeNode | null): boolean => {
  if (!head) return true;
  if (!root) return false;
  if (head.val === root.val) {
    return func(head.next, root.left) || func(head.next, root.right);
  }
  return false;
};
