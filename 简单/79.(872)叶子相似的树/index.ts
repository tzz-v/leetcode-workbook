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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const arr1 = func(root1);
  const arr2 = func(root2);
  return (
    arr1.length === arr2.length &&
    arr1.every((val, index) => val === arr2[index])
  );
}

const func = (root: TreeNode | null) => {
  if (!root) return [];
  if (!root.left && !root.right) {
    return [root.val];
  }
  return [...func(root.left), ...func(root.right)];
};
