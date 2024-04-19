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
// 按照二叉搜索树的性质进行递归查找到要删除的元素
// 找到要删除的元素后看看这个元素有没有左右子树，只存在一个子树的话，直接用其子树进行替换。两个子树都存在，可以用左子树进行替换，并将其右子树移动到左子树的最右下侧（右子树的所有值都大于左子树所有值）（反之亦可）。

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return null;
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else {
    if (root.left) {
      let node = root.left;
      while (node.right) {
        node = node.right;
      }
      node.right = root.right;
      return root.left;
    } else {
      return root.right;
    }
  }
  return root;
}
