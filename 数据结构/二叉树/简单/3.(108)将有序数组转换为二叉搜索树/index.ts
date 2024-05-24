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
// 为保证二叉树的高度平衡，可以取数组的中间值当作root，且将数组分成左右两部分。
// 递归左右两个数组，重复上一步。直至被分割成空数组。

function sortedArrayToBST(nums: number[]): TreeNode | null {
  if (!nums.length) {
    return null;
  }
  const mid = Math.ceil(nums.length / 2) - 1;
  const left = sortedArrayToBST(nums.slice(0, mid));
  const right = sortedArrayToBST(nums.slice(mid + 1));
  return new TreeNode(nums[mid], left, right);
}
