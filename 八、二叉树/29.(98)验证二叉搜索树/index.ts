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

// 上一题（28.(700)二叉搜索树中的搜索）提到了二叉搜索树的定义：
// - 如果根结点的左子树存在，则左子树的所有值均小于根结点的值。
// - 如果根结点的右子树存在，则右子树的所有值均大于根结点的值。
// - 根结点的左右子树均为二叉搜索树。

// 进而可以衍生出一个性质：中序遍历二叉搜索树得到的序列为有序序列。

// 因此，我们可以对二叉树进行中序遍历，判断当前遍历到的节点值大于前一个遍历到的节点值即可。
// 如果均大于则说明这个序列是有序的，整棵树树是二叉搜索树

// 参考：
// 【2.(94)二叉树的中序遍历】
function isValidBST(root: TreeNode | null): boolean {
  let prevVal = -Infinity;
  let flag = true;
  const func = (node: TreeNode | null) => {
    // 优化：每次递归，先判断 flag是否为false，为false则说明当前树已经确定不是二叉搜索树了，不必在继续向后遍历了。
    if (!node || !flag) return;
    func(node.left);
    if (node.val <= prevVal) {
      flag = false;
    }
    prevVal = node.val;
    func(node.right);
  };
  func(root);
  return flag;
}
