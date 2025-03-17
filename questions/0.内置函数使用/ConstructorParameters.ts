// 获取构造函数的参数类型

class User {
  constructor(name: string, age: number) {}
}

const TestConstructorParametersResult: ConstructorParameters<typeof User>[0] =
  "123";
