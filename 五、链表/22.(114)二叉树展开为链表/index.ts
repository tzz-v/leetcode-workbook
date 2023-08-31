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

/**
 Do not return anything, modify root in-place instead.
 */

//  前续遍历，将当前节点的左节点挪到当前节点右侧，将当前节点的右节点的挪到左节点的右侧。
function flatten(root: TreeNode | null): any {
  let cur = root;
  while (cur) {
    if (!cur.left) {
      cur = cur.right;
      continue;
    }
    const right = cur.right;
    cur.right = cur.left;
    let last = cur.left;
    while (last.right) {
      last = last.right;
    }
    last.right = right;
    cur.left = null;
  }
}
