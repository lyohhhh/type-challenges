// type Length<T extends any> = any

/**
 * A:
 * 传入的是一个 readonly []
 */
type Length<T extends readonly any[]> = T["length"];
