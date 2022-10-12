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

// 思路：和上一题比，我们可以利用下搜索二叉树的性质：
// - 如果根结点的左子树存在，则左子树的所有值均小于根结点的值。
// - 如果根结点的右子树存在，则右子树的所有值均大于根结点的值。
// - 根结点的左右子树均为二叉搜索树。

// 可以比较p、q节点值和root值的大小，
//  - 两个节点值都小于root，说明其祖先在root的左子树上，只需递归其左子树
//  - 两个节点值都大于root，说明其祖先在root的右子树上，只需递归其右子树
//  - 否则则说明两个节点分别在左右两个子树上，或一个是节点本身，另一个是其子树。返回当前节点

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root) return null;
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
}
