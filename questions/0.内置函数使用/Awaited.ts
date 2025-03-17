// 获取Promise类型的返回类型
const testAwaited = async () => {
  return 1;
};

type TestAwaitedResult = Awaited<ReturnType<typeof testAwaited>>;

// 测试用例
const testAwaitedResult: TestAwaitedResult = 1;
