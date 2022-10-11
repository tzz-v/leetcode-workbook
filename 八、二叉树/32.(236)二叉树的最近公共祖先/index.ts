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
//   总结了两种情况：
//    存在一个节点，两个节点p,q分别在这个节点的左右子树上，那么当前节点就是p,q节点的最近公共祖先；
//    存在一个节点，一个节点在其子树上，另一个节点是他本身，那么当前节点就是p,q节点的最近公共祖先；
//  可以参考「20.(257)二叉树的所有路径」的回溯，从下往上找，

// 第一种情况好查找，给递归函数设置返回值，回溯时发现某个节点满足第一种情况则直接返回该节点即可
// 为了处理第二种情况，可以找个第一个节点后，先将其返回。第二个元素有三种情况：
//  一：满足上面总结的第一种情况，
//  二：第二个元素是第一个元素的子树。
//  三：第二个元素是第一个元素的祖先。

// 满足情况二，继续返回第一个元素
// 满足情况三，则更新返回第二个元素

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) {
    return root;
  }
  if (!left) {
    return right;
  }
  return left;
}
