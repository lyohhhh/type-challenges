// Description: Omit
// 从一个类型中移除某些属性

interface TestOmit {
  name: string;
  age: number;
  say: () => void;
}

type TestOmitResult = Omit<TestOmit, "say">;

// 测试用例
const testOmit: TestOmitResult = {
  name: "张三",
  age: 1,
};
