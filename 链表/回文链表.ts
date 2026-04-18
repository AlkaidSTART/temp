class ListNode3 {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode3 | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}
function isPalindrome(head: ListNode3 | null): boolean {
  let slow = head,
    fast = head;

  return true;
}
