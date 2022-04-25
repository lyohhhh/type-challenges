type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer Start}${From}${infer Rest}`
  ? From extends ""
    ? S
    : `${Start}${To}${ReplaceAll<Rest, From, To>}`
  : S;

// docs:
// string : hello
// infer Start => h
// infer Form => e
// infer Rest => llo
