type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer R>
  ? R extends Promise<unknown>
    ? MyAwaited<R>
    : R
  : never;

// 1. 传入的泛型应该继承自 Promise
// 2. R 是否是继承 Promise是的话递归不是返回 R、
