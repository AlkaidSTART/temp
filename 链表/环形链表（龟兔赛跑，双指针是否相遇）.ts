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
  let slow: ListNode4 | null = head;
  let fast: ListNode4 | null = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow?.next!;
    fast = fast.next?.next!;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
