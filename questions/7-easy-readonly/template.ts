// type MyReadonly<T> = any

/**
 * A:
 * 加上关键字 返回
 */
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};
