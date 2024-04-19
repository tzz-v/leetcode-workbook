class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// 思路：
// 1. 找到数组最大值和最大值下标。
// 2. 根据下标将数组分成左右两部分。
// 3. 将数组的最大值设为当前节点的值，然后使用递归分别处理左右两部分为当前节点的左右子树。

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  if (!nums.length) return null;
  const max = Math.max(...nums);
  const maxIndex = nums.indexOf(max);
  const leftNums = nums.slice(0, maxIndex);
  const rightNums = nums.slice(maxIndex + 1);
  const cur = new TreeNode(max);
  cur.left = constructMaximumBinaryTree(leftNums);
  cur.right = constructMaximumBinaryTree(rightNums);
  return cur;
}
