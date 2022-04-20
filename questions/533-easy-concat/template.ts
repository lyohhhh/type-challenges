// type Concat<T, U> = any

type Concat<T extends any[], U extends any[]> = [
  ...(T extends any[] ? T : []),
  ...(U extends any[] ? U : [])
];

// 1. 使用解构 判断是否是空数组
