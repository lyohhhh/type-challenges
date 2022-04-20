// type If<C, T, F> = any;

type If<C extends boolean, T, F> = C extends true ? T : F;

// 1.约束泛型 C 为 Boolean
// 2.三元表达式
