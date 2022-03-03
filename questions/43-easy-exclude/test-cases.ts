import { Equal, Expect } from "@type-challenges/utils";

// const a: MyExclude<"a" | "b" | "c", "a"> = "a";
const b: MyExclude<"a" | "b" | "c", "a"> = "b";
const c: MyExclude<"a" | "b" | "c", "a"> = "c";

type cases = [
  /**
   * 将 a 剔除出去
   * 剩下 b | c
   */
  Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
  Expect<
    Equal<
      MyExclude<"a" | "b" | "c", "a" | "b">,
      Exclude<"a" | "b" | "c", "a" | "b">
    >
  >,
  Expect<
    Equal<
      MyExclude<string | number | (() => void), Function>,
      Exclude<string | number | (() => void), Function>
    >
  >
];
