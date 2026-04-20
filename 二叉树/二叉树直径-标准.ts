class TreeNode5 {
  val: number;
  left: TreeNode4 | null;
  right: TreeNode4 | null;
  constructor(val: number, left?: TreeNode5 | null, right?: TreeNode5 | null) {
    this.val = val;
    this.left = left ?? null;
    this.right = right ?? null;
  }
}
