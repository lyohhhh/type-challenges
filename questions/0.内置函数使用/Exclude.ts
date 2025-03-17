type TestExclude = {
  name: string;
  age: number;
  say: () => void;
  run: () => void;
};

type TestExcludeResult = Exclude<keyof TestExclude, "say" | "run">;

type TestResutExcludeResult2<T, K> = T extends keyof K ? Pick<K, T> : never;

/* _____________ 测试用例 _____________ */
const testExclude: TestResutExcludeResult2<TestExcludeResult, TestExclude> = {
  name: "张三",
  age: 1,
};
