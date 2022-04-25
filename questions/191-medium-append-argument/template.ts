type AppendArgument<Fn extends Function, A> = Fn extends (
  ...args: infer P
) => infer R
  ? (...args: [...P, A]) => R
  : never;

// 使用函数参数解构 添加参数
