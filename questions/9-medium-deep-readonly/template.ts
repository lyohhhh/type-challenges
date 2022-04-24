type DeepReadonly<T> = {
  readonly [U in keyof T]: T[U] extends Function
    ? T[U]
    : T[U] extends Object
    ? DeepReadonly<T[U]>
    : T[U];
};

type Test<T> = T extends Object ? true : false;

let flag: Test<() => 123> = true;
