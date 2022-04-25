type Trim<S extends string> = S extends `${" " | "\n" | "\t"}${infer L}`
  ? L extends `${infer R}${" " | "\n" | "\t"}`
    ? Trim<R>
    : Trim<L>
  : S extends `${infer R}${" " | "\n" | "\t"}`
  ? Trim<R>
  : S;
