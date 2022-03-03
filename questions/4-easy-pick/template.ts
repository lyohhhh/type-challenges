// type MyPick<T, K> = any

/**
 * A：
 * keyof T              =>    Object.keys()
 * K extends keyof T    =>    K 需要满足 T 身上的 Key
 * [P in K]: T[P]       =>    遍历 K 得到结果返回
 */
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const T = {
  age: 18,
  name: "Tom",
};

// keyof T              =>    [ "age" , "name" ]
const keys = Object.keys(T);
//  extends keyof T     =>    [ "age" ]
const K = ["age", "height"];
const includesKeys = K.filter((item) => keys.includes(item));
// [P in K]: T[P]       =>    result
const result = {};
includesKeys.forEach((key) => (result[key] = T[key]));
