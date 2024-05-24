/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */

//  二叉树后序遍历
// 从下往上遍历，叶子结点的个数就是path数组的长度，
// 递归，当前节点的path数组，等于左节点的path数组 + 右节点的path数组；终止条件： node === null；
// 如果是叶子结点，返回的path数组是叶子结点本身
// 反之则将path数组所有路径开头添加该节点；
var binaryTreePaths = function (root) {
  if (!root) return null;
  const pathLeft = binaryTreePaths(root.left) ?? [];
  const pathRight = binaryTreePaths(root.right) ?? [];

  const path = [...pathLeft, ...pathRight];
  if (!path.length) {
    return [`${root.val}`];
  }
  return path.map((item) => `${root.val}->${item}`);
};
