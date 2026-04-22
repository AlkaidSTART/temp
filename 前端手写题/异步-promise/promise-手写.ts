// 定义状态类型（只能用 type）
type PromiseStatus = "pending" | "fulfilled" | "rejected";

class MyPromise<T> {
  private status: PromiseStatus = "pending";
  private value: T | undefined;
  private reason: any;

  // 异步回调队列
  private onFulfilledCallbacks: ((value: T) => void)[] = [];
  private onRejectedCallbacks: ((reason: any) => void)[] = [];

  // 构造器
  constructor(executor: (resolve: (value: T) => void, reject: (reason: any) => void) => void) {
    const resolve = (value: T) => {
      if (this.status !== "pending") return;
      this.status = "fulfilled";
      this.value = value;
      this.onFulfilledCallbacks.forEach(cb => cb(this.value!));
    };

    const reject = (reason: any) => {
      if (this.status !== "pending") return;
      this.status = "rejected";
      this.reason = reason;
      this.onRejectedCallbacks.forEach(cb => cb(this.reason));
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  // then 核心
  then<TResult1 = T, TResult2 = never>(
    onFulfilled?: (value: T) => TResult1 | PromiseLike<TResult1>,
    onRejected?: (reason: any) => TResult2 | PromiseLike<TResult2>
  ): MyPromise<TResult1 | TResult2> {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : v => v as any;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : err => {
            throw err;
          };

    return new MyPromise((resolve, reject) => {
      const handle = (callback: () => any) => {
        setTimeout(() => {
          try {
            const res = callback();
            resolve(res);
          } catch (err) {
            reject(err);
          }
        }, 0);
      };

      if (this.status === "fulfilled") handle(() => onFulfilled!(this.value!));
      if (this.status === "rejected") handle(() => onRejected!(this.reason));
      if (this.status === "pending") {
        this.onFulfilledCallbacks.push(() => handle(() => onFulfilled!(this.value!)));
        this.onRejectedCallbacks.push(() => handle(() => onRejected!(this.reason)));
      }
    });
  }

  // catch
  catch<TResult = never>(
    onRejected?: (reason: any) => TResult | PromiseLike<TResult>
  ): MyPromise<T | TResult> {
    return this.then(undefined, onRejected);
  }
}
