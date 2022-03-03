// type First<T extends any[]> = any

/**
 * A:
 * T 是否能够分配给空数组 [] ? 是的话返回 never 否则  返回 T[0]
 */
type First<T extends any[]> = T extends [] ? never : T[0];
