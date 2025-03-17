// Description: Extract<T, U> 从T中提取U
// Exclude

type TestExtract = "name" | "age" | "say" | "run";

type TestExtractResult = Extract<TestExtract, "name" | "age">;

const testExtractRsult: TestExtractResult = "name";
