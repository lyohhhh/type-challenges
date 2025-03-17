// 将一个类型的所有属性设置为可选的
type TestPartial = {
  name: string;
  age: number;
  say: () => void;
  run: () => void;
};

type TestPartialResult = Partial<TestPartial>;

/* _____________ 测试用例 _____________ */
const testPartial: TestPartialResult = {
  name: "张三",
  age: 1,
};
