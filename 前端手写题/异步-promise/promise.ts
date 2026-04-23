type Status = "pending" | "fulfilled" | "rejected";

class MPromise<T> {
  private status: Status = "pending";
  private value: T | undefined;
  private reason: unknown;

  constructor() {}
}
