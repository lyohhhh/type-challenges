type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer Start}${From}${infer Rest}`
  ? From extends ""
    ? S
    : `${Start}${To}${ReplaceAll<Rest, From, To>}`
  : S;
