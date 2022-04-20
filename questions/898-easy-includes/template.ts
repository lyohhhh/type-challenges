// type Includes<T extends readonly any[], U> = any;

type Includes<T extends readonly any[], U> = {
  [K in T[number]]: true;
}[U] extends true
  ? true
  : false;

// ["Kars", "Esidisi", "Wamuu", "Santana"] =>
// obj = { Kars: true, Esidisi: true, Wamuu: true, Santana: true };
// obj["Kars"] = true
