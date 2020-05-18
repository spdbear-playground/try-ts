const smalls = ["小動物", "小型車", "小論文"];
const [, ...other] = smalls;
console.log(other);

const chars = smalls.join("").split("");
console.log(Array.from(new Set(chars)).sort());

const places = ["小岩駅", "小浜市", "小倉駅"];

if (places.includes("小浜市")) {
  console.log("Found");
}
