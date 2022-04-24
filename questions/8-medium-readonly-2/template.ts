type MyReadonly2<T, K extends keyof T = keyof T> = {
  [U in keyof T as U extends K ? never : U]: T[U];
} & {
  readonly [U in K]: T[U];
};
