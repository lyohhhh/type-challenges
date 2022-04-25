type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer T}${From}` | `${From}${infer T}`
  ? From extends ""
    ? S
    : `${To}${T}`
  : S;
