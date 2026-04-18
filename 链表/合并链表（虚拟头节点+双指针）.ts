class ListNode5 {
  val: number;
  next: ListNode5 | null;

  constructor(val?: number, next?: ListNode5 | null) {
    this.val = val ?? 0;
    this.next = next ?? null;
  }
}

function mergeTwoLists(list1: ListNode5 | null, list2: ListNode5 | null): ListNode5 | null {
  return list1;
}
