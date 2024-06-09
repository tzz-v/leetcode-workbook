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

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  const [xLevel, xParent] = func(root, x, -1);
  const [yLevel, yParent] = func(root, y, -1);
  return xLevel === yLevel && xParent !== yParent;
}

const func = (
  root: TreeNode | null,
  val: number,
  parentVal: number,
  level = 0
) => {
  if (!root) return;
  if (root.val === val) {
    return [level, parentVal];
  }
  return (
    func(root.left, val, root.val, level + 1) ??
    func(root.right, val, root.val, level + 1)
  );
};
