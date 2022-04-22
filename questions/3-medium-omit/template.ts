type MyOmit<T, K> = {
  [U in keyof T as U extends K ? never : U]: T[U];
};

var TO = {
  title: "string",
  description: "string",
  completed: "boolean",
};

var KO = ["description", "completed"];

let res = {};
for (let key in TO) {
  if (!KO.includes(key)) {
    res[key] = TO[key];
  }
}
