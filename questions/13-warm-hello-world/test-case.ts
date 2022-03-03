import { Equal, Expect, NotAny } from "@type-challenges/utils";
/**
 * HelloWorld 不是 any 类型
 * HelloWorld 是 string 类型
 */
type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
