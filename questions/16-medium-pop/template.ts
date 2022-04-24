type Pop<T extends any[]> = T extends [...infer First, infer Last]
  ? First
  : never;

// 使用解构
