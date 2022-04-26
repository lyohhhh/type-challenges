type LengthOfString<S extends string> = ToArray<S>["length"];
type ToArray<S extends String> = S extends `${infer L}${infer R}`
  ? [L, ...ToArray<R>]
  : [];
type Test3 = [LengthOfString<"">, LengthOfString<"kumiko">];

// ToArray
// 1. L => k ; R => umiko;  Res => [k,...ToArray<R>]
// 1. L => u ; R => miko;  Res => [k,u,...ToArray<R>]
// 1. L => m ; R => iko;  Res => [k,u,m,...ToArray<R>]
// 1. L => i ; R => ko;  Res => [k,u,m,i,...ToArray<R>]
// 1. L => k ; R => o;  Res => [k,u,m,i,k,...ToArray<R>]
// 1. L => o ; R => "";  Res => [k,u,m,i,k,o,...ToArray<R>]
// 1. L => "" ; R => "";  Res => [k,u,m,i,k,o,[]]
