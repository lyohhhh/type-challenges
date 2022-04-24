type LookUp<U, T> = U extends { type: T } ? U : never;

// 可将 属性直接拿出来对比
