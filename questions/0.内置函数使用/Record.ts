// Desciption：
//  Record<K, T>，K 为属性名，T 为属性值类型
type TestRecord = {
  name: string;
  age: number;
  say: () => void;
  run: () => void;
};

interface TestRecordResult extends Record<keyof TestRecord, string> {}

/* _____________ 测试用例 _____________ */
const testRecord: TestRecordResult = {
  name: "张三",
  age: "1",
  say: "say",
  run: "run",
};
