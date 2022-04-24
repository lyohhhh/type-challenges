declare function PromiseAll<T extends unknown[]>(
  values: readonly [...T]
): Promise<{
  [U in keyof T]: T[U] extends Promise<infer E> ? E : T[U];
}>;
const promiseAllTest1 = PromiseAll([1, 2, 3] as const);
type Type = [typeof promiseAllTest1, Promise<[1, 2, 3]>];
