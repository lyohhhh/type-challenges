// 使一个类型的所有属性变为必选属性
interface TestRequired {
  name?: string;
  age?: number;
  say?: () => void;
  run?: () => void;
}

interface TestRequiredResult extends Required<TestRequired> {}

/* _____________ 测试用例 _____________ */

const test: TestRequiredResult = {
  name: "string",
  age: 1,
  say: () => {},
  run: () => {},
};
