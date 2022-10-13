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

//思路：可以不用改变其本身结构，按照搜索二叉树的规则遍历，直接遍历到末尾结点后插入结点即可

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
  if (!root) return new TreeNode(val);
  if (val > root.val) {
    if (root.right) {
      insertIntoBST(root.right, val);
    } else {
      root.right = new TreeNode(val);
    }
  }
  if (val < root.val) {
    if (root.left) {
      insertIntoBST(root.left, val);
    } else {
      root.left = new TreeNode(val);
    }
  }
  return root;
}
