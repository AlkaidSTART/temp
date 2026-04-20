// 二叉树的直径
//思路：递归计算左子树深度和右子树深度，与最大深度做比较，取较大者

class TreeNode4 {
  val: number;
  left: TreeNode4 | null;
  right: TreeNode4 | null;
  constructor(val: number, left?: TreeNode4 | null, right?: TreeNode4 | null) {
    this.val = val;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}
function maxDepth(root: TreeNode4 | null): number {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
function diameterOfBinaryTree(root: TreeNode4 | null): number {
  if (!root) return 0;
  const leftlength = maxDepth(root.left);
  const rightlength = maxDepth(root.right);
  const diameter = leftlength + rightlength;
  return Math.max(
    diameter,
    Math.max(diameterOfBinaryTree(root.left), diameterOfBinaryTree(root.right))
  );
}
