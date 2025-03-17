// 获取一个函数的返回类型
const TestReturnType = (): number => {
  return 1;
};

type TestReturnTypeResult = ReturnType<typeof TestReturnType>;

const b: TestReturnTypeResult = 1;
