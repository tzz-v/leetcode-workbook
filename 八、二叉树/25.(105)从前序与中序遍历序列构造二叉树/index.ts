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

// 同上一题
// 前序遍历数组的构成：[ root, ...[root左子树的值数组], ...[root右子树的值数组]]

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!inorder.length) return null;
  const cur = new TreeNode(preorder.shift());
  const index = inorder.indexOf(cur.val);
  const leftInorder = inorder.slice(0, index);
  const rightInorder = inorder.slice(index + 1);
  const leftPreorder = preorder.slice(0, leftInorder.length);
  const rightPreorder = preorder.slice(leftInorder.length);
  cur.left = buildTree(leftPreorder, leftInorder);
  cur.right = buildTree(rightPreorder, rightInorder);
  return cur;
}
