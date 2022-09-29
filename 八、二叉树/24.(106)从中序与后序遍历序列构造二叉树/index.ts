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

// 思路：找规律得。
// 后序遍历数组的组成：[...[root左子树的值数组], ...[root右子树的值数组], root]；
// 中序遍历数组的组成：[...[root左子树的值数组],root, ...[root右子树的值数组]]；
// 后序遍历的最后一项是根结点的值，根据这个值可以将中序遍历的数组分成两部分，根结点的左右子树。
// 例：
// inorder  :9|   3   |15|20|7
// postorder:9  |  15|7|20|  3

// 然后我们可以得到：1.根结点的值；2.左子树的inorder数组和postorder数组；3.左子树的inorder数组和postorder数组。
// 根据这3点，递归下去，就能构造出一个二叉树。

// 解决：
// 1.根结点的值：postorder的最后一项；
// 2.左右子树的inorder数组和postorder数组： 寻找根结点的值在inorder数组中的位置，对其进行切割，然后根据inorder左右数组的长度，对postorder数组进行切割
// 3.递归处理左右区间。
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!inorder.length) return null;
  const cur = new TreeNode(postorder.pop());
  const i = inorder.indexOf(cur.val);
  const leftInorder = inorder.slice(0, i);
  const rightInorder = inorder.slice(i + 1);
  const leftPostorder = postorder.slice(0, leftInorder.length);
  const rightPostorder = postorder.slice(leftInorder.length);
  cur.left = buildTree(leftInorder, leftPostorder);
  cur.right = buildTree(rightInorder, rightPostorder);
  return cur;
}
