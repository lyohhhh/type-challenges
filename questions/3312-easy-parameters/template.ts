type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...arg: infer U
) => any
  ? U
  : never;

// 使用 infer U 生成一个变量
