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
// 根据其有序的性质，逐一比较相邻元素，得到出现次数最多的值，并同步更新maxCount；

// 方法
// 递归函数外部维护res（要返回的众数数组）、prev（上一次的值）、count（当前值出现的次数）、maxCount（众数的频率）
// 采用中序遍历。

function findMode(root: TreeNode | null): number[] {
  let res = [];
  let prev = null;
  let count = 0;
  let maxCount = 0;
  // 中序遍历递归函数
  const func = (root) => {
    if (!root) return;
    func(root.left);
    // ---------------------------逻辑处理
    if (root.val === prev) {
      count++;
    } else {
      count = 1;
      prev = root.val;
    }

    if (count === maxCount) {
      res.push(prev);
    } else if (count > maxCount) {
      res = [prev];
      maxCount = count;
    }
    // ---------------------------结束
    func(root.right);
  };
  func(root);
  return res;
}
