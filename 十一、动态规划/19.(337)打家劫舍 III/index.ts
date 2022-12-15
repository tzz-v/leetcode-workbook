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

// 思路
// 采用后序遍历，得到每个节点偷或者不偷所能得到的金额》
// 从下往上遍历，遍历每个节点时，不需要考虑父节点，只需要考虑子节点。
// 某一节点：return ['偷当前节点所能得到的金额'， '不偷当前节点所能得到的金额']
// 偷：则只能取左右子节点不偷得到的金额，
// 不偷：则可以取左右子节点的能得到的最大金额。
// 公式：return [Math.max(left[0], left[1]) + Math.max(right[0], right[1])， root.val + left[0] + right[0]].
function rob(root: TreeNode | null): number {
  const func = (root) => {
    if (!root) return [0, 0];
    const left = func(root.left);
    const right = func(root.right);
    return [
      Math.max(left[0], left[1]) + Math.max(right[0], right[1]),
      root.val + left[0] + right[0],
    ];
  };
  return Math.max(...func(root));
}
