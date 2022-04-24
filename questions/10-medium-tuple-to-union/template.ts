type TupleToUnion<T> = T extends (infer U)[] ? U : never;
// type TupleToUnion<T> = T extends unknown[] ? T[number] : never;
