type TestNonNullable = null | undefined | string | number;

type TestNonNullableResult = NonNullable<TestNonNullable>;

const testNonNullable: TestNonNullableResult = "1";

// const testNonNullable2: TestNonNullableResult = null;
