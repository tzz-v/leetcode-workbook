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
 * @return {boolean}
 */

// 递归：
// 二叉树后序遍历
// 子问题：判断左右子树是否平衡；
// 终止条件：node === null
// 先判断其左右子树是否平衡；在判断当前节点的子树是否平衡，平衡则返回其高度，否则返回-1（表示不平衡。
// 如果存在一颗子树不平衡，则整个二叉树一定不平衡。
var isBalanced = function (root) {
  const getHeight = (node) => {
    if (!node) return null;
    const leftHeight = getHeight(node.left);
    const rightHeight = getHeight(node.right);
    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(leftHeight - rightHeight) > 1
    ) {
      return -1;
    }
    return Math.max(leftHeight, rightHeight) + 1;
  };
  return getHeight(root) !== -1;
};
