class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val ?? 0;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}

function inorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  const res: number[] = [];
  res.push(...inorderTraversal(root.left));
  res.push(root.val);
  res.push(...inorderTraversal(root.right));
  return res;
}
