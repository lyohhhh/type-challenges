// Description:
// 从一个类型中挑选出部分属性
interface TestPick {
  name: string;
  age: number;
  say: () => void;
  run: () => void;
}

interface TestPickResult extends Pick<TestPick, "name" | "age"> {}

/* _____________ 测试用例 _____________ */
const testPick: TestPickResult = {
  name: "张三",
  age: 1,
  // say() {
  //   console.log(1);
  // },
};
