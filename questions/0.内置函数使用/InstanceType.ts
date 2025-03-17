class TestInstanceType {
  constructor() {}
}

type InstanceTypeRsult = InstanceType<typeof TestInstanceType>;
const testInstanceTypeRsult: InstanceTypeRsult = new TestInstanceType();
