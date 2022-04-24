type Last<T extends any[]> = T extends [...infer Result, infer Last]
  ? Last
  : never;

// 使用解构
