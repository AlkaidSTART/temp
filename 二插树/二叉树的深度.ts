//左子树与右子树深度较大者加1

class TreeNode1 {
  val: number;
  left: TreeNode1 | null;
  right: TreeNode1 | null;
  constructor(val: number, left?: TreeNode1 | null, right?: TreeNode1 | null) {
    this.val = val;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}
function maxDepth(root: TreeNode1 | null): number {
  if (!root) return 0;
  const leftlength = maxDepth(root.left);
  const rightlength = maxDepth(root.right);
  if (leftlength > rightlength) {
    return leftlength + 1;
  } else {
    return rightlength + 1;
  }
}
