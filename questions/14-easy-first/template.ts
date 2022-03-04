// type First<T extends any[]> = any

/**
 * A:
 * T 是否能够分配给空数组 [] ? 是的话返回 never 否则  返回 T[0]
 */
// 1.
// type First<T extends any[]> = T extends [] ? never : T[0];
// type First<T extends any[]> = T["length"] extends 0 ? never : T[0];
// 2.
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;
// 3.
type First<T extends any[]> = T extends [infer F, ...infer Rest] ? F : never;
type TArr = First<[3, 2, 1]>;

function FirstFunc(arr) {
  /**
   * 1. 判断 arr 是否是一个空数组
   *                     ===
   *    ts 可以使用 arr extends []
   *    js 直接判断 length
   */
  // return !arr.length ? "never" : arr[0];
  /**
   * 2. 判断数组第一个是否存在在数组中 ? 返回第一个元素 : 返回 never
   */
  // return arr.includes(arr[0]) ? arr[0] : 'never'
  /**
   * 3. 解构
   */
  const [f, ...rest] = arr;
  return f ? f : "never";
}
