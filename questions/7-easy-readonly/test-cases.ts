import { Equal, Expect } from "@type-challenges/utils";

/**
 * 实现将 接口 所有属性都变为只读类型
 */
type cases = [Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>];

interface Todo1 {
  title: string;
  description: string;
  completed: boolean;
  meta: {
    author: string;
  };
}
