// Description:
// 使一个类型的所有属性都变为只读属性
interface TestReadonly {
  name: string;
  age: number;
  say: () => void;
  run: () => void;
}

type TestReadonlyResult = Partial<Readonly<TestReadonly>>;

/* _____________ 测试用例 _____________ */
const user: TestReadonlyResult = {
  name: "张三",
};

// user.name = "李四"; // 报错
