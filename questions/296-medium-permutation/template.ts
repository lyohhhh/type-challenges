type Permutation<T, K = T> = [T] extends [never]
  ? []
  : T extends never
  ? []
  : [T, ...Permutation<Exclude<K, T>>];

type Test2 = [Permutation<"A">, Permutation<"A" | "B">, Permutation<never>];

// 递归调用
function permutation(list) {
  // 'A' => ['A']
  if (list.length === 1) return [list[0]];

  const result: any[] = [];
  for (const [index, e] of list.entries()) {
    //  0 'a'
    //  1 'b'
    //  2 'c'
    const rest = [...list];
    // ["a", "b", "c"]
    rest.splice(index, 1);
    // ["b", "c"]
    for (const item of permutation(rest)) {
      result.push([e, ...item]);
    }
  }
  return result;
}

console.log(permutation(["a", "b", "c"]));
