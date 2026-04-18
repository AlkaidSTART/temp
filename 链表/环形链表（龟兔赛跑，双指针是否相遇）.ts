class ListNode4 {
  val: number;
  next: ListNode4 | null;

  constructor(val?: number, next?: ListNode4 | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}
function hasCycle(head: ListNode4 | null): boolean {
  if (!head || !head.next) return false;

  return true;
}
