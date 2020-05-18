const smalls = ["小動物", "小型車", "小論文"];
const others = ["小市民", "小田急"];

const newSmalls = [...smalls.slice(0, 2), "小心者", ...others];
console.log(newSmalls);
const copySmalls = [...smalls];
copySmalls[1] = "aa";
console.log(smalls, copySmalls);

for (let i = 0; i < smalls.length; i++) {
  const value = smalls[i];
  console.log(value);
}

smalls.forEach((value) => {
  console.log(value);
});

for (const [i, value] of smalls.entries()) {
  console.log(value);
}

const a = ["a", "b", "c"];
const b = [
  [0, "a"],
  [1, "b"],
  [2, "c"],
];

// この2つの結果は同じ
for (const [i, v] of a.entries()) {
  console.log(i, v);
}

for (const [i, v] of b) {
  console.log(i, v);
}

new Set([1, 2, 3, 1]).forEach((s: number) => {
  console.log(s);
});

console.log(...new Set([1, 2, 3, 1]));
