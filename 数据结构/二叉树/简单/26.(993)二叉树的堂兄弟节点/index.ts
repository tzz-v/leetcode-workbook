  class TreeNode {
      val: number
      left: TreeNode | null
      right: TreeNode | null
      constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.left = (left===undefined ? null : left)
          this.right = (right===undefined ? null : right)
      }
  }

function isCousins(root: TreeNode | null, x: number, y: number): boolean {
  const xLevel = func(root, x);
  const yLevel = func(root, y);
  console.log(xLevel);
  console.log(yLevel);
  return xLevel === yLevel;
};

const func = (root: TreeNode | null, val: number, level= 0) => {
  if (!root) return;
  if (root.val === val) return level;
  return func(root.left, val level + 1) ?? func(root.left, val level + 1)
}