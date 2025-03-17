// 获取方法的参数类型

const testParameters = (name: string, age: number) => {};

const TestParametersResult: Parameters<typeof testParameters>[0] = "123";
