type MyReadonly2<T, K extends keyof T = keyof T> = {
  [U in keyof T as U extends K ? never : U]: T[U];
} & {
  readonly [U in K]: T[U];
};

// TIP:
// interface Todo1 {
//   title: string
//   description?: string
//   completed: boolean
// }

// 只有一个泛型时
// K extends keyof T = keyof T
// =>
//  k = {
//   title: string
//   description?: string
//   completed: boolean
// }

// 1.遍历 T 添加约束 U 是 K 的子级
// 2.遍历 K 添加 readonly 关键字
// 3.& => 取 1.2 的交集
