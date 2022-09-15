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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// 双重递归；
// 第一重递归用来遍历root的每个节点；
// 第二重递归用来比较每个节点和subRoot是否相等；

// 第一个递归return使用的 ||符号：左子树和右子树有一个和subRoot相等就说明条件成立；
// 第二个递归return使用的 &&符号：子树的左节点和右节点都和subRoot一一对应 才说明当前子树和subRoot相等；
var isSubtree = function (root, subRoot) {
  if (!root) return false;
  if (diff(root, subRoot)) return true;
  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};

const diff = (A, B) => {
  if (A === null && B === null) return true;
  if (A?.val !== B?.val) return false;
  return diff(A.left, B.left) && diff(A.right, B.right);
};
