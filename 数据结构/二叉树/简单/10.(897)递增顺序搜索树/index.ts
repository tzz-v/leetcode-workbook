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

function increasingBST(root: TreeNode | null): TreeNode | null {
  const list = new TreeNode(-1);
  var cur = list;
  const func = (node: TreeNode | null) => {
    if (!node) return;
    func(node.left);

    cur.right = node;
    node.left = null;
    cur = node;

    func(node.right);
  };

  func(root);
  return list.right;
}
