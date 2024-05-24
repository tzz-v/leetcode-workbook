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

// 思路：
// 参考「23.(112)路径总和」，使用后续遍历，将所有路径生成的数总和存到数组里。然后累加起来

function sumNumbers(root: TreeNode | null): number {
  const func = (root) => {
    if (root === null) return [];
    const left = func(root.left);
    const right = func(root.right);

    if (!left.length && !right.length) {
      return [root.val];
    } else {
      return [
        ...left.map((item) => `${root.val}` + item),
        ...right.map((item) => `${root.val}` + item),
      ];
    }
  };
  const arr = func(root);
  return arr.reduce((prev, cur) => Number(prev) + Number(cur));
}
