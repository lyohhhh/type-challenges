// type MyExclude<T, U> = any

/**
 * A:
 * 类型 T 可以分配给类型 U ? never : U
 */

type MyExclude<T, U> = T extends U ? never : T;
