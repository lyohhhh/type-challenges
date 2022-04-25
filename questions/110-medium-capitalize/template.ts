type EnMap = {
  a: "A";
  b: "B";
  c: "C";
  d: "D";
  e: "E";
  f: "F";
  g: "G";
  h: "H";
  i: "I";
  j: "J";
  k: "K";
  l: "L";
  m: "M";
  n: "N";
  o: "O";
  p: "P";
  q: "Q";
  r: "R";
  s: "S";
  t: "T";
  u: "U";
  v: "V";
  w: "W";
  x: "X";
  y: "Y";
  z: "Z";
};

type MyCapitalize<S extends string> = S extends `${infer F}${infer R}`
  ? F extends keyof EnMap
    ? `${EnMap[F]}${R}`
    : S
  : S;

// 1.创建 map
// 2.使用解构 查找 map
// 2.1 没找到返回 S
// 2.2 找到返回 转换为大写的字母 拼接上后面的
