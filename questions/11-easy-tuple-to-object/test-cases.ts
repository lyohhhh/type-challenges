import { Equal, Expect } from "@type-challenges/utils";

const tuple = ["tesla", "model 3", "model X", "model Y"] as const;

/**
 * ["tesla", "model 3", "model X", "model Y"] =>
 * {
 *       tesla: "tesla";
 *       "model 3": "model 3";
 *       "model X": "model X";
 *       "model Y": "model Y";
 * }
 */
type cases = [
  Expect<
    Equal<
      TupleToObject<typeof tuple>,
      {
        tesla: "tesla";
        "model 3": "model 3";
        "model X": "model X";
        "model Y": "model Y";
      }
    >
  >
];

type error = TupleToObject<[[1, 2], {}]>;
